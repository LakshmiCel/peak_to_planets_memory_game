// LoginFinal.js

import { Button, Grid } from '@mui/material';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUser } from '../../Redux/userActions';
import './LoginFinal.css';
// Adjust the path as needed

export default function LoginFinal() {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	return (
		<div>
			<Grid>
				<Button className="hover-button" variant="contained">
					<GoogleLogin
						onSuccess={(res) => {
							const response = jwtDecode(res.credential);
							dispatch(setUser(response)); // Dispatch action to set user in Redux
							navigate('./game');
						}}
						onError={() => console.log('failed')}
					/>
				</Button>
			</Grid>
		</div>
	);
}
