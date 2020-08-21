import React from 'react';
import './AsSeen.css';
import asSeen1 from '../../assets/asSeen1.png';
import asSeen2 from '../../assets/asSeen2.png';
import asSeen3 from '../../assets/asSeen3.png';

const AsSeen = () => {

  return (
    <section className="asSeenSection">
        <img className="asSeenImage" src={asSeen1} />
        <img className="asSeenImage" src={asSeen2} />
        <img className="asSeenImage" src={asSeen3} />
    </section>
  )
};

export default AsSeen;