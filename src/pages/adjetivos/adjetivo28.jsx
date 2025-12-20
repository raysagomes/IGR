import Header from "../../components/header";
import Footer from "../../components/footer";
import HeaderMenuVocabulario from "../../components/headers/header-menu-vocabulario";
import Logo from "../../components/logo";
import { Container, Col, Row } from "react-bootstrap";
import ExplicacaoVocab from "../../components/explicacao-vocab";
import { Helmet } from "react-helmet-async";
import AudioPlayerVocab from '../../components/audio-player-vocab';

export default function VocabAdjetivo28() {
    return(
<>
<Helmet>
        <title>Adjetivos de Inteligência</title>
      </Helmet>
<Header /> 
<Logo /> 
<HeaderMenuVocabulario />
<div className="h1-titulo-da-pagina"> <h1 className="fw-bold h1-titulo-da-pagina">Adjetivos de Inteligência</h1> </div>

<ExplicacaoVocab />

<Container className="colunasVocabulario">

<Row className="borderedRow">
  <Col className="borderedCol header-col">Como se escreve</Col>
  <Col className="borderedCol header-col">Como sôa</Col>
  <Col className="borderedCol header-col">Tradução</Col>
</Row>
<Row className="borderedRow">
        <Col className="borderedCol">Smart</Col>
        <Col className="borderedCol">Smárt</Col>
        <Col className="borderedCol">Inteligente</Col>
        <AudioPlayerVocab
          text="Smart"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Stupid</Col>
        <Col className="borderedCol">Stiúpid</Col>
        <Col className="borderedCol">Estúpido</Col>
        <AudioPlayerVocab
          text="Stupid"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Intelligent</Col>
        <Col className="borderedCol">Intélijênt</Col>
        <Col className="borderedCol">Inteligente</Col>
        <AudioPlayerVocab
          text="Intelligent"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Dumb</Col>
        <Col className="borderedCol">Dâm</Col>
        <Col className="borderedCol">Burro</Col>
        <AudioPlayerVocab
          text="Dumb"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Clever</Col>
        <Col className="borderedCol">Klévêr</Col>
        <Col className="borderedCol">Esperto</Col>
        <AudioPlayerVocab
          text="Clever"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Foolish</Col>
        <Col className="borderedCol">Fúlish</Col>
        <Col className="borderedCol">Tolo</Col>
        <AudioPlayerVocab
          text="Foolish"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Wise</Col>
        <Col className="borderedCol">Uáiz</Col>
        <Col className="borderedCol">Sábio</Col>
        <AudioPlayerVocab
          text="Wise"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Ignorant</Col>
        <Col className="borderedCol">Ígnôrânt</Col>
        <Col className="borderedCol">Ignorante</Col>
        <AudioPlayerVocab
          text="Ignorant"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Brilliant</Col>
        <Col className="borderedCol">Bríliant</Col>
        <Col className="borderedCol">Brilhante</Col>
        <AudioPlayerVocab
          text="Brilliant"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Naive</Col>
        <Col className="borderedCol">Náiv</Col>
        <Col className="borderedCol">Ingênuo</Col>
        <AudioPlayerVocab
          text="Naive"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>

    </Container>

<Footer />
</>
    );
}