"use client";

import { createContext, useState, useContext } from 'react';

const UserDestinationContext = createContext<{
    userDestination: [number, number] | null;
    setUserDestination: React.Dispatch<React.SetStateAction<[number, number] | null>>;
} | null>(null);

export const useUserDestinationContext = () => {
    const context = useContext(UserDestinationContext);
    if (context === null) {
        throw new Error('useUserDestination must be used within a UserDestinationProvider');
    }
    return context;
}

function UserDestinationProvider({ children }: { children: React.ReactNode }) {
    const [userDestination, setUserDestination] = useState<[number, number] | null>(null)
    return ( 
        <UserDestinationContext.Provider value={{ userDestination, setUserDestination }}>
            {children}
        </UserDestinationContext.Provider>
     );
}

export default UserDestinationProvider;