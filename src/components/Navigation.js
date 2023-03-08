import { Navbar, NavbarBrand, Nav, NavItem , NavLink} from "reactstrap";
import Logo from "../assets/img/BowtieLogo.png";

const Navigation = () => {
  return (
    <Navbar className="navbar" sticky="top" expand="md" dark>
      <Nav className="navbar" navbar>
        <NavbarBrand href="/">
          <img src={Logo} alt="Kevin's Balloons Logo" className="logo" />
        </NavbarBrand>
        <NavItem>
          <NavLink className="nav-link" to="/book">
            Book
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className="nav-link" to="/contact">
            Contact
          </NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  );
};

export default Navigation;
