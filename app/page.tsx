import CurrentWeather from '@/components/card/CurrentWeather/CurrentWeather';
import styles from './page.module.css';

const page = () => {
    return (
        <div id={styles.container}>
            <div id={styles.top}>
                <CurrentWeather />
                <div></div>
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
