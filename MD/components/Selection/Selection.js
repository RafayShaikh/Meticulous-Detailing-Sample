import { useState } from 'react';
import styles from '../../styles/Selection.module.css';

function Selection({ setPage }) {
  const [selectionList, setSelectionList] = useState([
    { id: 1, name: 'Detailing', picture: '/detailing.jpg' },
    { id: 2, name: 'Ceramic Coating', picture: '/ceramic.jpg' },
    { id: 3, name: 'Tinting', picture: '/tinting.jpg' },
    { id: 4, name: 'PPF', picture: '/ppf.jpg' },
    { id: 5, name: 'More', picture: '/Muscle.jpg' },
  ]);
  return (
    <div className={styles.selectionContainer}>
      <div className={styles.selectionTop}>
        <p>
          We Offer Variety of Sevices, so your ride can standout in the crowd.
        </p>
        <h1>Explore A Catergory</h1>
      </div>
      <div className={styles.arrows}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-6 w-6'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M11 19l-7-7 7-7m8 14l-7-7 7-7'
          />
        </svg>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-6 w-6'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M13 5l7 7-7 7M5 5l7 7-7 7'
          />
        </svg>
      </div>
      <div className={styles.selectionList}>
        {selectionList.map((item) => (
          <div
            key={item.id}
            onClick={() => setPage(item.id)}
            className={styles.selectionItem}
          >
            <img className={styles.thumbnail} src={item.picture} alt='item' />
            <h1>{item.name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Selection;
