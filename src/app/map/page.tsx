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
  const locations = stations.map(station => station.location.coordinates);
  return (
    <main>
      <h1>My Map</h1>
      <p>Leaflet map rendered client-side in Next.js</p>
      <MapWrapper stations={locations} />
    </main>
  );
}
