import Header from "../../components/header";
import Footer from "../../components/footer";
import HeaderMenuVocabulario from "../../components/headers/header-menu-vocabulario";
import Logo from "../../components/logo";
import { Container, Col, Row } from "react-bootstrap";
import ExplicacaoVocab from "../../components/explicacao-vocab";
import { Helmet } from "react-helmet-async";
import AudioPlayerVocab from '../../components/audio-player-vocab';

export default function Vocab25() {
    return(
<>
<Helmet>
        <title>Saúde</title>
      </Helmet>
<Header /> 
<Logo /> 
<HeaderMenuVocabulario />
<div className="h1-titulo-da-pagina"> <h1 className="fw-bold h1-titulo-da-pagina">Saúde</h1> </div>

<ExplicacaoVocab />

<Container className="colunasVocabulario">

<Row className="borderedRow">
  <Col className="borderedCol header-col">Como se escreve</Col>
  <Col className="borderedCol header-col">Como sôa</Col>
  <Col className="borderedCol header-col">Tradução</Col>
</Row>
<Row className="borderedRow1">
        <Col className="borderedCol">Medicine</Col>
        <Col className="borderedCol">Médisîn</Col>
        <Col className="borderedCol">Remédio</Col>
        <AudioPlayerVocab
          text="Medicine"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Hospital</Col>
        <Col className="borderedCol">Hóspitôl</Col>
        <Col className="borderedCol">Hospital</Col>
        <AudioPlayerVocab
          text="Hospital"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Pharmacy</Col>
        <Col className="borderedCol">Fármâsi</Col>
        <Col className="borderedCol">Farmácia</Col>
        <AudioPlayerVocab
          text="Pharmacy"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Headache</Col>
        <Col className="borderedCol">Hédêik</Col>
        <Col className="borderedCol">Dor de cabeça</Col>
        <AudioPlayerVocab
          text="Headache"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Fever</Col>
        <Col className="borderedCol">Fívêr</Col>
        <Col className="borderedCol">Febre</Col>
        <AudioPlayerVocab
          text="Fever"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Cough</Col>
        <Col className="borderedCol">Kóf</Col>
        <Col className="borderedCol">Tosse</Col>
        <AudioPlayerVocab
          text="Cough"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Cold</Col>
        <Col className="borderedCol">Côuld</Col>
        <Col className="borderedCol">Resfriado</Col>
        <AudioPlayerVocab
          text="Cold"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Pain</Col>
        <Col className="borderedCol">Pêin</Col>
        <Col className="borderedCol">Dor</Col>
        <AudioPlayerVocab
          text="Pain"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Bandage</Col>
        <Col className="borderedCol">Béndij</Col>
        <Col className="borderedCol">Curativo</Col>
        <AudioPlayerVocab
          text="Bandage"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Thermometer</Col>
        <Col className="borderedCol">Thêrmómêtêr</Col>
        <Col className="borderedCol">Termômetro</Col>
        <AudioPlayerVocab
          text="Thermometer"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>

    </Container>

<Footer />
</>
    );
}