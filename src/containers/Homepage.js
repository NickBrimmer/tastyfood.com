import React from 'react';
import Header from '../components/Header/Header';
import Featured from '../components/Featured/Featured';
import Cuisines from '../components/Cuisine/Cuisines';

const Homepage = () => {
  return (
    <section>
      <Header />
      <Featured />
      <Cuisines />
    </section>
  );
};

export default Homepage;
