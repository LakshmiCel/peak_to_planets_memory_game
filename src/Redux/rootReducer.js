import { combineReducers } from 'redux';
import userReducer from './userReducer';
import themeReducer from './themeReducer';
// combining the reducer so that one single reducer can be extracted
const rootReducer = combineReducers({
	user: userReducer,
	theme: themeReducer,
});

export default rootReducer;
