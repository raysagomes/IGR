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
      <ListGroup.Item as="li" className='mb-3 lista-item'>
      <Link to="/conversacoes/conversacao11" className="text-decoration-none texto-link ">Sarah e a Farmácia</Link>
      </ListGroup.Item>
      <ListGroup.Item as="li" className='mb-3 lista-item'>
      <Link to="/conversacoes/conversacao12" className="text-decoration-none texto-link ">Robert e o Banco</Link>
      </ListGroup.Item>
      <ListGroup.Item as="li" className='mb-3 lista-item'>
      <Link to="/conversacoes/conversacao13" className="text-decoration-none texto-link ">Emma e o Posto de Gasolina</Link>
      </ListGroup.Item>
      <ListGroup.Item as="li" className='mb-3 lista-item'>
      <Link to="/conversacoes/conversacao14" className="text-decoration-none texto-link ">Lucas e a Loja de Roupas</Link>
      </ListGroup.Item>
      <ListGroup.Item as="li" className='mb-3 lista-item'>
      <Link to="/conversacoes/conversacao15" className="text-decoration-none texto-link ">Anna e o Médico</Link>
      </ListGroup.Item>
      <ListGroup.Item as="li" className='mb-3 lista-item'>
      <Link to="/conversacoes/conversacao16" className="text-decoration-none texto-link ">Peter e o Táxi</Link>
      </ListGroup.Item>
      <ListGroup.Item as="li" className='mb-3 lista-item'>
      <Link to="/conversacoes/conversacao17" className="text-decoration-none texto-link ">Lisa e o Salão de Beleza</Link>
      </ListGroup.Item>
      <ListGroup.Item as="li" className='mb-3 lista-item'>
      <Link to="/conversacoes/conversacao18" className="text-decoration-none texto-link ">Tom e a Academia</Link>
      </ListGroup.Item>
      <ListGroup.Item as="li" className='mb-3 lista-item'>
      <Link to="/conversacoes/conversacao19" className="text-decoration-none texto-link ">Rachel e o Correio</Link>
      </ListGroup.Item>
      <ListGroup.Item as="li" className='mb-3 lista-item'>
      <Link to="/conversacoes/conversacao20" className="text-decoration-none texto-link ">Kevin e a Livraria</Link>
      </ListGroup.Item>
      <ListGroup.Item as="li" className='mb-3 lista-item'>
      <Link to="/conversacoes/conversacao21" className="text-decoration-none texto-link ">Sophie e o Dentista</Link>
      </ListGroup.Item>
      <ListGroup.Item as="li" className='mb-3 lista-item'>
      <Link to="/conversacoes/conversacao22" className="text-decoration-none texto-link ">Mark e a Oficina</Link>
      </ListGroup.Item>
      <ListGroup.Item as="li" className='mb-3 lista-item'>
      <Link to="/conversacoes/conversacao23" className="text-decoration-none texto-link ">Julia e a Padaria</Link>
      </ListGroup.Item>
      <ListGroup.Item as="li" className='mb-3 lista-item'>
      <Link to="/conversacoes/conversacao24" className="text-decoration-none texto-link ">David e a Escola de Idiomas</Link>
      </ListGroup.Item>
      <ListGroup.Item as="li" className='mb-3 lista-item'>
      <Link to="/conversacoes/conversacao25" className="text-decoration-none texto-link ">Amanda e o Pet Shop</Link>
      </ListGroup.Item>
      <ListGroup.Item as="li" className='mb-3 lista-item'>
      <Link to="/conversacoes/conversacao26" className="text-decoration-none texto-link ">Carlos e a Agência de Viagens</Link>
      </ListGroup.Item>
      <ListGroup.Item as="li" className='mb-3 lista-item'>
      <Link to="/conversacoes/conversacao27" className="text-decoration-none texto-link ">Nicole e a Floricultura</Link>
      </ListGroup.Item>
      <ListGroup.Item as="li" className='mb-3 lista-item'>
      <Link to="/conversacoes/conversacao28" className="text-decoration-none texto-link ">Ryan e a Loja de Eletrônicos</Link>
      </ListGroup.Item>
      <ListGroup.Item as="li" className='mb-3 lista-item'>
      <Link to="/conversacoes/conversacao29" className="text-decoration-none texto-link ">Jessica e o Supermercado</Link>
      </ListGroup.Item>
      <ListGroup.Item as="li" className='mb-3 lista-item'>
      <Link to="/conversacoes/conversacao30" className="text-decoration-none texto-link ">Alex e a Pizzaria</Link>
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