import React from 'react';
import Header from '../components/Header/Header';
import Featured from '../components/Featured/Featured';
import Cuisines from '../components/Cuisine/Cuisines';
import OurWhy from '../components/OurWhy/OurWhy';
import AsSeen from '../components/AsSeen/AsSeen';

const Homepage = () => {
  return (
    <section>
      <Header />
      <Featured />
      <Cuisines />
      <OurWhy />
      <AsSeen />
    </section>
  );
};

export default Homepage;
