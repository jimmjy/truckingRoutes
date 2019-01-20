export default (state = [], action) => {
	switch (action.type) {
		case 'FETCH_STOPS':
			return [...action.payload];
		default:
			return state;
	}
};
