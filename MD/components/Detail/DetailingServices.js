import { useState } from 'react';
import styles from '../../styles/Services.module.css';

function DetailingServices() {
  const [vehicles, setVehicles] = useState([
    {
      category: 'Coupe/Sedan',
      pricing: [
        { name: 'basic', price: '100' },
        { name: 'premium', price: '150' },
        { name: 'ultimate', price: '250' },
        { name: 'meticulous', price: '350' },
      ],
      name: ['Chevy Camaro', 'Dodge Challenger', 'Lamborghini Huracan'],
      picture: '/chevycamaro.jpg',
      alt: 'https://unsplash.com/photos/lpY4jBof9c8?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink',
    },
    {
      category: 'Truck/CSUV',
      pricing: [
        { name: 'basic', price: '120' },
        { name: 'premium', price: '200' },
        { name: 'ultimate', price: '300' },
        { name: 'meticulous', price: '400' },
      ],
      name: ['Chevy Malibu', 'Tesla Model S', 'Mercedes S550'],
      picture: '/mercedes.jpg',
      alt: 'https://unsplash.com/photos/y3neNkE6efI?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink',
    },
    {
      category: 'SUV/VAN',
      pricing: [
        { name: 'basic', price: '140' },
        { name: 'premium', price: '250' },
        { name: 'ultimate', price: '350' },
        { name: 'meticulous', price: '450' },
      ],
      name: ['Chevy Malibu', 'Tesla Model S', 'Mercedes S550'],
      picture: '/mercedes.jpg',
      alt: 'https://unsplash.com/photos/y3neNkE6efI?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink',
    },
    {
      category: 'Motorcycle',
      pricing: [
        { name: 'basic', price: '65' },
        { name: 'premium', price: '150' },
        { name: 'ultimate', price: '225' },
        { name: 'meticulous', price: '350' },
      ],
      name: ['Harley Davidson', 'Ducati', 'Kawasaki'],
      picture: '/ducati.jpg',
      alt: 'https://unsplash.com/photos/f_gCjlNcVWo?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink',
    },
    {
      category: 'RVs/Oversized',
      pricing: [
        { name: 'basic', price: '10/FT' },
        { name: 'premium', price: '20/FT' },
        { name: 'ultimate', price: '225/FT' },
        { name: 'meticulous', price: '350/FT' },
      ],
      name: ['Coachmen RV', 'Heavy Duty Trucks'],
      picture: '/rv.jpg',
      alt: 'rv',
    },
    {
      category: 'Boats/Jetski',
      pricing: [
        { name: 'basic', price: '10/FT' },
        { name: 'premium', price: '20/FT' },
        { name: 'ultimate', price: '225/FT' },
        { name: 'meticulous', price: '350/FT' },
      ],
      name: ['Chaparral', 'Bertram'],
      picture: '/boat.jpg',
      alt: 'boat',
    },
  ]);
  return (
    <div className={styles.services}>
      <div className={styles.servicesTop}>
        <h1>Detailing Services Available For</h1>
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
            <div className={styles.packages}>
              {vehicle.pricing.map((p) => (
                <div className={styles.package}>
                  <h1>{p.name}</h1>
                  <p>
                    <span>$</span>
                    {p.price}*
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DetailingServices;
