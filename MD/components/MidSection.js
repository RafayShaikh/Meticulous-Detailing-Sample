import { Suspense, useState } from 'react';
import styles from '../styles/Mid.module.css';
import Selection from './Selection/Selection';
import dynamic from 'next/dynamic';
import CallAction from './CallAction';
const Ceramic = dynamic(() => import('./Ceramic/Ceramic'), {
  loading: () => (
    <img style={{ width: '50%' }} src='logoOrignal.jpg' alt='logo' />
  ),
});

const Tint = dynamic(() => import('./Tint/Tint'), {
  loading: () => (
    <img style={{ width: '50%' }} src='logoOrignal.jpg' alt='logo' />
  ),
});

const Detail = dynamic(() => import('./Detail/Detail'), {
  loading: () => (
    <img style={{ width: '50%' }} src='logoOrignal.jpg' alt='logo' />
  ),
});

const PPF = dynamic(() => import('./PPF/PPF'), {
  loading: () => (
    <img style={{ width: '50%' }} src='logoOrignal.jpg' alt='logo' />
  ),
});
const PaintCorrection = dynamic(
  () => import('./PaintCorrection/PaintCorrection'),
  {
    loading: () => (
      <img style={{ width: '50%' }} src='logoOrignal.jpg' alt='logo' />
    ),
  }
);
function MidSection() {
  const [page, setPage] = useState(0);
  return (
    <div className={styles.container}>
      {page === 0 && <Selection setPage={setPage} />}
      {page === 1 && <Detail setPage={setPage} />}
      {page === 2 && <Ceramic setPage={setPage} />}
      {page === 3 && <Tint setPage={setPage} />}
      {page === 4 && <PPF setPage={setPage} />}
      {page === 5 && <PaintCorrection setPage={setPage} />}

      <CallAction />
    </div>
  );
}

export default MidSection;
