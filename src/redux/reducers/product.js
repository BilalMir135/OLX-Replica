import * as productTypes from '../types/product';

const initialState = {
  product: {},
  allProducts: [],
  loading: false,
};

const productReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case productTypes.GET_ALL_PRODUCTS:
      return { ...state, allProducts: payload };
    case productTypes.GET_PRODUCT:
      return { ...state, product: payload };
    case productTypes.CLEAR_PRODUCT:
      return { ...state, product: {} };
    case productTypes.LOADING:
      return { ...state, loading: payload };
    default:
      return state;
  }
};

export default productReducer;
