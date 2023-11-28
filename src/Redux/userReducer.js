const initialState = {
	user: null,
	score: null,
};

const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'SET_USER':
			return {
				...state,
				user: action.payload,
			};
		case 'SET_SCORE':
			return {
				...state,
				score: action.payload,
			};
		default:
			return state;
	}
};

export default userReducer;
