export default (state = [], action) => {
	switch (action.type) {
		case 'FETCH_LEGS':
			return [...action.payload];
		default:
			return state;
	}
};
