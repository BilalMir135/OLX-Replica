import * as productTypes from '../types/product';
import DummyData from '../../dummyData.json';

export const getAllProducts = () => {
  return (dispatch) => {
    dispatch({ type: productTypes.GET_ALL_PRODUCTS, payload: DummyData });
  };
};

export const getProduct = (id) => {
  return (dispatch) => {
    dispatch({ type: productTypes.LOADING, payload: true });
    dispatch({ type: productTypes.CLEAR_PRODUCT });
    const data = DummyData.filter((item) => item.id === id);
    dispatch({ type: productTypes.GET_PRODUCT, payload: data[0] });
    dispatch({ type: productTypes.LOADING, payload: false });
  };
};
