import React, { useEffect } from 'react';
import MainLayout from '../../layouts/MainLayout';
import BreadCrumbNavigation from '../../components/BreadCrumbNavigation';
import Grid from '@material-ui/core/Grid';
import ImageGallery from 'react-image-gallery';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getProduct } from '../../redux';

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

  return (
    <MainLayout>
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
        </Grid>
        <Grid item sm={4}></Grid>
      </Grid>
    </MainLayout>
  );
};

export default Product;
