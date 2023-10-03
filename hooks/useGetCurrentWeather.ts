import { WeatherData } from '@/constants/types';
import axios from 'axios';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

export const useGetCurrentWeather = (latitude: number, longitude: number) => {
    const [weather, setWeather] = useState<WeatherData | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (latitude && longitude) {
            const getCurrentWeather = async () => {
                try {
                    const API = process.env.NEXT_PUBLIC_WEATHER_API as string;
                    const API_KEY = process.env
                        .NEXT_PUBLIC_WEATHER_API_KEY as string;
                    const res = await axios.get(
                        `${API}/current.json?key=${API_KEY}&q=${latitude},${longitude}`
                    );
                    const response = await res.data;
                    console.log(API, API_KEY);
                    setWeather(response);
                } catch (error: any) {
                    toast.error(error.message);
                    return setError(error.message);
                } finally {
                    setLoading(false);
                }
            };

            getCurrentWeather();
        }
    }, [latitude, longitude]);

    return { weather, loading, error };
};
