import CurrentWeather from '@/components/card/CurrentWeather/CurrentWeather';
import styles from './page.module.css';
import Map from '@/components/card/Map/Map';

const page = () => {
    return (
        <div id={styles.container}>
            <div id={styles.top}>
                <CurrentWeather />
                <Map />
                <div></div>
            </div>
            <div id={styles.bottom}>
                <div></div>
                <div></div>
            </div>
        </div>
    );
};

export default page;
