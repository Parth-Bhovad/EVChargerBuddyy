import Hero from "@/app/ui/Hero"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">

      <Hero />

      {/* About Section */}
      <section className="px-6 py-16 bg-slate-100 text-center">
        <h3 className="text-3xl font-semibold mb-4">Why EVChargerBuddy?</h3>
        <p className="max-w-2xl mx-auto text-slate-600 text-lg leading-relaxed">
          Most EV owners have private chargers, yet public charging remains scarce.
          Our platform transforms awkward, one-sided situations into simple, mutual exchanges.
          Hosts earn. Guests charge. Everyone wins.
        </p>
      </section>
    </div>
  );
}
