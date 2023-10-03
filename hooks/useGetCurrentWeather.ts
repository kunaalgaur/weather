import { WeatherData } from '@/constants/types';
import axios from 'axios';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

export const useGetCurrentWeather = (latitude: number, longitude: number) => {
    const [weather, setWeather] = useState<WeatherData | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getCurrentWeather = async () => {
            try {
                const API = process.env.API as string;
                const API_KEY = process.env.API_KEY as string;
                const res = await axios.get(
                    `http://api.weatherapi.com/v1/current.json?key=5dc9cd221ea142a6ba064753230210&q=${latitude},${longitude}`
                );
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
