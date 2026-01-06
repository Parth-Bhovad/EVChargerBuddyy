'use client';

import { MapContainer, TileLayer, Marker, Popup, Polyline, Tooltip } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import LocationMarker from './LocationMarker';
import { useNearByStationsContext } from '../context/NearByStationsContext';
import useMap from '../hooks/useMap';
import { useUserDestinationContext } from '../context/UserDestinationContext';
import { useUserLocationContext } from '../context/UserLocationContext';

const limeOptions = { color: 'blue' }

L.Icon.Default.mergeOptions({
  iconRetinaUrl: "/marker-icon-2x.png",
  iconUrl: "/marker-icon.png",
  shadowUrl: "/marker-shadow.png",
});

const LeafletMap = () => {
  const { stations } = useNearByStationsContext();
  const position: [number, number] = [19.6967, 72.7655];
  const { polyline, stationDistance, destinationTime } = useMap();
  const { userLocation } = useUserLocationContext();
  const { userDestination, setUserDestination } = useUserDestinationContext();

  return (
    <MapContainer
      center={position}
      zoom={13}
      style={{ height: '100%', width: '100%', borderRadius: '12px', zIndex: 40 }}
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
                const currentPointer = [e.latlng.lat, e.latlng.lng].join(',');
                if (currentPointer !== userDestination?.join(',')) {
                  setUserDestination([e.latlng.lat, e.latlng.lng]);
                }
              }

            }
          }
        >
          <Popup>{station.stationName || index}</Popup>
        </Marker>
      ))}
      <LocationMarker />
      {userDestination && userLocation && (
        <Polyline pathOptions={limeOptions} positions={polyline}>
          <Tooltip direction="bottom" offset={[0, 20]} opacity={1} permanent position={userDestination}>
            {stationDistance && destinationTime ? `Distance: ${stationDistance.toFixed(2)} Km, ETA: ${destinationTime.toFixed(0)} mins` : 'Calculating route...'}
          </Tooltip>
        </Polyline>
      )}
    </MapContainer>
  );
};

export default LeafletMap;