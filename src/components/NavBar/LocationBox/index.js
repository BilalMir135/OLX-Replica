import React, { useState } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import MyLocationIcon from '@material-ui/icons/MyLocation';
import Chervon from '../../Chervon';
import styles from './LocationBox.module.css';
import OutsideClick from '../OutsideClick';
import clsx from 'clsx';
import LocationIcon from '../../../assets/location.svg';

const popularLocations = ['Friends Royal City', 'North Karachi', 'Rufi Lake Drive Apartments', 'Karachi Motarway'];

const LocationBox = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [selection, setSelection] = useState('Pakistan');

  const handleClick = () => {
    setShowMenu(true);
  };

  const handleOutsideClick = () => {
    setShowMenu(false);
  };

  const handleSelection = (value) => {
    setSelection(value);
    setShowMenu(false);
  };

  return (
    <OutsideClick activate={showMenu} callback={handleOutsideClick}>
      <div className={styles.root}>
        <div className={clsx(styles.location, showMenu && styles.active)} onClick={handleClick}>
          <SearchIcon fontSize='large' />
          <input type='text' placeholder='Search city,area or location' value={selection} readOnly />
          <Chervon toggle={showMenu} />
        </div>
        {showMenu && (
          <div className={styles.menu}>
            <div className={styles.menuSection}>
              <li onClick={() => handleSelection('Item1')} className={styles.geoLocation}>
                <MyLocationIcon />
                <p>
                  <span>
                    <b>Use current location</b>
                  </span>
                  <br />
                  Location blocked. Check borwser/phone settings.
                </p>
              </li>
            </div>
            <div className={styles.menuSection}>
              <span className={styles.menuSectionTitle}>RECENT LOCATIONS</span>
              <li onClick={() => handleSelection('Karachi')}>
                <img src={LocationIcon} alt='loc' width='25px' height='25px' />
                <p>Karachi</p>
              </li>
            </div>
            <div className={styles.menuSection}>
              <span className={styles.menuSectionTitle}>POPULAR LOCATIONS</span>
              {popularLocations.map((loc, index) => (
                <li key={index} onClick={() => handleSelection(loc)}>
                  <img src={LocationIcon} alt='loc' width='25px' height='25px' />
                  <p>{loc}</p>
                </li>
              ))}
            </div>
          </div>
        )}
      </div>
    </OutsideClick>
  );
};

export default LocationBox;
