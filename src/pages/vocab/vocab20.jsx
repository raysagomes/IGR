import Header from "../../components/header";
import Footer from "../../components/footer";
import HeaderMenuVocabulario from "../../components/headers/header-menu-vocabulario";
import Logo from "../../components/logo";
import { Container, Col, Row } from "react-bootstrap";
import ExplicacaoVocab from "../../components/explicacao-vocab";
import { Helmet } from "react-helmet-async";
import AudioPlayerVocab from '../../components/audio-player-vocab';

export default function Vocab20() {
    return(
<>
<Helmet>
        <title>Instrumentos Musicais</title>
      </Helmet>
<Header /> 
<Logo /> 
<HeaderMenuVocabulario />
<div className="h1-titulo-da-pagina"> <h1 className="fw-bold h1-titulo-da-pagina">Instrumentos Musicais</h1> </div>

<ExplicacaoVocab />

<Container className="colunasVocabulario">

<Row className="borderedRow">
  <Col className="borderedCol header-col">Como se escreve</Col>
  <Col className="borderedCol header-col">Como sôa</Col>
  <Col className="borderedCol header-col">Tradução</Col>
</Row>
<Row className="borderedRow1">
        <Col className="borderedCol">Piano</Col>
        <Col className="borderedCol">Piéno</Col>
        <Col className="borderedCol">Piano</Col>
        <AudioPlayerVocab
          text="Piano"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Guitar</Col>
        <Col className="borderedCol">Guitár</Col>
        <Col className="borderedCol">Guitarra</Col>
        <AudioPlayerVocab
          text="Guitar"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Violin</Col>
        <Col className="borderedCol">Váiôlin</Col>
        <Col className="borderedCol">Violino</Col>
        <AudioPlayerVocab
          text="Violin"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Drums</Col>
        <Col className="borderedCol">Drâmz</Col>
        <Col className="borderedCol">Bateria</Col>
        <AudioPlayerVocab
          text="Drums"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Flute</Col>
        <Col className="borderedCol">Flút</Col>
        <Col className="borderedCol">Flauta</Col>
        <AudioPlayerVocab
          text="Flute"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Trumpet</Col>
        <Col className="borderedCol">Trâmpêt</Col>
        <Col className="borderedCol">Trompete</Col>
        <AudioPlayerVocab
          text="Trumpet"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Saxophone</Col>
        <Col className="borderedCol">Séksfôun</Col>
        <Col className="borderedCol">Saxofone</Col>
        <AudioPlayerVocab
          text="Saxophone"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Cello</Col>
        <Col className="borderedCol">Chélo</Col>
        <Col className="borderedCol">Violoncelo</Col>
        <AudioPlayerVocab
          text="Cello"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Harp</Col>
        <Col className="borderedCol">Hárp</Col>
        <Col className="borderedCol">Harpa</Col>
        <AudioPlayerVocab
          text="Harp"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Clarinet</Col>
        <Col className="borderedCol">Klérênêt</Col>
        <Col className="borderedCol">Clarinete</Col>
        <AudioPlayerVocab
          text="Clarinet"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>

    </Container>

<Footer />
</>
    );
}