import { Link } from 'react-router-dom';

// material-ui
import { ButtonBase } from '@mui/material';

// project imports
import config from 'config';
import Logo from '../../../assets/images/logo.png';

// ==============================|| MAIN LOGO ||============================== //

const LogoSection = () => (
    <ButtonBase disableRipple component={Link} to="/dashboard">
        <img src={Logo} alt="Bhoomi" className='h-8'/>
    </ButtonBase>
);

export default LogoSection;
