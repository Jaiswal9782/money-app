import * as types from "./actionTypes";

const initialState = {
  loading: false,
  allBrands: null,
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.payload,
        loading: false,
      };

    case types.PRODUCTS_ERROR:
      return {
        ...state,
      };
      
   
    default:
      return state;
  }
};

export default productReducer;
