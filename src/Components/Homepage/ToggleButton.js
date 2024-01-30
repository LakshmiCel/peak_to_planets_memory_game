import { styled } from '@mui/material/styles';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import mountain from "../../assets/M1.jpg";

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
    width: 75,
    height: 35,
    padding: 10,
    '& .MuiSwitch-switchBase': {
        margin: 0,
        padding: 0,
        transform: 'translateX(6px)',
        '&.Mui-checked': {
            color: '#fff',
            transform: 'translateX(38px)',
            '& .MuiSwitch-thumb:before': {
                backgroundImage: `url(${mountain})`
            },
        },
    },
    '& .MuiSwitch-thumb': {
        backgroundColor: theme.palette.mode === 'dark' ? '#002' : '#001e3c',
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
            backgroundSize: 'contain'
        },
    },
    '& .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
        borderRadius: 20 / 2,
    },
}));

export default function CustomizedSwitches() {
    return (
        <FormGroup>
            <FormControlLabel
                control={<MaterialUISwitch sx={{ m: 1 }} defaultChecked />}
            />
        </FormGroup>
    );
}