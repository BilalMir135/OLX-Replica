import React from 'react';
import MainLayout from '../../layouts/MainLayout';
import styles from './Home.module.css';

const Home = () => {
  return (
    <MainLayout>
      <div className={styles.header}></div>
    </MainLayout>
  );
};

export default Home;
