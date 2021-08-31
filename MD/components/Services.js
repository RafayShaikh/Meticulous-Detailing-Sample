import { useState } from 'react';
import styles from '../styles/Services.module.css';

function Services() {
  const [vehicles, setVehicles] = useState([
    {
      category: '2 Doors',
      name: ['Chevy Camaro', 'Dodge Challenger', 'Lamborghini Huracan'],
      picture: '/chevycamaro.jpg',
      alt: 'https://unsplash.com/photos/lpY4jBof9c8?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink',
    },
    {
      category: '4 Doors',
      name: ['Chevy Malibu', 'Tesla Model S', 'Mercedes S550'],
      picture: '/mercedes.jpg',
      alt: 'https://unsplash.com/photos/y3neNkE6efI?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink',
    },
    {
      category: 'Bikes',
      name: ['Harley Davidson', 'Ducati', 'Kawasaki'],
      picture: '/ducati.jpg',
      alt: 'https://unsplash.com/photos/f_gCjlNcVWo?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink',
    },
    {
      category: 'RVs/Oversized',
      name: ['Coachmen RV', 'Heavy Duty Trucks'],
      picture: '/rv.jpg',
      alt: 'rv',
    },
    {
      category: 'Boats/Jetski',
      name: ['Chaparral', 'Bertram'],
      picture: '/boat.jpg',
      alt: 'boat',
    },
    {
      category: 'SUVs/Trucks',
      name: ['Ford Expedition', 'Lincoln Navigator', 'Tesla Model X'],
      picture: '/suv.jpg',
      alt: 'https://unsplash.com/photos/Xo76-F5v-6g?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink',
    },
  ]);
  return (
    <div className={styles.services}>
      <div className={styles.servicesTop}>
        <h1>Services Available For</h1>
      </div>
      <div className={styles.servicesList}>
        {vehicles.map((vehicle) => (
          <div className={styles.service}>
            <h1>{vehicle.category}</h1>
            <div className={styles.carNames}>
              <img src={vehicle.picture} alt={vehicle.alt} />
              <div className={styles.itemName}>
                {vehicle.name.map((item) => (
                  <p>{item}</p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.callToAction}>
        <h1>Call Us For Booking or More Information</h1>
        <button
          onClick={() => navigator.clipboard.writeText('361-816-9248')}
          className={styles.button}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-1 w-1'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'
            />
          </svg>
          361-816-9248
        </button>
      </div>
    </div>
  );
}

export default Services;
