import Link from "next/link";

function Navbar() {
    return (
        <div className="drawer bg-[var(--brand-color-black)] text-[var(--brand-color-white)] z-50 sticky top-0">
            <div className="drawer-content flex flex-col">
                {/* Navbar */}
                <div className="navbar bg-base-300 w-full">
                    <div className="mx-2 flex-1 px-2 font-bold text-2xl"><Link href="/">EVChargerBuddy</Link></div>
                    <div className="hidden flex-none lg:block">
                        <ul className="menu menu-horizontal">
                            <li><Link href="/signup" className="font-bold">Sign Up</Link></li>
                            <li><Link href="/login" className="font-bold">Log In</Link></li>
                            <li><Link href="/profile" className="font-bold">Profile</Link></li>
                            <li><Link href="/charging-station" className="font-bold">Add Charging Station</Link></li>
                            <li><Link href="/map" className="font-bold">View Map</Link></li>
                        </ul>
                    </div>
                    <div className="flex-none lg:hidden">
                        <div className="drawer drawer-end">
                            <input id="my-drawer-5" type="checkbox" className="drawer-toggle" />
                            <div className="drawer-content bg-transparent">
                                {/* Page content here */}
                                <label htmlFor="my-drawer-5" className="drawer-button btn bg-transparent">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block h-5 w-5 stroke-current"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path> </svg>
                                </label>
                            </div>
                            <div className="drawer-side">
                                <label htmlFor="my-drawer-5" aria-label="close sidebar" className="drawer-overlay"></label>
                                <ul className="menu bg-[var(--brand-color-black)] text-[var(--brand-color-white)] min-h-full w-80 p-4">
                                    {/* Sidebar content here */}
                                    <li><Link href="/signup" className="font-bold">Sign Up</Link></li>
                                    <li><Link href="/login" className="font-bold">Log In</Link></li>
                                    <li><Link href="/profile" className="font-bold">Profile</Link></li>
                                    <li><Link href="/charging-station" className="font-bold">Add Charging Station</Link></li>
                                    <li><Link href="/map" className="font-bold">View Map</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;