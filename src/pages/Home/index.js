import React from 'react';
import MainLayout from '../../layouts/MainLayout';
import Card from '../../components/Card';
import InfoCard from '../../components/Card/Info';
import styles from './Home.module.css';
import Grid from '@material-ui/core/Grid';
import DummyData from '../../dummyData.json';
import ThemeButton from '../../components/ThemeButton';

const Home = () => {
  return (
    <MainLayout>
      <div className={styles.header}></div>
      <div className={styles.cardSection}>
        <span className={styles.heading}>Fresh recommendations</span>
        <Grid container spacing={2}>
          {DummyData.map((data, index) => (
            <Grid key={index} item xs={12} sm={6} lg={3}>
              {index !== 5 ? <Card data={data} /> : <InfoCard />}
            </Grid>
          ))}
        </Grid>
        <ThemeButton className='mx-auto my-5' component='button' dark size='sm'>
          Load more
        </ThemeButton>
      </div>
    </MainLayout>
  );
};

export default Home;
