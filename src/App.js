import React from 'react';
import { Container, Navbar, NavbarBrand } from 'reactstrap';
import Logo from './assets/img/KBlogo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar sticky='top' expand='md' color='primary' dark>
        <Container>
          <NavbarBrand href='/'>
            <img src={Logo} alt="Kevin's Balloons Logo" />
          </NavbarBrand>
        </Container>
      </Navbar>
    </div>
  );
}

export default App;
