import React from 'react';
import NavBar from '../components/NavBar/';
import CategoryNav from '../components/CategoryNav';
import Footer from '../components/Footer';
import ScrollTop from '../components/ScrollTop';

const MainLayout = ({ children, body }) => {
  return (
    <div>
      <NavBar />
      <ScrollTop />
      {window.innerWidth > 770 && <CategoryNav />}
      <div className={`${body && 'body'}`}>{children}</div>
      <Footer />
    </div>
  );
};

export default MainLayout;
