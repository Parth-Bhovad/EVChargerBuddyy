"use client";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { useMapEvent } from 'react-leaflet/hooks'
import { useState } from 'react';


L.Icon.Default.mergeOptions({
    iconRetinaUrl: "/marker-icon-2x.png",
    iconUrl: "/marker-icon.png",
    shadowUrl: "/marker-shadow.png",
});

function AddLocationMarker({latRef, longRef, setGotLocation}: { latRef: React.RefObject<HTMLInputElement | null>; longRef: React.RefObject<HTMLInputElement | null>; setGotLocation: React.Dispatch<React.SetStateAction<boolean>>; }) {

    const [position, setPosition] = useState<L.LatLng | null>(null);
    const map = useMapEvent('click', (e) => {
        console.log(e);
        setPosition(e.latlng);
        if (latRef.current && longRef.current) {
            latRef.current.value = e.latlng.lat.toString();
            longRef.current.value = e.latlng.lng.toString();
        }
        setGotLocation(true);
    })
    return (
        <Marker position={position ?? map.getCenter()}>
            <Popup>You are here</Popup>
        </Marker>
    )
}

function StationLocationPicker({latRef, longRef, setGotLocation}: { latRef: React.RefObject<HTMLInputElement | null>; longRef: React.RefObject<HTMLInputElement | null>; setGotLocation: React.Dispatch<React.SetStateAction<boolean>>; }) {

    return (
        <MapContainer
            center={[19.6967, 72.7655]}
            zoom={13}
            style={{ height: '50%', width: '100%', borderRadius: '12px', zIndex: 40, marginTop: '1rem' }}
            scrollWheelZoom={true}
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <AddLocationMarker latRef={latRef} longRef={longRef} setGotLocation={setGotLocation} />
        </MapContainer>
    );
}

export default StationLocationPicker;