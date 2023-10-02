import { useEffect, useState } from 'react';

export const useGetCurrentPosition = () => {
    const [latitude, setLatitude] = useState<number>();
    const [longitude, setLongitude] = useState<number>();

    useEffect(() => {
        const successFunction = (position: any) => {
            setLatitude(position.coords.latitude);
            setLongitude(position.coords.longitude);
        };

        const errorFunction = (error: any) => {
            throw new Error(error.messsage);
        };

        navigator.geolocation.getCurrentPosition(
            successFunction,
            errorFunction
        );
    }, []);

    return [latitude, longitude];
};
