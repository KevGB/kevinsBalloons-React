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

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Navbar sticky="top" expand="md" color="primary" dark>
      <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />

      <Collapse isOpen={menuOpen} navbar>
        <Nav className="ms-auto" navbar>
          <NavItem>
            <NavLink className="nav-link" to="/book">
              Book
            </NavLink>
          </NavItem>
          <NavbarBrand href="/">
            <img src={Logo} alt="Kevin's Balloons Logo" />
            <h1>Kevin's Balloons</h1>
          </NavbarBrand>
          <NavItem>
            <NavLink className="nav-link" to="/contact">
              Contact
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default Navigation;