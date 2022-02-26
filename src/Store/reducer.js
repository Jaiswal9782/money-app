import { combineReducers } from 'redux';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistReducer } from "redux-persist";

import global from './global';
import spending from './spending';
import product from './product';

const config = {
	key: "root",
	debug: true,
	storage: AsyncStorage,
};

const AppReducers = combineReducers({
	global ,spending,product
});

const rootReducer = (state, action) => {
	return AppReducers(state, action);
}

const pReducer = persistReducer(config, rootReducer);

export default pReducer;

