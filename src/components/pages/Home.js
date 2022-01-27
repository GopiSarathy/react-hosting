import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import HeroSection1 from '../HeroSection1';

function Home() {
  return (
    <>
      
      <HeroSection />
      <HeroSection1 />
      <Cards />
      <Footer />
    </>
  );
}

export default Home;