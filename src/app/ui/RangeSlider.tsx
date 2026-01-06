"use client";

import useGetNearByStations from "../hooks/useGetNearByStations";
function RangeSlider() {
    const { radius, setRadius } = useGetNearByStations();

    return (
        <div className="w-full">
            <label htmlFor="range" className="block mb-2">
                Range
            </label>

            <input
                id="range"
                type="range"
                min="5"
                max="15"
                step="5"
                value={radius}
                className="range w-full"
                onChange={(e) => setRadius(Number(e.target.value))}
            />

            <div className="flex justify-between px-2.5 mt-2 text-xs">
                <span>5 Km</span>
                <span>10 Km</span>
                <span>15 Km</span>
            </div>
        </div>
    );
}

export default RangeSlider;