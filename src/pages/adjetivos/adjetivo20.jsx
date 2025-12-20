import Header from "../../components/header";
import Footer from "../../components/footer";
import HeaderMenuVocabulario from "../../components/headers/header-menu-vocabulario";
import Logo from "../../components/logo";
import { Container, Col, Row } from "react-bootstrap";
import ExplicacaoVocab from "../../components/explicacao-vocab";
import { Helmet } from "react-helmet-async";
import AudioPlayerVocab from '../../components/audio-player-vocab';

export default function VocabAdjetivo20() {
    return(
<>
<Helmet>
        <title>Adjetivos de Frequência</title>
      </Helmet>
<Header /> 
<Logo /> 
<HeaderMenuVocabulario />
<div className="h1-titulo-da-pagina"> <h1 className="fw-bold h1-titulo-da-pagina">Adjetivos de Frequência</h1> </div>

<ExplicacaoVocab />

<Container className="colunasVocabulario">

<Row className="borderedRow">
  <Col className="borderedCol header-col">Como se escreve</Col>
  <Col className="borderedCol header-col">Como sôa</Col>
  <Col className="borderedCol header-col">Tradução</Col>
</Row>
<Row className="borderedRow">
        <Col className="borderedCol">Frequent</Col>
        <Col className="borderedCol">Fríkuênt</Col>
        <Col className="borderedCol">Frequente</Col>
        <AudioPlayerVocab
          text="Frequent"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Rare</Col>
        <Col className="borderedCol">Rér</Col>
        <Col className="borderedCol">Raro</Col>
        <AudioPlayerVocab
          text="Rare"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Common</Col>
        <Col className="borderedCol">Kómân</Col>
        <Col className="borderedCol">Comum</Col>
        <AudioPlayerVocab
          text="Common"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Unusual</Col>
        <Col className="borderedCol">Âniújuâl</Col>
        <Col className="borderedCol">Incomum</Col>
        <AudioPlayerVocab
          text="Unusual"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Regular</Col>
        <Col className="borderedCol">Régiulâr</Col>
        <Col className="borderedCol">Regular</Col>
        <AudioPlayerVocab
          text="Regular"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Irregular</Col>
        <Col className="borderedCol">Irégiulâr</Col>
        <Col className="borderedCol">Irregular</Col>
        <AudioPlayerVocab
          text="Irregular"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Constant</Col>
        <Col className="borderedCol">Kónstânt</Col>
        <Col className="borderedCol">Constante</Col>
        <AudioPlayerVocab
          text="Constant"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Occasional</Col>
        <Col className="borderedCol">Ôkêijânâl</Col>
        <Col className="borderedCol">Ocasional</Col>
        <AudioPlayerVocab
          text="Occasional"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Daily</Col>
        <Col className="borderedCol">Dêili</Col>
        <Col className="borderedCol">Diário</Col>
        <AudioPlayerVocab
          text="Daily"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Weekly</Col>
        <Col className="borderedCol">Uíkli</Col>
        <Col className="borderedCol">Semanal</Col>
        <AudioPlayerVocab
          text="Weekly"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Monthly</Col>
        <Col className="borderedCol">Mânthli</Col>
        <Col className="borderedCol">Mensal</Col>
        <AudioPlayerVocab
          text="Monthly"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Annual</Col>
        <Col className="borderedCol">Éniuâl</Col>
        <Col className="borderedCol">Anual</Col>
        <AudioPlayerVocab
          text="Annual"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>

    </Container>

<Footer />
</>
    );
}