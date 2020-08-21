import React from 'react';
import './Cuisines.css';
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
            <img className="photo" alt="italian meal" src={italianFood} />
            <div className="cuisineText"></div>
          </div>
        </li>
        <li>
          <div className="cuisinePhoto">
            <img className="photo" alt="apple salad" src={appleSalad} />
            <div className="cuisineText"></div>
          </div>
        </li>
        <li>
          <div className="cuisinePhoto">
            <img className="photo" alt="steak dinner" src={steak} />
            <div className="cuisineText"></div>
          </div>
        </li>
        <li>
          <div className="cuisinePhoto">
            <img className="photo" alt="pasta pasta" src={pasta} />
            <div className="cuisineText"></div>
          </div>
        </li>
      </ul>
      <ul className="cuisineShowcase">
        <li>
          <div className="cuisinePhoto">
            <img className="photo" alt="vegetarian dish numero uno" src={vegetarian} />
            <div className="cuisineText"></div>
          </div>
        </li>
        <li>
          <div className="cuisinePhoto">
            <img className="photo" alt="pear pleasure" src={pear} />
            <div className="cuisineText"></div>
          </div>
        </li>
        <li>
          <div className="cuisinePhoto">
            <img className="photo" alt="break with your breakfast" src={breakfast} />
            <div className="cuisineText"></div>
          </div>
        </li>
        <li>
          <div className="cuisinePhoto">
            <img className="photo" alt="vegetarian if you want" src={vegetarian1} />
            <div className="cuisineText"></div>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default Cuisines;
