import { ChargingStation } from "@/app/model/ChargingStation";
import { connectDB } from "../lib/mongoose";
import YourChargingStations from "../ui/YourChargingStations";
import { auth } from "@/app/lib/auth";
import { headers } from "next/headers";

async function page() {
    const session = await auth.api.getSession({
        headers: await headers() // you need to pass the headers object.
    })
    await connectDB();
    const rawData = await ChargingStation.find({ owner: session?.user?.id });
    const chargingStations = rawData.map(station => {
        return {
            stationName: station.stationName,
            location: station.location.coordinates,
            owner: station.owner
        }
    })
    return (
        <main className="h-screen">
            <h1 className="text-2xl font-semibold mb-3 text-[var(--brand-color-black)] text-center">Your Charging Stations</h1>
            <YourChargingStations chargingStations={chargingStations} />
        </main>
    );
}

export default page;