"use client";

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
                <Button btnName="Logout" onClick={LogoutUser} />
            </div>
        </main>
    );
}

export default Profile;