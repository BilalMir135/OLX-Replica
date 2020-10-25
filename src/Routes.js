import React, { lazy } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
const Home = lazy(() => import('./pages/Home/'));

const Routes = () => {
  return (
    <Router>
      <Route path='/' element={<Home />} />
    </Router>
  );
};

export default Routes;
