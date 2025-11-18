function Hero() {
    return (
        <section className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                {/* <Image
                    src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                    className="max-w-sm rounded-lg shadow-2xl"
                    alt="Hero_IMG"
                    width={400}
                    height={400}
                /> */}
                <div>
                    <h1 className="text-5xl font-bold">Turn Every EV Owner Into a Charging Station</h1>
                    <p className="py-6">
                        Find nearby users offering their private charging points — or list your own and earn.
                        A community-powered charging network for EV users everywhere.
                    </p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </section>
    );
}

export default Hero;