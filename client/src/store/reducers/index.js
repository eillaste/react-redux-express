import { combineReducers } from 'redux';
import customerReducer from './customer';
import inputReducer from './input';
import defaultTextReducer from './default';

export default combineReducers({
	customers: customerReducer,
	text: inputReducer,
	defaultText: defaultTextReducer
});
