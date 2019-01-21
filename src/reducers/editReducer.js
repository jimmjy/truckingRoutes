export default (state = [], action) => {
	switch (action.type) {
		case 'EDIT_DRIVER':
			return [...action.payload];
		default:
			return state;
	}
};
