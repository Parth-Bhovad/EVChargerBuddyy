"use client";

import { createContext, useState, useContext } from 'react';
import {RouteSteps} from '../Types';

const RouteStepsContext = createContext<{ routeSteps: RouteSteps; setRouteSteps: React.Dispatch<React.SetStateAction<RouteSteps>> }>({ routeSteps: [], setRouteSteps: () => {} });

export const useRouteStepsContext = () => {
    const context = useContext(RouteStepsContext);
    if (context === null) {
        throw new Error('useRouteStepsContext must be used within a RouteStepsProvider');
    }
    return context;
}

function RouteStepsProvider({ children }: { children: React.ReactNode }) {
    const [routeSteps, setRouteSteps] = useState<RouteSteps>([])
    return ( 
        <RouteStepsContext.Provider value={{ routeSteps, setRouteSteps }}>
            {children}
        </RouteStepsContext.Provider>
     );
}

export default RouteStepsProvider;