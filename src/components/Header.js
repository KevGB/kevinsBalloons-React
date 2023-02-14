import {
  Navbar,
  NavbarBrand,
  Collapse,
  NavbarToggler,
  Nav,
  NavItem,
} from "reactstrap";
import { NavLink } from "react-router-dom";
import Logo from "../assets/img/KBlogo.png";
import { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Navbar sticky="top" expand="md" color="primary" dark>
      <NavbarBrand href="/">
        <img src={Logo} alt="Kevin's Balloons Logo" />
        <h1>Kevin's Balloons</h1>
      </NavbarBrand>

      <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />

      <Collapse isOpen={menuOpen} navbar>
        <Nav className="ms-auto" navbar>
          <NavItem>
            <NavLink className="nav-link" to="/book">
              Book
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="nav-link" to="/services">
              Services
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="nav-link" to="/contact">
              Contact
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="nav-link" to="/gallery">
              Gallery
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default Header;
