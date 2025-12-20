import Header from "../../components/header";
import Footer from "../../components/footer";
import HeaderMenuVocabulario from "../../components/headers/header-menu-vocabulario";
import Logo from "../../components/logo";
import { Container, Col, Row } from "react-bootstrap";
import ExplicacaoVocab from "../../components/explicacao-vocab";
import { Helmet } from "react-helmet-async";
import AudioPlayerVocab from '../../components/audio-player-vocab';

export default function Vocab17() {
    return(
<>
<Helmet>
        <title>Transporte</title>
      </Helmet>
<Header /> 
<Logo /> 
<HeaderMenuVocabulario />
<div className="h1-titulo-da-pagina"> <h1 className="fw-bold h1-titulo-da-pagina">Transporte</h1> </div>

<ExplicacaoVocab />

<Container className="colunasVocabulario">

<Row className="borderedRow">
  <Col className="borderedCol header-col">Como se escreve</Col>
  <Col className="borderedCol header-col">Como sôa</Col>
  <Col className="borderedCol header-col">Tradução</Col>
</Row>
<Row className="borderedRow1">
        <Col className="borderedCol">Car</Col>
        <Col className="borderedCol">Kár</Col>
        <Col className="borderedCol">Carro</Col>
        <AudioPlayerVocab
          text="Car"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Bus</Col>
        <Col className="borderedCol">Bâs</Col>
        <Col className="borderedCol">Ônibus</Col>
        <AudioPlayerVocab
          text="Bus"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Train</Col>
        <Col className="borderedCol">Trêin</Col>
        <Col className="borderedCol">Trem</Col>
        <AudioPlayerVocab
          text="Train"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Airplane</Col>
        <Col className="borderedCol">Érplêin</Col>
        <Col className="borderedCol">Avião</Col>
        <AudioPlayerVocab
          text="Airplane"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Bicycle</Col>
        <Col className="borderedCol">Báisikôl</Col>
        <Col className="borderedCol">Bicicleta</Col>
        <AudioPlayerVocab
          text="Bicycle"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Motorcycle</Col>
        <Col className="borderedCol">Môutêrsáikôl</Col>
        <Col className="borderedCol">Motocicleta</Col>
        <AudioPlayerVocab
          text="Motorcycle"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Boat</Col>
        <Col className="borderedCol">Bôut</Col>
        <Col className="borderedCol">Barco</Col>
        <AudioPlayerVocab
          text="Boat"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Ship</Col>
        <Col className="borderedCol">Shíp</Col>
        <Col className="borderedCol">Navio</Col>
        <AudioPlayerVocab
          text="Ship"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Taxi</Col>
        <Col className="borderedCol">Téksi</Col>
        <Col className="borderedCol">Táxi</Col>
        <AudioPlayerVocab
          text="Taxi"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Truck</Col>
        <Col className="borderedCol">Trâk</Col>
        <Col className="borderedCol">Caminhão</Col>
        <AudioPlayerVocab
          text="Truck"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Van</Col>
        <Col className="borderedCol">Vén</Col>
        <Col className="borderedCol">Van</Col>
        <AudioPlayerVocab
          text="Van"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Subway</Col>
        <Col className="borderedCol">Sâbuêi</Col>
        <Col className="borderedCol">Metrô</Col>
        <AudioPlayerVocab
          text="Subway"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Helicopter</Col>
        <Col className="borderedCol">Hélicóptêr</Col>
        <Col className="borderedCol">Helicóptero</Col>
        <AudioPlayerVocab
          text="Helicopter"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Scooter</Col>
        <Col className="borderedCol">Skútêr</Col>
        <Col className="borderedCol">Patinete</Col>
        <AudioPlayerVocab
          text="Scooter"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>

    </Container>

<Footer />
</>
    );
}