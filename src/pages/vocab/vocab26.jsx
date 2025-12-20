import Header from "../../components/header";
import Footer from "../../components/footer";
import HeaderMenuVocabulario from "../../components/headers/header-menu-vocabulario";
import Logo from "../../components/logo";
import { Container, Col, Row } from "react-bootstrap";
import ExplicacaoVocab from "../../components/explicacao-vocab";
import { Helmet } from "react-helmet-async";
import AudioPlayerVocab from '../../components/audio-player-vocab';

export default function Vocab26() {
    return(
<>
<Helmet>
        <title>Tempo</title>
      </Helmet>
<Header /> 
<Logo /> 
<HeaderMenuVocabulario />
<div className="h1-titulo-da-pagina"> <h1 className="fw-bold h1-titulo-da-pagina">Tempo</h1> </div>

<ExplicacaoVocab />

<Container className="colunasVocabulario">

<Row className="borderedRow">
  <Col className="borderedCol header-col">Como se escreve</Col>
  <Col className="borderedCol header-col">Como sôa</Col>
  <Col className="borderedCol header-col">Tradução</Col>
</Row>
<Row className="borderedRow1">
        <Col className="borderedCol">Hour</Col>
        <Col className="borderedCol">Áuêr</Col>
        <Col className="borderedCol">Hora</Col>
        <AudioPlayerVocab
          text="Hour"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Minute</Col>
        <Col className="borderedCol">Mínit</Col>
        <Col className="borderedCol">Minuto</Col>
        <AudioPlayerVocab
          text="Minute"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Second</Col>
        <Col className="borderedCol">Sékând</Col>
        <Col className="borderedCol">Segundo</Col>
        <AudioPlayerVocab
          text="Second"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Day</Col>
        <Col className="borderedCol">Dêi</Col>
        <Col className="borderedCol">Dia</Col>
        <AudioPlayerVocab
          text="Day"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Week</Col>
        <Col className="borderedCol">Uík</Col>
        <Col className="borderedCol">Semana</Col>
        <AudioPlayerVocab
          text="Week"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Month</Col>
        <Col className="borderedCol">Mânth</Col>
        <Col className="borderedCol">Mês</Col>
        <AudioPlayerVocab
          text="Month"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Year</Col>
        <Col className="borderedCol">Íêr</Col>
        <Col className="borderedCol">Ano</Col>
        <AudioPlayerVocab
          text="Year"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Morning</Col>
        <Col className="borderedCol">Mórnin</Col>
        <Col className="borderedCol">Manhã</Col>
        <AudioPlayerVocab
          text="Morning"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Afternoon</Col>
        <Col className="borderedCol">Áftêrnún</Col>
        <Col className="borderedCol">Tarde</Col>
        <AudioPlayerVocab
          text="Afternoon"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Evening</Col>
        <Col className="borderedCol">Ívnin</Col>
        <Col className="borderedCol">Noite</Col>
        <AudioPlayerVocab
          text="Evening"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Night</Col>
        <Col className="borderedCol">Náit</Col>
        <Col className="borderedCol">Noite</Col>
        <AudioPlayerVocab
          text="Night"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Today</Col>
        <Col className="borderedCol">Tudêi</Col>
        <Col className="borderedCol">Hoje</Col>
        <AudioPlayerVocab
          text="Today"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Yesterday</Col>
        <Col className="borderedCol">Iéstêrdêi</Col>
        <Col className="borderedCol">Ontem</Col>
        <AudioPlayerVocab
          text="Yesterday"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Tomorrow</Col>
        <Col className="borderedCol">Tumórou</Col>
        <Col className="borderedCol">Amanhã</Col>
        <AudioPlayerVocab
          text="Tomorrow"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>

    </Container>

<Footer />
</>
    );
}