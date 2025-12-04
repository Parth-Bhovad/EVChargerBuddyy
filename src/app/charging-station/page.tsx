import ChargingStation from "@/app/ui/ChargingStation";

function ChargingStationPage() {
    return (
        <main className="max-w-[520px] mx-auto mt-12 p-5 h-screen flex flex-col items-center">
            <h1 className="text-2xl font-semibold mb-3 text-[var(--brand-color-black)] text-center">List Your Charging Station</h1>
            <ChargingStation />
        </main>
    );
}

export default ChargingStationPage;