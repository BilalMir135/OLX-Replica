import React from 'react';
import NavBar from '../components/NavBar/';
import CategoryNav from '../components/CategoryNav';
import Footer from '../components/Footer';

const MainLayout = ({ children }) => {
  return (
    <div>
      <NavBar />
      <CategoryNav />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
