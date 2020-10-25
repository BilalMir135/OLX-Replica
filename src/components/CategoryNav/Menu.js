import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '../../constants';
import styles from './CategoryNav.module.css';

const Menu = () => {
  return (
    <div className={styles.menu}>
      {categories.map((category, index) => (
        <div key={index} className={styles.subMenu}>
          {category.map((cat, index) => (
            <div key={index}>
              <Link to={`/${cat.title}`}>
                <b>{cat.title}</b>
              </Link>
              {cat.links.map((link, index) => (
                <Link key={index} to={`/${link}`}>
                  {link}
                </Link>
              ))}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Menu;
