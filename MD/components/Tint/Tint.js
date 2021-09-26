import { useState } from 'react';
import styles from '../../styles/subModule.module.css';
import Services from './TintingServices';

function Tinting({ setPage }) {
  const [packages, setPackages] = useState([
    {
      name: 'Color Stable',
      info: [
        'Safety And Color Stability Like Never Before',
        'Protect yourself from 99% harmful cancer causing UV rays & achieve the privacy you desire with PRIME CS ™, the most color stable window tint film around.',
        'The Skin Cancer Foundation recommends PRIME CS ™ Window Tint as an effective UV protectant.',
        'Reduces Glare',
        'Keeps You Comfortable',
        'UV Ray Protection',
        'Crystal Clear Signal',
        'Looks Good',
      ],
    },
    {
      name: 'XR Ceramic',
      info: [
        'Extreme Performance, Exceptional Quality',
        'Utilizing a nano-ceramic construction, PRIME XR ™ maintains the same flawless appearance and clarity throughout the years. Blocking up to 88% infrared heat rejection, PRIME XR will provide you with the level of performance you expect from a top-of-the line film without breaking the bank.',
        'The Skin Cancer Foundation recommends PRIME XR ™ Window Tint as an effective UV protectant.',
        'Ceramic Particle Technology',
        'Superior Heat Rejection',
        'UV Ray Protection',
        'Greater Clarity',
        'Crystal Clear Signal',
      ],
    },
    {
      name: 'XR PLUS CERAMIC',
      info: [
        'The Pinnacle Of High Performance Tint. Period.',
        'Offering 98% infrared heat rejection thanks to multi-layer nanoparticle technology, PRIME XR PLUS ™ combines a cool look with extreme performance. Let PRIME XR PLUS keep you comfortable and protected no matter the weather.',
        'The Skin Cancer Foundation recommends PRIME XR PLUS ™ Window Tint as an effective UV protectant.',
        'Ceramic Particle Technology',
        'Superior Heat Rejection',
        'UV Ray Protection',
        'Greater Clarity',
        'Crystal Clear Signal',
      ],
    },
  ]);

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <h1>Tinting Packages</h1>
      </div>
      <div className={styles.info}>
        <img
          src='/XpelLogos/XPEL.png'
          className={styles.logo}
          alt='Xpel Logo'
        />
        <h1 className={styles.logoDescription}>
          We Are Corpus Christi's Authorized Dealer.
        </h1>
        <div className={styles.infoContainer}>
          {packages.map((item) => (
            <div className={styles.infoItem}>
              <h1>{item.name}</h1>
              <div className={styles.infoList}>
                {item.info.map((detail) => (
                  <div className={styles.item}>
                    <p>{detail}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
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

export default Tinting;
