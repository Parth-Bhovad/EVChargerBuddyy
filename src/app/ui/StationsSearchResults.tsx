"use client";
import { useNearByStationsContext } from "../context/NearByStationsContext";
import { useUserDestinationContext } from "../context/UserDestinationContext";
import { useShowRouteInfoContext } from "../context/ShowRouteInfoContext";

function StationSearchResults() {
    const { stations } = useNearByStationsContext();
    const { userDestination,setUserDestination } = useUserDestinationContext();
    const { setShowRouteInfo } = useShowRouteInfoContext();

    return (
    <>
        <div className="flex flex-wrap items-center justify-between gap-2 p-4">
            <div>
                <p className="text-xs font-medium uppercase tracking-wide text-green-700">
                    Charging stations near you
                </p>
                <p className="text-lg font-semibold">
                    {stations.length} station{stations.length !== 1 && "s"} found
                </p>
            </div>
        </div>

        {
            stations[0] && (
                <div className="rounded-xl bg-green-50 px-3 py-2 text-sm">
                    <p className="font-medium">
                        Nearest:{" "}
                        <span className="text-green-800">
                            {stations[0].stationName || "Unnamed Station"}
                        </span>
                    </p>
                    <p className="text-xs text-gray-600">
                        Based on your current location
                    </p>
                </div>
            )
        }

        <ul className="list rounded-box shadow-md w-full mt-8 border border-base-300">
            {stations.map((station, i) => (
                <li key={i} className="list-row rounded-none border-b border-base-300 font-medium flex justify-between items-center">
                    <div>
                        <p className="text-sm font-semibold">
                            {station.stationName || `Station #${i + 1}`}
                        </p>
                        <p className="text-xs text-gray-500">
                            Lat: {station.location.coordinates[1].toFixed(4)}, Lng:{" "}
                            {station.location.coordinates[0].toFixed(4)}
                        </p>

                        {/* Placeholder for future fields */}
                        <div className="mt-1 flex flex-wrap gap-1 text-[11px] text-gray-600">
                            {/* Example tags you can wire later from DB */}
                            <span className="rounded-full bg-gray-300 px-2 py-0.5">
                                Fast charging
                            </span>
                            <span className="rounded-full bg-gray-300 px-2 py-0.5">
                                24×7 open
                            </span>
                        </div>
                    </div>

                   <div className="flex items-center gap-2">
                     {
                        [station.location.coordinates[0], station.location.coordinates[1]].join(',') === userDestination?.join(',')
                        ? (
                            <button 
                            className="mt-1 rounded-lg border border-gray-400 px-3 py-2 text-xs font-medium text-gray-700"
                            onClick={() => {
                                setShowRouteInfo(true);
                            }}>
                                Start Journey
                            </button>
                        ) : null

                    }

                    {/* “Focus on map” button (optional) */}
                    <button
                        type="button"
                        className="mt-1 rounded-lg border border-gray-400 px-3 py-2 text-xs font-medium text-gray-700"
                        onClick={() => setUserDestination([station.location.coordinates[0], station.location.coordinates[1]])}
                        >
                        View on map
                    </button>
                   </div>
                </li>
            ))}
        </ul>
    </>
     );
}

export default StationSearchResults;