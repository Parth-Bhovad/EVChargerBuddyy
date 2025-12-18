'use client';

import { useUserLocationContext } from "../context/UserLocationContext";
import StationSearchResults from "./StationsSearchResults";
import RangeSlider from "./RangeSlider";

function StationSearchPanel() {
    const { userLocation } = useUserLocationContext();

    if (!userLocation) {
        return (
            <section className="h-1/2 overflow-auto flex items-center justify-center">
                <span className="skeleton skeleton-text">Click on The Map to Get Your Live Location</span>
            </section>
        );
    }

    return (
        <section className="h-1/2 overflow-auto">
                <div className="w-full px-4 pt-4">
                    <RangeSlider />
                </div>
                <StationSearchResults />
        </section>
    );
}

export default StationSearchPanel;