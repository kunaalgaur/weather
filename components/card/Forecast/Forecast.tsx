'use client';

import { useForecast } from '@/hooks/useForecast';
import styles from './Forecast.module.css';
import { useGetCurrentPosition } from '@/hooks/useGetCurrentPosition';
import ForecastItem from './ForecastItem/ForecastItem';

const Forecast = () => {
    const { latitude, longitude } = useGetCurrentPosition();
    const { weather } = useForecast(latitude as number, longitude as number);
    return (
        <div id={styles.container}>
            <span id={styles.heading}>Forecast</span>
            {weather?.map((item) => {
                return <ForecastItem weather={item} key={item.time} />;
            })}
        </div>
    );
};

export default Forecast;
