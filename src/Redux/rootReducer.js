import { combineReducers } from 'redux';
import userReducer from './userReducer';
import themeReducer from './themeReducer'; // Import the themeReducer

const rootReducer = combineReducers({
	user: userReducer,
	theme: themeReducer, // Include the themeReducer in the rootReducer
});

export default rootReducer;
