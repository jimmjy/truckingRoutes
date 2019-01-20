export default (state = [], action) => {
	switch (action.type) {
		case 'FETCH_DRIVER':
			return [...action.payload];
		default:
			return state;
	}
};
