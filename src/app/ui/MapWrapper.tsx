"use client"

import dynamic from "next/dynamic";

const LeafletMap = dynamic(() => import('../ui/Map'), {
    ssr: false,
});

function MapWrapper({stations}) {
    return (
        <LeafletMap stations={stations} />
    );
}

export default MapWrapper;