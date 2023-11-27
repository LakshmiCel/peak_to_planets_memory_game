import { Button, Paper, Typography } from '@mui/material';
import { lazy } from 'react';

const Modal = lazy(() => import('@mui/material/Modal'));
// Lazy loaded the modal so it can load only when required
function ResModal({
	open,
	onClose,
	calculateScore,
	calculateTimeTaken,
	incorrectClicks,
}) {
	return (
		<Modal
			open={open}
			onClose={onClose}
			style={{
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
			}}
		>
			<Paper style={{ padding: 20 }}>
				<Typography variant="h5">Game Over!</Typography>
				<Typography variant="h6">Score: {calculateScore()}</Typography>
				<Typography variant="h6">
					Time taken: {calculateTimeTaken()} seconds
				</Typography>
				<Typography variant="h6">Incorrect Moves: {incorrectClicks}</Typography>
				<Button onClick={onClose} style={{ margin: '10px' }}>
					Close
				</Button>
			</Paper>
		</Modal>
	);
}
export default ResModal;
