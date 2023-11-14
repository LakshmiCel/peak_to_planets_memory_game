import { Button, Grid } from '@mui/material';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
// import { jwtDecode } from 'jwt-decode';
export const user = [];

export default function LoginFinal() {
	const navigate = useNavigate();
	// const handlelogin=(res)=>{
	//     // console.log(typeof(res))
	//     console.log(res)
	//     // console.log(JSON.stringify(response));
	// }
	return (
		<div>
			<Grid>
				<Button variant="contain">
					<GoogleLogin
						onSuccess={(res) => {
							console.log(res);
							const response = jwtDecode(res.credential);
							console.log(JSON.stringify(response.name));
							console.log(response);
							navigate('./game');
							user.push(response);
							console.log(user);
						}}
						onError={() => console.log('failed')}
					/>
				</Button>
			</Grid>
		</div>
	);
}
