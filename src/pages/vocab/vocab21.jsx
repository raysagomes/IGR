import Header from "../../components/header";
import Footer from "../../components/footer";
import HeaderMenuVocabulario from "../../components/headers/header-menu-vocabulario";
import Logo from "../../components/logo";
import { Container, Col, Row } from "react-bootstrap";
import ExplicacaoVocab from "../../components/explicacao-vocab";
import { Helmet } from "react-helmet-async";
import AudioPlayerVocab from '../../components/audio-player-vocab';

export default function Vocab21() {
    return(
<>
<Helmet>
        <title>Clima</title>
      </Helmet>
<Header /> 
<Logo /> 
<HeaderMenuVocabulario />
<div className="h1-titulo-da-pagina"> <h1 className="fw-bold h1-titulo-da-pagina">Clima</h1> </div>

<ExplicacaoVocab />

<Container className="colunasVocabulario">

<Row className="borderedRow">
  <Col className="borderedCol header-col">Como se escreve</Col>
  <Col className="borderedCol header-col">Como sôa</Col>
  <Col className="borderedCol header-col">Tradução</Col>
</Row>
<Row className="borderedRow1">
        <Col className="borderedCol">Sunny</Col>
        <Col className="borderedCol">Sâni</Col>
        <Col className="borderedCol">Ensolarado</Col>
        <AudioPlayerVocab
          text="Sunny"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Rainy</Col>
        <Col className="borderedCol">Rêini</Col>
        <Col className="borderedCol">Chuvoso</Col>
        <AudioPlayerVocab
          text="Rainy"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Cloudy</Col>
        <Col className="borderedCol">Kláudi</Col>
        <Col className="borderedCol">Nublado</Col>
        <AudioPlayerVocab
          text="Cloudy"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Windy</Col>
        <Col className="borderedCol">Uíndi</Col>
        <Col className="borderedCol">Ventoso</Col>
        <AudioPlayerVocab
          text="Windy"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Snowy</Col>
        <Col className="borderedCol">Snôui</Col>
        <Col className="borderedCol">Nevando</Col>
        <AudioPlayerVocab
          text="Snowy"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Hot</Col>
        <Col className="borderedCol">Hót</Col>
        <Col className="borderedCol">Quente</Col>
        <AudioPlayerVocab
          text="Hot"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Cold</Col>
        <Col className="borderedCol">Côuld</Col>
        <Col className="borderedCol">Frio</Col>
        <AudioPlayerVocab
          text="Cold"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Warm</Col>
        <Col className="borderedCol">Uórm</Col>
        <Col className="borderedCol">Morno</Col>
        <AudioPlayerVocab
          text="Warm"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Cool</Col>
        <Col className="borderedCol">Kúl</Col>
        <Col className="borderedCol">Fresco</Col>
        <AudioPlayerVocab
          text="Cool"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Humid</Col>
        <Col className="borderedCol">Hiúmid</Col>
        <Col className="borderedCol">Úmido</Col>
        <AudioPlayerVocab
          text="Humid"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Dry</Col>
        <Col className="borderedCol">Drái</Col>
        <Col className="borderedCol">Seco</Col>
        <AudioPlayerVocab
          text="Dry"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Foggy</Col>
        <Col className="borderedCol">Fógi</Col>
        <Col className="borderedCol">Nebuloso</Col>
        <AudioPlayerVocab
          text="Foggy"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>

    </Container>

<Footer />
</>
    );
}