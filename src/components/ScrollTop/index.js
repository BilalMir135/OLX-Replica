import React, { useRef } from 'react';
import ChervonDown from '../../assets/chervonDown.svg';
import styles from './ScrollTop.module.css';

const ScrollTop = () => {
  const ref = useRef(null);

  window.onscroll = () => {
    if (ref.current) {
      if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        ref.current.style.display = 'flex';
      } else {
        ref.current.style.display = 'none';
      }
    }
  };

  const handleScroll = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0;
  };

  return (
    <div className={styles.scrollTop} ref={ref} onClick={handleScroll}>
      <img src={ChervonDown} alt='chervon' />
      <span>Back to top</span>
    </div>
  );
};

export default ScrollTop;
