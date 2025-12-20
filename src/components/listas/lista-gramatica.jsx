import { Container, Row, Col } from 'react-bootstrap';
import RightNavBar from "../right-navbar";
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
          <div className="fw-bold">Verbos no Presente Simples</div>
          Frases no presente simples e verbo to be
           </Link>

        </div>
  
      </ListGroup.Item>
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start mb-3 lista-item" >
          
        <div className="ms-2 me-auto">
        <Link to="/gramatica/gramatica5" className="text-decoration-none texto-link"> 
          <div className="fw-bold">Verbo no Passado Simples</div> </Link>
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
          <div className="fw-bold">Futuro com going to</div> </Link>

        </div>
  
      </ListGroup.Item>
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start mb-3 lista-item" >
          
        <div className="ms-2 me-auto">
        <Link to="/gramatica/gramatica8" className="text-decoration-none texto-link"> 
          <div className="fw-bold">Formas Comparativas e Superlativas</div> </Link>

        </div>
  
      </ListGroup.Item>

      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start mb-3 lista-item" >
          
        <div className="ms-2 me-auto">
        <Link to="/gramatica/gramatica9" className="text-decoration-none texto-link"> 
          <div className="fw-bold">Tempos Contínuos e Perfeitos</div>
          Presente contínuo (estou falando), passado contínuo (estava falando), e presente perfeito (tenho falado). 
           </Link>

        </div>
      </ListGroup.Item>

      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start mb-3 lista-item" >
          
        <div className="ms-2 me-auto">
        <Link to="/gramatica/gramatica10" className="text-decoration-none texto-link"> 
          <div className="fw-bold">Adjetivos e Advérbios</div> </Link>
        </div>
      </ListGroup.Item>

      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start mb-3 lista-item" >
          
        <div className="ms-2 me-auto">
        <Link to="/gramatica/gramatica11" className="text-decoration-none texto-link"> 
          <div className="fw-bold">Gerund in English</div> </Link>
        </div>
      </ListGroup.Item>

      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start mb-3 lista-item" >
          
        <div className="ms-2 me-auto">
        <Link to="/gramatica/gramatica12" className="text-decoration-none texto-link"> 
          <div className="fw-bold">Modal Verbs</div> </Link>
        </div>
      </ListGroup.Item>

      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start mb-3 lista-item" >
          
        <div className="ms-2 me-auto">
        <Link to="/gramatica/gramatica13" className="text-decoration-none texto-link"> 
          <div className="fw-bold">Prepositions</div> </Link>
        </div>
      </ListGroup.Item>

      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start mb-3 lista-item" >
          
        <div className="ms-2 me-auto">
        <Link to="/gramatica/gramatica14" className="text-decoration-none texto-link"> 
          <div className="fw-bold">Question Words</div> </Link>
        </div>
      </ListGroup.Item>

      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start mb-3 lista-item" >
          
        <div className="ms-2 me-auto">
        <Link to="/gramatica/gramatica15" className="text-decoration-none texto-link"> 
          <div className="fw-bold">Conjunctions</div> </Link>
        </div>
      </ListGroup.Item>

      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start mb-3 lista-item" >
          
        <div className="ms-2 me-auto">
        <Link to="/gramatica/gramatica16" className="text-decoration-none texto-link"> 
          <div className="fw-bold">Verbos Modais</div> </Link>
        </div>
      </ListGroup.Item>

      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start mb-3 lista-item" >
          
        <div className="ms-2 me-auto">
        <Link to="/gramatica/gramatica17" className="text-decoration-none texto-link"> 
          <div className="fw-bold">Preposições de Lugar</div> </Link>
        </div>
      </ListGroup.Item>

      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start mb-3 lista-item" >
          
        <div className="ms-2 me-auto">
        <Link to="/gramatica/gramatica18" className="text-decoration-none texto-link"> 
          <div className="fw-bold">Preposições de Tempo</div> </Link>
        </div>
      </ListGroup.Item>

      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start mb-3 lista-item" >
          
        <div className="ms-2 me-auto">
        <Link to="/gramatica/gramatica19" className="text-decoration-none texto-link"> 
          <div className="fw-bold">Condicionais</div> </Link>
        </div>
      </ListGroup.Item>

      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start mb-3 lista-item" >
          
        <div className="ms-2 me-auto">
        <Link to="/gramatica/gramatica20" className="text-decoration-none texto-link"> 
          <div className="fw-bold">Voz Passiva</div> </Link>
        </div>
      </ListGroup.Item>

      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start mb-3 lista-item" >
          
        <div className="ms-2 me-auto">
        <Link to="/gramatica/gramatica21" className="text-decoration-none texto-link"> 
          <div className="fw-bold">Discurso Indireto</div> </Link>
        </div>
      </ListGroup.Item>

      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start mb-3 lista-item" >
          
        <div className="ms-2 me-auto">
        <Link to="/gramatica/gramatica22" className="text-decoration-none texto-link"> 
          <div className="fw-bold">Question Tags</div> </Link>
        </div>
      </ListGroup.Item>

      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start mb-3 lista-item" >
          
        <div className="ms-2 me-auto">
        <Link to="/gramatica/gramatica23" className="text-decoration-none texto-link"> 
          <div className="fw-bold">Phrasal Verbs</div> </Link>
        </div>
      </ListGroup.Item>

      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start mb-3 lista-item" >
          
        <div className="ms-2 me-auto">
        <Link to="/gramatica/gramatica24" className="text-decoration-none texto-link"> 
          <div className="fw-bold">Relative Clauses</div> </Link>
        </div>
      </ListGroup.Item>

      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start mb-3 lista-item" >
          
        <div className="ms-2 me-auto">
        <Link to="/gramatica/gramatica25" className="text-decoration-none texto-link"> 
          <div className="fw-bold">Used to</div> </Link>
        </div>
      </ListGroup.Item>

      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start mb-3 lista-item" >
          
        <div className="ms-2 me-auto">
        <Link to="/gramatica/gramatica26" className="text-decoration-none texto-link"> 
          <div className="fw-bold">Inversão</div> </Link>
        </div>
      </ListGroup.Item>

      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start mb-3 lista-item" >
          
        <div className="ms-2 me-auto">
        <Link to="/gramatica/gramatica27" className="text-decoration-none texto-link"> 
          <div className="fw-bold">Ellipsis</div> </Link>
        </div>
      </ListGroup.Item>

      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start mb-3 lista-item" >
          
        <div className="ms-2 me-auto">
        <Link to="/gramatica/gramatica28" className="text-decoration-none texto-link"> 
          <div className="fw-bold">Substitution</div> </Link>
        </div>
      </ListGroup.Item>

      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start mb-3 lista-item" >
          
        <div className="ms-2 me-auto">
        <Link to="/gramatica/gramatica29" className="text-decoration-none texto-link"> 
          <div className="fw-bold">Emphasis</div> </Link>
        </div>
      </ListGroup.Item>

      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start mb-3 lista-item" >
          
        <div className="ms-2 me-auto">
        <Link to="/gramatica/gramatica30" className="text-decoration-none texto-link"> 
          <div className="fw-bold">Linking Words</div> </Link>
        </div>
      </ListGroup.Item>

      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start mb-3 lista-item" >
          
        <div className="ms-2 me-auto">
        <Link to="/gramatica/gramatica31" className="text-decoration-none texto-link"> 
          <div className="fw-bold">Punctuation</div> </Link>
        </div>
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

export default ListaGramatica;