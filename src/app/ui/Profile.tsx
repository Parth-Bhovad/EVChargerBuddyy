"use client";

import Link from "next/link";
import { LogoutUser } from "../lib/action";
import Button from "../ui/Button";

function Profile({ name }: { name: string }) {
    return (
        <>
            <div className="avatar avatar-placeholder">
                <div className="bg-neutral text-neutral-content w-20 rounded-full">
                    <span className="text-3xl">{name?.charAt(0).toUpperCase()}</span>
                </div>
            </div>
            <div className="text-2xl font-bold">
                {name}
            </div>

            <ul className="list rounded-box shadow-md w-full mt-8 border border-base-300">
                <li className="list-row rounded-none border-b border-base-300 flex justify-between items-center">
                    <Link href="/your-charging-stations" className="font-semibold">Your Charging Stations</Link>
                </li>
                <li className="list-row rounded-none border-b border-base-300 flex justify-between items-center">
                    <Link href="/charging-station" className="font-semibold">Add Charging Station</Link>
                </li>
            </ul>
            <div className="w-full absolute bottom-5 px-5">
                <Button btnName="Logout" onClick={LogoutUser} />
            </div>
        </>
    );
}

export default Profile;