import MapWrapper from "../ui/MapWrapper";
import { ChargingStation } from "../model/ChargingStation";
import { connectDB } from "../lib/mongoose";

export default async function Home() {
  const nearbyStations = async () => {
    await connectDB();
    const stations = await ChargingStation.find({
      location: {
        $near: {
          $geometry: {
            type: "Point",
            coordinates: [19.572699, 72.779162] // Example coordinates (longitude, latitude)
          },
        }
      }
    });


    return stations;
  };
  const stations = await nearbyStations();
  console.log(stations);

  const locations = stations.map(station => station.location.coordinates);
  const nearest = stations[0]; // $near returns nearest first (if any)
  return (
    <main className="h-screen w-screen">
      <section className="h-1/2">
        <MapWrapper stations={locations} />
      </section>
      <section className="h-1/2 overflow-auto">
        <div className="flex flex-wrap items-center justify-between gap-2 p-4">
          <div>
            <p className="text-xs font-medium uppercase tracking-wide text-green-700">
              Charging stations near you
            </p>
            <p className="text-lg font-semibold">
              {locations.length} station{locations.length !== 1 && "s"} found
            </p>
          </div>
        </div>
        {nearest && (
          <div className="rounded-xl bg-green-50 px-3 py-2 text-sm">
            <p className="font-medium">
              Nearest:{" "}
              <span className="text-green-800">
                {nearest.stationName || "Unnamed Station"}
              </span>
            </p>
            <p className="text-xs text-gray-600">
              Based on your current location
            </p>
          </div>
        )}

        <ul className="list rounded-box shadow-md w-full mt-8 border border-base-300">
          {stations.map((station, i) => (
            <li key={i} className="list-row rounded-none border-b border-base-300 flex justify-between items-center">
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
                  <span className="rounded-full bg-gray-100 px-2 py-0.5">
                    Fast charging
                  </span>
                  <span className="rounded-full bg-gray-100 px-2 py-0.5">
                    24×7 open
                  </span>
                </div>
              </div>

              {/* “Focus on map” button (optional) */}
              <button
                type="button"
                className="mt-1 rounded-lg border border-gray-200 px-2 py-1 text-xs font-medium text-gray-700 hover:border-green-400 hover:text-green-700"
              // onClick={() => focus this station on map via context / props later}
              >
                View on map
              </button>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
