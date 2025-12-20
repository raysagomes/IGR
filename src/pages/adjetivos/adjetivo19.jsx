import Header from "../../components/header";
import Footer from "../../components/footer";
import HeaderMenuVocabulario from "../../components/headers/header-menu-vocabulario";
import Logo from "../../components/logo";
import { Container, Col, Row } from "react-bootstrap";
import ExplicacaoVocab from "../../components/explicacao-vocab";
import { Helmet } from "react-helmet-async";
import AudioPlayerVocab from '../../components/audio-player-vocab';

export default function VocabAdjetivo19() {
    return(
<>
<Helmet>
        <title>Adjetivos de Peso</title>
      </Helmet>
<Header /> 
<Logo /> 
<HeaderMenuVocabulario />
<div className="h1-titulo-da-pagina"> <h1 className="fw-bold h1-titulo-da-pagina">Adjetivos de Peso</h1> </div>

<ExplicacaoVocab />

<Container className="colunasVocabulario">

<Row className="borderedRow">
  <Col className="borderedCol header-col">Como se escreve</Col>
  <Col className="borderedCol header-col">Como sôa</Col>
  <Col className="borderedCol header-col">Tradução</Col>
</Row>
<Row className="borderedRow">
        <Col className="borderedCol">Heavy</Col>
        <Col className="borderedCol">Hévi</Col>
        <Col className="borderedCol">Pesado</Col>
        <AudioPlayerVocab
          text="Heavy"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Light</Col>
        <Col className="borderedCol">Láit</Col>
        <Col className="borderedCol">Leve</Col>
        <AudioPlayerVocab
          text="Light"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Massive</Col>
        <Col className="borderedCol">Mésiv</Col>
        <Col className="borderedCol">Massivo</Col>
        <AudioPlayerVocab
          text="Massive"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Weightless</Col>
        <Col className="borderedCol">Uêitlês</Col>
        <Col className="borderedCol">Sem peso</Col>
        <AudioPlayerVocab
          text="Weightless"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Dense</Col>
        <Col className="borderedCol">Déns</Col>
        <Col className="borderedCol">Denso</Col>
        <AudioPlayerVocab
          text="Dense"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Solid</Col>
        <Col className="borderedCol">Sólid</Col>
        <Col className="borderedCol">Sólido</Col>
        <AudioPlayerVocab
          text="Solid"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Bulky</Col>
        <Col className="borderedCol">Bâlki</Col>
        <Col className="borderedCol">Volumoso</Col>
        <AudioPlayerVocab
          text="Bulky"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Compact</Col>
        <Col className="borderedCol">Kômpékt</Col>
        <Col className="borderedCol">Compacto</Col>
        <AudioPlayerVocab
          text="Compact"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Portable</Col>
        <Col className="borderedCol">Pôrtêbôl</Col>
        <Col className="borderedCol">Portátil</Col>
        <AudioPlayerVocab
          text="Portable"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Cumbersome</Col>
        <Col className="borderedCol">Kâmbêrsâm</Col>
        <Col className="borderedCol">Pesado/Difícil de carregar</Col>
        <AudioPlayerVocab
          text="Cumbersome"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>

    </Container>

<Footer />
</>
    );
}