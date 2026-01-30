import Image from "next/image";
import Link from "next/link";

function Hero() {
    return (
        <section className="relative min-h-screen w-full overflow-hidden">

            {/* Background Image */}
            <Image
                src="/image.png"
                alt="EV charging"
                fill
                priority
                className="object-cover scale-105 blur-xs"
            />

            {/* Dark overlay for better text contrast */}
            <div className="absolute inset-0 bg-black/60" />

            {/* Content */}
            <div className="relative z-10 flex min-h-screen items-center justify-center px-6">
                <div className="max-w-3xl text-center text-white">
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight text-shadow-lg/20">
                        Turn Every EV Owner Into a Charging Station
                    </h1>

                    <p className="mt-6 mb-6 text-lg text-gray-200">
                        Find nearby users offering private charging points or list your own and earn.
                        A community-powered EV charging network.
                    </p>

                    <Link href="/signup" className="btn bg-[var(--brand-color-black)] text-[var(--brand-color-white)]">Get Started</Link>
                </div>
            </div>

        </section>
    );
}

export default Hero;
