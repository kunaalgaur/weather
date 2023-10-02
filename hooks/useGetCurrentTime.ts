import { useEffect, useState } from 'react';

export const useGetCurrentTime = () => {
    const [hours, setHours] = useState<number | undefined>();
    const [minutes, setMinutes] = useState<number | undefined>();

    useEffect(() => {
        const today = new Date();
        if (today.getHours() > 12) {
            setHours(today.getHours() - 12);
        } else {
            setHours(today.getHours());
        }
        setMinutes(today.getMinutes());
    }, [minutes]);

    const currentTime = `${hours} : ${minutes} ${
        (hours as number) > 12 ? 'PM' : 'AM'
    }`;

    return currentTime;
};
