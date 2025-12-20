import Header from "../../components/header";
import Footer from "../../components/footer";
import HeaderMenuVocabulario from "../../components/headers/header-menu-vocabulario";
import Logo from "../../components/logo";
import { Container, Col, Row } from "react-bootstrap";
import ExplicacaoVocab from "../../components/explicacao-vocab";
import { Helmet } from "react-helmet-async";
import AudioPlayerVocab from '../../components/audio-player-vocab';

export default function Vocab28() {
    return(
<>
<Helmet>
        <title>Viagem</title>
      </Helmet>
<Header /> 
<Logo /> 
<HeaderMenuVocabulario />
<div className="h1-titulo-da-pagina"> <h1 className="fw-bold h1-titulo-da-pagina">Viagem</h1> </div>

<ExplicacaoVocab />

<Container className="colunasVocabulario">

<Row className="borderedRow">
  <Col className="borderedCol header-col">Como se escreve</Col>
  <Col className="borderedCol header-col">Como sôa</Col>
  <Col className="borderedCol header-col">Tradução</Col>
</Row>
<Row className="borderedRow1">
        <Col className="borderedCol">Airport</Col>
        <Col className="borderedCol">Érpôrt</Col>
        <Col className="borderedCol">Aeroporto</Col>
        <AudioPlayerVocab
          text="Airport"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Hotel</Col>
        <Col className="borderedCol">Hôutél</Col>
        <Col className="borderedCol">Hotel</Col>
        <AudioPlayerVocab
          text="Hotel"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Passport</Col>
        <Col className="borderedCol">Péspôrt</Col>
        <Col className="borderedCol">Passaporte</Col>
        <AudioPlayerVocab
          text="Passport"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Ticket</Col>
        <Col className="borderedCol">Tíkêt</Col>
        <Col className="borderedCol">Bilhete</Col>
        <AudioPlayerVocab
          text="Ticket"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Luggage</Col>
        <Col className="borderedCol">Lâgij</Col>
        <Col className="borderedCol">Bagagem</Col>
        <AudioPlayerVocab
          text="Luggage"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Suitcase</Col>
        <Col className="borderedCol">Sútkêis</Col>
        <Col className="borderedCol">Mala</Col>
        <AudioPlayerVocab
          text="Suitcase"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Map</Col>
        <Col className="borderedCol">Mép</Col>
        <Col className="borderedCol">Mapa</Col>
        <AudioPlayerVocab
          text="Map"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Tourist</Col>
        <Col className="borderedCol">Túrist</Col>
        <Col className="borderedCol">Turista</Col>
        <AudioPlayerVocab
          text="Tourist"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Vacation</Col>
        <Col className="borderedCol">Vêikêishân</Col>
        <Col className="borderedCol">Férias</Col>
        <AudioPlayerVocab
          text="Vacation"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Journey</Col>
        <Col className="borderedCol">Jârni</Col>
        <Col className="borderedCol">Jornada</Col>
        <AudioPlayerVocab
          text="Journey"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Destination</Col>
        <Col className="borderedCol">Dêstinêishân</Col>
        <Col className="borderedCol">Destino</Col>
        <AudioPlayerVocab
          text="Destination"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Guide</Col>
        <Col className="borderedCol">Gáid</Col>
        <Col className="borderedCol">Guia</Col>
        <AudioPlayerVocab
          text="Guide"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>

    </Container>

<Footer />
</>
    );
}