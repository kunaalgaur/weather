'use client';

import styles from './PopularCities.module.css';
import PopularCity from './PopularCity/PopularCity';

const PopularCitites = () => {
    const cities = ['Delhi', 'Mumbai', 'Bengaluru', 'Hyderabad', 'Kolkata'];
    return (
        <div id={styles.container}>
            <span id={styles.heading}>Popular Cities</span>
            {cities.map((city: string) => {
                return <PopularCity city={city} key={city} />;
            })}
        </div>
    );
};

export default PopularCitites;
