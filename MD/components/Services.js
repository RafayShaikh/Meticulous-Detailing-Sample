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
    </div>
  );
}

export default Services;
