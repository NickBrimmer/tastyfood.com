import React from 'react';
import styles from './Cuisines.css';
import italianFood from '../../assets/italian.jpg'
import pasta from '../../assets/pasta.jpg'
import appleSalad from '../../assets/something.jpg'
import vegetarian from '../../assets/vegetarian.jpg'
import vegetarian1 from '../../assets/vegetarian1.jpg'
import breakfast from '../../assets/breakfast.jpg'
import steak from '../../assets/steak.jpg'
import pear from '../../assets/stuff.jpg'

const Cuisines = () => {

  return (
    <section id="cuisines" className={styles.cuisineSection}>

      <ul className={styles.cuisineShowcase}>
        <li>
          <div className={styles.cuisinePhoto}>
            <img src={italianFood} />
            <div className={styles.cuisineText}></div>
          </div>
        </li>
        <li>
          <div className={styles.cuisinePhoto}>
            <img src={appleSalad} />
            <div className={styles.cuisineText}></div>
          </div>
        </li>
        <li>
          <div className={styles.cuisinePhoto}>
            <img src={steak} />
            <div className={styles.cuisineText}></div>
          </div>
        </li>
        <li>
          <div className={styles.cuisinePhoto}>
            <img src={pasta} />
            <div className={styles.cuisineText}></div>
          </div>
        </li>
      </ul>
      <ul className={styles.cuisineShowcase}>
        <li>
          <div className={styles.cuisinePhoto}>
            <img src={vegetarian} />
            <div className={styles.cuisineText}></div>
          </div>
        </li>
        <li>
          <div className={styles.cuisinePhoto}>
            <img src={pear} />
            <div className={styles.cuisineText}></div>
          </div>
        </li>
        <li>
          <div className={styles.cuisinePhoto}>
            <img src={breakfast} />
            <div className={styles.cuisineText}></div>
          </div>
        </li>
        <li>
          <div className={styles.cuisinePhoto}>
            <img src={vegetarian1} />
            <div className={styles.cuisineText}></div>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default Cuisines;
