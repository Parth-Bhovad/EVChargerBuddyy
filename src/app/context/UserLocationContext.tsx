"use client";

import { createContext, useState, useContext } from 'react';

const UserLocationContext = createContext<{
    userLocation: [number, number] | null;
    setUserLocation: React.Dispatch<React.SetStateAction<[number, number] | null>>;
} | null>(null);

export const useUserLocationContext = () => {
    const context = useContext(UserLocationContext);
    if (context === null) {
        throw new Error('useUserLocation must be used within a UserLocationProvider');
    }
    return context;
}

function UserLocationProvider({ children }: { children: React.ReactNode }) {
    const [userLocation, setUserLocation] = useState<[number, number] | null>(null)
    return ( 
        <UserLocationContext.Provider value={{ userLocation, setUserLocation }}>
            {children}
        </UserLocationContext.Provider>
     );
}

export default UserLocationProvider;