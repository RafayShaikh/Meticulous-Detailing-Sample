import { useState } from 'react';
import styles from '../../styles/Selection.module.css';
import { useRouter } from 'next/router';

function Selection() {
  const router = useRouter();
  const [selectionList, setSelectionList] = useState([
    { id: 1, name: 'Detailing', picture: '/detailing.jpg', url: '/detailing' },
    { id: 3, name: 'Tinting', picture: '/tinting.jpg', url: '/tinting' },
    {
      id: 4,
      name: 'Paint Protection Film',
      picture: '/ppf.jpg',
      url: '/ppf',
    },
    {
      id: 2,
      name: 'Ceramic Coating',
      picture: '/ceramic.jpg',
      url: '/ceramiccoating',
    },
    {
      id: 5,
      name: 'Paint Correction',
      picture: '/Muscle.jpg',
      url: '/paintcorrection',
    },
  ]);
  return (
    <div className={styles.selectionContainer}>
      <div className={styles.selectionTop}>
        <p>
          We offer variety of sevices, so your ride can standout in the crowd.
        </p>
        <h1>Explore A Catergory</h1>
      </div>
      <div className={styles.selectionList}>
        {selectionList.map((item) => (
          <div
            key={item.id}
            onClick={() => router.push(item.url)}
            className={styles.selectionItem}
          >
            <img className={styles.thumbnail} src={item.picture} alt='item' />
            <h1>{item.name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Selection;
