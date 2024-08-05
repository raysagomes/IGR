import { Container, Row, Col } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import RightNavBar from "./right-navbar";
import Badge from 'react-bootstrap/Badge';


function ListaGramatica() {
  return (
    <>
    <Container> 
        <Row> 
<Col> 
    <h2 className='h2-vocab'>Gramatica</h2>
    <ListGroup as="ol" numbered className='lista-vocab'>
      <ListGroup.Item as="li" className='mb-3'>Cras justo odio</ListGroup.Item>
      <ListGroup.Item as="li" className='mb-3'>Cras justo odio</ListGroup.Item>
      <ListGroup.Item as="li" className='mb-3'>Cras justo odio</ListGroup.Item>
    </ListGroup>
</Col>
<Col className="extra-pagina-de-textos d-flex flex-column align-items-end">
    <h2 className="h2-vocab"> Extra </h2>
    <RightNavBar />
    </Col>
        </Row>
    </Container>
    </>
  );
}

export default ListaGramatica;