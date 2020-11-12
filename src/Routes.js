import React, { lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('./pages/Home/'));
const Product = lazy(() => import('./pages/Product'));

const _Routes = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product/:id' element={<Product />} />
      </Routes>
    </Router>
  );
};

export default _Routes;
