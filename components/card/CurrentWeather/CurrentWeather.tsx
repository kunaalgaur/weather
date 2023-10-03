'use client';

import { WiThermometer, WiRainMix, WiSandstorm } from 'react-icons/wi';
import { useGetCurrentPosition } from '@/hooks/useGetCurrentPosition';
import { useGetCurrentWeather } from '@/hooks/useGetCurrentWeather';
import { useGetCurrentTime } from '@/hooks/useGetCurrentTime';
import styles from './CurrentWeather.module.css';
import Loading from '../Loading/Loading';
import Image from 'next/image';

const CurrentWeather = () => {
    const { latitude, longitude } = useGetCurrentPosition();
    const time = useGetCurrentTime();
    const { weather, loading } = useGetCurrentWeather(
        latitude as number,
        longitude as number
    );

    if (loading) {
        return <Loading />;
    }

    return (
        <div id={styles.container}>
            <div id={styles.top}>
                <span id={styles.heading}>Current Weather</span>
                <span id={styles.time}>{time}</span>
            </div>
            <div id={styles.middle}>
                <div id={styles.middleLeft}>
                    <Image
                        src={`/${
                            weather?.current.condition.text as string
                        }.png`}
                        alt=""
                        height={0}
                        width={0}
                        style={{ height: '100%', width: '100%' }}
                        unoptimized
                    />
                </div>
                <div id={styles.middleRight}>
                    <span id={styles.temp}>
                        {weather?.current.temp_c} &deg; C
                    </span>
                    <span id={styles.condition}>
                        {weather?.current.condition.text}
                    </span>
                </div>
            </div>
            <div id={styles.bottom}>
                <div className={styles.children}>
                    <WiThermometer className={styles.icon} />
                    <span className={styles.childrenText}>
                        {weather?.current.humidity}
                    </span>
                </div>
                <div className={styles.children}>
                    <WiRainMix className={styles.icon} />
                    <span className={styles.childrenText}>
                        {weather?.current.precip_in}%
                    </span>
                </div>
                <div className={styles.children}>
                    <span>UV</span>
                    <span className={styles.childrenText}>
                        {weather?.current.uv}
                    </span>
                </div>
                <div className={styles.children}>
                    <WiSandstorm className={styles.icon} />
                    <span className={styles.childrenText}>
                        {weather?.current.wind_kph}km/hr
                    </span>
                </div>
            </div>
        </div>
    );
};

export default CurrentWeather;
