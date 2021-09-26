import TopSection from '../components/TopSection';
import dynamic from 'next/dynamic';
import styles from '../styles/Home.module.css';

const Tint = dynamic(() => import('../components/Tint/Tint'), {
  loading: () => (
    <img style={{ width: '50%' }} src='logoOrignal.jpg' alt='logo' />
  ),
});

const tinting = () => {
  const text = 'Tinting';
  return (
    <div className={styles.container}>
      <TopSection text={text} />
      <Tint />
    </div>
  );
};

export default tinting;
