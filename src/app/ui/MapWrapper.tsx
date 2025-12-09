"use client"

import dynamic from "next/dynamic";

const LeafletMap = dynamic(() => import('../ui/Map'), {
    ssr: false,
});

function MapWrapper() {
    return (
        <LeafletMap />
    );
}

export default MapWrapper;