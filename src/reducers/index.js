import { combineReducers } from 'redux';
import driverReducer from './driverReducer';
import legsReducer from './legsReducer';
import stopsReducer from './stopsReducer';
import editReducer from './editReducer';

export default combineReducers({
	driver: driverReducer,
	legs: legsReducer,
	stops: stopsReducer,
	edit: editReducer,
});
