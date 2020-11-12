import React from 'react';
import MainLayout from '../../layouts/MainLayout';
import BreadCrumbNavigation from '../../components/BreadCrumbNavigation';

const Product = () => {
  return (
    <MainLayout>
      <div className='my-5'>
        <BreadCrumbNavigation nav={[{ link: '/Laptop', text: 'Laptop' }]} />
      </div>
    </MainLayout>
  );
};

export default Product;
