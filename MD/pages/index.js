import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import dynamic from 'next/dynamic';

const TopSection = dynamic(() => import('../components/TopSection'), {
  loading: () => <p>...</p>,
});

const MidSection = dynamic(() => import('../components/MidSection'), {
  loading: () => <p>...</p>,
});

const BottomSection = dynamic(() => import('../components/BottomSection'), {
  loading: () => <p>...</p>,
});

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Meticulous Detailing</title>
        <meta
          name='keywords'
          content='Tint, Tinting, Ceramic Coating, Detaiing, Detail, Paint Protective Film, Meticulous, Corpus Christi, Texas Tint, Paint Correction, Car Wash, Car Vaccum, Clay bar, Car Shine'
        />
        <meta
          name='description'
          content='Meticulous Detailing is the best deatiling shop in Corpus Christi, Texas. Our expertise include full car detailing, paint protective films, tinting, paint correction, car cleaning, and more'
        />
      </Head>
      <TopSection />
      <MidSection />
      <BottomSection />
    </div>
  );
}
