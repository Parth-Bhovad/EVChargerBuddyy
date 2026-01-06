import { useEffect, useState } from 'react';
import { useUserLocationContext } from '../context/UserLocationContext';
import { toORSCoord } from '../lib/helper';
import { useUserDestinationContext } from '../context/UserDestinationContext';
import { useRouteStepsContext } from '../context/RouteStepsContext';
import { GetRouteResponse } from '../Types';

function useMap() {
    const { userLocation } = useUserLocationContext();
    const { setRouteSteps } = useRouteStepsContext();
    const [polyline, setPolyline] = useState<Array<[number, number]>>([
        [49.41461, 8.681495],
        [49.420318, 8.687872]
    ]);
    //station distance in KM
    const [stationDistance, setStationDistance] = useState<number | null>(null);
    //time needed to reach station in minutes
    const [destinationTime, setDestinationTime] = useState<number | null>(null);

    const { userDestination } = useUserDestinationContext();

    useEffect(() => {
        //Return if userLocation or destination is null
        if (!userLocation || !userDestination) return;
        const callAPI = async () => {
            const response = await fetch(`/api/get-route?start=${toORSCoord(userLocation!).join(',')}&end=${toORSCoord(userDestination!).join(',')}&preference=shortest`);
            const data: GetRouteResponse = await response.json();

            if (data.status === "error") {
                console.error("Error fetching route:", data.error);
                return;
            }
            const { coordinates, distance, duration, steps } = data.data;
            setPolyline(coordinates);
            setStationDistance(distance); //in KM
            setDestinationTime(duration / 60); //in minutes
            setRouteSteps(steps);
        }
        callAPI();
    }, [userDestination, userLocation, setRouteSteps]);
    return ({ polyline, stationDistance, destinationTime });
}

export default useMap;