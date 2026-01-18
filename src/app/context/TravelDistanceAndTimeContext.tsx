"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

interface TravelDistanceAndTimeContextType {
    //station distance in KM
    stationDistance: number;
    setStationDistance: React.Dispatch<React.SetStateAction<number>>;
    //time needed to reach station in minutes
    destinationTime: number;
    setDestinationTime: React.Dispatch<React.SetStateAction<number>>;
}

const TravelDistanceAndTimeContext = createContext<TravelDistanceAndTimeContextType | undefined>(undefined);

export const TravelDistanceAndTimeProvider = ({ children }: { children: ReactNode }) => {
    const [stationDistance, setStationDistance] = useState<number>(0);
    const [destinationTime, setDestinationTime] = useState<number>(0);

    return (
        <TravelDistanceAndTimeContext.Provider value={{ stationDistance, setStationDistance, destinationTime, setDestinationTime }}>
            {children}
        </TravelDistanceAndTimeContext.Provider>
    );
};

export const useTravelDistanceAndTimeContext = () => {
    const context = useContext(TravelDistanceAndTimeContext);
    if (context === undefined) {
        throw new Error("useTravelDistanceAndTimeContext must be used within a TravelDistanceAndTimeProvider");
    }
    return context;
};
