function WhySection() {
    const features = [
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
            ),
            title: "Find Nearby Chargers",
            description: "Locate private charging points from EV owners in your neighborhood instantly."
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
                </svg>
            ),
            title: "Earn From Your Charger",
            description: "List your home charger and earn passive income while helping fellow EV drivers."
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                </svg>
            ),
            title: "Community Powered",
            description: "Join a trusted network of EV owners helping each other stay charged."
        }
    ];

    return (
        <section className="py-24 px-6 bg-white">
            <div className="max-w-6xl mx-auto">
                
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto">
                    <span className="inline-block text-sm font-semibold tracking-wider text-gray-500 uppercase mb-4">
                        Why Choose Us
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-[var(--brand-color-black)]">
                        Why EVChargerBuddy?
                    </h2>
                    <p className="mt-6 text-lg md:text-xl text-gray-600 leading-relaxed">
                        Ever stuck with a low battery in the middle of the road? 
                        Chances are, there are EV owners nearby with chargers willing to help.
                    </p>
                </div>

                {/* Problem Statement Card */}
                <div className="mt-12 bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 md:p-12 border border-gray-200">
                    <div className="max-w-3xl mx-auto text-center">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[var(--brand-color-black)] text-white mb-6">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
                            </svg>
                        </div>
                        <p className="text-xl md:text-2xl text-gray-700 font-medium leading-relaxed">
                            The real problem isn&apos;t availability —&gt;
                            <span className="text-[var(--brand-color-black)] font-bold"> it&apos;s the awkwardness of asking.</span>
                        </p>
                        <p className="mt-6 text-lg text-gray-600">
                            EVChargerBuddy turns that awkward moment into a simple, transparent exchange.
                        </p>
                    </div>
                </div>

                {/* Feature Cards */}
                <div className="mt-16 grid md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div 
                            key={index}
                            className="group p-8 rounded-2xl bg-white border border-gray-200 hover:border-gray-300 hover:shadow-xl transition-all duration-300"
                        >
                            <div className="w-14 h-14 rounded-xl bg-gray-100 group-hover:bg-[var(--brand-color-black)] text-gray-700 group-hover:text-white flex items-center justify-center transition-all duration-300">
                                {feature.icon}
                            </div>
                            <h3 className="mt-6 text-xl font-bold text-[var(--brand-color-black)]">
                                {feature.title}
                            </h3>
                            <p className="mt-3 text-gray-600 leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}

export default WhySection;
