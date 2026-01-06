"use client";

import Button from "./Button";
import { CreateChargingStation } from "../lib/action";
import StationNameInput from "./StationNameInput";
import { useActionState } from "react";
import { formState } from "@/app/Types";
import { useGetLocation } from "@/app/hooks/useGetLocation";

function ChargingStation() {
    const [msg, formAction, pending] = useActionState<formState, FormData>(CreateChargingStation, { status: "idle", msg: "" });
    const { latRef, longRef, gettingLocation, gotLocation, getLocation } = useGetLocation();
    return (
        <section className="h-screen">
            <fieldset className="fieldset border-base-300 rounded-box w-xs border p-4">
                <form action={formAction}>
                    <div className="my-2">
                        <StationNameInput />
                    </div>
                    <input type="hidden" name="userLat" id="userLat" ref={latRef} />
                    <input type="hidden" name="userLong" id="userLong" ref={longRef} />


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