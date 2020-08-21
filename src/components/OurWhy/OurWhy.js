import React from 'react';
import './OurWhy.css';
import aboutPicture from '../../assets/aboutPicture.png';

const OurWhy = () => {

  return (
    <section id="about" className="aboutSection">
      <div className="clearfix"></div>
      <h2 className="aboutText">Our Why ...</h2>
      <h3 className="aboutBeginning">{`'Our three favorite words around here are...`}</h3>
      <img className="whyImage" src={aboutPicture} alt="Our Why Image" />
      <p className="aboutExplanation">{`Food is more than just something we eat. Food tells us a story. It brings us together. It stops our busy lives. It gives us something to chat about. Ultimately, it gives us a place to be and relationships to connect with.`}</p>
    </section>
  );
};

export default OurWhy;
