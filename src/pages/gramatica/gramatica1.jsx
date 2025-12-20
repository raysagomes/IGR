import Header from "../../components/header";
import Footer from "../../components/footer";
import { Helmet } from 'react-helmet-async';
import Logo from '../../components/logo';
import HeaderMenuGramatica from '../../components/headers/header-menu-gramatica';
import { Container, Col, Row } from "react-bootstrap";


export default function Gramatica1() {
    return(
<>
<Helmet>
        <title>Alfabeto</title>
      </Helmet>
<Header />
<Logo />
<HeaderMenuGramatica />

<div className="h1-titulo-da-pagina"> <h1 className="fw-bold h1-titulo-da-pagina"> Alfabeto </h1> </div>

<Container className="colunasGramatica">
  <Row className="borderedRow1">
    <Col className="borderedCol header-col">Letra</Col>
    <Col className="borderedCol header-col">Como soa</Col>
  </Row>
  <Row className="borderedRow">
    <Col className="borderedCol">A</Col>
    <Col className="borderedCol">êi</Col>
  </Row>
  <Row className="borderedRow1">
    <Col className="borderedCol">B</Col>
    <Col className="borderedCol">Bí</Col>
  </Row>
  <Row className="borderedRow">
    <Col className="borderedCol">C</Col>
    <Col className="borderedCol">Cí</Col>
  </Row>
  <Row className="borderedRow1">
    <Col className="borderedCol">D</Col>
    <Col className="borderedCol">Dí</Col>
  </Row>
  <Row className="borderedRow">
  <Col className="borderedCol">E</Col>
  <Col className="borderedCol">Í</Col>
</Row>
<Row className="borderedRow1">
  <Col className="borderedCol">F</Col>
  <Col className="borderedCol">Éf</Col>
</Row>
<Row className="borderedRow">
  <Col className="borderedCol">G</Col>
  <Col className="borderedCol">Jí</Col>
</Row>
<Row className="borderedRow1">
  <Col className="borderedCol">H</Col>
  <Col className="borderedCol">Êitch</Col>
</Row>
<Row className="borderedRow">
  <Col className="borderedCol">I</Col>
  <Col className="borderedCol">Ái</Col>
</Row>
<Row className="borderedRow1">
  <Col className="borderedCol">J</Col>
  <Col className="borderedCol">Jei</Col>
</Row>
<Row className="borderedRow">
  <Col className="borderedCol">K</Col>
  <Col className="borderedCol">Kei</Col>
</Row>
<Row className="borderedRow1">
  <Col className="borderedCol">L</Col>
  <Col className="borderedCol">Él</Col>
</Row>
<Row className="borderedRow">
  <Col className="borderedCol">M</Col>
  <Col className="borderedCol">Ém</Col>
</Row>
<Row className="borderedRow1">
  <Col className="borderedCol">N</Col>
  <Col className="borderedCol">Én</Col>
</Row>
<Row className="borderedRow">
  <Col className="borderedCol">O</Col>
  <Col className="borderedCol">Óu</Col>
</Row>
<Row className="borderedRow1">
  <Col className="borderedCol">P</Col>
  <Col className="borderedCol">Pí</Col>
</Row>
<Row className="borderedRow">
  <Col className="borderedCol">Q</Col>
  <Col className="borderedCol">Quíu</Col>
</Row>
<Row className="borderedRow1">
  <Col className="borderedCol">R</Col>
  <Col className="borderedCol">Ár</Col>
</Row>
<Row className="borderedRow">
  <Col className="borderedCol">S</Col>
  <Col className="borderedCol">És</Col>
</Row>
<Row className="borderedRow1">
  <Col className="borderedCol">T</Col>
  <Col className="borderedCol">Tí</Col>
</Row>
<Row className="borderedRow">
  <Col className="borderedCol">U</Col>
  <Col className="borderedCol">Iú</Col>
</Row>
<Row className="borderedRow1">
  <Col className="borderedCol">V</Col>
  <Col className="borderedCol">Ví</Col>
</Row>
<Row className="borderedRow">
  <Col className="borderedCol">W</Col>
  <Col className="borderedCol">Dâbliu</Col>
</Row>
<Row className="borderedRow1">
  <Col className="borderedCol">X</Col>
  <Col className="borderedCol">Écs</Col>
</Row>
<Row className="borderedRow">
  <Col className="borderedCol">Y</Col>
  <Col className="borderedCol">Uái</Col>
</Row>
<Row className="borderedRow1">
  <Col className="borderedCol">Z</Col>
  <Col className="borderedCol">Zí</Col>
</Row>



    </Container>



<Footer />
</>
    );
}
