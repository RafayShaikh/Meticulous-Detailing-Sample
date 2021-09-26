import styles from '../../styles/Header.module.css';
import Link from 'next/link';

const HeaderDesktop = () => {
  return (
    <>
      <Link href='/'>
        <a>Home</a>
      </Link>
      <Link href='/detailing'>
        <a>Detailing</a>
      </Link>
      <Link href='/tinting'>
        <a>Tinting</a>
      </Link>
      <Link href='/'>
        <img
          className={styles.image}
          src='/logoOrignal.jpg'
          alt='Meticulous Detailing'
        />
      </Link>
      <Link href='/ppf'>
        <a>Paint Protection Films</a>
      </Link>
      <Link href='/ceramiccoating'>
        <a>Ceramic Coating</a>
      </Link>
      <Link href='/paintcorrection'>
        <a>Paint Correction</a>
      </Link>
    </>
  );
};

export default HeaderDesktop;
