import styles from './Topbar.module.css';

const Topbar = () => {
    return (
        <div id={styles.container}>
            <div id={styles.wrapper}>
                <input
                    type="text"
                    id={styles.input}
                    placeholder="Search for places..."
                />
            </div>
        </div>
    );
};

export default Topbar;
