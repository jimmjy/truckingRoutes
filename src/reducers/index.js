import { combineReducers } from 'redux';
import driverReducer from './driverReducer';
import legsReducer from './legsReducer';
import stopsReducer from './stopsReducer';

export default combineReducers({
	driver: driverReducer,
	legs: legsReducer,
	stops: stopsReducer,
});
