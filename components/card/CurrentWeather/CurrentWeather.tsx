'use client';

import { useGetCurrentPosition } from '@/hooks/useGetCurrentPosition';
import { useGetCurrentTime } from '@/hooks/useGetCurrentTime';
import { useGetCurrentWeather } from '@/hooks/useGetCurrentWeather';
import Image from 'next/image';

const CurrentWeather = () => {
    const [latitude, longitude] = useGetCurrentPosition();
    const time = useGetCurrentTime();
    const weather = useGetCurrentWeather(
        latitude as number,
        longitude as number
    );

    console.log(latitude, longitude);

    return (
        <div>
            <div>
                <span>Current Weather</span>
                <span>{time}</span>
            </div>
            <div>
                <div>
                    <Image
                        src=""
                        alt=""
                        height={0}
                        width={0}
                        style={{ height: '100%', width: '100%' }}
                    />
                </div>
                <div>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div></div>
        </div>
    );
};

export default CurrentWeather;
