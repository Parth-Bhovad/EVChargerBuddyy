"use client";

import { createContext, useState, useContext } from 'react';

const ShowRouteInfoContext = createContext<{
    ShowRouteInfo: boolean;
    setShowRouteInfo: React.Dispatch<React.SetStateAction<boolean>>;
}>({setShowRouteInfo: () => {}, ShowRouteInfo: false});

export const useShowRouteInfoContext = () => {
const context = useContext(ShowRouteInfoContext);
    if (context === null) {
        throw new Error('useShowRouteInfo must be used within a ShowRouteInfoProvider');
    }
    return context;
}

function ShowRouteInfoProvider({ children }: { children: React.ReactNode }) {
    const [ShowRouteInfo, setShowRouteInfo] = useState<boolean>(false)
    return ( 
        <ShowRouteInfoContext.Provider value={{ ShowRouteInfo, setShowRouteInfo }}>
            {children}
        </ShowRouteInfoContext.Provider>
     );
}

export default ShowRouteInfoProvider;