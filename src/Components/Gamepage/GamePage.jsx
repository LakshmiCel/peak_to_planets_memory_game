import { Grid } from '@mui/material';
// import { motion } from 'framer-motion';
// import { useNavigate } from 'react-router-dom';
import img1 from '../../assets/M2.jpg';
import img2 from '../../assets/mc1.jpg';
import LoginFinal from '../Loginpage/LoginFinal';

function GamePage() {
	// const handleSignIn = () => {
	// 	// For now, let's just navigate to the homepage after clicking the button
	// 	navigate('/');
	// };

	// const buttonVariants = {
	// 	hover: {
	// 		scale: 1.1,
	// 		transition: {
	// 			duration: 0.3,
	// 			yoyo: Infinity,
	// 		},
	// 	},
	// };

	return (
		<div>
			<Grid container>
				<Grid item xs={6}>
					<div
						style={{
							width: '100%',
							height: '100vh',
							overflow: 'hidden',
						}}
					>
						<img
							src={img1}
							alt="image1"
							style={{ objectFit: 'cover', width: '100%', height: '100%' }}
						/>
					</div>
				</Grid>
				<Grid item xs={6}>
					<div
						style={{
							width: '100%',
							height: '100vh',
							overflow: 'hidden',
						}}
					>
						<img
							src={img2}
							alt="image2"
							style={{ objectFit: 'cover', width: '100%', height: '100%' }}
						/>
					</div>
				</Grid>
			</Grid>
			<Grid
				container
				style={{
					position: 'absolute',
					top: '50%',
					left: '50%',
					transform: 'translate(-50%, -50%)',
					width: '30vh',
					height: '20vh',
					zIndex: 1,
				}}
			>
				<Grid item xs={12} style={{ marginTop: '20px' }}>
					<LoginFinal />
					{/* this is google 0 auth login */}
				</Grid>
			</Grid>
		</div>
	);
}

export default GamePage;
