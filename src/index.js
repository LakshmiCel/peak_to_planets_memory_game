import React from 'react';
import ReactDOM from 'react-dom/client';
import { GoogleOAuthProvider } from '@react-oauth/google';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<GoogleOAuthProvider clientId="927331074220-ig17rokcljbjhb9tubr5t0qh29to65ga.apps.googleusercontent.com">
			<App />
		</GoogleOAuthProvider>
	</React.StrictMode>
);
