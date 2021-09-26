import TopSection from '../components/TopSection';
import dynamic from 'next/dynamic';
import styles from '../styles/Home.module.css';

const Ceramic = dynamic(() => import('../components/Ceramic/Ceramic'), {
  loading: () => (
    <img style={{ width: '50%' }} src='logoOrignal.jpg' alt='logo' />
  ),
});

const ceramiccoating = () => {
  const text = 'Ceramic Coating';
  return (
    <div className={styles.container}>
      <TopSection text={text} />
      <Ceramic />
    </div>
  );
};

export default ceramiccoating;
