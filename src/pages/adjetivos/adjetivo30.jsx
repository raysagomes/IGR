import Header from "../../components/header";
import Footer from "../../components/footer";
import HeaderMenuVocabulario from "../../components/headers/header-menu-vocabulario";
import Logo from "../../components/logo";
import { Container, Col, Row } from "react-bootstrap";
import ExplicacaoVocab from "../../components/explicacao-vocab";
import { Helmet } from "react-helmet-async";
import AudioPlayerVocab from '../../components/audio-player-vocab';

export default function VocabAdjetivo30() {
    return(
<>
<Helmet>
        <title>Adjetivos de Comportamento</title>
      </Helmet>
<Header /> 
<Logo /> 
<HeaderMenuVocabulario />
<div className="h1-titulo-da-pagina"> <h1 className="fw-bold h1-titulo-da-pagina">Adjetivos de Comportamento</h1> </div>

<ExplicacaoVocab />

<Container className="colunasVocabulario">

<Row className="borderedRow">
  <Col className="borderedCol header-col">Como se escreve</Col>
  <Col className="borderedCol header-col">Como sôa</Col>
  <Col className="borderedCol header-col">Tradução</Col>
</Row>
<Row className="borderedRow">
        <Col className="borderedCol">Polite</Col>
        <Col className="borderedCol">Pôláit</Col>
        <Col className="borderedCol">Educado</Col>
        <AudioPlayerVocab
          text="Polite"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Rude</Col>
        <Col className="borderedCol">Rúd</Col>
        <Col className="borderedCol">Grosseiro</Col>
        <AudioPlayerVocab
          text="Rude"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Respectful</Col>
        <Col className="borderedCol">Rispéktfâl</Col>
        <Col className="borderedCol">Respeitoso</Col>
        <AudioPlayerVocab
          text="Respectful"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Disrespectful</Col>
        <Col className="borderedCol">Disrispéktfâl</Col>
        <Col className="borderedCol">Desrespeitoso</Col>
        <AudioPlayerVocab
          text="Disrespectful"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Obedient</Col>
        <Col className="borderedCol">Ôbídiênt</Col>
        <Col className="borderedCol">Obediente</Col>
        <AudioPlayerVocab
          text="Obedient"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Disobedient</Col>
        <Col className="borderedCol">Disôbídiênt</Col>
        <Col className="borderedCol">Desobediente</Col>
        <AudioPlayerVocab
          text="Disobedient"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Responsible</Col>
        <Col className="borderedCol">Rispónsêbôl</Col>
        <Col className="borderedCol">Responsável</Col>
        <AudioPlayerVocab
          text="Responsible"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Irresponsible</Col>
        <Col className="borderedCol">Irrispónsêbôl</Col>
        <Col className="borderedCol">Irresponsável</Col>
        <AudioPlayerVocab
          text="Irresponsible"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Reliable</Col>
        <Col className="borderedCol">Riláiâbôl</Col>
        <Col className="borderedCol">Confiável</Col>
        <AudioPlayerVocab
          text="Reliable"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Unreliable</Col>
        <Col className="borderedCol">Ânriláiâbôl</Col>
        <Col className="borderedCol">Não confiável</Col>
        <AudioPlayerVocab
          text="Unreliable"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Mature</Col>
        <Col className="borderedCol">Mâtiúr</Col>
        <Col className="borderedCol">Maduro</Col>
        <AudioPlayerVocab
          text="Mature"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Immature</Col>
        <Col className="borderedCol">Imâtiúr</Col>
        <Col className="borderedCol">Imaturo</Col>
        <AudioPlayerVocab
          text="Immature"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>

    </Container>

<Footer />
</>
    );
}