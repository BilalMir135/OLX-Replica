import React from 'react';
import ChervonDown from '../../assets/chervonDown.svg';
import styles from './Chervon.module.css';

const Chervon = ({ toggle }) => {
  return <img src={ChervonDown} alt='chervon' className={toggle ? styles.rotateUp : styles.rotateDown}></img>;
};

export default Chervon;
