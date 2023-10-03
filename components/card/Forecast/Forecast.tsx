'use client';

import { useForecast } from '@/hooks/useForecast';
import styles from './Forecast.module.css';
import { useGetCurrentPosition } from '@/hooks/useGetCurrentPosition';

const Forecast = () => {
    const { latitude, longitude } = useGetCurrentPosition();
    const { weather } = useForecast(latitude as number, longitude as number);
    return (
        <div id={styles.container}>
            <span id={styles.heading}>Forecast</span>
        </div>
    );
};

export default Forecast;
