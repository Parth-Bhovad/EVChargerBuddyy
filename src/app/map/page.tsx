import MapWrapper from "../ui/MapWrapper";
import RangeSlider from "../ui/RangeSlider";
import StationSearchResults from "../ui/StationsSearchResults";

export default async function Home() {
  return (
    <main className="h-screen w-screen">
      <section className="h-1/2">
        <MapWrapper />
      </section>
      <section className="h-1/2 overflow-auto">
        <div className="w-full px-4 pt-4">
          <RangeSlider />
        </div>
        <StationSearchResults />
      </section>
    </main>
  );
}
