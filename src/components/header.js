import React from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";


function Header() {
    return(
<div> 
<Navbar className="header-topo" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">IGR</Navbar.Brand>
        </Container>
      </Navbar>
    
</div>
    );
}

export default Header;
