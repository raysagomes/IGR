import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import HeaderMenuVocabulario from "../../components/header-menu-vocabulario";
import Logo from "../../components/logo";
import { Container, Col, Row } from "react-bootstrap";
import ExplicacaoVocab from "../../components/explicacao-vocab";
import { Helmet } from "react-helmet-async";
import AudioPlayerVocab from '../../components/audio-player-vocab';

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
        <AudioPlayerVocab
          text="Artichoke"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Asparagus</Col>
        <Col className="borderedCol">Áspérâgâs</Col>
        <Col className="borderedCol">Aspargo</Col>
        <AudioPlayerVocab
          text="Asparagus"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Beans</Col>
        <Col className="borderedCol">Bíns</Col>
        <Col className="borderedCol">Feijões</Col>
        <AudioPlayerVocab
          text="Beans"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Beet</Col>
        <Col className="borderedCol">Bít</Col>
        <Col className="borderedCol">Beterraba</Col>
        <AudioPlayerVocab
          text="Beet"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Brussels Sprouts</Col>
        <Col className="borderedCol">Brúâssous Spruáuts</Col>
        <Col className="borderedCol">Couve-de-Bruxelas</Col>
        <AudioPlayerVocab
          text="Brussels Sprouts"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Cabbage</Col>
        <Col className="borderedCol">Kébidj</Col>
        <Col className="borderedCol">Repolho</Col>
        <AudioPlayerVocab
          text="Cabbage"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Carrot</Col>
        <Col className="borderedCol">Kéruót</Col>
        <Col className="borderedCol">Cenoura</Col>
        <AudioPlayerVocab
          text="Carrot"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Cauliflower</Col>
        <Col className="borderedCol">Kóuliflauâr</Col>
        <Col className="borderedCol">Couve-Flor</Col>
        <AudioPlayerVocab
          text="Cauliflower"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Celery</Col>
        <Col className="borderedCol">Sélêrui</Col>
        <Col className="borderedCol">Aipo</Col>
        <AudioPlayerVocab
          text="Celery"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Chard</Col>
        <Col className="borderedCol">Chárd</Col>
        <Col className="borderedCol">Acelga</Col>
         <AudioPlayerVocab
          text="Chard"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Corn</Col>
        <Col className="borderedCol">Kórn</Col>
        <Col className="borderedCol">Milho</Col>
        <AudioPlayerVocab
          text="Corn"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Cucumber</Col>
        <Col className="borderedCol">kiúcâmbêr</Col>
        <Col className="borderedCol">Pepino</Col>
        <AudioPlayerVocab
          text="Cucumber"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Eggplant</Col>
        <Col className="borderedCol">Égplent</Col>
        <Col className="borderedCol">Berinjela</Col>
        <AudioPlayerVocab
          text="Eggplant"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Garlic</Col>
        <Col className="borderedCol">Gárlic</Col>
        <Col className="borderedCol">Alho</Col>
        <AudioPlayerVocab
          text="Garlic"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Green Onion</Col>
        <Col className="borderedCol">Gruín Ôniân</Col>
        <Col className="borderedCol">Cebolinha</Col>
        <AudioPlayerVocab
          text="Green Onion"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Kale</Col>
        <Col className="borderedCol">Kêiou</Col>
        <Col className="borderedCol">Couve</Col>
        <AudioPlayerVocab
          text="Kale"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Lettuce</Col>
        <Col className="borderedCol">Lérâci</Col>
        <Col className="borderedCol">Alface</Col>
        <AudioPlayerVocab
          text="Lettuce"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Mushroom</Col>
        <Col className="borderedCol">Mâshrûm</Col>
        <Col className="borderedCol">Cogumelo</Col>
        <AudioPlayerVocab
          text="Mushroom"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Okra</Col>
        <Col className="borderedCol">Ókruâ</Col>
        <Col className="borderedCol">Quiabo</Col>
        <AudioPlayerVocab
          text="Okra"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Onion</Col>
        <Col className="borderedCol">Ôniân</Col>
        <Col className="borderedCol">Cebola</Col>
        <AudioPlayerVocab
          text="Onion"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Peas</Col>
        <Col className="borderedCol">Pís</Col>
        <Col className="borderedCol">Ervilhas</Col>
        <AudioPlayerVocab
          text="Peas"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Pepper</Col>
        <Col className="borderedCol">Pépêr</Col>
        <Col className="borderedCol">Pimenta</Col>
        <AudioPlayerVocab
          text="Pepper"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Potato</Col>
        <Col className="borderedCol">Pôteitô</Col>
        <Col className="borderedCol">Batata</Col>
        <AudioPlayerVocab
          text="Potato"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Pumpkin</Col>
        <Col className="borderedCol">Pâmpkîn</Col>
        <Col className="borderedCol">Abóbora</Col>
        <AudioPlayerVocab
          text="Pumpkin"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Radish</Col>
        <Col className="borderedCol">Ruédish</Col>
        <Col className="borderedCol">Rabanete</Col>
        <AudioPlayerVocab
          text="Radish"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Salad</Col>
        <Col className="borderedCol">Sélâd</Col>
        <Col className="borderedCol">Salada</Col>
        <AudioPlayerVocab
          text="Salad"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Spinach</Col>
        <Col className="borderedCol">Spínêch</Col>
        <Col className="borderedCol">Espinafre</Col>
        <AudioPlayerVocab
          text="Spinach"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Sweet Potato</Col>
        <Col className="borderedCol">Swít Pôteirô</Col>
        <Col className="borderedCol">Batata Doce</Col>
        <AudioPlayerVocab
          text="Sweet Potato"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Tomato</Col>
        <Col className="borderedCol">Tômatô</Col>
        <Col className="borderedCol">Tomate</Col>
        <AudioPlayerVocab
          text="Tomato"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Zucchini</Col>
        <Col className="borderedCol">Zukínî</Col>
        <Col className="borderedCol">Abobrinha</Col>
        <AudioPlayerVocab
          text="Zucchini"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>

    </Container>



<Footer />
</>
    );
}
