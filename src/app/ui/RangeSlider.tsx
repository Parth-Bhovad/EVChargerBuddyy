"use client";

import { useState, useMemo, useEffect } from "react";
import debounce from "lodash.debounce";
import { useUserLocationContext } from '../context/UserLocationContext';
import { useNearByStationsContext } from '../context/NearByStationsContext';

function RangeSlider() {
    const [radius, setRadius] = useState(5);
    const { userLocation } = useUserLocationContext();
    const { setStations } = useNearByStationsContext();

    // async function fetchStations(radius: number, userLocation: [number, number] | null) {
    //     console.log(`Fetching stations within radius: ${radius} Km`);
    //     const res = await fetch(`/api/near-by-stations?radius=${radius}&lat=${userLocation[0]}&lng=${userLocation[1]}`);
    //     setStations((await res.json()).stations.map((station: any) => [station.location.coordinates[0], station.location.coordinates[1]]));
    //     console.log(await res.json());
    // }
    // // fetchStations();
    // const debouncedFetch = useMemo(
    //     () => debounce((radius: number, userLocation: [number, number] | null) => fetchStations(radius, userLocation), 400),
    //     []
    // );

    useEffect(() => {
        async function fetchStations() {
            console.log(`Fetching stations within radius: ${radius} Km`);
            const res = await fetch(`/api/near-by-stations?radius=${radius}&lat=${userLocation[0]}&lng=${userLocation[1]}`);
            const data = await res.json();
            console.log(data);
            setStations(data.stations);
            // setStations(data.stations.map((station: any) => [station.location.coordinates[0], station.location.coordinates[1]]));
            // console.log(await res.json());
        }
        fetchStations();
    }, [setStations, radius, userLocation]);


    // const handleRadiusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     setRadius(Number(e.target.value));
    //     debouncedFetch(Number(e.target.value), userLocation);
    // };

    return (
        <div className="w-full">
            <label htmlFor="range">Range</label>
            <input type="range" min={0} max="15" value={radius} className="range w-full" step="5" id="range" onChange={(e)=> setRadius(Number(e.target.value))} />
            <div className="flex justify-between px-2.5 mt-2 text-xs w-full">
                <span>|</span>
                <span>|</span>
                <span>|</span>
                <span>|</span>
            </div>
            <div className="flex justify-between px-2.5 mt-2 text-xs w-full">
                <span>0Km</span>
                <span>5Km</span>
                <span>10Km</span>
                <span>15Km</span>
            </div>
        </div>
    );
}

export default RangeSlider;