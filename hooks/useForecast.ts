import { ForecastData } from '@/constants/types';
import axios from 'axios';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

export const useForecast = (latitude: number, longitude: number) => {
    const [weather, setWeather] = useState<ForecastData[] | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (latitude && longitude) {
            const getForecast = async () => {
                try {
                    const API = process.env.NEXT_PUBLIC_WEATHER_API as string;
                    const API_KEY = process.env
                        .NEXT_PUBLIC_WEATHER_API_KEY as string;
                    const res = await axios.get(
                        `${API}/forecast.json?key=${API_KEY}&q=${latitude},${longitude}`
                    );
                    const response = await res.data;
                    setWeather(response.forecast.forecastday.hour);
                } catch (error: any) {
                    toast.error(error.message);
                    return setError(error.message);
                } finally {
                    setLoading(false);
                }
            };

            getForecast();
        }
    }, [latitude, longitude]);

    return { weather, loading, error };
};
