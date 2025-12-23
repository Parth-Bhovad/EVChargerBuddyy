"use client";

import { createContext, useState, useContext } from 'react';
import { Stations } from '../Types';

const NearByStationsContext = createContext<{
    stations: Stations;
    setStations: React.Dispatch<React.SetStateAction<Stations>>;
} | null>(null);

export const useNearByStationsContext = () => {
    const context = useContext(NearByStationsContext);
    if (!context) {
        throw new Error("useNearByStationsContext must be used within a NearByStationsProvider");
    }
    return context;
};

export const NearByStationsProvider = ({ children }: { children: React.ReactNode }) => {
    const [stations, setStations] = useState<Stations>([]);

    return (
        <NearByStationsContext.Provider value={{ stations, setStations }}>
            {children}
        </NearByStationsContext.Provider>
    );
};