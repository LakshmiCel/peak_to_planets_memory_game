import { useMemo } from 'react';
import {
	Button,
	Box,
	Grid,
	Typography,
	AppBar,
	Toolbar,
	Avatar,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setTheme, toggleTheme } from '../../Redux/themeActions';
import mountain from '../../assets/M1.jpg';
import space from '../../assets/S1.jpg';
import Scoreboard from './Scoreboard';

// Dummy data to display
export const scores = [
	{ username: 'User1', highScore: 150, date: '03-01-23' },
	{ username: 'User2', highScore: 120, date: '04-03-23' },
	{ username: 'User3', highScore: 180, date: '02-05-23' },
];

function Home() {
	const dispatch = useDispatch();
	const user = useSelector((state) => state.user.user);
	const theme = useSelector((state) => state.theme.theme);

	const containerStyle = useMemo(
		() => ({
			backgroundImage: `url(${theme === 'mountain' ? mountain : space})`,
			backgroundSize: 'cover',
			height: '100vh',
			width: '100%',
			color: theme === 'mountain' ? 'black' : 'white',
			overflow: 'hidden',
		}),
		[theme]
	);

	const handleToggleTheme = () => {
		dispatch(toggleTheme());
	};

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
			style={{
				height: '100vh',
				display: 'flex',
				flexDirection: 'row',
				backgroundImage: `url(${theme === 'mountain' ? mountain : space})`,
			}}
		>
			<Box sx={{ flexGrow: 1 }}>
				<AppBar position="static" style={appBarStyle}>
					<Toolbar>
						<Typography
							variant="h5"
							component={Link}
							to="/game"
							color="inherit"
							sx={{ marginRight: 'auto' }}
						>
							Home
						</Typography>
						<Button color="inherit" onClick={handleToggleTheme}>
							Toggle Theme
						</Button>
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
								src={user.picture}
								sx={{ marginLeft: '10px' }}
							/>
							<Typography sx={{ marginLeft: '10px' }}>{user.name}</Typography>
						</Box>
					</Toolbar>
				</AppBar>
			</Box>

			<Grid container style={containerStyle}>
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
				</Typography>

				<Scoreboard
					scores={scores}
					common={theme === 'mountain' ? mountain : space}
					style={{ position: 'relative', marginTop: '50px' }}
				/>
			</Grid>
		</Grid>
	);
}

export default Home;
