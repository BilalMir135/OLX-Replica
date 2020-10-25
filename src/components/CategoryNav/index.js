import React from 'react';
import AllCategories from './AllCategories';
import { Link } from 'react-router-dom';
import styles from './CategoryNav.module.css';

const links = ['Mobile Phones', 'Cars', 'Motorcycles', 'Houses', 'TV-Video-Audio', 'Tablets', 'Land & Plots'];

const CategoryNav = () => {
  return (
    <div className={styles.categoryNav}>
      <AllCategories />
      {links.map((link, index) => (
        <Link key={index} to={`/${link}`}>
          {link}
        </Link>
      ))}
    </div>
  );
};

export default CategoryNav;
