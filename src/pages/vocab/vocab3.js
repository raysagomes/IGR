import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import HeaderMenuVocabulario from "../../components/header-menu-vocabulario";
import Logo from "../../components/logo";
import { Container, Col, Row } from "react-bootstrap";
import ExplicacaoVocab from "../../components/explicacao-vocab";
import { Helmet } from "react-helmet-async";
import AudioPlayerVocab from '../../components/audio-player-vocab';

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
        <Col className="borderedCol">Bíêr</Col>
        <Col className="borderedCol">Cerveja</Col>
        <AudioPlayerVocab
          text="Beer"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Cocktail</Col>
        <Col className="borderedCol">Cóctêil</Col>
        <Col className="borderedCol">Coquetel</Col>
        <AudioPlayerVocab
          text="Cocktail"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Coffee</Col>
        <Col className="borderedCol">Kófí</Col>
        <Col className="borderedCol">Café</Col>
        <AudioPlayerVocab
          text="Coffee"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Coke, Soda, Soft Drink</Col>
        <Col className="borderedCol">Kôuki, Sôudâ, Sóft Druínk</Col>
        <Col className="borderedCol">Coca-Cola, Refrigerantes</Col>
        <AudioPlayerVocab
          text="Coke, Soda, Soft Drink"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Juice</Col>
        <Col className="borderedCol">Júuci</Col>
        <Col className="borderedCol">Suco</Col>
        <AudioPlayerVocab
          text="Juice"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Milkshake</Col>
        <Col className="borderedCol">Milkshêik</Col>
        <Col className="borderedCol">Milkshake</Col>
        <AudioPlayerVocab
          text="Milkshake"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Tea</Col>
        <Col className="borderedCol">Tí</Col>
        <Col className="borderedCol">Chá</Col>
        <AudioPlayerVocab
          text="Tea"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Water</Col>
        <Col className="borderedCol">Wórêr/Wótêr</Col>
        <Col className="borderedCol">Água</Col>
        <AudioPlayerVocab
          text="Water"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Wine</Col>
        <Col className="borderedCol">Wáin</Col>
        <Col className="borderedCol">Vinho</Col>
        <AudioPlayerVocab
          text="Wine"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Americano</Col>
        <Col className="borderedCol">Ámericâno</Col>
        <Col className="borderedCol">Americano</Col>
        <AudioPlayerVocab
          text="Americano"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Brandy</Col>
        <Col className="borderedCol">Bruêndi</Col>
        <Col className="borderedCol">Brandy</Col>
        <AudioPlayerVocab
          text="Brandy"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Espresso</Col>
        <Col className="borderedCol">Éspresso</Col>
        <Col className="borderedCol">Espresso</Col>
        <AudioPlayerVocab
          text="Espresso"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Hot Chocolate</Col>
        <Col className="borderedCol">Rót Chocôlêt</Col>
        <Col className="borderedCol">Chocolate Quente</Col>
        <AudioPlayerVocab
          text="Hot Chocolate"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Lemonade</Col>
        <Col className="borderedCol">Lêmônêid</Col>
        <Col className="borderedCol">Limonada</Col>
        <AudioPlayerVocab
          text="Lemonade"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>

    </Container>



<Footer />
</>
    );
}
