import { Grid, Typography, Paper } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

function Scoreboard() {
	const theme = useSelector((state) => state.theme.theme);
	const [details, setDetails] = useState([]);

	useEffect(() => {
		const getData = async () => {
			try {
				const res = await axios.get('http://localhost:5000/users');
				// console.log(res.data);
				setDetails(res.data);
				// fetch('http://localhost:5000/users', {
				// 	mode: 'cors',
				// {
				// 	headers: {
				// 		'Access-Control-Allow-Origin': '*',
				// 		'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
				// 		'Access-Control-Allow-Headers':
				// 			'Origin, X-Requested-With, Content-Type, Accept',
				// 	},
				// 	'Access-Control-Allow-Origin': '*',
				// })
				// 	.then((response) => response.json())
				// 	.then((data) => {
				// 		setDetails(data);
				// 	});
			} catch (error) {
				console.error('Error fetching data:', error);
			}
		};

		getData();
	}, [details]);

	return (
		<Grid container justifyContent="center" alignItems="center">
			{console.log(details)}
			<Paper
				elevation={10}
				style={{
					padding: '20px',
					backgroundColor:
						theme === 'mountain' ? 'rgba(255,255,255,0.3)' : 'rgba(0,0,0,0.2)',
					marginTop: '40px',
					width: '80vw',
					color: theme === 'mountain' ? 'black' : 'white',
					height: '70vh',
					overflow: 'auto',
				}}
			>
				<Typography variant="h5" gutterBottom>
					High Scores
				</Typography>
				{details.map((score, index) => (
					<Grid container key={index} spacing={3}>
						<Grid item xs={1}>
							<Typography variant="subtitle1">{index + 1}.</Typography>
						</Grid>
						<Grid item xs={3}>
							<Typography variant="subtitle1">{score?.name}</Typography>
						</Grid>
						<Grid item xs={1}>
							<Typography variant="subtitle1">{score?.high_score}</Typography>
						</Grid>
						<Grid item xs={2}>
							<Typography variant="subtitle1">Date: {score?.date}</Typography>
						</Grid>
						<Grid item xs={3}>
							<Typography variant="subtitle1">
								Incorrect Moves: {score?.incorrect_moves}
							</Typography>
						</Grid>
					</Grid>
				))}
			</Paper>
		</Grid>
	);
}

export default Scoreboard;
