"use client";

import Link from "next/link";
import { LogoutUser } from "../lib/action";
import Button from "../ui/Button";

function Profile({ name }: { name: string }) {
    return (
        <div className="flex flex-col p-4">
            {/* Profile Header Card */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-10 text-center">
                <div className="avatar avatar-placeholder mb-6">
                    <div className="bg-[var(--brand-color-black)] text-white w-24 h-24 rounded-full flex items-center justify-center">
                        <span className="text-4xl font-bold">{name?.charAt(0).toUpperCase()}</span>
                    </div>
                </div>
                <h1 className="text-2xl md:text-3xl font-bold text-[var(--brand-color-black)]">
                    {name}
                </h1>
                <p className="mt-2 text-gray-500">EV Charger Owner</p>
            </div>

            {/* Quick Actions */}
            <div className="mt-6 bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
                <div className="px-8 py-5 border-b border-gray-100">
                    <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Quick Actions</h2>
                </div>

                <Link
                    href="/your-charging-stations"
                    className="flex items-center gap-5 px-8 py-6 hover:bg-gray-50 transition-all active:scale-[0.99] border-b border-gray-100"
                >
                    <div className="w-14 h-14 rounded-xl bg-gray-100 flex items-center justify-center text-[var(--brand-color-black)]">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
                        </svg>
                    </div>
                    <div className="flex-1">
                        <p className="text-lg font-semibold text-[var(--brand-color-black)]">Your Charging Stations</p>
                        <p className="text-sm text-gray-500 mt-1">View and manage your stations</p>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-gray-400">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                </Link>

                <Link
                    href="/charging-station"
                    className="flex items-center gap-5 px-8 py-6 hover:bg-gray-50 transition-all active:scale-[0.99]"
                >
                    <div className="w-14 h-14 rounded-xl bg-gray-100 flex items-center justify-center text-[var(--brand-color-black)]">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                    </div>
                    <div className="flex-1">
                        <p className="text-lg font-semibold text-[var(--brand-color-black)]">Add Charging Station</p>
                        <p className="text-sm text-gray-500 mt-1">List a new charger location</p>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-gray-400">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                </Link>
            </div>

            {/* Map Link */}
            <Link
                href="/map"
                className="mt-6 flex items-center gap-5 bg-[var(--brand-color-black)] text-white rounded-2xl px-8 py-6 shadow-lg hover:bg-gray-800 transition-all active:scale-[0.99]"
            >
                <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z" />
                    </svg>
                </div>
                <div className="flex-1">
                    <p className="text-lg font-semibold">Explore Map</p>
                    <p className="text-sm text-gray-300 mt-1">Find nearby charging stations</p>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-gray-400">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
            </Link>

            {/* Logout Button */}
            <div className="mt-8">
                <button
                    onClick={LogoutUser}
                    className="w-full flex items-center justify-center gap-2 py-4 text-red-600 font-semibold rounded-xl border-2 border-red-100 bg-red-50 hover:bg-red-100 transition-all active:scale-[0.99]"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75" />
                    </svg>
                    Log Out
                </button>
            </div>
        </div>
    );
}

export default Profile;