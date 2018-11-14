import { INPUT } from '../actions/constants';

const inputReducer = (state = [ 'This is gonna be awesome' ], { type, payload }) => {
	switch (type) {
		case INPUT:
			return payload;
		default:
			return state;
	}
};

export default inputReducer;
