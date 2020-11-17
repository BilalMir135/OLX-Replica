import React, { useEffect } from 'react';
import MainLayout from '../../layouts/MainLayout';
import BreadCrumbNavigation from '../../components/BreadCrumbNavigation';
import Grid from '@material-ui/core/Grid';
import ImageGallery from 'react-image-gallery';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getProduct } from '../../redux';
import styles from './product.module.css';
import { BiShareAlt } from 'react-icons/bi';
import { FiHeart } from 'react-icons/fi';

const Product = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product.product);
  const loading = useSelector((state) => state.product.loading);
  let images;

  useEffect(() => {
    dispatch(getProduct(id));
  }, [dispatch, id]);

  if (!loading && product && product.images) {
    images = product.images.map((img) => ({ original: img, thumbnail: img }));
  }

  return !product ? (
    <p>Loading</p>
  ) : (
    <MainLayout body>
      <div className='my-5'>
        <BreadCrumbNavigation nav={[{ link: `/${product.category}`, text: product.category }]} />
      </div>
      <Grid container>
        <Grid item sm={8}>
          {images && (
            <ImageGallery
              items={images}
              showFullscreenButton={false}
              showPlayButton={false}
              showIndex={true}
              sizes='80px 80px'
            />
          )}
          <div className={styles.productDetails}>
            <div>
              <h4>Details</h4>
              {product.details &&
                product.details.map((product, index) => (
                  <p key={index} className={styles.detail}>
                    <span>{product.type}</span>
                    <span>{product.value}</span>
                  </p>
                ))}
            </div>
            <hr />
            <div>
              <h4>Description</h4>
              <p>{product.description}</p>
            </div>
          </div>
        </Grid>
        <Grid item sm={4}>
          <div className={styles.productPrice}>
            <div>
              <span className={styles.price}>Rs {new Intl.NumberFormat().format(product.productPrice)}</span>
              <span>
                <BiShareAlt />
                <FiHeart />
              </span>
            </div>
            <div className='my-1'>{product.furtherInfo}</div>
            <p>{product.productName}</p>
            <div className={styles.address}>
              <span>
                {product.city}, {product.Province}
              </span>
              <span>{product.date}</span>
            </div>
          </div>
        </Grid>
      </Grid>
    </MainLayout>
  );
};

export default Product;
