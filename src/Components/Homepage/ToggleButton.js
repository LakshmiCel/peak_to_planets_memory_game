import { styled } from '@mui/material/styles';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { useDispatch } from 'react-redux';
import mountain from '../../assets/M1.jpg';
import space from '../../assets/space1.png';
import { toggleTheme } from '../../Redux/themeActions';

const MaterialUISwitch = styled(Switch)(() => ({
	backgroundColor: 'rgba(255, 255, 255,0.2)',
	borderRadius: '20px',
	width: 75,
	height: 35,
	padding: 10,

	'& .MuiSwitch-switchBase': {
		margin: 0,
		padding: 0,
		transform: 'translateX(6px)',
		'&.Mui-checked': {
			transform: 'translateX(38px)',
			'& .MuiSwitch-thumb:before': {
				backgroundImage: `url(${space})`,
			},
		},
	},
	'& .MuiSwitch-thumb': {
		width: 32,
		height: 32,
		'&::before': {
			content: "''",
			position: 'absolute',
			width: '100%',
			height: '100%',
			left: 0,
			top: 0,
			backgroundRepeat: 'no-repeat',
			backgroundPosition: 'center',
			borderRadius: '20px',
			backgroundImage: `url(${mountain})`,
			backgroundSize: 'cover',
		},
	},
	'& .MuiSwitch-track': {
		opacity: 1,
		borderRadius: 20 / 2,
	},
}));

export default function CustomizedSwitches() {
	const dispatch = useDispatch();

	const themeToggle = () => {
		dispatch(toggleTheme());
	};

	return (
		<FormGroup>
			<FormControlLabel
				control={
					<MaterialUISwitch
						sx={{ m: 1 }}
						defaultChecked
						onClick={themeToggle}
					/>
				}
			/>
		</FormGroup>
	);
}
