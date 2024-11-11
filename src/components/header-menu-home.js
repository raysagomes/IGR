import React from "react";
import '../style.css';

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


function HeaderMenuHome() {
    return(
<div className="div-header-menu"> 
<Nav bg="primary" data-bs-theme="dark" className="justify-content-center headerMenu" fixed="top">
        <Nav.Item>
          <Nav.Link  className="nav-item" href="/textos">Textos</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="nav-item"   href="/vocab">Vocabulário</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="nav-item"  href="/conversacoes">Conversações</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="nav-item"  href="/gramatica">Gramática</Nav.Link>
        </Nav.Item>
        </Nav>
</div>
    );
}

export default HeaderMenuHome;
