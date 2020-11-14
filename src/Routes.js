import React, { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('./pages/Home/'));
const Product = lazy(() => import('./pages/Product'));

const _Routes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/product/:id' element={<Product />} />
    </Routes>
  );
};

export default _Routes;
