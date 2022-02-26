import * as types from "./actionTypes";
import ApiList from "../../service/ApiList";
import { apiLoadingStart, apiLoadingStop } from "./../global";

export const getAllProductsAction = () => {
  return async (dispatch) => {
    dispatch(apiLoadingStart());
    await ApiList.getProduct()
    .then((response) => {
        if (response.status === 200) {
          dispatch({ type: types.PRODUCTS_SUCCESS, payload: response.data });
          dispatch(apiLoadingStop());
        } else {
          dispatch({
            type: types.PRODUCTS_ERROR,
            payload: response.message,
          });
          dispatch(apiLoadingStop());
          console.log(response.status)
        }
      })
      .catch((error) => {
        dispatch({ type: types.PRODUCTS_ERROR, payload: error.message });
        console.log(error);
        dispatch(apiLoadingStop());
      });
  };
};




