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

export const editDriver = () => {
	return async (dispatch, getState) => {
		const response = await apiRequest.put('/driver', {
			method: 'PUT',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				leg: '45',
				progress: '45',
			}),
		});
		dispatch({ type: 'EDIT_DRIVER', payload: response.data });
	};
};
