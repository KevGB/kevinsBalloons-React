import { Navbar, NavbarBrand, Nav, NavItem } from "reactstrap";
import {NavLink} from "react-router-dom";
import Logo from "../assets/img/BowtieLogo.png";


const Navigation = () => {
  return (
    <Navbar className="navbar" sticky="top" expand="md" dark>
      <Nav className="navbar" navbar>
        <NavbarBrand href="/">
          <img src={Logo} alt="Kevin's Balloons Logo" style={{maxHeight:"50px"}} />
        </NavbarBrand>
        <NavItem>
          <NavLink className="nav-link" to="/">
            Start
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className="nav-link" to="/duration">
            duration
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className="nav-link" to="/when">
            when
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className="nav-link" to="/where">
            where
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className="nav-link" to="/guests">
            guests
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className="nav-link" to="/info">
            info
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className="nav-link" to="/thankyou">
            thankyou
          </NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  );
};

export default Navigation;
