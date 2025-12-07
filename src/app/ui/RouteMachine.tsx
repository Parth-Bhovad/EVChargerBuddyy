'use client';

import { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet-routing-machine';
import { useMap } from 'react-leaflet';

type LatLngTuple = [number, number];

interface RouteMachineProps {
  from: LatLngTuple; // [lat, lng]
  to: LatLngTuple;   // [lat, lng]
}

const RouteMachine: React.FC<RouteMachineProps> = ({ from, to }) => {
  const map = useMap();

  useEffect(() => {
    if (!map) return;

    const control = L.Routing.control({
      waypoints: [
        L.latLng(from[0], from[1]),
        L.latLng(to[0], to[1]),
      ],
      routeWhileDragging: false,
      addWaypoints: false,
      show: true,
      fitSelectedRoutes: true,
      showAlternatives: true,
      lineOptions: {
        // you can style the route here
        styles: [{ color: '#3388ff', weight: 5, opacity: 0.8 }],
      },
    }).addTo(map);

    return () => {
      // cleanup on unmount / from/to change
      map.removeControl(control);
    };
  }, [map, from, to]);

  return null;
};

export default RouteMachine;
