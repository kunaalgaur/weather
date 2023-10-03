import Image from 'next/image';
import React from 'react';

const ForecastItem = () => {
    return (
        <div>
            <Image
                src={''}
                alt=""
                height={0}
                width={0}
                style={{ height: '100%', width: '100%' }}
            />
            <span></span>
            <span></span>
        </div>
    );
};

export default ForecastItem;
