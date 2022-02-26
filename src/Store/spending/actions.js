import * as types from './actionTypes'


export const saveSpendingAmt = (amout,navigation) => {	
	return (dispatch) => {
		dispatch({ type: types.SPENDING_SUCCESS, payload: amout });
		navigation.navigate("MyTab")
	};
};

export const setSpendingAmtLimit = (amout,navigation) => {	
	return (dispatch) => {
		dispatch({ type: types.SET_SPENDING_LIMIT_SUCCESS, payload:amout });
		navigation.navigate("Card")
	};
};

export const resetWeekLimitAction = () => {	
	return (dispatch) => {
		dispatch({ type: types.RESET_SPENDING_LIMIT_SUCCESS,  });
		

	};
};