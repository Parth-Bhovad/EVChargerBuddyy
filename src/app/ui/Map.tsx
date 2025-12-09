'use client';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';
import L from 'leaflet';
import { useState } from 'react';
import { useMapEvents } from 'react-leaflet/hooks'
import RouteMachine from './RouteMachine';
import { useUserLocationContext } from '../context/UserLocationContext';
import { useNearByStationsContext } from '../context/NearByStationsContext';

function LocationMarker() {
  // const [position, setPosition] = useState(null)
  const { userLocation, setUserLocation } = useUserLocationContext();
  const map = useMapEvents({
    click() {
      map.locate()
    },
    locationfound(e) {
      setUserLocation([e.latlng.lat, e.latlng.lng])
      map.flyTo(e.latlng, map.getZoom())
    },
  })

  return userLocation === null ? null : (
    <Marker position={userLocation}>
      <Popup>You are here</Popup>
    </Marker>
  )
}

L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl:
    'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl:
    'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

const LeafletMap = () => {
  const position: [number, number] = [19.6967, 72.7655]; // Palghar
  const { userLocation } = useUserLocationContext();
  const { stations } = useNearByStationsContext();
  const [destination, setDestination] = useState<[number, number] | null>(null);
  return (
    <MapContainer
      center={position}
      zoom={13}
      style={{ height: '100%', width: '100%', borderRadius: '12px' }}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {stations.map((station, index) => (
        <Marker
          key={index}
          position={[station.location.coordinates[0], station.location.coordinates[1]]}
          eventHandlers={
            {
              click: (e) => {
                console.log(e);
                setDestination([e.latlng.lat, e.latlng.lng]);
              }

            }
          }
        >
          <Popup>{index}</Popup>
        </Marker>
      ))}
      <LocationMarker />
      {destination && userLocation && <RouteMachine from={userLocation} to={destination} />}
    </MapContainer>
  );
};

export default LeafletMap;
