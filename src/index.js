import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { GoogleOAuthProvider } from '@react-oauth/google';
import App from './App';
import rootReducer from './Redux/rootReducer';

const store = createStore(rootReducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<GoogleOAuthProvider clientId="927331074220-ig17rokcljbjhb9tubr5t0qh29to65ga.apps.googleusercontent.com">
				<App />
			</GoogleOAuthProvider>
		</Provider>
	</React.StrictMode>
);
