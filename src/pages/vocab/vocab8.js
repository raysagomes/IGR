import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import HeaderMenuVocabulario from "../../components/header-menu-vocabulario";
import Logo from "../../components/logo";
import { Container, Col, Row } from "react-bootstrap";
import ExplicacaoVocab from "../../components/explicacao-vocab";
import { Helmet } from "react-helmet-async";

export default function Vocab8() {
    return(
<>
<Helmet>
        <title>Banheiro</title>
      </Helmet>
<Header /> 
<Logo /> 
<HeaderMenuVocabulario />
<div className="h1-titulo-da-pagina"> <h1 className="fw-bold h1-titulo-da-pagina">Banheiro</h1> </div>

<ExplicacaoVocab />

<Container className="colunasVocabulario">

<Row className="borderedRow">
  <Col className="borderedCol header-col">Como se escreve</Col>
  <Col className="borderedCol header-col">Como sôa</Col>
  <Col className="borderedCol header-col">Tradução</Col>
</Row>
<Row className="borderedRow1">
  <Col className="borderedCol">Blow Dryer</Col>
  <Col className="borderedCol">Blóu Dráir</Col>
  <Col className="borderedCol">Secador de Cabelo</Col>
</Row>
<Row className="borderedRow">
  <Col className="borderedCol">Bubble</Col>
  <Col className="borderedCol">Bóbôl</Col>
  <Col className="borderedCol">Bolha</Col>
</Row>
<Row className="borderedRow1">
  <Col className="borderedCol">Comb</Col>
  <Col className="borderedCol">Kôm</Col>
  <Col className="borderedCol">Pente</Col>
</Row>
<Row className="borderedRow">
  <Col className="borderedCol">Deodorant</Col>
  <Col className="borderedCol">Diôdôránt</Col>
  <Col className="borderedCol">Desodorante</Col>
</Row>
<Row className="borderedRow1">
  <Col className="borderedCol">Drip</Col>
  <Col className="borderedCol">Dríp</Col>
  <Col className="borderedCol">Gotejamento</Col>
</Row>
<Row className="borderedRow">
  <Col className="borderedCol">Faucet</Col>
  <Col className="borderedCol">Fósset</Col>
  <Col className="borderedCol">Torneira</Col>
</Row>
<Row className="borderedRow1">
  <Col className="borderedCol">Floss</Col>
  <Col className="borderedCol">Flós</Col>
  <Col className="borderedCol">Fio Dental</Col>
</Row>
<Row className="borderedRow">
  <Col className="borderedCol">Hairbrush</Col>
  <Col className="borderedCol">Rêibrâsh</Col>
  <Col className="borderedCol">Escova de Cabelo</Col>
</Row>
<Row className="borderedRow1">
  <Col className="borderedCol">Lipstick</Col>
  <Col className="borderedCol">Lípstík</Col>
  <Col className="borderedCol">Batom</Col>
</Row>
<Row className="borderedRow">
  <Col className="borderedCol">Makeup</Col>
  <Col className="borderedCol">Mêikâp</Col>
  <Col className="borderedCol">Maquiagem</Col>
</Row>
<Row className="borderedRow1">
  <Col className="borderedCol">Mirror</Col>
  <Col className="borderedCol">Mírrôr</Col>
  <Col className="borderedCol">Espelho</Col>
</Row>
<Row className="borderedRow">
  <Col className="borderedCol">Nail Clippers</Col>
  <Col className="borderedCol">Néil Klíppèrs</Col>
  <Col className="borderedCol">Cortador de Unha</Col>
</Row>
<Row className="borderedRow1">
  <Col className="borderedCol">Nail Polish</Col>
  <Col className="borderedCol">Néil Pólîsh</Col>
  <Col className="borderedCol">Esmalte</Col>
</Row>
<Row className="borderedRow">
  <Col className="borderedCol">Perfume</Col>
  <Col className="borderedCol">Pêrfyûm</Col>
  <Col className="borderedCol">Perfume</Col>
</Row>
<Row className="borderedRow1">
  <Col className="borderedCol">Plunger</Col>
  <Col className="borderedCol">Plânjêr</Col>
  <Col className="borderedCol">Pistão</Col>
</Row>
<Row className="borderedRow">
  <Col className="borderedCol">Scale</Col>
  <Col className="borderedCol">Skéil</Col>
  <Col className="borderedCol">Balança</Col>
</Row>
<Row className="borderedRow1">
  <Col className="borderedCol">Shampoo</Col>
  <Col className="borderedCol">Shámpu</Col>
  <Col className="borderedCol">Xampu</Col>
</Row>
<Row className="borderedRow">
  <Col className="borderedCol">Shower</Col>
  <Col className="borderedCol">Sháuêr</Col>
  <Col className="borderedCol">Chuveiro</Col>
</Row>
<Row className="borderedRow1">
  <Col className="borderedCol">Shower Head</Col>
  <Col className="borderedCol">Sháuêr Réd</Col>
  <Col className="borderedCol">Chuveiro</Col>
</Row>
<Row className="borderedRow">
  <Col className="borderedCol">Sink</Col>
  <Col className="borderedCol">Sínk</Col>
  <Col className="borderedCol">Pia</Col>
</Row>
<Row className="borderedRow1">
  <Col className="borderedCol">Soap</Col>
  <Col className="borderedCol">Sôp</Col>
  <Col className="borderedCol">Sabão</Col>
</Row>
<Row className="borderedRow">
  <Col className="borderedCol">Toilet</Col>
  <Col className="borderedCol">Tóilêt</Col>
  <Col className="borderedCol">Banheiro</Col>
</Row>
<Row className="borderedRow1">
  <Col className="borderedCol">Toilet Paper</Col>
  <Col className="borderedCol">Tóilêt Pêipêr</Col>
  <Col className="borderedCol">Papel Higiênico</Col>
</Row>
<Row className="borderedRow">
  <Col className="borderedCol">Tissues</Col>
  <Col className="borderedCol">Tíchus</Col>
  <Col className="borderedCol">Papel Toalha/Lenço</Col>
</Row>
<Row className="borderedRow1">
  <Col className="borderedCol">Towel</Col>
  <Col className="borderedCol">Tául</Col>
  <Col className="borderedCol">Toalha</Col>
</Row>
<Row className="borderedRow">
  <Col className="borderedCol">Towel Rack</Col>
  <Col className="borderedCol">Tául Rák</Col>
  <Col className="borderedCol">Toalheiro</Col>
</Row>
<Row className="borderedRow1">
  <Col className="borderedCol">Toothpaste</Col>
  <Col className="borderedCol">Túspêist</Col>
  <Col className="borderedCol">Creme Dental</Col>
</Row>



    </Container>



<Footer />
</>
    );
}
