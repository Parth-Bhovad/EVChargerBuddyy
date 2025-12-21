"use client";
import StationSearchPanel from "./StationSearchPanel";
import RouteInfo from "./RouteInfo";
import { useShowRouteInfoContext } from "../context/ShowRouteInfoContext";
import Button from "./Button";

function BottomPanel() {
    const { ShowRouteInfo, setShowRouteInfo } = useShowRouteInfoContext();

    if (ShowRouteInfo) {
        return (
            <div className='h-full'>
                <RouteInfo />
                <div className="w-full my-6">
                    <Button btnName="Cancel Journey" onClick={() => setShowRouteInfo(false)}/>
                </div>
            </div>);
    }
    return (
        <StationSearchPanel />
    );
}

export default BottomPanel;