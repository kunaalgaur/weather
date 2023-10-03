import { useEffect, useState } from 'react';

export const useGetCurrentPosition = () => {
    const [latitude, setLatitude] = useState<number | undefined>();
    const [longitude, setLongitude] = useState<number | undefined>();

    useEffect(() => {
        const successFunction: PositionCallback = (
            position: GeolocationPosition
        ) => {
            setLatitude(position.coords.latitude);
            setLongitude(position.coords.longitude);
        };

        const errorFunction = (error: GeolocationPositionError) => {
            throw new Error(error.message);
        };

        navigator.geolocation.getCurrentPosition(
            successFunction,
            errorFunction
        );
    }, []);

    return { latitude, longitude };
};
