import { Grid, Typography, Paper } from '@mui/material';

function Scoreboard({ scores, common, mountain }) {
	return (
		<Grid container justifyContent="center" alignItems="center">
			<Paper
				elevation={3}
				style={{
					padding: '20px',
					backgroundColor: 'transparent',
					marginTop: '40px',
					width: '80vw',
					color: common === mountain ? 'black' : 'white',
					height: '70vh',
					overflow: 'auto',
				}}
			>
				<Typography variant="h5" gutterBottom>
					High Scores
				</Typography>
				{scores.map((score, index) => (
					<Grid container key={index} spacing={3}>
						<Grid item xs={1}>
							<Typography variant="subtitle1">{index + 1}.</Typography>
						</Grid>
						<Grid item xs={3}>
							<Typography variant="subtitle1">{score.username}</Typography>
						</Grid>
						<Grid item xs={3}>
							<Typography variant="subtitle1">{score.highScore}</Typography>
						</Grid>
						<Grid item xs={5}>
							<Typography variant="subtitle1">Date: {score.date}</Typography>
						</Grid>
					</Grid>
				))}
			</Paper>
		</Grid>
	);
}

export default Scoreboard;
