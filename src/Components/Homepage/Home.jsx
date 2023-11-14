import { Link } from 'react-router-dom';
import {
	Grid,
	AppBar,
	Toolbar,
	Button,
	Typography,
	Avatar,
} from '@mui/material';
import mountain from '../../assets/M1.jpg';
import space from '../../assets/S1.jpg';
import Scoreboard from './Scoreboard';
import { user } from '../Loginpage/LoginFinal';

// Dummy data to display
export const scores = [
	{ username: 'User1', highScore: 150, date: '2023-01-01' },
	{ username: 'User2', highScore: 120, date: '2023-01-02' },
	{ username: 'User3', highScore: 180, date: '2023-01-03' },
	{ username: 'User1', highScore: 150, date: '2023-01-01' },
];
function Home({ common, setCommon }) {
	const containerStyle = {
		backgroundImage: `url(${common})`,
		backgroundSize: 'cover',
		height: '90vh',
		width: '100vw',
	};

	return (
		<Grid container justifyContent="center" alignItems="center">
			<AppBar position="static">
				<Toolbar>
					<Typography variant="h5" component={Link} to="/" color="inherit">
						Home
					</Typography>
					<Button color="inherit" onClick={() => setCommon(mountain)}>
						Mountain
					</Button>
					<Button color="inherit" onClick={() => setCommon(space)}>
						Space
					</Button>
					<Button
						color="inherit"
						variant="contained"
						style={{
							marginLeft: '10px',
							background: 'linear-gradient(45deg, #00c9ff, #92fe9d)',
							boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
							textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)',
						}}
						component={Link}
						to="/gamel"
					>
						Play Game
					</Button>
					<Button
						variant="contained"
						color="primary"
						component={Link}
						to="/"
						style={{
							marginLeft: '10px',
							background: 'linear-gradient(45deg, #00c9ff, #92fe9d)',
							boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
							textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)',
						}}
					>
						Logout
					</Button>
					<Grid
						style={{ display: 'flex', alignItems: 'center', marginLeft: '40%' }}
					>
						<Avatar alt="user image" src={user[user.length - 1].picture} />
						<Typography>{user[user.length - 1].name}</Typography>
					</Grid>
				</Toolbar>
			</AppBar>
			<Grid style={containerStyle}>
				<Typography
					variant="h4"
					style={{
						color: common === mountain ? 'black' : 'white',
						position: 'absolute',
						left: '30%',
					}}
				>
					Welcome to {common === mountain ? 'Mountains' : 'Space'} Page
				</Typography>
				<Scoreboard
					scores={scores}
					common={common}
					mountain={mountain}
					style={{ position: 'relative', marginTop: '50px' }}
				/>
			</Grid>
		</Grid>
	);
}

export default Home;
