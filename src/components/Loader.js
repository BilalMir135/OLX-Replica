import React, { useRef, useEffect, Fragment } from 'react';
import LoadingBar from 'react-top-loading-bar';
import NavBar from './NavBar';
import CategoryNav from './CategoryNav';
import Footer from './Footer';

const Loader = () => {
  const ref = useRef(null);

  useEffect(() => {
    ref.current.continuousStart();
  }, []);

  return (
    <Fragment>
      <LoadingBar color='#002f34' ref={ref} />
      <NavBar />
      <CategoryNav />
      <div style={{ minHeight: '60vh' }}></div>
      <Footer />
    </Fragment>
  );
};

export default Loader;
