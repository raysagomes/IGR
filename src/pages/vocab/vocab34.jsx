import Header from "../../components/header";
import Footer from "../../components/footer";
import HeaderMenuVocabulario from "../../components/headers/header-menu-vocabulario";
import Logo from "../../components/logo";
import { Container, Col, Row } from "react-bootstrap";
import ExplicacaoVocab from "../../components/explicacao-vocab";
import { Helmet } from "react-helmet-async";
import AudioPlayerVocab from '../../components/audio-player-vocab';

export default function Vocab34() {
    return(
<>
<Helmet>
        <title>Emoções</title>
      </Helmet>
<Header /> 
<Logo /> 
<HeaderMenuVocabulario />
<div className="h1-titulo-da-pagina"> <h1 className="fw-bold h1-titulo-da-pagina">Emoções</h1> </div>

<ExplicacaoVocab />

<Container className="colunasVocabulario">

<Row className="borderedRow">
  <Col className="borderedCol header-col">Como se escreve</Col>
  <Col className="borderedCol header-col">Como sôa</Col>
  <Col className="borderedCol header-col">Tradução</Col>
</Row>
<Row className="borderedRow1">
        <Col className="borderedCol">Happy</Col>
        <Col className="borderedCol">Hépi</Col>
        <Col className="borderedCol">Feliz</Col>
        <AudioPlayerVocab
          text="Happy"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Sad</Col>
        <Col className="borderedCol">Séd</Col>
        <Col className="borderedCol">Triste</Col>
        <AudioPlayerVocab
          text="Sad"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Angry</Col>
        <Col className="borderedCol">Éngri</Col>
        <Col className="borderedCol">Bravo</Col>
        <AudioPlayerVocab
          text="Angry"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Excited</Col>
        <Col className="borderedCol">Iksáitêd</Col>
        <Col className="borderedCol">Animado</Col>
        <AudioPlayerVocab
          text="Excited"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Nervous</Col>
        <Col className="borderedCol">Nârvâs</Col>
        <Col className="borderedCol">Nervoso</Col>
        <AudioPlayerVocab
          text="Nervous"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Tired</Col>
        <Col className="borderedCol">Táiêrd</Col>
        <Col className="borderedCol">Cansado</Col>
        <AudioPlayerVocab
          text="Tired"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Surprised</Col>
        <Col className="borderedCol">Sârpráizd</Col>
        <Col className="borderedCol">Surpreso</Col>
        <AudioPlayerVocab
          text="Surprised"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Confused</Col>
        <Col className="borderedCol">Kânfiúzd</Col>
        <Col className="borderedCol">Confuso</Col>
        <AudioPlayerVocab
          text="Confused"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Worried</Col>
        <Col className="borderedCol">Wârid</Col>
        <Col className="borderedCol">Preocupado</Col>
        <AudioPlayerVocab
          text="Worried"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Calm</Col>
        <Col className="borderedCol">Kálm</Col>
        <Col className="borderedCol">Calmo</Col>
        <AudioPlayerVocab
          text="Calm"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Proud</Col>
        <Col className="borderedCol">Práud</Col>
        <Col className="borderedCol">Orgulhoso</Col>
        <AudioPlayerVocab
          text="Proud"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Jealous</Col>
        <Col className="borderedCol">Jélâs</Col>
        <Col className="borderedCol">Ciumento</Col>
        <AudioPlayerVocab
          text="Jealous"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>

    </Container>

<Footer />
</>
    );
}