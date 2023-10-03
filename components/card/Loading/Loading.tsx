import styles from './Loading.module.css';
import ReactLoading from 'react-loading';
const Loading = () => {
    return (
        <div id={styles.container}>
            <ReactLoading height={40} width={40} type="bubbles" color="black" />
        </div>
    );
};

export default Loading;
