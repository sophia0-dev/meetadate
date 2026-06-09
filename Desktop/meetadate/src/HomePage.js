import React from 'react';
import './App.css';
import HeroSection from './HeroSection';
import HowItWorks from './HowItWorks';
import FeaturedBlocks from './FeaturedBlocks';

const HomePage = () => {
  return (
    <div className="home-container">
      
      {/* 1. HERO SECTION */}
      <HeroSection />

      {/* 2. HOW IT WORKS SECTION */}
      <HowItWorks />

      {/* 3. FEATURED BLOCKS */}
     <FeaturedBlocks />
    </div>
  );
};

export default HomePage;