'use client';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl:
    'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl:
    'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

const LeafletMap = ({stations}) => {
  const position: [number, number] = [19.6967, 72.7655]; // Palghar
  console.log("Map:", stations);
  
  return (
    <MapContainer
      center={position}
      zoom={13}
      style={{ height: '400px', width: '100%', borderRadius: '12px' }}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {stations.map((station, index) => (
        <Marker
        key={index}
        position={[station[0], station[1]]}
      >
        <Popup>{index}</Popup>
      </Marker>
      ))}
    </MapContainer>
  );
};

export default LeafletMap;
