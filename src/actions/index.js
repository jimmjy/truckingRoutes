import apiRequest from '../api/truckingRoutes';

export const fetchLegs = () => {
	return async (dispatch, getState) => {
		const response = await apiRequest.get('/legs');

		dispatch({ type: 'FETCH_LEGS', payload: response.data });
	};
};

export const fetchStops = () => {
	return async (dispatch, getState) => {
		const response = await apiRequest.get('/stops');

		dispatch({ type: 'FETCH_STOPS', payload: response.data });
	};
};

export const fetchDriver = () => {
	return async (dispatch, getState) => {
		const response = await apiRequest.get('/location');

		dispatch({ type: 'FETCH_DRIVER', payload: response.data });
	};
};
