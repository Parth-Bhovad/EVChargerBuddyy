'use client';

import { useUserLocationContext } from "../context/UserLocationContext";
import StationSearchResults from "./StationsSearchResults";
import RangeSlider from "./RangeSlider";

function StationSearchPanel() {
    const { userLocation, gettingUserLocation } = useUserLocationContext();

    if (!userLocation) {
        return (
            <div className="h-full flex items-center justify-center">
                <span className="skeleton skeleton-text">{gettingUserLocation ? "Getting your location..." : "Click on The Map to Get Your Live Location"}</span>
            </div>
        );
    }

    return (
        <div className="h-full overflow-auto">
                <div className="w-full px-4 pt-4">
                    <RangeSlider />
                </div>
                <StationSearchResults />
        </div>
    );
}

export default StationSearchPanel;