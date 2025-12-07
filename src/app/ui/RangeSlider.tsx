"use client";

import { useState } from "react";

function RangeSlider() {
    const [radius, setRadius] = useState(25);
    return (
        <div className="w-full max-w-xs">
            <input type="range" min={0} max="15" value={radius} className="range" step="5" onChange={(e)=> setRadius(Number(e.target.value))} />
            <div className="flex justify-between px-2.5 mt-2 text-xs">
                <span>|</span>
                <span>|</span>
                <span>|</span>
                <span>|</span>
            </div>
            <div className="flex justify-between px-2.5 mt-2 text-xs">
                <span>0Km</span>
                <span>5Km</span>
                <span>10Km</span>
                <span>15Km</span>
            </div>
        </div>
    );
}

export default RangeSlider;