import { Container, Row, Col } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import RightNavBar from "../right-navbar";
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
      <Link to="/conversacoes/conversacao1" className="text-decoration-none texto-link ">Julie Encontra um Estrangeiro</Link>
      </ListGroup.Item>

      <ListGroup.Item as="li" className='mb-3 lista-item'>
      <Link to="/conversacoes/conversacao2" className="text-decoration-none texto-link ">Monica e o Caminho para o Museu</Link>
      </ListGroup.Item>
      <ListGroup.Item as="li" className='mb-3 lista-item'>
      <Link to="/conversacoes/conversacao3" className="text-decoration-none texto-link ">Karen e o Restaurante</Link>
      </ListGroup.Item>
      <ListGroup.Item as="li" className='mb-3 lista-item'>
      <Link to="/conversacoes/conversacao4" className="text-decoration-none texto-link ">Mike e o Hotel</Link>
      </ListGroup.Item>
      <ListGroup.Item as="li" className='mb-3 lista-item'>
      <Link to="/conversacoes/conversacao5" className="text-decoration-none texto-link ">Michelle e o Cinema</Link>
      </ListGroup.Item>
      <ListGroup.Item as="li" className='mb-3 lista-item'>
      <Link to="/conversacoes/conversacao6" className="text-decoration-none texto-link ">Juliana e o Transporte Público</Link>
      </ListGroup.Item>
      <ListGroup.Item as="li" className='mb-3 lista-item'>
      <Link to="/conversacoes/conversacao7" className="text-decoration-none texto-link ">Viktor e o Mercado</Link>
      </ListGroup.Item>
      <ListGroup.Item as="li" className='mb-3 lista-item'>
      <Link to="/conversacoes/conversacao8" className="text-decoration-none texto-link ">Mia e a Biblioteca</Link>
      </ListGroup.Item>
      <ListGroup.Item as="li" className='mb-3 lista-item'>
      <Link to="/conversacoes/conversacao9" className="text-decoration-none texto-link ">Daniel e o Aeroporto</Link>
      </ListGroup.Item>
      <ListGroup.Item as="li" className='mb-3 lista-item'>
      <Link to="/conversacoes/conversacao10" className="text-decoration-none texto-link "> Clara e a Cafeteria</Link>
      </ListGroup.Item>

    </ListGroup>

</Col>
<Col xs={12} md={3} className="extra-pagina-de-textos d-flex flex-column align-items-end">
    <RightNavBar />
    </Col>
        </Row>
    </Container>
    </>
  );
}

export default ListaConversacoes;