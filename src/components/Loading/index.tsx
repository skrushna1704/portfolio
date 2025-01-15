import styles from './Loading.module.css';

const Loading = () => {
  return (
    <div className={styles.loadingContainer}>
      <div className={styles.loader}>
        <div className={styles.circle}></div>
        <div className={styles.circle}></div>
        <div className={styles.circle}></div>
      </div>
    </div>
  );
};

export default Loading; 