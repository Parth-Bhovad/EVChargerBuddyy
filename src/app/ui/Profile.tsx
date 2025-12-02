"use client";

import Link from "next/link";
import { LogoutUser } from "../lib/action";
import Button from "../ui/Button";

function Profile({name}: {name: string | undefined}) {
    return (
        <main className="h-screen">
            <section>
                <div>
                    Username: {name}
                </div>
            </section>
            <div>
                <Link href="/charging-station">Add Charging Station</Link>
            </div>
            <div>
                <Button btnName="Logout" onClick={LogoutUser} />
            </div>
        </main>
    );
}

export default Profile;