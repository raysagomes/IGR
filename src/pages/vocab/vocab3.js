import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import HeaderMenuVocabulario from "../../components/header-menu-vocabulario";
import Logo from "../../components/logo";
import { Container, Col, Row } from "react-bootstrap";
import ExplicacaoVocab from "../../components/explicacao-vocab";
import { Helmet } from "react-helmet-async";

export default function Vocab3() {
    return(
<>
<Helmet>
        <title>Bebidas</title>
      </Helmet>
<Header /> 
<Logo /> 
<HeaderMenuVocabulario />
<div className="h1-titulo-da-pagina"> <h1 className="fw-bold h1-titulo-da-pagina"> Bebidas </h1> </div>

<ExplicacaoVocab />

<Container className="colunasVocabulario">

<Row className="borderedRow1">
  <Col className="borderedCol header-col">Como se escreve</Col>
  <Col className="borderedCol header-col">Como soa</Col>
  <Col className="borderedCol header-col">Tradução</Col>
</Row>
<Row className="borderedRow">
  <Col className="borderedCol">Beer</Col>
  <Col className="borderedCol">Bír</Col>
  <Col className="borderedCol">Cerveja</Col>
</Row>
<Row className="borderedRow1">
  <Col className="borderedCol">Cocktail</Col>
  <Col className="borderedCol">Cóctéil</Col>
  <Col className="borderedCol">Coquetel</Col>
</Row>
<Row className="borderedRow">
  <Col className="borderedCol">Coffee</Col>
  <Col className="borderedCol">Kófí</Col>
  <Col className="borderedCol">Café</Col>
</Row>
<Row className="borderedRow1">
  <Col className="borderedCol">Coke, Soda, Soft Drink</Col>
  <Col className="borderedCol">Kôk, Sóudâ, Sóft Drínk</Col>
  <Col className="borderedCol">Coca-Cola, Refrigerantes</Col>
</Row>
<Row className="borderedRow">
  <Col className="borderedCol">Juice</Col>
  <Col className="borderedCol">Jús</Col>
  <Col className="borderedCol">Suco</Col>
</Row>
<Row className="borderedRow1">
  <Col className="borderedCol">Milkshake</Col>
  <Col className="borderedCol">Milkshêik</Col>
  <Col className="borderedCol">Milkshake</Col>
</Row>
<Row className="borderedRow">
  <Col className="borderedCol">Tea</Col>
  <Col className="borderedCol">Tí</Col>
  <Col className="borderedCol">Chá</Col>
</Row>
<Row className="borderedRow1">
  <Col className="borderedCol">Water</Col>
  <Col className="borderedCol">Wôter</Col>
  <Col className="borderedCol">Água</Col>
</Row>
<Row className="borderedRow">
  <Col className="borderedCol">Wine</Col>
  <Col className="borderedCol">Wáin</Col>
  <Col className="borderedCol">Vinho</Col>
</Row>
<Row className="borderedRow1">
  <Col className="borderedCol">Americano</Col>
  <Col className="borderedCol">Ámericâno</Col>
  <Col className="borderedCol">Americano</Col>
</Row>
<Row className="borderedRow">
  <Col className="borderedCol">Brandy</Col>
  <Col className="borderedCol">Brândi</Col>
  <Col className="borderedCol">Brandy</Col>
</Row>
<Row className="borderedRow1">
  <Col className="borderedCol">Espresso</Col>
  <Col className="borderedCol">Éspresso</Col>
  <Col className="borderedCol">Espresso</Col>
</Row>
<Row className="borderedRow">
  <Col className="borderedCol">Hot Chocolate</Col>
  <Col className="borderedCol">Rót Chocôlêt</Col>
  <Col className="borderedCol">Chocolate Quente</Col>
</Row>
<Row className="borderedRow1">
  <Col className="borderedCol">Lemonade</Col>
  <Col className="borderedCol">Lêmônêid</Col>
  <Col className="borderedCol">Limonada</Col>
</Row>


    </Container>



<Footer />
</>
    );
}
