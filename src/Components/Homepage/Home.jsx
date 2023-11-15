import { Link } from 'react-router-dom';
import {
	Grid,
	AppBar,
	Toolbar,
	Button,
	Typography,
	Avatar,
	Paper,
} from '@mui/material';
import mountain from '../../assets/M1.jpg';
import space from '../../assets/S1.jpg';
import Scoreboard from './Scoreboard';
import { user } from '../Loginpage/LoginFinal';

// Dummy data to display
export const scores = [
	{ username: 'User1', highScore: 150, date: '03-01-23' },
	{ username: 'User2', highScore: 120, date: '04-03-23' },
	{ username: 'User3', highScore: 180, date: '02-05-23' },
];
function Home({ common, setCommon }) {
	const containerStyle = {
		backgroundImage: `url(${common})`,
		backgroundSize: 'cover',
		height: 'min-content',
		width: 'max-content',
	};

	return (
		<Grid container justifyContent="center" alignItems="center">
			<AppBar position="static" style={{ backgroundImage: `url(${common})` }}>
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
				<Paper
					elevation={24}
					style={{
						position: 'relative',
						marginTop: '4%',
						marginLeft: '5%',
						width: 'max-content',
						height: 'min-content',
						backgroundColor: 'transparent',
						padding: '3%',
						color: common === mountain ? 'black' : 'white',
					}}
				>
					<Typography variant="h5">Game Rules</Typography>
					<Grid>1.Click on any card to flip and match the two cards</Grid>
					<Grid>
						2.If two cards are of same image then some magic occurs :) the image
						gets dissappeared from the screen
					</Grid>
					<Grid>
						3.If you match all the cards then the image gets dissappeared from
						the screen and your score will be displayed
					</Grid>
					<Grid>
						4.And yes,dont forget <i> Miss TIMER</i> is HIDDEN
						<br />
						she loves to disturb you after 2 minutes she watches all your moves
						and calculates the scores for you
					</Grid>
					<Grid>
						6.If you quit in the middle she will get dissapointed and will award
						0 as your score.
					</Grid>
					<Grid>7.Better luck impressing her.:)</Grid>
				</Paper>
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
