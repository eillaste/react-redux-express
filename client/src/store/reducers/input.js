import { INPUT } from '../actions/constants';

const inputReducer = (state = [], { type, payload }) => {
	switch (type) {
		case INPUT:
			return payload;
		default:
			return state;
	}
};

export default inputReducer;
