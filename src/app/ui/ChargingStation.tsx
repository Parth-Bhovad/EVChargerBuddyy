"use client";

import Button from "./Button";
import { CreateChargingStation } from "../lib/action";

function ChargingStation() {
    const getLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const lat = position.coords.latitude;
                    const long = position.coords.longitude;

                    (document.getElementById("userLat") as HTMLInputElement).value = lat.toString();
                    (document.getElementById("userLong") as HTMLInputElement).value = long.toString();

                    console.log("coordinats:", [lat, long]);
                },
                (error) => console.error("Error getting location:", error)
            );
        }
    };


    return (
        <section>
            <form action={CreateChargingStation}>
                <div className="my-2">
                    <input type="text" placeholder="Station Name (optional)" className="input" name="stationName" />
                </div>
                <input type="hidden" name="userLat" id="userLat"/>
                <input type="hidden" name="userLong" id="userLong"/>


                <div className="my-2">
                    <Button btnName="Get GPS Location" onClick={getLocation} />
                </div>
                <div className="my-2">
                    <Button btnName="Create Charging Station" btnType="submit" />
                </div>
            </form>
        </section>
    );
}

export default ChargingStation;