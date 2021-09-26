import TopSection from '../components/TopSection';
import dynamic from 'next/dynamic';
import styles from '../styles/Home.module.css';

const Detail = dynamic(() => import('../components/Detail/Detail'), {
  loading: () => (
    <img style={{ width: '50%' }} src='logoOrignal.jpg' alt='logo' />
  ),
});

const detailing = () => {
  const text = 'Detailing'
  return (
    <div className={styles.container}>
      <TopSection text={text} />
      <Detail />
    </div>
  );
};

export default detailing;
