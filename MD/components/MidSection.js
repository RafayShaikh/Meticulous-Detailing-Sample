import styles from '../styles/Mid.module.css';
import Selection from './Selection/Selection';
import CallAction from './CallAction';

function MidSection() {
  return (
    <div className={styles.container}>
      <Selection />
      <CallAction />
    </div>
  );
}

export default MidSection;
