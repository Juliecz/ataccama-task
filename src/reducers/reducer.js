import * as types from '../constants/constants';

export default (state, action) => {
	switch (action.type) {
		case (types.GET_DATA):
			return { ...state, data: action.data };
		case (types.REMOVE_RECORD):
			return { ...state, data: action.data };
		default:
			return { ...state };
	}
}