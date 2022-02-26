import * as types from './actionTypes';

const initialState = {
	loading: false,
	spendData: [],
	maxLimit: null,
	weekEndDate:null
};
const spendingReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.SPENDING_SUCCESS:
			let data = [...state.spendData, action.payload]
			console.log(data)
			return {
				...state,
				spendData:[...state.spendData, action.payload]
			};
		case types.SET_SPENDING_LIMIT_SUCCESS:
			return {
				...state,
				maxLimit: action.payload,
				weekEndDate:action.payload.expireDate,
				spendData: [],
			};
			case types.RESET_SPENDING_LIMIT_SUCCESS:
				return {
					...state,
					maxLimit: null,
					spendData: [],
				};
		default:
			return state
	}
};

export default spendingReducer

