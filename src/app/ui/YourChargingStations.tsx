import {ChargingStationProps} from '../Types';

function YourChargingStations({ chargingStations }: { chargingStations: ChargingStationProps }) {

    return (
        <div className="mt-8 h-full overflow-auto rounded-box border border-base-content/5 border-black">
            <table className="table" >
                {/* head */}
                <thead className="w-full text-[var(--brand-color-black)]">
                    <tr>
                        <th></th>
                        <th>Station Name</th>
                        <th>Location</th>
                    </tr>
                </thead>
                <tbody>
                    {chargingStations.map((station, idx) => (
                        <tr key={idx + 1} className="list-row hover:bg-stone-200 font-medium">
                            <th>{idx + 1}</th>
                            <td>{station.stationName}</td>
                            <td>{station.location.join(", ")}</td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>
    );
}

export default YourChargingStations;