import { auth } from "@/app/lib/auth"; // path to your Better Auth server instance
import { headers } from "next/headers";
import Link from "next/link";

async function Navbar() {
    const session = await auth.api.getSession({
        headers: await headers() // you need to pass the headers object.
    })

    if (!session) {
        return (
            <nav className="bg-[var(--brand-color-black)] text-[var(--brand-color-white)] z-50 sticky top-0 shadow-lg">
                <div className="navbar px-4 py-3 max-w-7xl mx-auto">
                    {/* Logo */}
                    <div className="flex-1">
                        <Link href="/" className="flex items-center gap-2 text-xl md:text-2xl font-bold hover:opacity-80 transition-opacity">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 md:w-7 md:h-7">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
                            </svg>
                            EVChargerBuddy
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex items-center gap-2">
                        <Link
                            href="/signup"
                            className="btn btn-ghost text-base font-semibold px-6 py-3 h-auto min-h-0 hover:bg-white/10 rounded-xl transition-all"
                        >
                            Sign Up
                        </Link>
                        <Link
                            href="/login"
                            className="btn bg-white text-[var(--brand-color-black)] text-base font-semibold px-6 py-3 h-auto min-h-0 hover:bg-gray-100 rounded-xl transition-all"
                        >
                            Log In
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="flex-none lg:hidden">
                        <div className="drawer drawer-end">
                            <input id="mobile-drawer" type="checkbox" className="drawer-toggle" />
                            <div className="drawer-content">
                                <label htmlFor="mobile-drawer" className="btn btn-ghost btn-circle hover:bg-white/10">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                    </svg>
                                </label>
                            </div>
                            <div className="drawer-side z-50">
                                <label htmlFor="mobile-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                                <div className="bg-[var(--brand-color-black)] text-[var(--brand-color-white)] min-h-full w-80 p-6">
                                    {/* Mobile Menu Header */}
                                    <div className="flex items-center justify-between mb-8">
                                        <span className="text-xl font-bold">Menu</span>
                                        <label htmlFor="mobile-drawer" className="btn btn-ghost btn-circle hover:bg-white/10">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                            </svg>
                                        </label>
                                    </div>

                                    {/* Mobile Menu Links */}
                                    <ul className="space-y-2">
                                        <li>
                                            <Link
                                                href="/signup"
                                                className="flex items-center gap-3 text-lg font-semibold px-4 py-4 rounded-xl hover:bg-white/10 transition-all active:scale-95"
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM4 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 10.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
                                                </svg>
                                                Sign Up
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href="/login"
                                                className="flex items-center gap-3 text-lg font-semibold px-4 py-4 rounded-xl hover:bg-white/10 transition-all active:scale-95"
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9" />
                                                </svg>
                                                Log In
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }

    return (
        <nav className="bg-[var(--brand-color-black)] text-[var(--brand-color-white)] z-50 sticky top-0 shadow-lg">
            <div className="navbar px-4 py-3 max-w-7xl mx-auto">
                {/* Logo */}
                <div className="flex-1">
                    <Link href="/" className="flex items-center gap-2 text-xl md:text-2xl font-bold hover:opacity-80 transition-opacity">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 md:w-7 md:h-7">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
                        </svg>
                        EVChargerBuddy
                    </Link>
                </div>

                {/* Desktop Menu */}
                <div className="hidden lg:flex items-center gap-1">
                    <Link
                        href="/profile"
                        className="btn btn-ghost text-base font-semibold px-5 py-3 h-auto min-h-0 hover:bg-white/10 rounded-xl transition-all"
                    >
                        Profile
                    </Link>
                    <Link
                        href="/charging-station"
                        className="btn btn-ghost text-base font-semibold px-5 py-3 h-auto min-h-0 hover:bg-white/10 rounded-xl transition-all"
                    >
                        Add Station
                    </Link>
                    <Link
                        href="/map"
                        className="btn bg-white text-[var(--brand-color-black)] text-base font-semibold px-5 py-3 h-auto min-h-0 hover:bg-gray-100 rounded-xl transition-all"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z" />
                        </svg>
                        View Map
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <div className="flex-none lg:hidden">
                    <div className="drawer drawer-end">
                        <input id="mobile-drawer-auth" type="checkbox" className="drawer-toggle" />
                        <div className="drawer-content">
                            <label htmlFor="mobile-drawer-auth" className="btn btn-ghost btn-circle hover:bg-white/10">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>
                            </label>
                        </div>
                        <div className="drawer-side z-50">
                            <label htmlFor="mobile-drawer-auth" aria-label="close sidebar" className="drawer-overlay"></label>
                            <div className="bg-[var(--brand-color-black)] text-[var(--brand-color-white)] min-h-full w-80 p-6">
                                {/* Mobile Menu Header */}
                                <div className="flex items-center justify-between mb-8">
                                    <span className="text-xl font-bold">Menu</span>
                                    <label htmlFor="mobile-drawer-auth" className="btn btn-ghost btn-circle hover:bg-white/10">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                        </svg>
                                    </label>
                                </div>

                                {/* Mobile Menu Links */}
                                <ul className="space-y-2">
                                    <li>
                                        <Link
                                            href="/profile"
                                            className="flex items-center gap-3 text-lg font-semibold px-4 py-4 rounded-xl hover:bg-white/10 transition-all active:scale-95"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                            </svg>
                                            Profile
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/charging-station"
                                            className="flex items-center gap-3 text-lg font-semibold px-4 py-4 rounded-xl hover:bg-white/10 transition-all active:scale-95"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                            </svg>
                                            Add Charging Station
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/map"
                                            className="flex items-center gap-3 text-lg font-semibold px-4 py-4 rounded-xl hover:bg-white/10 transition-all active:scale-95"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z" />
                                            </svg>
                                            View Map
                                        </Link>
                                    </li>
                                </ul>

                                {/* Divider */}
                                <div className="border-t border-white/10 my-6"></div>

                                {/* User Info Hint */}
                                <div className="px-4 py-3 bg-white/5 rounded-xl">
                                    <p className="text-sm text-gray-400">Signed in as</p>
                                    <p className="font-semibold truncate">{session.user.name}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;