function StationNameInput() {
    return (
        <>
            <input
                type="text"
                placeholder="Station Name (optional)"
                className="input bg-[var(--brand-color-white)] text-[var(--brand-color-black)] border border-base-300 rounded-box"
                name="stationName"
            />
        </>
    );
}

export default StationNameInput;