import { useState } from 'react';
import styles from '../../styles/subModule.module.css';

function Tint({ setPage }) {
  const [packages, setPackages] = useState([
    {
      name: 'Basic',
      pricing: 65,
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
      pricing: 110,
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
      pricing: 175,
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
      pricing: 275,
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
        <h1>Tinting Packages</h1>
        <svg
          onClick={() => setPage(0)}
          xmlns='http://www.w3.org/2000/svg'
          class='h-6 w-6'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            stroke-linecap='round'
            stroke-linejoin='round'
            stroke-width='2'
            d='M6 18L18 6M6 6l12 12'
          />
        </svg>
      </div>
      <div className={styles.info}>
        <div className={styles.infoContainer}>
          {packages.map((item) => (
            <div className={styles.infoItem}>
              <h1>{item.name}</h1>
              <p>
                <span>$ </span>
                {item.pricing}
              </p>
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
    </div>
  );
}

export default Tint;
