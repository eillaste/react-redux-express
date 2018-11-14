import { combineReducers } from 'redux';
import customerReducer from './customer';
import inputReducer from './input';

export default combineReducers({
	customers: customerReducer,
	text: inputReducer
});
