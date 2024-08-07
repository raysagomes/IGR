import React from "react";
import '../style.css';
import { LoremIpsum } from 'lorem-ipsum';
import { Container, Col, Row} from "react-bootstrap";
import Nav from 'react-bootstrap/Nav';
import RightNavBar from "./right-navbar";
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom'; 


function LinksTextos() {
    return(
<>
<Container> 
    <Row> 
        <Col> 
<h2 className="h2-textos-links"> Textos </h2>
<ListGroup as="ol" numbered className="colunasTexto">
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start mb-3"
      >
        <div className="ms-2 me-auto">
        <Link to="/texto/texto1" className="text-decoration-none texto-link"> 
         <div className="fw-bold">Luciana's dog, Max</div>
           Texto simples sobre o cachorro de Luciana </Link>
        </div>
     
      </ListGroup.Item>
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start mb-3" >

        <div className="ms-2 me-auto">
        <Link to="/texto/texto2" className="text-decoration-none texto-link"> 
          <div className="fw-bold">The Joy of Baking           </div>
         Sophie's new hobby. </Link>

        </div>
  
      </ListGroup.Item>
       <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start mb-3" >
          
        <div className="ms-2 me-auto">
        <Link to="/texto/texto2" className="text-decoration-none texto-link"> 
          <div className="fw-bold">The Thrill of Traveling</div>
         Jack travels around the world. </Link>

        </div>
  
      </ListGroup.Item>
    </ListGroup>
    </Col>
    <Col className="extra-pagina-de-textos d-flex flex-column align-items-end">
    <RightNavBar />
    </Col>
    </Row>
    </Container>
    </>

    );
}

export default LinksTextos;
