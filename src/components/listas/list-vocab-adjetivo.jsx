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
                <Link to="/adjetivos/adjetivo1" className="text-decoration-none texto-link ">Corpo</Link>
              </ListGroup.Item>
              <ListGroup.Item as="li" className='mb-3 lista-item'>
                <Link to="/adjetivos/adjetivo2" className="text-decoration-none texto-link ">Aparencia Física</Link>
              </ListGroup.Item>
              <ListGroup.Item as="li" className='mb-3 lista-item'>
                <Link to="/adjetivos/adjetivo3" className="text-decoration-none texto-link ">Distância</Link>
              </ListGroup.Item>
              <ListGroup.Item as="li" className='mb-3 lista-item'>
                <Link to="/adjetivos/adjetivo4" className="text-decoration-none texto-link ">Sentimentos</Link>
              </ListGroup.Item> 
              <ListGroup.Item as="li" className='mb-3 lista-item'>
                <Link to="/adjetivos/adjetivo5" className="text-decoration-none texto-link ">Temperatura</Link>
              </ListGroup.Item> 
              <ListGroup.Item as="li" className='mb-3 lista-item'>
                <Link to="/adjetivos/adjetivo6" className="text-decoration-none texto-link ">Velocidade</Link>
              </ListGroup.Item> 
              <ListGroup.Item as="li" className='mb-3 lista-item'>
                <Link to="/adjetivos/adjetivo7" className="text-decoration-none texto-link ">Condição</Link>
              </ListGroup.Item> 
              <ListGroup.Item as="li" className='mb-3 lista-item'>
                <Link to="/adjetivos/adjetivo8" className="text-decoration-none texto-link ">Opinião</Link>
              </ListGroup.Item> 
              <ListGroup.Item as="li" className='mb-3 lista-item'>
                <Link to="/adjetivos/adjetivo9" className="text-decoration-none texto-link ">Quantidade</Link>
              </ListGroup.Item> 
              <ListGroup.Item as="li" className='mb-3 lista-item'>
                <Link to="/adjetivos/adjetivo10" className="text-decoration-none texto-link ">Tamanho</Link>
              </ListGroup.Item> 
              <ListGroup.Item as="li" className='mb-3 lista-item'>
                <Link to="/adjetivos/adjetivo11" className="text-decoration-none texto-link ">Personalidade</Link>
              </ListGroup.Item> 
              <ListGroup.Item as="li" className='mb-3 lista-item'>
                <Link to="/adjetivos/adjetivo12" className="text-decoration-none texto-link ">Qualidade</Link>
              </ListGroup.Item> 
              <ListGroup.Item as="li" className='mb-3 lista-item'>
                <Link to="/adjetivos/adjetivo13" className="text-decoration-none texto-link ">Forma</Link>
              </ListGroup.Item> 
              <ListGroup.Item as="li" className='mb-3 lista-item'>
                <Link to="/adjetivos/adjetivo14" className="text-decoration-none texto-link ">Textura</Link>
              </ListGroup.Item> 
              <ListGroup.Item as="li" className='mb-3 lista-item'>
                <Link to="/adjetivos/adjetivo15" className="text-decoration-none texto-link ">Idade</Link>
              </ListGroup.Item> 
              <ListGroup.Item as="li" className='mb-3 lista-item'>
                <Link to="/adjetivos/adjetivo16" className="text-decoration-none texto-link ">Sabor</Link>
              </ListGroup.Item> 
              <ListGroup.Item as="li" className='mb-3 lista-item'>
                <Link to="/adjetivos/adjetivo17" className="text-decoration-none texto-link ">Som</Link>
              </ListGroup.Item> 
              <ListGroup.Item as="li" className='mb-3 lista-item'>
                <Link to="/adjetivos/adjetivo18" className="text-decoration-none texto-link ">Luz</Link>
              </ListGroup.Item> 
              <ListGroup.Item as="li" className='mb-3 lista-item'>
                <Link to="/adjetivos/adjetivo19" className="text-decoration-none texto-link ">Peso</Link>
              </ListGroup.Item> 
              <ListGroup.Item as="li" className='mb-3 lista-item'>
                <Link to="/adjetivos/adjetivo20" className="text-decoration-none texto-link ">Frequência</Link>
              </ListGroup.Item> 
              <ListGroup.Item as="li" className='mb-3 lista-item'>
                <Link to="/adjetivos/adjetivo21" className="text-decoration-none texto-link ">Dificuldade</Link>
              </ListGroup.Item> 
              <ListGroup.Item as="li" className='mb-3 lista-item'>
                <Link to="/adjetivos/adjetivo22" className="text-decoration-none texto-link ">Importância</Link>
              </ListGroup.Item> 
              <ListGroup.Item as="li" className='mb-3 lista-item'>
                <Link to="/adjetivos/adjetivo23" className="text-decoration-none texto-link ">Limpeza</Link>
              </ListGroup.Item> 
              <ListGroup.Item as="li" className='mb-3 lista-item'>
                <Link to="/adjetivos/adjetivo24" className="text-decoration-none texto-link ">Segurança</Link>
              </ListGroup.Item> 
              <ListGroup.Item as="li" className='mb-3 lista-item'>
                <Link to="/adjetivos/adjetivo25" className="text-decoration-none texto-link ">Popularidade</Link>
              </ListGroup.Item> 
              <ListGroup.Item as="li" className='mb-3 lista-item'>
                <Link to="/adjetivos/adjetivo26" className="text-decoration-none texto-link ">Riqueza</Link>
              </ListGroup.Item> 
              <ListGroup.Item as="li" className='mb-3 lista-item'>
                <Link to="/adjetivos/adjetivo27" className="text-decoration-none texto-link ">Saúde</Link>
              </ListGroup.Item> 
              <ListGroup.Item as="li" className='mb-3 lista-item'>
                <Link to="/adjetivos/adjetivo28" className="text-decoration-none texto-link ">Inteligência</Link>
              </ListGroup.Item> 
              <ListGroup.Item as="li" className='mb-3 lista-item'>
                <Link to="/adjetivos/adjetivo29" className="text-decoration-none texto-link ">Humor</Link>
              </ListGroup.Item> 
              <ListGroup.Item as="li" className='mb-3 lista-item'>
                <Link to="/adjetivos/adjetivo30" className="text-decoration-none texto-link ">Comportamento</Link>
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


