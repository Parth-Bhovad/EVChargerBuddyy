"use client";
import { useEffect, useState } from "react";
import { useDebouncedRadius } from "../hooks/useDebouncedRadius";
import { useUserLocationContext } from "../context/UserLocationContext";
import { useNearByStationsContext } from "../context/NearByStationsContext";
import { useUserDestinationContext } from "../context/UserDestinationContext";
import { NearByStationsResponse } from "../Types";
function useGetNearByStations(): { radius: number; setRadius: React.Dispatch<React.SetStateAction<number>> } {
    const [radius, setRadius] = useState(5);

    const debouncedRadius = useDebouncedRadius(radius, 300);

    const { userLocation } = useUserLocationContext();
    const { setStations } = useNearByStationsContext();
    const { setUserDestination } = useUserDestinationContext();

    useEffect(() => {
        if (!userLocation) return;

        const location = userLocation;

        async function fetchStations() {
            console.log(
                `Fetching stations within radius: ${debouncedRadius} Km`
            );

            const res = await fetch(
                `/api/near-by-stations?radius=${debouncedRadius}&lat=${location[0]}&lng=${location[1]}`
            );

            const data: NearByStationsResponse = await res.json();

            if (data.status === "success" && data.stations.length > 0) {
                setStations(data.stations);

                // Set nearest station as destination
                setUserDestination([
                    data.stations[0].location.coordinates[0],
                    data.stations[0].location.coordinates[1],
                ]);
            }
        }

        fetchStations();
    }, [
        debouncedRadius,
        userLocation,
        setStations,
        setUserDestination,
    ]);

    return { radius, setRadius };
}

export default useGetNearByStations;