import { useState } from 'react';
import styles from '../../styles/subModule.module.css';
import Services from './DetailingServices';

function Detail({ setPage }) {
  const [packages, setPackages] = useState([
    {
      name: 'Basic',
      info: [
        'Wash',
        'Dry',
        'Door Jams Cleaned',
        'Wheels Cleaned',
        'Tires Dressed',
        'Vaccum',
        'Windows',
        'Interior Trim Dusted',
      ],
    },
    {
      name: 'Premium',
      info: [
        'Wash',
        'Dry',
        'Door Jams Cleaned',
        'Wheels Cleaned',
        'Tires Dressed',
        'Spray Wax',
        'Vaccum',
        'Windows',
        'Interior Cleaned',
        'Interior Dressed',
      ],
    },
    {
      name: 'Ultimate',
      info: [
        'Wash',
        'Dry',
        'Door Jams Cleaned',
        'Wheels Cleaned',
        'Tires Dressed',
        'Hand Wax',
        'Vaccum',
        'Windows',
        'Interior Cleaned',
        'Interior Dressed',
        'Seats Cleaned',
        'Carpet Shampooing',
      ],
    },
    {
      name: 'Meticulous',
      info: [
        'Wash',
        'Dry',
        'Door Jams Cleaned',
        'Wheels Cleaned',
        'Tires Dressed',
        'Clay Bar',
        'One Step Polish',
        'Vaccum',
        'Windows',
        'Interior Cleaned',
        'Interior Dressed',
        'Seats Cleaned',
        'Carpet Shampooing',
      ],
    },
    {
      name: 'Customized',
      pricing: 'Contact',
      info: ['Mix and Match Services', 'Addtional Services'],
    },
  ]);

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <h1>Detailing Packages</h1>
      </div>
      <div className={styles.info}>
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
        *PRICES OF PACKAGE ARE ALWAYS SUBJECT TO CHANGE FROM LISTING. VEHICLES
        WILL BE EVALUATED BASED OFF CONDITION AND SIZE BEFORE ANY WORK IS DONE
        OR STARTED. PRICE WILL BE APPROVED BY CLIENT FIRST.
      </p>
    </div>
  );
}

export default Detail;
