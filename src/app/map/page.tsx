import MapWrapper from "../ui/MapWrapper";
import StationSearchPanel from "../ui/StationSearchPanel";

export default async function Home() {
  return (
    <main className="h-screen w-screen">
      <section className="h-1/2">
        <MapWrapper />
      </section>
      <StationSearchPanel />
    </main>
  );
}
