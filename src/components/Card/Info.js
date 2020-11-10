import React from 'react';
import ThemeButton from '../ThemeButton';
import styles from './Card.module.css';

const Info = () => {
  return (
    <div className={styles.infoCard}>
      <h4>Want to see your stuff here?</h4>
      <p>Make some extra cash by selling things in your community. Go on, it's quick and easy.</p>
      <div>
        <ThemeButton component='button' className='py-2' size='md'>
          Start selling
        </ThemeButton>
      </div>
    </div>
  );
};

export default Info;
