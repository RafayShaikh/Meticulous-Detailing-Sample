import { useState } from 'react';
import styles from '../../styles/subModule.module.css';
import Services from './PPFServices';

function PPF({ setPage }) {
  {
    /* const [packages, setPackages] = useState([
    {
      name: 'Partial Front',
      info: ['Partial Hood', 'Partial Fender', 'Full Front Bumper', 'Mirrors'],
    },
    {
      name: 'Full Front',
      info: ['Full Hood', 'Full Fender', 'Full Front Bumper', 'Mirrors'],
    },
    {
      name: 'Track Pack',
      info: [
        'Full Hood',
        'Full Fender',
        'Full Front Bumper',
        'Mirrors',
        'A-Pillars',
        'Partial Roof',
        'Rocker Panels',
      ],
    },
    {
      name: 'Complete Wrap',
      info: [
        'Total Coverage',
        'All Painted Surfaces',
        'Hood',
        'Bumper',
        'Fenders',
        'Pillars',
        'Spoilers',
        'Rocker Panel',
      ],
    },
  ]);
*/
  }
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <h1>Paint Protection Film Packages</h1>
      </div>
      <div className={styles.info}>
        <img
          src='/XpelLogos/XPEL.png'
          className={styles.logo}
          alt='Xpel Logo'
        />
        <div className={styles.ppfLogos}>
          <img
            src='/XpelLogos/UPL.jpg'
            className={styles.logo}
            alt='Xpel UPL PPF'
          />
          <img
            src='/XpelLogos/PPF.png'
            className={styles.logo}
            alt='Xpel Stealth PPF'
          />
        </div>
        <h1 className={styles.logoDescription}>
          We Are Corpus Christi's Authorized Dealer.
        </h1>
        <div className={styles.infoContainer}>
          <img
            src='/ppfBanner.jpg'
            alt='Banner'
            className={styles.bannerImage}
          />
        </div>
      </div>
      <Services />
      <p className={styles.note}>
        CLASSICSS AND EXOTICS CUSTOM QUOTES MUST BE SEEN IN PERSON TO GIVE
        ACCURATE QUOTE
      </p>
      <p className={styles.note}>
        *PRICES OF PACKAGE ARE ALWAYS SUBJECT TO CHANGE FROM LISTING. VEHICLES
        WILL BE EVALUATED BASED OFF CONDITION AND SIZE BEFORE ANY WORK IS DONE
        OR STARTED. PRICE WILL BE APPROVED BY CLIENT FIRST.
      </p>
      <p className={styles.note}>
        *XPEL TINT IS *LIFETIME WARRANTY* AND TRANSFERRABLE.
      </p>
      <p className={styles.note}>
        *LIFETIME WARRANTY DOES END WHEN THE LIFE OF THE GLASS MEETS ITS END.
      </p>
    </div>
  );
}

export default PPF;
