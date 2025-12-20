import Header from "../../components/header";
import Footer from "../../components/footer";
import HeaderMenuVocabulario from "../../components/headers/header-menu-vocabulario";
import Logo from "../../components/logo";
import { Container, Col, Row } from "react-bootstrap";
import ExplicacaoVocab from "../../components/explicacao-vocab";
import { Helmet } from "react-helmet-async";
import AudioPlayerVocab from '../../components/audio-player-vocab';

export default function Vocab19() {
    return(
<>
<Helmet>
        <title>Esportes</title>
      </Helmet>
<Header /> 
<Logo /> 
<HeaderMenuVocabulario />
<div className="h1-titulo-da-pagina"> <h1 className="fw-bold h1-titulo-da-pagina">Esportes</h1> </div>

<ExplicacaoVocab />

<Container className="colunasVocabulario">

<Row className="borderedRow">
  <Col className="borderedCol header-col">Como se escreve</Col>
  <Col className="borderedCol header-col">Como sôa</Col>
  <Col className="borderedCol header-col">Tradução</Col>
</Row>
<Row className="borderedRow1">
        <Col className="borderedCol">Soccer</Col>
        <Col className="borderedCol">Sókêr</Col>
        <Col className="borderedCol">Futebol</Col>
        <AudioPlayerVocab
          text="Soccer"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Basketball</Col>
        <Col className="borderedCol">Béskêtból</Col>
        <Col className="borderedCol">Basquete</Col>
        <AudioPlayerVocab
          text="Basketball"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Tennis</Col>
        <Col className="borderedCol">Ténis</Col>
        <Col className="borderedCol">Tênis</Col>
        <AudioPlayerVocab
          text="Tennis"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Swimming</Col>
        <Col className="borderedCol">Suímin</Col>
        <Col className="borderedCol">Natação</Col>
        <AudioPlayerVocab
          text="Swimming"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Running</Col>
        <Col className="borderedCol">Râning</Col>
        <Col className="borderedCol">Corrida</Col>
        <AudioPlayerVocab
          text="Running"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Baseball</Col>
        <Col className="borderedCol">Béisbôl</Col>
        <Col className="borderedCol">Beisebol</Col>
        <AudioPlayerVocab
          text="Baseball"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Volleyball</Col>
        <Col className="borderedCol">Vóliból</Col>
        <Col className="borderedCol">Vôlei</Col>
        <AudioPlayerVocab
          text="Volleyball"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Golf</Col>
        <Col className="borderedCol">Gólf</Col>
        <Col className="borderedCol">Golfe</Col>
        <AudioPlayerVocab
          text="Golf"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Boxing</Col>
        <Col className="borderedCol">Bóksing</Col>
        <Col className="borderedCol">Boxe</Col>
        <AudioPlayerVocab
          text="Boxing"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Cycling</Col>
        <Col className="borderedCol">Sáikling</Col>
        <Col className="borderedCol">Ciclismo</Col>
        <AudioPlayerVocab
          text="Cycling"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Skiing</Col>
        <Col className="borderedCol">Skíing</Col>
        <Col className="borderedCol">Esqui</Col>
        <AudioPlayerVocab
          text="Skiing"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Surfing</Col>
        <Col className="borderedCol">Sârfing</Col>
        <Col className="borderedCol">Surf</Col>
        <AudioPlayerVocab
          text="Surfing"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>

    </Container>

<Footer />
</>
    );
}