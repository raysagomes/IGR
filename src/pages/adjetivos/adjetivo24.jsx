import Header from "../../components/header";
import Footer from "../../components/footer";
import HeaderMenuVocabulario from "../../components/headers/header-menu-vocabulario";
import Logo from "../../components/logo";
import { Container, Col, Row } from "react-bootstrap";
import ExplicacaoVocab from "../../components/explicacao-vocab";
import { Helmet } from "react-helmet-async";
import AudioPlayerVocab from '../../components/audio-player-vocab';

export default function VocabAdjetivo24() {
    return(
<>
<Helmet>
        <title>Adjetivos de Segurança</title>
      </Helmet>
<Header /> 
<Logo /> 
<HeaderMenuVocabulario />
<div className="h1-titulo-da-pagina"> <h1 className="fw-bold h1-titulo-da-pagina">Adjetivos de Segurança</h1> </div>

<ExplicacaoVocab />

<Container className="colunasVocabulario">

<Row className="borderedRow">
  <Col className="borderedCol header-col">Como se escreve</Col>
  <Col className="borderedCol header-col">Como sôa</Col>
  <Col className="borderedCol header-col">Tradução</Col>
</Row>
<Row className="borderedRow">
        <Col className="borderedCol">Safe</Col>
        <Col className="borderedCol">Sêif</Col>
        <Col className="borderedCol">Seguro</Col>
        <AudioPlayerVocab
          text="Safe"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Dangerous</Col>
        <Col className="borderedCol">Dêinjêrâs</Col>
        <Col className="borderedCol">Perigoso</Col>
        <AudioPlayerVocab
          text="Dangerous"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Secure</Col>
        <Col className="borderedCol">Sikíur</Col>
        <Col className="borderedCol">Seguro</Col>
        <AudioPlayerVocab
          text="Secure"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Risky</Col>
        <Col className="borderedCol">Ríski</Col>
        <Col className="borderedCol">Arriscado</Col>
        <AudioPlayerVocab
          text="Risky"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Protected</Col>
        <Col className="borderedCol">Prôtéktêd</Col>
        <Col className="borderedCol">Protegido</Col>
        <AudioPlayerVocab
          text="Protected"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Vulnerable</Col>
        <Col className="borderedCol">Vâlnêrâbôl</Col>
        <Col className="borderedCol">Vulnerável</Col>
        <AudioPlayerVocab
          text="Vulnerable"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Harmless</Col>
        <Col className="borderedCol">Hármlês</Col>
        <Col className="borderedCol">Inofensivo</Col>
        <AudioPlayerVocab
          text="Harmless"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Harmful</Col>
        <Col className="borderedCol">Hármfâl</Col>
        <Col className="borderedCol">Prejudicial</Col>
        <AudioPlayerVocab
          text="Harmful"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Stable</Col>
        <Col className="borderedCol">Stêibôl</Col>
        <Col className="borderedCol">Estável</Col>
        <AudioPlayerVocab
          text="Stable"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Unstable</Col>
        <Col className="borderedCol">Ânstêibôl</Col>
        <Col className="borderedCol">Instável</Col>
        <AudioPlayerVocab
          text="Unstable"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>

    </Container>

<Footer />
</>
    );
}