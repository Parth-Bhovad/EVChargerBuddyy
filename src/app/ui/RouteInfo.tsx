'use client';

import { useRouteStepsContext } from '../context/RouteStepsContext';

function RouteInfo() {
    const {routeSteps} = useRouteStepsContext();
    return ( 
        <>
        <ul className="steps steps-vertical">
            {routeSteps.map((info, index) => (
                <li className="step step-neutral" key={index}>Distance: {info.distance}, Duration: {info.duration}, instruction: {info.instruction}</li>
            ))}
        </ul>
        </>
     );
}

export default RouteInfo;