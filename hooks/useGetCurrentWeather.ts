import axios from 'axios';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

interface WeatherData {
    // Define the structure of the weather data here
}

export const useGetCurrentWeather = (latitude: number, longitude: number) => {
    const [weather, setWeather] = useState<WeatherData | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getCurrentWeather = async () => {
            try {
                const API = `${process.env.API as string}?key=${
                    process.env.API_KEY as string
                }&q=${latitude},${longitude}`;
                const res = await axios.get(API);
                const response = await res.data;
                setWeather(response);
            } catch (error: any) {
                return setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        getCurrentWeather();
    }, [latitude, longitude]);

    return { weather, loading, error };
};
