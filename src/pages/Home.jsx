import React from 'react';

import Header from '../partials/Header';
import HeroHome from '../partials/HeroHome';
import FeaturesHome from '../partials/Features';
import FeaturesBlocks from '../partials/FeaturesBlocks';

function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-x-clip">
        {/*  Site header */}
        <Header />
        {/*  Page sections */}
        <HeroHome />
        <FeaturesHome />
        <FeaturesBlocks />


      {/*  Site footer */}
    </div>
  );
}

export default Home;