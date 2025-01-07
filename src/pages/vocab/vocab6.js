import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import HeaderMenuVocabulario from "../../components/header-menu-vocabulario";
import Logo from "../../components/logo";
import { Container, Col, Row } from "react-bootstrap";
import ExplicacaoVocab from "../../components/explicacao-vocab";
import { Helmet } from "react-helmet-async";

export default function Vocab6() {
    return(
<>
<Helmet>
        <title>Fast Food</title>
      </Helmet>
<Header /> 
<Logo /> 
<HeaderMenuVocabulario />
<div className="h1-titulo-da-pagina"> <h1 className="fw-bold h1-titulo-da-pagina"> Fast Food </h1> </div>

<ExplicacaoVocab />

<Container className="colunasVocabulario">

<Row className="borderedRow">
  <Col className="borderedCol header-col">Como se escreve</Col>
  <Col className="borderedCol header-col">Como soa</Col>
  <Col className="borderedCol header-col">Tradução</Col>
</Row>
<Row className="borderedRow1">
  <Col className="borderedCol">Burger</Col>
  <Col className="borderedCol">Bârgêr</Col>
  <Col className="borderedCol">Hambúrguer</Col>
</Row>
<Row className="borderedRow">
  <Col className="borderedCol">Cheeseburger</Col>
  <Col className="borderedCol">Chízbârgêr</Col>
  <Col className="borderedCol">Cheeseburguer</Col>
</Row>
<Row className="borderedRow1">
  <Col className="borderedCol">Chicken Nuggets</Col>
  <Col className="borderedCol">Tchíken Nágêts</Col>
  <Col className="borderedCol">Nuggets de Frango</Col>
</Row>
<Row className="borderedRow">
  <Col className="borderedCol">Chicken Wings</Col>
  <Col className="borderedCol">Tchíken Uíngs</Col>
  <Col className="borderedCol">Asas de Frango</Col>
</Row>
<Row className="borderedRow1">
  <Col className="borderedCol">Fried Chicken</Col>
  <Col className="borderedCol">Fruáid Tchíken</Col>
  <Col className="borderedCol">Frango Frito</Col>
</Row>
<Row className="borderedRow">
  <Col className="borderedCol">Fish and Chips</Col>
  <Col className="borderedCol">Físh and Tchíps</Col>
  <Col className="borderedCol">Peixe com Batatas Fritas</Col>
</Row>
<Row className="borderedRow1">
  <Col className="borderedCol">Hot Dog</Col>
  <Col className="borderedCol">Rót Dóg</Col>
  <Col className="borderedCol">Cachorro-Quente</Col>
</Row>
<Row className="borderedRow">
  <Col className="borderedCol">Onion Rings</Col>
  <Col className="borderedCol">Ôniân Ruíngs</Col>
  <Col className="borderedCol">Anéis de Cebola</Col>
</Row>
<Row className="borderedRow1">
  <Col className="borderedCol">Pizza</Col>
  <Col className="borderedCol">Pítsâ</Col>
  <Col className="borderedCol">Pizza</Col>
</Row>
<Row className="borderedRow">
  <Col className="borderedCol">Quesadilla</Col>
  <Col className="borderedCol">Kesadílâ</Col>
  <Col className="borderedCol">Quesadilla</Col>
</Row>
<Row className="borderedRow1">
  <Col className="borderedCol">Fries</Col>
  <Col className="borderedCol">Fruáiz</Col>
  <Col className="borderedCol">Batata Frita</Col>
</Row>
<Row className="borderedRow">
  <Col className="borderedCol">Sandwich</Col>
  <Col className="borderedCol">Senduích</Col>
  <Col className="borderedCol">Sanduíche</Col>
</Row>
<Row className="borderedRow1">
  <Col className="borderedCol">Tacos</Col>
  <Col className="borderedCol">Tákôs</Col>
  <Col className="borderedCol">Tacos</Col>
</Row>
<Row className="borderedRow">
  <Col className="borderedCol">Wrap</Col>
  <Col className="borderedCol">Ruáp</Col>
  <Col className="borderedCol">Wrap</Col>
</Row>



    </Container>



<Footer />
</>
    );
}
