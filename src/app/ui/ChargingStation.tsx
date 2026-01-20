"use client";

import Button from "./Button";
import { CreateChargingStation } from "../lib/action";
import StationNameInput from "./StationNameInput";
import { useActionState } from "react";
import { formState } from "@/app/Types";
import { useGetLocation } from "@/app/hooks/useGetLocation";
import { useState } from "react";
import dynamic from "next/dynamic";
const StationLocationPicker = dynamic(() => import('../ui/StationLocationPicker'), {
    ssr: false,
});

function ChargingStation() {
    const [msg, formAction, pending] = useActionState<formState, FormData>(CreateChargingStation, { status: "idle", msg: "" });
    const { latRef, longRef, gettingLocation, gotLocation, getLocation, setGotLocation } = useGetLocation();
    const [showMap, setShowMap] = useState<boolean>(false);
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
                        {gotLocation ? (

                            <>
                                <Button btnName="Click here to change location" onClick={() => setGotLocation(false)} />
                                <div role="alert" className="alert alert-success alert-dash my-4">
                                    <span>Location Selected</span>
                                </div>
                            </>
                        ) : (<>
                            {!showMap && (
                                <>
                                    <Button btnName="Get GPS Location" onClick={getLocation} loading={gettingLocation} />
                                    <div className="w-full text-center font-bold text-md p-2">OR</div>
                                </>
                            )}
                            <Button btnName={showMap ? "Hide Map" : "Pick Location on Map"} onClick={() => setShowMap(!showMap)} />
                        </>)}
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
            {showMap && <StationLocationPicker latRef={latRef} longRef={longRef} setGotLocation={setGotLocation} />}
        </section>
    );
}

export default ChargingStation;