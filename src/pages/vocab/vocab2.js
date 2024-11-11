import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import HeaderMenuVocabulario from "../../components/header-menu-vocabulario";
import Logo from "../../components/logo";
import { Container, Col, Row } from "react-bootstrap";
import ExplicacaoVocab from "../../components/explicacao-vocab";
import { Helmet } from "react-helmet-async";

export default function Vocab2() {
    return(
<>
<Helmet>
        <title>Cores</title>
      </Helmet>
<Header /> 
<Logo /> 
<HeaderMenuVocabulario />
<div className="h1-titulo-da-pagina"> <h1 className="fw-bold h1-titulo-da-pagina"> Cores </h1> </div>

<ExplicacaoVocab />

<Container className="colunasVocabulario">
<Row className="borderedRow1">
  <Col className="borderedCol header-col">Como se escreve</Col>
  <Col className="borderedCol header-col">Como soa</Col>
  <Col className="borderedCol header-col">Tradução</Col>
</Row>
<Row className="borderedRow">
  <Col className="borderedCol">Beige</Col>
  <Col className="borderedCol">Bêigi</Col>
  <Col className="borderedCol">Bege</Col>
</Row>
<Row className="borderedRow1">
  <Col className="borderedCol">Black</Col>
  <Col className="borderedCol">Bléki</Col>
  <Col className="borderedCol">Preto</Col>
</Row>
<Row className="borderedRow">
  <Col className="borderedCol">Blue</Col>
  <Col className="borderedCol">Blu</Col>
  <Col className="borderedCol">Azul</Col>
</Row>
<Row className="borderedRow1">
  <Col className="borderedCol">Brown</Col>
  <Col className="borderedCol">Braun</Col>
  <Col className="borderedCol">Marrom</Col>
</Row>
<Row className="borderedRow">
  <Col className="borderedCol">Dark Blue</Col>
  <Col className="borderedCol">Dárk Blu</Col>
  <Col className="borderedCol">Azul Escuro</Col>
</Row>
<Row className="borderedRow1">
  <Col className="borderedCol">Dark Green</Col>
  <Col className="borderedCol">Dárk Grin</Col>
  <Col className="borderedCol">Verde Escuro</Col>
</Row>
<Row className="borderedRow">
  <Col className="borderedCol">Green</Col>
  <Col className="borderedCol">Grin</Col>
  <Col className="borderedCol">Verde</Col>
</Row>
<Row className="borderedRow1">
  <Col className="borderedCol">Grey or Gray</Col>
  <Col className="borderedCol">Gréi or Grêi</Col>
  <Col className="borderedCol">Cinza ou Cinza</Col>
</Row>
<Row className="borderedRow">
  <Col className="borderedCol">Light Blue</Col>
  <Col className="borderedCol">Láit Blu</Col>
  <Col className="borderedCol">Azul Claro</Col>
</Row>
<Row className="borderedRow1">
  <Col className="borderedCol">Light Green</Col>
  <Col className="borderedCol">Láit Grin</Col>
  <Col className="borderedCol">Verde Claro</Col>
</Row>
<Row className="borderedRow">
  <Col className="borderedCol">Olive</Col>
  <Col className="borderedCol">Óliv</Col>
  <Col className="borderedCol">Oliva</Col>
</Row>
<Row className="borderedRow1">
  <Col className="borderedCol">Orange</Col>
  <Col className="borderedCol">Ôrindj</Col>
  <Col className="borderedCol">Laranja</Col>
</Row>
<Row className="borderedRow">
  <Col className="borderedCol">Pink</Col>
  <Col className="borderedCol">Pínk</Col>
  <Col className="borderedCol">Rosa</Col>
</Row>
<Row className="borderedRow1">
  <Col className="borderedCol">Purple</Col>
  <Col className="borderedCol">Pârpul</Col>
  <Col className="borderedCol">Roxo</Col>
</Row>
<Row className="borderedRow">
  <Col className="borderedCol">Red</Col>
  <Col className="borderedCol">Réd</Col>
  <Col className="borderedCol">Vermelho</Col>
</Row>
<Row className="borderedRow1">
  <Col className="borderedCol">Silver</Col>
  <Col className="borderedCol">Sílver</Col>
  <Col className="borderedCol">Prata</Col>
</Row>
<Row className="borderedRow">
  <Col className="borderedCol">Violet</Col>
  <Col className="borderedCol">Váiolêt</Col>
  <Col className="borderedCol">Violeta</Col>
</Row>
<Row className="borderedRow1">
  <Col className="borderedCol">White</Col>
  <Col className="borderedCol">Uáit</Col>
  <Col className="borderedCol">Branco</Col>
</Row>
<Row className="borderedRow">
  <Col className="borderedCol">Yellow</Col>
  <Col className="borderedCol">Iélou</Col>
  <Col className="borderedCol">Amarelo</Col>
</Row>
<Row className="borderedRow1">
  <Col className="borderedCol">Golden</Col>
  <Col className="borderedCol">Gôldên</Col>
  <Col className="borderedCol">Dourado</Col>
</Row>


    </Container>



<Footer />
</>
    );
}
