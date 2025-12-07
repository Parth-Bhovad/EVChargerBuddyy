

function YourChargingStations({ chargingStations }) {
    console.log(chargingStations);

    return (
        <div className="mt-8">
            <table className="table">
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
                        <tr key={idx + 1} className="list-row hover:bg-stone-200">
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