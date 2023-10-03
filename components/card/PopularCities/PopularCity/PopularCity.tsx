import { usePopularCities } from '@/hooks/usePopularCitites';
import Link from 'next/link';
import React from 'react';
import styles from './PopularCity.module.css';

const PopularCity = ({ city }: { city: string }) => {
    const { weather } = usePopularCities(city);
    return (
        <Link href={`/${city.toLowerCase()}`} id={styles.container}>
            <span>{city}</span>
            <span>
                {weather?.current.condition.text || 'No data available'}
            </span>
        </Link>
    );
};

export default PopularCity;
