import { Navbar, NavbarBrand, Nav, NavItem } from "reactstrap";
import Logo from "../assets/img/BowtieLogo.png";

const Navigation = () => {
  return (
    <Navbar className="navbar" sticky="top" expand="md" dark>
      <Nav className="navbar" navbar>
        <NavbarBrand href="/">
          <img src={Logo} alt="Kevin's Balloons Logo" className="logo" />
        </NavbarBrand>
        <NavItem>
          <div className="nav-link" to="/book">
            Book
          </div>
        </NavItem>
        <NavItem>
          <div className="nav-link" to="/contact">
            Contact
          </div>
        </NavItem>
      </Nav>
    </Navbar>
  );
};

export default Navigation;
