import { useRouter } from 'next/router';
import styles from '../styles/Bottom.module.css';
import Logos from './Logos';

function BottomSection() {
  const router = useRouter();
  const handleRouter = (link) => {
    router.push(link);
  };
  return (
    <div className={styles.container}>
      <h1>Visit and Follow us</h1>
      <div className={styles.top}>
        <div
          onClick={() =>
            handleRouter(
              'https://www.google.com/maps/place/Meticulous+Detailing/@27.7157943,-97.4458638,18z/data=!4m5!3m4!1s0x8668f54e312c0001:0xab13aaae1c6e6c80!8m2!3d27.7156393!4d-97.4448623'
            )
          }
          className={styles.address}
        >
          <div>
            <svg
              height='2500'
              viewBox='14.32 4.87961494 37.85626587 52.79038506'
              width='2500'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='m37.34 7.82c-1.68-.53-3.48-.82-5.34-.82-5.43 0-10.29 2.45-13.54 6.31l8.35 7.02z'
                fill='#1a73e8'
              />
              <path
                d='m18.46 13.31a17.615 17.615 0 0 0 -4.14 11.36c0 3.32.66 6.02 1.75 8.43l10.74-12.77z'
                fill='#ea4335'
              />
              <path
                d='m32 17.92a6.764 6.764 0 0 1 5.16 11.13l10.52-12.51a17.684 17.684 0 0 0 -10.35-8.71l-10.51 12.51a6.74 6.74 0 0 1 5.18-2.42'
                fill='#4285f4'
              />
              <path
                d='m32 31.44c-3.73 0-6.76-3.03-6.76-6.76a6.7 6.7 0 0 1 1.58-4.34l-10.75 12.77c1.84 4.07 4.89 7.34 8.03 11.46l13.06-15.52a6.752 6.752 0 0 1 -5.16 2.39'
                fill='#fbbc04'
              />
              <path
                d='m36.9 48.8c5.9-9.22 12.77-13.41 12.77-24.13 0-2.94-.72-5.71-1.99-8.15l-23.57 28.05c1 1.31 2.01 2.7 2.99 4.24 3.58 5.54 2.59 8.86 4.9 8.86s1.32-3.33 4.9-8.87'
                fill='#34a853'
              />
            </svg>
          </div>
          <p>2134 Saratoga Blvd - Unit A, Corpus Christi, Texas</p>
        </div>
        <Logos />
      </div>
      <div className={styles.bottom}>
        <p>Copyrights, Meticuous Detailing {new Date().getFullYear()}</p>
      </div>
    </div>
  );
}

export default BottomSection;
