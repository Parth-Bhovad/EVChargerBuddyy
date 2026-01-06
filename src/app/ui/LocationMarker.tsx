'use client';

import { Marker, Popup } from 'react-leaflet';
import { useMapEvents } from 'react-leaflet/hooks'
import { useUserLocationContext } from '../context/UserLocationContext';

function LocationMarker() {
    const { userLocation, setUserLocation } = useUserLocationContext();
    const map = useMapEvents({
        click() {
            map.locate()
        },
        locationfound(e) {
            const userCurrentPointer = [e.latlng.lat, e.latlng.lng].join(',');
            if (userLocation?.join(',') !== userCurrentPointer) {
                setUserLocation([e.latlng.lat, e.latlng.lng])
                map.flyTo(e.latlng, map.getZoom())
            };
        },
    })

    return userLocation === null ? null : (
        <Marker position={userLocation}>
            <Popup>You are here</Popup>
        </Marker>
    )
}

export default LocationMarker;