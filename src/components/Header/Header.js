import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import TopHeader from '../Header/TopHeader';
import {useLocation } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';




function Header() {

  const location = useLocation();

  // Array dei percorsi delle voci di menu
  const menuItems = [

    { path: '/', text: 'Home' },
    { path: '/#chi-sono', text: 'Chi sono' },
    { path: '/#contatti', text: 'Contatti' },

  ];
  const menuSubItems = [
    { path: '/servizi', text: 'Tutti i servizi' },
    { path: '/servizi/conversioni-serrature-porte-blindate', text: 'Conversioni serrature porte blindate' },
    { path: '/servizi/fornitura-e-installazioni-zanzariere', text: 'Fornitura e installazioni zanzariere' },
    { path: '/servizi/riparazioni-e-sostituzioni-basculanti-e-sezionali', text: 'Riparazioni e sostituzioni basculanti e sezionali' },
    { path: '/servizi/sostituzione-serrature-di-tutti-i-tipi', text: 'Sostituzione serrature di tutti i tipi' },

  ];

  return (
    <header>
      <TopHeader />
   <Navbar expand="sm" >
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className='ms-auto'/>
        <Navbar.Collapse id="basic-navbar-nav">
          {/*<Nav className="mx-auto mt-2">
            <Nav.Link href="/">Home</Nav.Link>
            <NavDropdown title="Servizi" id="basic-nav-dropdown" >
              <NavDropdown.Item href="/servizi">Tutti i servizi </NavDropdown.Item>
              <NavDropdown.Item href="/servizi/conversioni-serrature-porte-blindate">Conversioni serrature porte blindate</NavDropdown.Item>
              <NavDropdown.Item href="/servizi/fornitura-e-installazioni-zanzariere">
              Fornitura e installazioni zanzariere
              </NavDropdown.Item>
              <NavDropdown.Item href="/servizi/riparazioni-e-sostituzioni-basculanti-e-sezionali">Riparazioni e sostituzioni basculanti e sezionali</NavDropdown.Item>
              <NavDropdown.Item href="/servizi/sostituzione-serrature-di-tutti-i-tipi">
              Sostituzione serrature di tutti i tipi
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/#chi-sono">Chi sono</Nav.Link>
            <Nav.Link href="/#contatti">Contatti</Nav.Link>
  </Nav>
  <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/servizi">Servizi</Link></li>
            <ul>
                <li><Link to="/servizi/conversioni-serrature-porte-blindate">Conversioni Serrature e Porte Blindate</Link></li>
                <li><Link to="/servizi/fornitura-e-installazioni-zanzariere">Fornitura e Installazioni Zanzariere</Link></li>
                <li><Link to="/servizi/riparazioni-e-sostituzioni-basculanti-e-sezionali">Riparazioni e Sostituzioni Basculanti e Sezionali</Link></li>
                <li><Link to="/servizi/sostituzione-serrature-di-tutti-i-tipi">Sostituzioni</Link></li>

              </ul>
              <li><Link to="/#chi-sono">Chi sono</Link></li>
              <li><Link to="/#contatti">Contatti</Link></li>
          </ul>
  </nav>*/}
        <Nav className="mx-auto mt-2 mt-sm-0">
        <Nav.Link className={location.pathname === menuItems[0].path ? 'active' : ''} href="/">{menuItems[0].text}</Nav.Link>
            <NavDropdown title="Servizi" id="basic-nav-dropdown" >
              {menuSubItems.map(item => (
                <NavDropdown.Item
                  key={item.path}
                  href={item.path}
                  className={location.pathname === item.path ? 'active' : ''}>
                  {item.text}
                </NavDropdown.Item>
                ))}
                 </NavDropdown>
          <Link className={location.pathname === menuItems[1].path ? 'active nav-link' : 'nav-link'} to="/#chi-sono">{menuItems[1].text}</Link>
          <Link className={location.pathname === menuItems[2].path ? 'active nav-link' : 'nav-link'} to="/#contatti">{menuItems[2].text}</Link>
        
         
      </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </header>
  );
}

export default Header;
