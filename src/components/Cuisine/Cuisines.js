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
    <section id="cuisines" className="cuisineSection">

      <ul className="cuisineShowcase">
        <li>
          <div className="cuisinePhoto">
            <img className="photo" alt="Cuisine Image italian" src={italianFood} />
            <div className="cuisineText"></div>
          </div>
        </li>
        <li>
          <div className="cuisinePhoto">
            <img className="photo" alt="Cuisine Image apple salad" src={appleSalad} />
            <div className="cuisineText"></div>
          </div>
        </li>
        <li>
          <div className="cuisinePhoto">
            <img className="photo" alt="Cuisine Image steak" src={steak} />
            <div className="cuisineText"></div>
          </div>
        </li>
        <li>
          <div className="cuisinePhoto">
            <img className="photo" alt="Cuisine Image pasta" src={pasta} />
            <div className="cuisineText"></div>
          </div>
        </li>
      </ul>
      <ul className="cuisineShowcase">
        <li>
          <div className="cuisinePhoto">
            <img className="photo" alt="Cuisine Image vegetarian" src={vegetarian} />
            <div className="cuisineText"></div>
          </div>
        </li>
        <li>
          <div className="cuisinePhoto">
            <img className="photo" alt="Cuisine Image pear" src={pear} />
            <div className="cuisineText"></div>
          </div>
        </li>
        <li>
          <div className="cuisinePhoto">
            <img className="photo" alt="Cuisine Image breakfast" src={breakfast} />
            <div className="cuisineText"></div>
          </div>
        </li>
        <li>
          <div className="cuisinePhoto">
            <img className="photo" alt="Cuisine Image vegetarian" src={vegetarian1} />
            <div className="cuisineText"></div>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default Cuisines;
