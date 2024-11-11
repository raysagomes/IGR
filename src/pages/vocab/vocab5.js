import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import HeaderMenuVocabulario from "../../components/header-menu-vocabulario";
import Logo from "../../components/logo";
import { Container, Col, Row } from "react-bootstrap";
import ExplicacaoVocab from "../../components/explicacao-vocab";
import { Helmet } from "react-helmet-async";

export default function Vocab5() {
    return(
<>
<Helmet>
        <title>Vegetais</title>
      </Helmet>
<Header /> 
<Logo /> 
<HeaderMenuVocabulario />
<div className="h1-titulo-da-pagina"> <h1 className="fw-bold h1-titulo-da-pagina"> Vegetais </h1> </div>

<ExplicacaoVocab />

<Container className="colunasVocabulario">

<Row className="borderedRow">
  <Col className="borderedCol header-col">Como se escreve</Col>
  <Col className="borderedCol header-col">Como soa</Col>
  <Col className="borderedCol header-col">Tradução</Col>
</Row>
<Row className="borderedRow1">
  <Col className="borderedCol">Artichoke</Col>
  <Col className="borderedCol">Ártichôk</Col>
  <Col className="borderedCol">Alcachofra</Col>
</Row>
<Row className="borderedRow">
  <Col className="borderedCol">Asparagus</Col>
  <Col className="borderedCol">Áspárâgus</Col>
  <Col className="borderedCol">Aspargo</Col>
</Row>
<Row className="borderedRow1">
  <Col className="borderedCol">Beans</Col>
  <Col className="borderedCol">Bíns</Col>
  <Col className="borderedCol">Feijões</Col>
</Row>
<Row className="borderedRow">
  <Col className="borderedCol">Beet</Col>
  <Col className="borderedCol">Bít</Col>
  <Col className="borderedCol">Beterraba</Col>
</Row>
<Row className="borderedRow1">
  <Col className="borderedCol">Brussels Sprouts</Col>
  <Col className="borderedCol">Brússêls Spráuts</Col>
  <Col className="borderedCol">Couve-de-Bruxelas</Col>
</Row>
<Row className="borderedRow">
  <Col className="borderedCol">Cabbage</Col>
  <Col className="borderedCol">Kábidj</Col>
  <Col className="borderedCol">Repolho</Col>
</Row>
<Row className="borderedRow1">
  <Col className="borderedCol">Carrot</Col>
  <Col className="borderedCol">Kárót</Col>
  <Col className="borderedCol">Cenoura</Col>
</Row>
<Row className="borderedRow">
  <Col className="borderedCol">Cauliflower</Col>
  <Col className="borderedCol">Káuliflaur</Col>
  <Col className="borderedCol">Couve-Flor</Col>
</Row>
<Row className="borderedRow1">
  <Col className="borderedCol">Celery</Col>
  <Col className="borderedCol">Séləri</Col>
  <Col className="borderedCol">Aipo</Col>
</Row>
<Row className="borderedRow">
  <Col className="borderedCol">Chard</Col>
  <Col className="borderedCol">Chárd</Col>
  <Col className="borderedCol">Acelga</Col>
</Row>
<Row className="borderedRow1">
  <Col className="borderedCol">Corn</Col>
  <Col className="borderedCol">Kórn</Col>
  <Col className="borderedCol">Milho</Col>
</Row>
<Row className="borderedRow">
  <Col className="borderedCol">Cucumber</Col>
  <Col className="borderedCol">Cúcúmbêr</Col>
  <Col className="borderedCol">Pepino</Col>
</Row>
<Row className="borderedRow1">
  <Col className="borderedCol">Eggplant</Col>
  <Col className="borderedCol">Égplânt</Col>
  <Col className="borderedCol">Berinjela</Col>
</Row>
<Row className="borderedRow">
  <Col className="borderedCol">Garlic</Col>
  <Col className="borderedCol">Gárlic</Col>
  <Col className="borderedCol">Alho</Col>
</Row>
<Row className="borderedRow1">
  <Col className="borderedCol">Green Onion</Col>
  <Col className="borderedCol">Grín Ônion</Col>
  <Col className="borderedCol">Cebolinha</Col>
</Row>
<Row className="borderedRow">
  <Col className="borderedCol">Kale</Col>
  <Col className="borderedCol">Kêil</Col>
  <Col className="borderedCol">Couve</Col>
</Row>
<Row className="borderedRow1">
  <Col className="borderedCol">Lettuce</Col>
  <Col className="borderedCol">Létis</Col>
  <Col className="borderedCol">Alface</Col>
</Row>
<Row className="borderedRow">
  <Col className="borderedCol">Mushroom</Col>
  <Col className="borderedCol">Múshrûm</Col>
  <Col className="borderedCol">Cogumelo</Col>
</Row>
<Row className="borderedRow1">
  <Col className="borderedCol">Okra</Col>
  <Col className="borderedCol">Ókrâ</Col>
  <Col className="borderedCol">Quiabo</Col>
</Row>
<Row className="borderedRow">
  <Col className="borderedCol">Onion</Col>
  <Col className="borderedCol">Ônion</Col>
  <Col className="borderedCol">Cebola</Col>
</Row>
<Row className="borderedRow1">
  <Col className="borderedCol">Peas</Col>
  <Col className="borderedCol">Pís</Col>
  <Col className="borderedCol">Ervilhas</Col>
</Row>
<Row className="borderedRow">
  <Col className="borderedCol">Pepper</Col>
  <Col className="borderedCol">Péprêr</Col>
  <Col className="borderedCol">Pimenta</Col>
</Row>
<Row className="borderedRow1">
  <Col className="borderedCol">Potato</Col>
  <Col className="borderedCol">Pôteitô</Col>
  <Col className="borderedCol">Batata</Col>
</Row>
<Row className="borderedRow">
  <Col className="borderedCol">Pumpkin</Col>
  <Col className="borderedCol">Pâmpkîn</Col>
  <Col className="borderedCol">Abóbora</Col>
</Row>
<Row className="borderedRow1">
  <Col className="borderedCol">Radish</Col>
  <Col className="borderedCol">Rádish</Col>
  <Col className="borderedCol">Rabanete</Col>
</Row>
<Row className="borderedRow">
  <Col className="borderedCol">Salad</Col>
  <Col className="borderedCol">Sálâd</Col>
  <Col className="borderedCol">Salada</Col>
</Row>
<Row className="borderedRow1">
  <Col className="borderedCol">Spinach</Col>
  <Col className="borderedCol">Spínách</Col>
  <Col className="borderedCol">Espinafre</Col>
</Row>
<Row className="borderedRow">
  <Col className="borderedCol">Sweet Potato</Col>
  <Col className="borderedCol">Swít Pôteitô</Col>
  <Col className="borderedCol">Batata Doce</Col>
</Row>
<Row className="borderedRow1">
  <Col className="borderedCol">Tomato</Col>
  <Col className="borderedCol">Tômatô</Col>
  <Col className="borderedCol">Tomate</Col>
</Row>
<Row className="borderedRow">
  <Col className="borderedCol">Zucchini</Col>
  <Col className="borderedCol">Zucínî</Col>
  <Col className="borderedCol">Abobrinha</Col>
</Row>


    </Container>



<Footer />
</>
    );
}
