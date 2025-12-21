import Hero from "@/app/ui/Hero"
import WhySection from "@/app/ui/WhySection"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--brand-color-white)] text-slate-900">

      <Hero />

      {/* About Section */}
      <WhySection />
    </div>
  );
}
