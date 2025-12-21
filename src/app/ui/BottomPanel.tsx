"use client";
import StationSearchPanel from "./StationSearchPanel";
import RouteInfo from "./RouteInfo";
import { useShowRouteInfoContext } from "../context/ShowRouteInfoContext";
import Button from "./Button";

function BottomPanel() {
    const { ShowRouteInfo, setShowRouteInfo } = useShowRouteInfoContext();

    if (ShowRouteInfo) {
        return (
            <>
                <RouteInfo />
                <Button btnName="Cancel Journey" onClick={() => setShowRouteInfo(false)}/>
            </>);
    }
    return (
        <StationSearchPanel />
    );
}

export default BottomPanel;