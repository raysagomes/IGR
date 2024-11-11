import { Container, Row, Col } from 'react-bootstrap';
import RightNavBar from "./right-navbar";
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom'; 

function ListaGramatica() {
  return (
    <>
    <Container> 
    <Row> 
        <Col> 
<h2 className="h2-textos-links"> Gramática </h2>
<ListGroup as="ol" numbered className="colunasTexto">
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start mb-3 lista-item"
      >
        <div className="ms-2 me-auto">
        <Link to="/gramatica/gramatica1" className="text-decoration-none texto-link"> 
         <div className="fw-bold">Alfabeto</div>
           Explicação simples sobre como as letras soam.</Link>
        </div>
     
      </ListGroup.Item>
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start mb-3 lista-item"  >

        <div className="ms-2 me-auto">
        <Link to="/gramatica/gramatica2" className="text-decoration-none texto-link"> 
          <div className="fw-bold">Substantivo e pronomes </div>
          Introdução aos substantivos (pessoas, lugares, objetos) e pronomes pessoais (eu, você, ele/ela, etc.). </Link>

        </div>
  
      </ListGroup.Item>
       <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start mb-3 lista-item" >
          
        <div className="ms-2 me-auto">
        <Link to="/gramatica/gramatica3" className="text-decoration-none texto-link"> 
          <div className="fw-bold">Artigos Definidos e Indefinidos</div>
          Uso de Artigos Definidos e Indefinidos </Link>

        </div>
  
      </ListGroup.Item>
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start mb-3 lista-item" >
          
        <div className="ms-2 me-auto">
        <Link to="/gramatica/gramatica4" className="text-decoration-none texto-link"> 
          <div className="fw-bold">Presente Simples</div>
          Frases no presente simples e verbo to be
           </Link>

        </div>
  
      </ListGroup.Item>
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start mb-3 lista-item" >
          
        <div className="ms-2 me-auto">
        <Link to="/gramatica/gramatica5" className="text-decoration-none texto-link"> 
          <div className="fw-bold">Passado Simples</div> </Link>
        </div>
      </ListGroup.Item>

      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start mb-3 lista-item" >
          
        <div className="ms-2 me-auto">
        <Link to="/gramatica/gramatica6" className="text-decoration-none texto-link"> 
          <div className="fw-bold">Futuro Simples</div> </Link>

        </div>
  
      </ListGroup.Item>

      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start mb-3 lista-item" >
          
        <div className="ms-2 me-auto">
        <Link to="/gramatica/gramatica7" className="text-decoration-none texto-link"> 
          <div className="fw-bold">Futuro com Going To</div> </Link>

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

export default ListaGramatica;