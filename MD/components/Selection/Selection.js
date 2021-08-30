import { useState } from 'react';
import styles from '../../styles/Selection.module.css';

function Selection({ setPage }) {
  const [selectionList, setSelectionList] = useState([
    { id: 1, name: 'Detailing', picture: 'Muscle.jpg' },
    { id: 2, name: 'Ceramic Coating', picture: 'rv.jpg' },
    { id: 3, name: 'Tinting', picture: '/classic.jpg' },
    { id: 4, name: 'PPF', picture: '/classic.jpg' },
    { id: 5, name: 'Other', picture: '/classic.jpg' },
  ]);
  return (
    <div className={styles.selectionContainer}>
      <div className={styles.selectionTop}>
        <p>
          We Offer Variety of Sevices, so your ride can standout in the crowd.
        </p>
        <h1>Explore A Catergory</h1>
      </div>
      <div className={styles.selectionList}>
        {selectionList.map((item) => (
          <div
            key={item.id}
            onClick={() => setPage(item.id)}
            className={styles.selectionItem}
          >
            <img className={styles.thumbnail} src={item.picture} alt='' />
            <h1>{item.name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Selection;
