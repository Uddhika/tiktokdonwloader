import React from 'react';
import NavBar from './navbar/NavBar';
import LandingPage from './landing/LandingPage';
import Features from './features/Features';
import Footer from './footer/Footer';

const MainPage = () => {
  return (
    <>
      <div style={{ padding: 5 }}>
        <NavBar />
        <LandingPage />
        <Features />
      </div>
      <Footer />
    </>
  );
};

export default MainPage;
