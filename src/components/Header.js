import { Navbar, NavbarBrand } from 'reactstrap';
import Logo from '../assets/img/KBlogo.png';

const Header = () => {
    return (
        <Navbar sticky='top' expand='md' color='primary' dark>
        
                <NavbarBrand href='/'>
                    <img src={Logo} alt="Kevin's Balloons Logo" />
                </NavbarBrand>
            
        </Navbar>
    )
};

export default Header;