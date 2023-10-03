import { WeatherData } from '@/constants/types';
import axios from 'axios';
import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';

export const usePopularCities = (city: string) => {
    const [weather, setWeather] = useState<WeatherData | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getPopularCityData = async () => {
            const API = process.env.NEXT_PUBLIC_WEATHER_API as string;
            const API_KEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY as string;

            try {
                const res = await axios.get(
                    `${API}/current.json?key=${API_KEY}&q=${city}`
                );
                const response = await res.data;
                setWeather(response);
            } catch (error: any) {
                toast.error(error.message);
                return setError(error.message);
            } finally {
                return setLoading(false);
            }
        };

        getPopularCityData();
    }, [city]);

    return { weather, error, loading };
};
