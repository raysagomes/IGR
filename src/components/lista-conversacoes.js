import { Container, Row, Col } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import RightNavBar from "./right-navbar";
import Badge from 'react-bootstrap/Badge';
import { Link } from 'react-router-dom';

function ListaConversacoes() {
  return (
    <>
    <Container> 
        <Row> 
<Col> 
    <h2 className='h2-vocab'>Conversações</h2>
    <ListGroup as="ol" numbered className='lista-vocab'>
      <ListGroup.Item as="li" className='mb-3 lista-item'>
      <Link to="/conversacoes/conversacao1" className="text-decoration-none texto-link ">Conversação 1</Link>
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

export default ListaConversacoes;