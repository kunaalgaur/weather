import CurrentWeather from '@/components/card/CurrentWeather/CurrentWeather';
import styles from './page.module.css';
import Map from '@/components/card/Map/Map';
import PopularCitites from '@/components/card/PopularCities/PopularCitites';
import Forecast from '@/components/card/Forecast/Forecast';
import Summary from '@/components/card/Summary/Summary';

const page = () => {
    return (
        <div id={styles.container}>
            <div id={styles.top}>
                <CurrentWeather />
                <Map />
                <PopularCitites />
            </div>
            <div id={styles.bottom}>
                <Forecast />
                <Summary />
            </div>
        </div>
    );
};

export default page;
