'use client';

import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import styles from './Map.module.css';
import { useCallback, useMemo, useState } from 'react';
import { useGetCurrentPosition } from '@/hooks/useGetCurrentPosition';
import Loading from '../Loading/Loading';

const Map = () => {
    const { latitude, longitude } = useGetCurrentPosition();

    const containerStyle = {
        height: '100%', // Adjust the height as needed
        width: '100%',
    };

    const center = useMemo(() => {
        return {
            lat: latitude || 0,
            lng: longitude || 0,
        };
    }, [latitude, longitude]);

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: 'YOUR_GOOGLE_MAPS_API_KEY',
    });

    const [map, setMap] = useState<google.maps.Map | null>(null);

    const onLoad = useCallback(
        function callback(map: google.maps.Map) {
            const bounds = new window.google.maps.LatLngBounds(center);
            map.fitBounds(bounds);

            setMap(map);
        },
        [center]
    );

    const onUnmount = useCallback(function callback() {
        setMap(null);
    }, []);

    return isLoaded ? (
        <div id={styles.container}>
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={10}
                onLoad={onLoad}
                onUnmount={onUnmount}
            />
        </div>
    ) : (
        <Loading />
    );
};

export default Map;
