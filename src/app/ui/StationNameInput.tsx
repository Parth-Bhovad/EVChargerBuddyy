function StationNameInput({ stationName, setStationName }: { stationName: string, setStationName: (stationName: string) => void }) {
    return (
        <>
            <input
                type="text"
                placeholder="Station Name (optional)"
                className="input bg-[var(--brand-color-white)] text-[var(--brand-color-black)] border border-base-300 rounded-box"
                value={stationName}
                onChange={(e) => setStationName(e.target.value)} />
        </>
    );
}

export default StationNameInput;