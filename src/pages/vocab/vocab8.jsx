import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import HeaderMenuVocabulario from "../../components/headers/header-menu-vocabulario";
import Logo from "../../components/logo";
import { Container, Col, Row } from "react-bootstrap";
import ExplicacaoVocab from "../../components/explicacao-vocab";
import { Helmet } from "react-helmet-async";
import AudioPlayerVocab from '../../components/audio-player-vocab';

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
        <Col className="borderedCol">Blôu Druáiêr</Col>
        <Col className="borderedCol">Secador de Cabelo</Col>
        <AudioPlayerVocab
          text="Blow Dryer"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Bubble</Col>
        <Col className="borderedCol">Bâbôu</Col>
        <Col className="borderedCol">Bolha</Col>
        <AudioPlayerVocab
          text="Bubble"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Comb</Col>
        <Col className="borderedCol">Kômb</Col>
        <Col className="borderedCol">Pente</Col>
        <AudioPlayerVocab
          text="Comb"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Deodorant</Col>
        <Col className="borderedCol">Diôdôrent</Col>
        <Col className="borderedCol">Desodorante</Col>
        <AudioPlayerVocab
          text="Deodorant"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Drip</Col>
        <Col className="borderedCol">Druíp</Col>
        <Col className="borderedCol">Gotejamento</Col>
        <AudioPlayerVocab
          text="Drip"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Faucet</Col>
        <Col className="borderedCol">Fósset</Col>
        <Col className="borderedCol">Torneira</Col>
        <AudioPlayerVocab
          text="Faucet"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Floss</Col>
        <Col className="borderedCol">Flós</Col>
        <Col className="borderedCol">Fio Dental</Col>
        <AudioPlayerVocab
          text="Floss"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Hairbrush</Col>
        <Col className="borderedCol">Rérbruâsh</Col>
        <Col className="borderedCol">Escova de Cabelo</Col>
        <AudioPlayerVocab
          text="Hairbrush"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Lipstick</Col>
        <Col className="borderedCol">Lípstík</Col>
        <Col className="borderedCol">Batom</Col>
        <AudioPlayerVocab
          text="Lipstick"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Makeup</Col>
        <Col className="borderedCol">Mêikâp</Col>
        <Col className="borderedCol">Maquiagem</Col>
        <AudioPlayerVocab
          text="Make up"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Mirror</Col>
        <Col className="borderedCol">Míruôr</Col>
        <Col className="borderedCol">Espelho</Col>
        <AudioPlayerVocab
          text="Mirror"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Nail Clippers</Col>
        <Col className="borderedCol">Neiou Klíppèrs</Col>
        <Col className="borderedCol">Cortador de Unha</Col>
        <AudioPlayerVocab
          text="Nail Clippers"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Nail Polish</Col>
        <Col className="borderedCol">Neiou Pólîsh</Col>
        <Col className="borderedCol">Esmalte</Col>
        <AudioPlayerVocab
          text="Nail Polish"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Perfume</Col>
        <Col className="borderedCol">Pêrfiûm</Col>
        <Col className="borderedCol">Perfume</Col>
        <AudioPlayerVocab
          text="Perfume"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Plunger</Col>
        <Col className="borderedCol">Plânjêr</Col>
        <Col className="borderedCol">Pistão</Col>
        <AudioPlayerVocab
          text="Plunger"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Scale</Col>
        <Col className="borderedCol">Skéiou</Col>
        <Col className="borderedCol">Balança</Col>
        <AudioPlayerVocab
          text="Scale"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Shampoo</Col>
        <Col className="borderedCol">Shempu</Col>
        <Col className="borderedCol">Xampu</Col>
        <AudioPlayerVocab
          text="Shampoo"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Shower</Col>
        <Col className="borderedCol">Sháuêr</Col>
        <Col className="borderedCol">Chuveiro</Col>
        <AudioPlayerVocab
          text="Shower"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Shower Head</Col>
        <Col className="borderedCol">Sháuêr Réd</Col>
        <Col className="borderedCol">Chuveiro</Col>
        <AudioPlayerVocab
          text="Shower Head"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Sink</Col>
        <Col className="borderedCol">Sínk</Col>
        <Col className="borderedCol">Pia</Col>
        <AudioPlayerVocab
          text="Sink"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Soap</Col>
        <Col className="borderedCol">Sôup</Col>
        <Col className="borderedCol">Sabão</Col>
        <AudioPlayerVocab
          text="Soap"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Toilet</Col>
        <Col className="borderedCol">Tóilêt</Col>
        <Col className="borderedCol">Banheiro</Col>
        <AudioPlayerVocab
          text="Toilet"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Toilet Paper</Col>
        <Col className="borderedCol">Tóilêt Pêipêr</Col>
        <Col className="borderedCol">Papel Higiênico</Col>
        <AudioPlayerVocab
          text="Toilet Paper"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Tissues</Col>
        <Col className="borderedCol">Tíchus</Col>
        <Col className="borderedCol">Papel Toalha/Lenço</Col>
        <AudioPlayerVocab
          text="Tissues"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Towel</Col>
        <Col className="borderedCol">Tául</Col>
        <Col className="borderedCol">Toalha</Col>
        <AudioPlayerVocab
          text="Towel"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Towel Rack</Col>
        <Col className="borderedCol">Tául Ruék</Col>
        <Col className="borderedCol">Toalheiro</Col>
        <AudioPlayerVocab
          text="Towel Rack"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Toothpaste</Col>
        <Col className="borderedCol">Tútpêist</Col>
        <Col className="borderedCol">Creme Dental</Col>
        <AudioPlayerVocab
          text="Toothpaste"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>


    </Container>



<Footer />
</>
    );
}
