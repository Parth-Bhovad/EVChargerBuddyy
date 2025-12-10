"use client";

import Button from "./Button";
import { CreateChargingStation } from "../lib/action";
import StationNameInput from "./StationNameInput";
import { useActionState } from "react";
import { formState } from "@/app/Types";
import { useState } from "react";

function ChargingStation() {
    const [gettingLocation, setGettingLocation] = useState(false);
    const [gotLocation, setGotLocation] = useState(false);
    const [msg, formAction, pending] = useActionState<formState, FormData>(CreateChargingStation, { status: "idle", msg: "" });
    const getLocation = () => {
        if (navigator.geolocation) {
            setGettingLocation(true);
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const lat = position.coords.latitude;
                    const long = position.coords.longitude;

                    const userLatInput = document.querySelector<HTMLInputElement>("#userLat")!;
                    userLatInput.value = lat.toString();
                    const userLongInput = document.querySelector<HTMLInputElement>("#userLong")!;
                    userLongInput.value = long.toString();
                    setGettingLocation(false);
                    setGotLocation(true);
                    console.log("coordinats:", [lat, long]);
                },
                (error) => {
                    console.error("Error getting location:", error);
                    setGettingLocation(false);
                    setGotLocation(false);
                }
            );
        }
    };

    return (
        <section className="h-screen">
            <fieldset className="fieldset border-base-300 rounded-box w-xs border p-4">
                <form action={formAction}>
                    <div className="my-2">
                        <StationNameInput />
                    </div>
                    <input type="hidden" name="userLat" id="userLat" />
                    <input type="hidden" name="userLong" id="userLong" />


                    <div className="my-2">
                        <Button btnName={gotLocation ? "Location Acquired" : "Get GPS Location"} onClick={getLocation} loading={gettingLocation} />
                    </div>
                    {msg.status === "failed" && (
                        <div role="alert" className="alert alert-error alert-dash">
                            <span>{msg.msg}</span>
                        </div>
                    )}
                    {msg.status === "success" && (
                        <div role="alert" className="alert alert-success alert-dash">
                            <span>{msg.msg}</span>
                        </div>
                    )}
                    <div className="mt-8">
                        <Button btnName="Create Charging Station" btnType="submit" loading={pending} />
                    </div>
                </form>
            </fieldset>
        </section>
    );
}

export default ChargingStation;