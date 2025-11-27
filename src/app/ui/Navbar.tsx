import Link from "next/link";

function Navbar() {
    return (
        <div className="navbar bg-primary text-primary-content">
            <div className="flex-1">
                <Link href="/" className="btn btn-ghost text-xl">EVChargerBuddy</Link>
            </div>
            <div className="flex-none">
                <Link href="/signup">Sign Up</Link>
            </div>
            <div className="flex-none">
                <Link href="/login">Log In</Link>
            </div>
            <div className="flex-none">
                <Link href="/profile">Profile</Link>
            </div>
        </div>
    );
}

export default Navbar;