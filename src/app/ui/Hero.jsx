import Image from "next/image";

function Hero() {
    return (
        <section className="hero min-h-screen">
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="hover-3d">
                        {/* content */}
                        <figure className="max-w-100 rounded-2xl">
                            <Image src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                                className="max-w-sm rounded-lg shadow-2xl" alt="HeroImg" width={580} height={200} />
                        </figure>
                        {/* 8 empty divs needed for the 3D effect */}
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <div>
                        <h1 className="text-5xl font-bold">Turn Every EV Owner Into a Charging Station</h1>
                        <p className="py-6">
                            Find nearby users offering their private charging points — or list your own and earn.
                            A community-powered charging network for EV users everywhere.
                        </p>
                        <button className="btn bg-[var(--brand-color-black)] text-[var(--brand-color-white)]">Get Started</button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;