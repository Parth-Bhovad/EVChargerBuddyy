'use client';

import { Marker, Popup } from 'react-leaflet';
import { useMapEvents } from 'react-leaflet/hooks'
import { useUserLocationContext } from '../context/UserLocationContext';
import { useShowRouteInfoContext } from '../context/ShowRouteInfoContext';
import { useEffect, useRef } from 'react';

function LocationMarker() {
    const { userLocation, setUserLocation, setGettingUserLocation } = useUserLocationContext();
    const { ShowRouteInfo } = useShowRouteInfoContext();
    const watchIdRef = useRef<number | null>(null);
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
        function success(position: GeolocationPosition) {
            console.log("succes fnx run!");

            const lat = position.coords.latitude;
            const lng = position.coords.longitude;
            console.log("[lat,lng]: ", [lat, lng]);
            
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
                console.log("Clearing watch with id:", watchIdRef.current);
                if (watchIdRef.current) {
                    console.log("Clearing watch with id:", watchIdRef.current);
                    navigator.geolocation.clearWatch(watchIdRef.current);
                    watchIdRef.current = null;
                }
            }
        }
        handleUserLiveLocationChanges();
    }, [ShowRouteInfo, map, setUserLocation]);

    return userLocation === null ? null : (
        <Marker position={userLocation}>
            <Popup>You are here</Popup>
        </Marker>
    )
}

export default LocationMarker;