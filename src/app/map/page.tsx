import MapWrapper from "../ui/MapWrapper";
import BottomPanel from "../ui/BottomPanel";

export default async function Home() {
  return (
    <main className="h-screen w-screen">
      <section className="h-1/2">
        <MapWrapper />
      </section>
      <section className="h-1/2">
        <BottomPanel />
      </section>
    </main>
  );
}
