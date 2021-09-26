import TopSection from '../components/TopSection';
import dynamic from 'next/dynamic';
import styles from '../styles/Home.module.css';

import PaintCorrection from '../components/PaintCorrection/PaintCorrection';

const paintcorrection = () => {
  return (
    <div className={styles.container}>
      <TopSection />
      <PaintCorrection />
    </div>
  );
};

export default paintcorrection;
