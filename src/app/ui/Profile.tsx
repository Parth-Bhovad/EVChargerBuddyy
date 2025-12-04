"use client";

import Link from "next/link";
import { LogoutUser } from "../lib/action";
import Button from "../ui/Button";

function Profile({ name }: { name: string | undefined }) {
    return (
        <>
            <div className="avatar avatar-placeholder">
                <div className="bg-neutral text-neutral-content w-20 rounded-full">
                    <span className="text-3xl">{name?.charAt(0).toUpperCase()}</span>
                </div>
            </div>
            <div className="text-2xl">
                {name}
            </div>

            <ul className="list rounded-box shadow-md w-full mt-8 border border-base-300">
                <li className="list-row rounded-none border-b border-base-300 flex justify-between items-center">
                    <Link href="/charging-station">Add Charging Station</Link>
                </li>
                <li className="list-row">
                    <Button btnName="Logout" onClick={LogoutUser} />
                </li>
            </ul>
        </>
    );
}

export default Profile;