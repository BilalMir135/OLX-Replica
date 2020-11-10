import React from 'react';
import styles from './Card.module.css';
import { BiHeart } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import clsx from 'clsx';

const Card = ({ data: { id, featured, furtherInfo, coverImg, productPrice, productName, area, city, date } }) => {
  return (
    <Link to={`/product/${id}`}>
      <div className={styles.card}>
        <div className={styles.imgWrapper}>
          <img src={coverImg} alt='temp' />
          <BiHeart />
          {featured && <div className={styles.featured}>FEATURED</div>}
        </div>
        <div className={clsx(styles.description, featured && styles.featuredDes)}>
          <span className={styles.price}>Rs {new Intl.NumberFormat().format(productPrice)}</span>
          {furtherInfo && <span className={styles.furtherInfo}>{furtherInfo}</span>}
          <span className={styles.info}>
            {productName.length > 25 ? `${productName.substring(0, 25)}...` : productName}
          </span>
          <p>
            <span>
              {area},{city}
            </span>
            <span>{date}</span>
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
