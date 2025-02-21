import { Container, Row, Col } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import RightNavBar from "../right-navbar";
import { Link } from 'react-router-dom';

export default function ListaVocabularioAdjetivo() {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <h2 className='h2-vocab'>Adjetivos</h2>
            <ListGroup as="ol" numbered className='lista-vocab'>
              <ListGroup.Item as="li" className='mb-3 lista-item'>
                <Link to="/adjetivos/adjetivo1" className="text-decoration-none texto-link ">Aparencia</Link>
              </ListGroup.Item>
              {/* <ListGroup.Item as="li" className='mb-3 lista-item'>
                <Link to="/adjetivos/adjetivo2" className="text-decoration-none texto-link ">Brilho</Link>
              </ListGroup.Item>
              <ListGroup.Item as="li" className='mb-3 lista-item'>
                <Link to="/adjetivos/adjetivo3" className="text-decoration-none texto-link ">Distância</Link>
              </ListGroup.Item>
              <ListGroup.Item as="li" className='mb-3 lista-item'>
                <Link to="/adjetivos/adjetivo4" className="text-decoration-none texto-link ">Sentimentos bons</Link>
              </ListGroup.Item> */}
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


