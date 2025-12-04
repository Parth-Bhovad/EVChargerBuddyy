"use client";

import Button from "./Button";
import { CreateChargingStation } from "../lib/action";
import StationNameInput from "./StationNameInput";
import { useState } from "react";

function ChargingStation() {
    const [stationName, setStationName] = useState("");
    const [userLat, setUserLat] = useState("");
    const [userLong, setUserLong] = useState("");

    const getLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const lat = position.coords.latitude;
                    const long = position.coords.longitude;

                    setUserLat(lat.toString());
                    setUserLong(long.toString());

                    console.log("coordinats:", [lat, long]);
                },
                (error) => console.error("Error getting location:", error)
            );
        }
    };

    return (
        <section className="h-screen">
            <fieldset className="fieldset border-base-300 rounded-box w-xs border p-4">
                <form action={CreateChargingStation}>
                    <div className="my-2">
                        <StationNameInput stationName={stationName} setStationName={setStationName} />
                    </div>
                    <input type="hidden" name="userLat" id="userLat" value={userLat}  />
                    <input type="hidden" name="userLong" id="userLong" value={userLong} />


                    <div className="my-2">
                        <Button btnName="Get GPS Location" onClick={getLocation} />
                    </div>
                    <div className="mt-8">
                        <Button btnName="Create Charging Station" btnType="submit" />
                    </div>
                </form>
            </fieldset>
        </section>
    );
}

export default ChargingStation;