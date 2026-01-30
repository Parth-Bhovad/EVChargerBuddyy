import Hero from "@/app/ui/Hero"
import WhySection from "@/app/ui/WhySection"
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--brand-color-white)] text-slate-900">

      <Hero />

      {/* About Section */}
      <WhySection />

      {/* CTA Section */}
      <section className="py-24 px-6 bg-[var(--brand-color-black)]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            Ready to Join the Network?
          </h2>
          <p className="mt-6 text-lg text-gray-400 max-w-2xl mx-auto">
            Whether you need a charge or want to share yours, EVChargerBuddy connects you with a community of EV enthusiasts.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="/signup" 
              className="btn btn-lg bg-white text-black hover:bg-gray-100 px-8 font-semibold"
            >
              Create Free Account
            </Link>
            <Link 
              href="/charging-station" 
              className="btn btn-lg btn-outline border-white/30 text-white hover:bg-white/10 px-8 font-semibold"
            >
              List Your Charger
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
