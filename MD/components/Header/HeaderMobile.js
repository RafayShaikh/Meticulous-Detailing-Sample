import { useState } from 'react';
import styles from '../../styles/Header.module.css';
import Link from 'next/link';

const HeaderMobile = () => {
  const [isOpen, setisOpen] = useState(false);
  return (
    <div className={styles.mobileHeaderContainer}>
      {isOpen ? (
        <div className={styles.mobileHeaderList}>
          <div className={styles.mobileHeader}>
            <Link href='/'>
              <img
                className={styles.image}
                src='/logoOrignal.jpg'
                alt='Meticulous Detailing'
              />
            </Link>
            <svg
              onClick={(e) => setisOpen(false)}
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
                d='M6 18L18 6M6 6l12 12'
              />
            </svg>
          </div>
          <Link href='/'>
            <a>Home</a>
          </Link>
          <Link href='/detailing'>
            <a>Detailing</a>
          </Link>
          <Link href='/tinting'>
            <a>Tinting</a>
          </Link>

          <Link href='/ppf'>
            <a>Paint Protection Films</a>
          </Link>
          <Link href='/ceramiccoating'>
            <a>Ceramic Coating</a>
          </Link>
          <Link href='/paintcorrection'>
            <a>Paint Correction</a>
          </Link>
        </div>
      ) : (
        <div className={styles.mobileHeader}>
          <Link href='/'>
            <img
              className={styles.image}
              src='/logoOrignal.jpg'
              alt='Meticulous Detailing'
            />
          </Link>
          <svg
            onClick={(e) => setisOpen(true)}
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
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>
        </div>
      )}
    </div>
  );
};

export default HeaderMobile;
