import { Container, Row, Col } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import RightNavBar from "../right-navbar";
import { Link } from 'react-router-dom';

function ListaVocabulario() {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <h2 className='h2-vocab'>Vocabulário</h2>
            <ListGroup as="ol" numbered className='lista-vocab'>
              <ListGroup.Item as="li" className='mb-3 lista-item'>
                <Link to="/vocab/vocab1" className="text-decoration-none texto-link ">Números</Link>
              </ListGroup.Item>
              <ListGroup.Item as="li" className='mb-3 lista-item'>
                <Link to="/vocab/vocab2" className="text-decoration-none texto-link">Cores</Link>
              </ListGroup.Item>
              <ListGroup.Item as="li" className='mb-3 lista-item'>
                <Link to="/vocab/vocab3" className="text-decoration-none texto-link">Bebidas</Link>
              </ListGroup.Item>
              <ListGroup.Item as="li" className='mb-3 lista-item'>
                <Link to="/vocab/vocab4" className="text-decoration-none texto-link">Frutas</Link>
              </ListGroup.Item>
              <ListGroup.Item as="li" className='mb-3 lista-item'>
                <Link to="/vocab/vocab5" className="text-decoration-none texto-link">Vegetais</Link>
              </ListGroup.Item>
              <ListGroup.Item as="li" className='mb-3 lista-item'>
                <Link to="/vocab/vocab6" className="text-decoration-none texto-link">Fast Food</Link>
              </ListGroup.Item>
              <ListGroup.Item as="li" className='mb-3 lista-item'>
                <Link to="/vocab/vocab7" className="text-decoration-none texto-link">Cômodos da casa</Link>
              </ListGroup.Item>
              <ListGroup.Item as="li" className='mb-3 lista-item'>
                <Link to="/vocab/vocab8" className="text-decoration-none texto-link">Banheiro</Link>
              </ListGroup.Item>
              <ListGroup.Item as="li" className='mb-3 lista-item'>
                <Link to="/vocab/vocab9" className="text-decoration-none texto-link">Quarto</Link>
              </ListGroup.Item>
              <ListGroup.Item as="li" className='mb-3 lista-item'>
                <Link to="/vocab/vocab10" className="text-decoration-none texto-link">Sala de jantar</Link>
              </ListGroup.Item>
              <ListGroup.Item as="li" className='mb-3 lista-item'>
                <Link to="/vocab/vocab11" className="text-decoration-none texto-link">Cozinha</Link>
              </ListGroup.Item>
              <ListGroup.Item as="li" className='mb-3 lista-item'>
                <Link to="/vocab/vocab12" className="text-decoration-none texto-link">Membros da família</Link>
              </ListGroup.Item>
              <ListGroup.Item as="li" className='mb-3 lista-item'>
                <Link to="/vocab/vocab13" className="text-decoration-none texto-link">Rosto</Link>
              </ListGroup.Item>
              <ListGroup.Item as="li" className='mb-3 lista-item'>
                <Link to="/vocab/vocab14" className="text-decoration-none texto-link">Corpo</Link>
              </ListGroup.Item>
              <ListGroup.Item as="li" className='mb-3 lista-item'>
                <Link to="/vocab/vocab15" className="text-decoration-none texto-link">Animais</Link>
              </ListGroup.Item>
              <ListGroup.Item as="li" className='mb-3 lista-item'>
                <Link to="/vocab/vocab16" className="text-decoration-none texto-link">Roupas</Link>
              </ListGroup.Item>
              <ListGroup.Item as="li" className='mb-3 lista-item'>
                <Link to="/vocab/vocab17" className="text-decoration-none texto-link">Transporte</Link>
              </ListGroup.Item>
              <ListGroup.Item as="li" className='mb-3 lista-item'>
                <Link to="/vocab/vocab18" className="text-decoration-none texto-link">Profissões</Link>
              </ListGroup.Item>
              <ListGroup.Item as="li" className='mb-3 lista-item'>
                <Link to="/vocab/vocab19" className="text-decoration-none texto-link">Esportes</Link>
              </ListGroup.Item>
              <ListGroup.Item as="li" className='mb-3 lista-item'>
                <Link to="/vocab/vocab20" className="text-decoration-none texto-link">Instrumentos Musicais</Link>
              </ListGroup.Item>
              <ListGroup.Item as="li" className='mb-3 lista-item'>
                <Link to="/vocab/vocab21" className="text-decoration-none texto-link">Clima</Link>
              </ListGroup.Item>
              <ListGroup.Item as="li" className='mb-3 lista-item'>
                <Link to="/vocab/vocab22" className="text-decoration-none texto-link">Escola</Link>
              </ListGroup.Item>
              <ListGroup.Item as="li" className='mb-3 lista-item'>
                <Link to="/vocab/vocab23" className="text-decoration-none texto-link">Tecnologia</Link>
              </ListGroup.Item>
              <ListGroup.Item as="li" className='mb-3 lista-item'>
                <Link to="/vocab/vocab24" className="text-decoration-none texto-link">Natureza</Link>
              </ListGroup.Item>
              <ListGroup.Item as="li" className='mb-3 lista-item'>
                <Link to="/vocab/vocab25" className="text-decoration-none texto-link">Saúde</Link>
              </ListGroup.Item>
              <ListGroup.Item as="li" className='mb-3 lista-item'>
                <Link to="/vocab/vocab26" className="text-decoration-none texto-link">Tempo</Link>
              </ListGroup.Item>
              <ListGroup.Item as="li" className='mb-3 lista-item'>
                <Link to="/vocab/vocab27" className="text-decoration-none texto-link">Dinheiro</Link>
              </ListGroup.Item>
              <ListGroup.Item as="li" className='mb-3 lista-item'>
                <Link to="/vocab/vocab28" className="text-decoration-none texto-link">Viagem</Link>
              </ListGroup.Item>
              <ListGroup.Item as="li" className='mb-3 lista-item'>
                <Link to="/vocab/vocab29" className="text-decoration-none texto-link">Entretenimento</Link>
              </ListGroup.Item>
              <ListGroup.Item as="li" className='mb-3 lista-item'>
                <Link to="/vocab/vocab30" className="text-decoration-none texto-link">Trabalho</Link>
              </ListGroup.Item>
              <ListGroup.Item as="li" className='mb-3 lista-item'>
                <Link to="/vocab/vocab31" className="text-decoration-none texto-link">Comida</Link>
              </ListGroup.Item>
              <ListGroup.Item as="li" className='mb-3 lista-item'>
                <Link to="/vocab/vocab32" className="text-decoration-none texto-link">Cidade</Link>
              </ListGroup.Item>
              <ListGroup.Item as="li" className='mb-3 lista-item'>
                <Link to="/vocab/vocab33" className="text-decoration-none texto-link">Objetos Pessoais</Link>
              </ListGroup.Item>
              <ListGroup.Item as="li" className='mb-3 lista-item'>
                <Link to="/vocab/vocab34" className="text-decoration-none texto-link">Emoções</Link>
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

export default ListaVocabulario;
