import styles from '../styles/Bottom.module.css';
import Logos from './Logos';

function BottomSection() {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Logos />
      </div>
      <div className={styles.bottom}>
        <p>Copyrights, Meticuous Detailing {new Date().getFullYear()}</p>
      </div>
    </div>
  );
}

export default BottomSection;
