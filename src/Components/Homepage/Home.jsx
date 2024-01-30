import { useMemo } from 'react';
import {
	Button,
	Box,
	Grid,
	Typography,
	AppBar,
	Toolbar,
	Avatar,
	Paper,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ToggleButton from './ToggleButton';
import { setTheme } from '../../Redux/themeActions';
import mountain from '../../assets/M1.jpg';
import space from '../../assets/S1.jpg';
import Scoreboard from './Scoreboard';

// Dummy data to display

function Home() {
	const dispatch = useDispatch();
	const user = useSelector((state) => state.user.user);
	const theme = useSelector((state) => state.theme.theme);

	const containerStyle = useMemo(
		() => ({
			backgroundImage: `url(${theme === 'mountain' ? mountain : space})`,
			backgroundSize: 'cover',
			height: 'auto',
			width: '100%',
			color: theme === 'mountain' ? 'black' : 'white',
			overflow: 'hidden',
		}),
		[theme]
	);

	// const handleToggleTheme = () => {
	// 	dispatch(toggleTheme());
	// };

	const appBarStyle = useMemo(
		() => ({
			backgroundImage: `url(${theme === 'mountain' ? mountain : space})`,
			backgroundSize: 'cover',

			boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.2)',
		}),
		[theme]
	);

	const buttonStyle = {
		// Text color#D5ECF4,#E4FEF9 ,#97F2D2 ,#07161D
		background:
			theme === 'mountain'
				? 'linear-gradient(45deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 1, 0.2))'
				: 'linear-gradient(45deg, rgba(0,0,0, 0.2),rgba(0,0,0, 0.2))',
		marginRight: '10px',
	};

	return (
		<Grid
			container
			direction="column"
			// style={{
			// 	height: 'auto',
			// 	display: 'flex',
			// 	flexDirection: 'row',
			// 	backgroundImage: `url(${theme === 'mountain' ? mountain : space})`,
			// }}
			style={containerStyle}
		>
			<Box sx={{ flexGrow: 1 }}>
				<AppBar position="static" style={appBarStyle}>
					<Toolbar>
						<Typography
							variant="h5"
							color="inherit"
							sx={{ fontSize:'2vw' }}
						>
							PEAK to PLANTES MEMORY GAME
						</Typography>
						<ToggleButton />
						<Button
							color="inherit"
							onClick={() => dispatch(setTheme('mountain'))}
						>
							Mountain Theme
						</Button>
						<Button color="inherit" onClick={() => dispatch(setTheme('space'))}>
							Space Theme
						</Button>
						<Button
							color="inherit"
							component={Link}
							to="/gamel"
							style={buttonStyle}
						>
							<Typography>Play Game</Typography>
						</Button>
						<Box
							sx={{ marginLeft: 'auto', display: 'flex', alignItems: 'center' }}
						>
							<Button
								color="inherit"
								component={Link}
								to="/"
								style={buttonStyle}
							>
								Logout
							</Button>
							<Avatar
								alt="user image"
								src={user?.picture}
								sx={{ marginLeft: '10px' }}
							/>
							<Typography sx={{ marginLeft: '10px' }}>{user?.name}</Typography>
						</Box>
					</Toolbar>
				</AppBar>
			</Box>

			{/* <Grid container style={containerStyle}>
				<Typography
					variant="h4"
					style={{
						color: theme === 'mountain' ? 'black' : 'white',
						position: 'absolute',
						left: '30%',
						marginTop: '20px',
					}}
				>
					Welcome to {theme === 'mountain' ? 'Mountains' : 'Space'} Page
				</Typography> */}
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
					color: theme === mountain ? 'black' : 'white',
				}}
			>
				<Typography variant="h5">Game Rules</Typography>
				<Grid>1.Click on any card to flip and match the two cards</Grid>
				<Grid>
					2.If two cards are of same image then some magic occurs :) the image
					gets dissappeared from the screen
				</Grid>
				<Grid>
					3.If you match all the cards then the image gets dissappeared from the
					screen and your score will be displayed
				</Grid>
				<Grid>
					4.And yes,dont forget <i> Miss TIMER</i> is HIDDEN
					<br />
					she loves to disturb you after 2 minutes she watches all your moves
					and calculates the scores for you
				</Grid>
				<Grid>
					6.If you quit in the middle she will get dissapointed and will award 0
					as your score.
				</Grid>
				<Grid>7.Better luck impressing her.:)</Grid>
			</Paper>
			<Scoreboard
				common={theme === 'mountain' ? mountain : space}
				style={{ position: 'relative', marginTop: '50px' }}
			/>
		</Grid>
		// </Grid>
	);
}

export default Home;
