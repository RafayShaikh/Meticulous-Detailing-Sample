import { useState } from 'react';
import styles from '../../styles/Services.module.css';

function DetailingServices() {
  const [vehicles, setVehicles] = useState([
    {
      category: 'Coupe/Sedan',
      pricing: [
        { name: 'Partial Front', price: '25' },
        { name: 'Full Front', price: '150' },
        { name: 'Track Pack', price: '275' },
        { name: 'Complete Wrap', price: '450' },
      ],
      name: ['Chevy Camaro', 'Dodge Challenger', 'Lamborghini Huracan'],
      picture: '/chevycamaro.jpg',
      alt: 'https://unsplash.com/photos/lpY4jBof9c8?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink',
    },
    {
      category: 'Truck/CSUV',
      pricing: [
        { name: 'Partial Front', price: '25' },
        { name: 'Full Front', price: '150' },
        { name: 'Track Pack', price: '275' },
        { name: 'Complete Wrap', price: '450' },
      ],
      name: ['Chevy Malibu', 'Tesla Model S', 'Mercedes S550'],
      picture: '/mercedes.jpg',
      alt: 'https://unsplash.com/photos/y3neNkE6efI?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink',
    },
    {
      category: 'SUV/VAN',
      pricing: [
        { name: 'Partial Front', price: '25' },
        { name: 'Full Front', price: '150' },
        { name: 'Track Pack', price: '275' },
        { name: 'Complete Wrap', price: '450' },
      ],
      name: ['Chevy Malibu', 'Tesla Model S', 'Mercedes S550'],
      picture: '/mercedes.jpg',
      alt: 'https://unsplash.com/photos/y3neNkE6efI?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink',
    },
    {
      category: 'Front Windshield',
      pricing: [
        { name: 'Partial Front', price: '25' },
        { name: 'Full Front', price: '150' },
        { name: 'Track Pack', price: '275' },
        { name: 'Complete Wrap', price: '450' },
      ],
      name: ['Harley Davidson', 'Ducati', 'Kawasaki'],
      picture: '/ducati.jpg',
      alt: 'https://unsplash.com/photos/f_gCjlNcVWo?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink',
    },
    {
      category: 'Rear Windshield',
      pricing: [
        { name: 'Partial Front', price: '25' },
        { name: 'Full Front', price: '150' },
        { name: 'Track Pack', price: '275' },
        { name: 'Complete Wrap', price: '450' },
      ],
      name: ['Coachmen RV', 'Heavy Duty Trucks'],
      picture: '/rv.jpg',
      alt: 'rv',
    },
    {
      category: 'Visor Strip',
      pricing: [
        { name: 'Partial Front', price: '25' },
        { name: 'Full Front', price: '150' },
        { name: 'Track Pack', price: '275' },
        { name: 'Complete Wrap', price: '450' },
      ],
      name: ['Chaparral', 'Bertram'],
      picture: '/boat.jpg',
      alt: 'boat',
    },
    {
      category: 'Sun/Panaromic Roof',
      pricing: [
        { name: 'Partial Front', price: '25' },
        { name: 'Full Front', price: '150' },
        { name: 'Track Pack', price: '275' },
        { name: 'Complete Wrap', price: '450' },
      ],
      name: ['Coachmen RV', 'Heavy Duty Trucks'],
      picture: '/rv.jpg',
      alt: 'rv',
    },
    {
      category: 'Two Side Windows',
      pricing: [
        { name: 'Partial Front', price: '25' },
        { name: 'Full Front', price: '150' },
        { name: 'Track Pack', price: '275' },
        { name: 'Complete Wrap', price: '450' },
      ],
      name: ['Coachmen RV', 'Heavy Duty Trucks'],
      picture: '/rv.jpg',
      alt: 'rv',
    },
    {
      category: 'Tesla Rear Window 1 Piece',
      pricing: [
        { name: 'Partial Front', price: '25' },
        { name: 'Full Front', price: '150' },
        { name: 'Track Pack', price: '275' },
        { name: 'Complete Wrap', price: '450' },
      ],
      name: ['Coachmen RV', 'Heavy Duty Trucks'],
      picture: '/rv.jpg',
      alt: 'rv',
    },
  ]);
  return (
    <div className={styles.services}>
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
