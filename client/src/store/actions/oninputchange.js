import { INPUT } from './constants';

export const onInputChange = (e) => (dispatch) => {
	dispatch({ type: INPUT, payload: e.target.value });
};
