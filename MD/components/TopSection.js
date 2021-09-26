import styles from '../styles/Top.module.css';
import Header from './Header/Header';

function TopSection() {
  return (
    <div className={styles.container}>
      <Header />
      <img className={styles.video} src='/ppf.jpg' alt='Meticulous Detailing' />
      {/*<video
        className={styles.video}
        autoPlay
        loop
        muted
        src='/TitleVideo.mp4'
      ></video>*/}

      <div className={styles.title}>
        <h1>Lorem ipsum, dolor sit amet.</h1>
        <p>
          Totam pariatur amet esse deleniti odit natus aperiam minus.
          Perferendis veritatis, rem magnam dolorum sunt id expedita officia
          voluptatibus architecto minima. Labore provident inventore error
          dolorem ducimus excepturi similique
        </p>
      </div>
    </div>
  );
}

export default TopSection;
