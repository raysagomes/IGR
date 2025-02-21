import React from "react";

import Nav from 'react-bootstrap/Nav';
import Dropdown from 'react-bootstrap/Dropdown';


function HeaderMenuHome() {
    return(
<div className="div-header-menu no-background"> 
<Nav bg="primary" data-bs-theme="dark" className="justify-content-center headerMenu" fixed="top">
        <Nav.Item>
          <Nav.Link  className="nav-item" href="/textos">Textos</Nav.Link>
        </Nav.Item>
        <Nav.Item>
        <Dropdown>
      <Dropdown.Toggle className="dropdownVocab nav-item">
        Vocabulário
      </Dropdown.Toggle>

      <Dropdown.Menu className="dropdownVocab">
      <Dropdown.Item className="dropdownVocab" href="/vocab">Vocabulário</Dropdown.Item>
      <Dropdown.Item className="dropdownVocab" href="/adjetivos">Adjetivo</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
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
