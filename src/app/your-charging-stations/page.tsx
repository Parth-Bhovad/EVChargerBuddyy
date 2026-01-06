import YourChargingStations from "../ui/YourChargingStations";
import { getSessionUser } from "../lib/session";
import { getChargingStationsByOwner } from "../lib/queries";
import { redirect } from "next/navigation";

async function page() {
    const user = await getSessionUser();
    if (!user) return redirect("/login");
    const chargingStations = await getChargingStationsByOwner(user.id);
    return (
        <main className="h-screen">
            <h1 className="text-2xl font-semibold my-3 text-[var(--brand-color-black)] text-center">Your Charging Stations</h1>
            <YourChargingStations chargingStations={chargingStations} />
        </main>
    );
}

export default page;