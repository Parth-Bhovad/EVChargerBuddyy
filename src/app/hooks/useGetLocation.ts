"use client";
import { useState, useRef } from "react";

export function useGetLocation(): {
    latRef: React.RefObject<HTMLInputElement | null>;
    longRef: React.RefObject<HTMLInputElement | null>;
    gettingLocation: boolean;
    gotLocation: boolean;
    getLocation: () => void;
} {
    const [gettingLocation, setGettingLocation] = useState<boolean>(false);
    const [gotLocation, setGotLocation] = useState<boolean>(false);
    const latRef = useRef<HTMLInputElement>(null);
    const longRef = useRef<HTMLInputElement>(null);
    const getLocation = () => {
        if (navigator.geolocation) {
            setGettingLocation(true);
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    latRef.current!.value = position.coords.latitude.toString();
                    longRef.current!.value = position.coords.longitude.toString();

                    setGettingLocation(false);
                    setGotLocation(true);
                    console.log("coordinats:", [latRef.current!.value, longRef.current!.value]);
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
        { latRef, longRef, gettingLocation, gotLocation, getLocation }
    );
}

export default useGetLocation;