import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reducer from './reducers/reducer';


const initialState = {
	data: []
};

const store = createStore(
	reducer,
	initialState,
	applyMiddleware(logger, thunk)
);

export default store;