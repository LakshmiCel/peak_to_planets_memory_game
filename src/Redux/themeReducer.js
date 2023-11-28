import { SET_THEME, TOGGLE_THEME } from './themeActions';

const initialState = {
	theme: 'mountain', // Set the initial theme to 'mountain'
};

const themeReducer = (state = initialState, action) => {
	let newTheme;
	switch (action.type) {
		case SET_THEME:
			return { ...state, theme: action.payload };
		case TOGGLE_THEME:
			newTheme = state.theme === 'mountain' ? 'space' : 'mountain';
			return { ...state, theme: newTheme };
		default:
			return state;
	}
};

export default themeReducer;
