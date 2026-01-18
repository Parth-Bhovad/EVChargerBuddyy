'use client';

import { Marker, Popup } from 'react-leaflet';
import { useMapEvents } from 'react-leaflet/hooks'
import { useUserLocationContext } from '../context/UserLocationContext';
import { useShowRouteInfoContext } from '../context/ShowRouteInfoContext';
import { useEffect, useRef } from 'react';
import { useTravelDistanceAndTimeContext } from '../context/TravelDistanceAndTimeContext';

function LocationMarker() {
    const { userLocation, setUserLocation, setGettingUserLocation } = useUserLocationContext();
    const { ShowRouteInfo } = useShowRouteInfoContext();
    const { setStationDistance } = useTravelDistanceAndTimeContext();
    const watchIdRef = useRef<number | null>(null);
    const coordinatesRef = useRef<Array<{ lat: number, lng: number }>>([]);
    const map = useMapEvents({
        click() {
            if (!userLocation) {
                setGettingUserLocation(true);
                map.locate();
            }
        },
        locationfound(e) {
            if (!userLocation) {
                setGettingUserLocation(false)
                setUserLocation([e.latlng.lat, e.latlng.lng])
                map.flyTo(e.latlng, map.getZoom())
            };
        },
    });

    useEffect(() => {
        // Earth radius in meters
        const EARTH_RADIUS = 6371000;

        /**
         * Calculates distance between two coordinates using Haversine formula
         */
        function haversineDistance(coord1: { lat: number, lng: number }, coord2: { lat: number, lng: number }) {
            const toRad = (deg: number) => (deg * Math.PI) / 180;

            const lat1 = toRad(coord1.lat);
            const lon1 = toRad(coord1.lng);
            const lat2 = toRad(coord2.lat);
            const lon2 = toRad(coord2.lng);

            const dLat = lat2 - lat1;
            const dLon = lon2 - lon1;

            const a =
                Math.sin(dLat / 2) ** 2 +
                Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLon / 2) ** 2;

            const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

            return EARTH_RADIUS * c; // meters
        }

        /**
         * Calculates total distance traveled from a list of coordinates
         */
        function calculateTotalDistance(coordinates: Array<{ lat: number, lng: number }>) {
            if (coordinates.length < 2) return 0;

            let totalDistance = 0;

            for (let i = 1; i < coordinates.length; i++) {
                totalDistance += haversineDistance(
                    coordinates[i - 1],
                    coordinates[i]
                );
            }

            return totalDistance; // meters
        }

        function success(position: GeolocationPosition) {
            console.log("succes fnx run!");

            const lat = position.coords.latitude;
            const lng = position.coords.longitude;
            console.log("{lat,lng}: ", { lat, lng });
            coordinatesRef.current.push({ lat, lng });
            const totalDistance = calculateTotalDistance(coordinatesRef.current);
            setStationDistance((prevDestination) => prevDestination - totalDistance / 1000); // in KM
            console.log("total Distance: ", totalDistance);

            setUserLocation([lat, lng]);
            map.flyTo([lat, lng], map.getZoom())
        }

        function error(err: GeolocationPositionError) {
            console.warn(`ERROR(${err.code}): ${err.message}`);
        }
        function handleUserLiveLocationChanges() {
            if (ShowRouteInfo === true) {
                console.log(ShowRouteInfo);

                watchIdRef.current = navigator.geolocation.watchPosition(
                    success,
                    error,
                    {
                        enableHighAccuracy: true,
                        maximumAge: 0,
                        timeout: 10000,
                    }
                );
                console.log("Started watching position with id:", watchIdRef.current);
            }

            if (ShowRouteInfo === false) {
                if (watchIdRef.current) {
                    console.log("Clearing watch with id:", watchIdRef.current);
                    navigator.geolocation.clearWatch(watchIdRef.current);
                    watchIdRef.current = null;
                }
            }
        }
        handleUserLiveLocationChanges();
    }, [ShowRouteInfo, map, setUserLocation, setStationDistance]);

    return userLocation === null ? null : (
        <Marker position={userLocation}>
            <Popup>You are here</Popup>
        </Marker>
    )
}

export default LocationMarker;