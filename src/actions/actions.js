import * as types from '../constants/constants';
import data from '../data/data.json';

export const getData = () => ({
	type: types.GET_DATA, data
});