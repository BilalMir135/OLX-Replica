import React from 'react';
import NavBar from '../components/NavBar/';
import CategoryNav from '../components/CategoryNav';
import Footer from '../components/Footer';
import ScrollTop from '../components/ScrollTop';

const MainLayout = ({ children }) => {
  return (
    <div>
      <NavBar />
      <ScrollTop />
      {window.innerWidth > 770 && <CategoryNav />}
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
