import TopSection from '../components/TopSection';
import dynamic from 'next/dynamic';
import styles from '../styles/Home.module.css';

const PPF = dynamic(() => import('../components/PPF/PPF'), {
  loading: () => (
    <img style={{ width: '50%' }} src='logoOrignal.jpg' alt='logo' />
  ),
});

const ppf = () => {
  return (
    <div className={styles.container}>
      <TopSection />
      <PPF />
    </div>
  );
};

export default ppf;
