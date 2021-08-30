import { useState } from 'react';
import styles from '../styles/Mid.module.css';
import Selection from './Selection/Selection';
import dynamic from 'next/dynamic';
import Services from './Services';
const Ceramic = dynamic(() => import('./Ceramic/Ceramic'), {
  loading: () => <p>...</p>,
});

const Tint = dynamic(() => import('./Tint/Tint'), {
  loading: () => <p>...</p>,
});

const Detail = dynamic(() => import('./Detail/Detail'), {
  loading: () => <p>...</p>,
});

const PPF = dynamic(() => import('./PPF/PPF'), {
  loading: () => <p>...</p>,
});
function MidSection() {
  const [page, setPage] = useState(0);
  return (
    <div className={styles.container}>
      {page === 0 && <Selection setPage={setPage} />}
      {page === 1 && <Detail setPage={setPage} />}
      {page === 2 && <Ceramic setPage={setPage} />}
      {page === 3 && <Tint setPage={setPage} />}
      {page === 4 && <PPF setPage={setPage} />}

      <Services />
    </div>
  );
}

export default MidSection;
