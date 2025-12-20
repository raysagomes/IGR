import Header from "../../components/header";
import Footer from "../../components/footer";
import HeaderMenuVocabulario from "../../components/headers/header-menu-vocabulario";
import Logo from "../../components/logo";
import { Container, Col, Row } from "react-bootstrap";
import ExplicacaoVocab from "../../components/explicacao-vocab";
import { Helmet } from "react-helmet-async";
import AudioPlayerVocab from '../../components/audio-player-vocab';

export default function VocabAdjetivo27() {
    return(
<>
<Helmet>
        <title>Adjetivos de Saúde</title>
      </Helmet>
<Header /> 
<Logo /> 
<HeaderMenuVocabulario />
<div className="h1-titulo-da-pagina"> <h1 className="fw-bold h1-titulo-da-pagina">Adjetivos de Saúde</h1> </div>

<ExplicacaoVocab />

<Container className="colunasVocabulario">

<Row className="borderedRow">
  <Col className="borderedCol header-col">Como se escreve</Col>
  <Col className="borderedCol header-col">Como sôa</Col>
  <Col className="borderedCol header-col">Tradução</Col>
</Row>
<Row className="borderedRow">
        <Col className="borderedCol">Healthy</Col>
        <Col className="borderedCol">Hélti</Col>
        <Col className="borderedCol">Saudável</Col>
        <AudioPlayerVocab
          text="Healthy"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Sick</Col>
        <Col className="borderedCol">Sík</Col>
        <Col className="borderedCol">Doente</Col>
        <AudioPlayerVocab
          text="Sick"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Well</Col>
        <Col className="borderedCol">Uél</Col>
        <Col className="borderedCol">Bem</Col>
        <AudioPlayerVocab
          text="Well"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Ill</Col>
        <Col className="borderedCol">Íl</Col>
        <Col className="borderedCol">Doente</Col>
        <AudioPlayerVocab
          text="Ill"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Strong</Col>
        <Col className="borderedCol">Stróng</Col>
        <Col className="borderedCol">Forte</Col>
        <AudioPlayerVocab
          text="Strong"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Weak</Col>
        <Col className="borderedCol">Uík</Col>
        <Col className="borderedCol">Fraco</Col>
        <AudioPlayerVocab
          text="Weak"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Energetic</Col>
        <Col className="borderedCol">Ênêrjétik</Col>
        <Col className="borderedCol">Energético</Col>
        <AudioPlayerVocab
          text="Energetic"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Exhausted</Col>
        <Col className="borderedCol">Igzóstêd</Col>
        <Col className="borderedCol">Exausto</Col>
        <AudioPlayerVocab
          text="Exhausted"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Fit</Col>
        <Col className="borderedCol">Fít</Col>
        <Col className="borderedCol">Em forma</Col>
        <AudioPlayerVocab
          text="Fit"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Unfit</Col>
        <Col className="borderedCol">Ânfít</Col>
        <Col className="borderedCol">Fora de forma</Col>
        <AudioPlayerVocab
          text="Unfit"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>

    </Container>

<Footer />
</>
    );
}