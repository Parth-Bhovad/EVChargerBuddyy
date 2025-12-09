"use client";

import { createContext, useState, useContext } from 'react';

interface stations{
    _id: string;
    location: {
        type: string;
        coordinates: [number, number];
    };
    owner: string;
    stationName: string;
}

const NearByStationsContext = createContext<{
    stations: stations[];
    setStations: React.Dispatch<React.SetStateAction<stations[]>>;
} | null>(null);

export const useNearByStationsContext = () => {
    const context = useContext(NearByStationsContext);
    if (!context) {
        throw new Error("useNearByStationsContext must be used within a NearByStationsProvider");
    }
    return context;
};

export const NearByStationsProvider = ({ children }: { children: React.ReactNode }) => {
    const [stations, setStations] = useState<stations[]>([]);

    return (
        <NearByStationsContext.Provider value={{ stations, setStations }}>
            {children}
        </NearByStationsContext.Provider>
    );
};