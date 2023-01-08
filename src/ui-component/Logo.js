// material-ui
import { useTheme } from '@mui/material/styles';
import logoDark from 'assets/images/logo-dark.svg';
import logo from 'assets/images/univ.jpg';
// ==============================|| LOGO SVG ||============================== //

const Logo = () => {
    const theme = useTheme();
    return <img src={logo} alt="Berry" width="50" />;
};
export default Logo;
