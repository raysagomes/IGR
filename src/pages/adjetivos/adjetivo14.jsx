import Header from "../../components/header";
import Footer from "../../components/footer";
import HeaderMenuVocabulario from "../../components/headers/header-menu-vocabulario";
import Logo from "../../components/logo";
import { Container, Col, Row } from "react-bootstrap";
import ExplicacaoVocab from "../../components/explicacao-vocab";
import { Helmet } from "react-helmet-async";
import AudioPlayerVocab from '../../components/audio-player-vocab';

export default function VocabAdjetivo14() {
    return(
<>
<Helmet>
        <title>Adjetivos de Textura</title>
      </Helmet>
<Header /> 
<Logo /> 
<HeaderMenuVocabulario />
<div className="h1-titulo-da-pagina"> <h1 className="fw-bold h1-titulo-da-pagina">Adjetivos de Textura</h1> </div>

<ExplicacaoVocab />

<Container className="colunasVocabulario">

<Row className="borderedRow">
  <Col className="borderedCol header-col">Como se escreve</Col>
  <Col className="borderedCol header-col">Como sôa</Col>
  <Col className="borderedCol header-col">Tradução</Col>
</Row>
<Row className="borderedRow">
        <Col className="borderedCol">Smooth</Col>
        <Col className="borderedCol">Smúth</Col>
        <Col className="borderedCol">Liso</Col>
        <AudioPlayerVocab
          text="Smooth"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Rough</Col>
        <Col className="borderedCol">Râf</Col>
        <Col className="borderedCol">Áspero</Col>
        <AudioPlayerVocab
          text="Rough"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Soft</Col>
        <Col className="borderedCol">Sóft</Col>
        <Col className="borderedCol">Macio</Col>
        <AudioPlayerVocab
          text="Soft"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Hard</Col>
        <Col className="borderedCol">Hárd</Col>
        <Col className="borderedCol">Duro</Col>
        <AudioPlayerVocab
          text="Hard"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Sticky</Col>
        <Col className="borderedCol">Stíki</Col>
        <Col className="borderedCol">Pegajoso</Col>
        <AudioPlayerVocab
          text="Sticky"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Slippery</Col>
        <Col className="borderedCol">Slípêri</Col>
        <Col className="borderedCol">Escorregadio</Col>
        <AudioPlayerVocab
          text="Slippery"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Bumpy</Col>
        <Col className="borderedCol">Bâmpi</Col>
        <Col className="borderedCol">Irregular</Col>
        <AudioPlayerVocab
          text="Bumpy"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Fuzzy</Col>
        <Col className="borderedCol">Fâzi</Col>
        <Col className="borderedCol">Felpudo</Col>
        <AudioPlayerVocab
          text="Fuzzy"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Silky</Col>
        <Col className="borderedCol">Sílki</Col>
        <Col className="borderedCol">Sedoso</Col>
        <AudioPlayerVocab
          text="Silky"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Scratchy</Col>
        <Col className="borderedCol">Skrétchi</Col>
        <Col className="borderedCol">Arranhoso</Col>
        <AudioPlayerVocab
          text="Scratchy"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>

    </Container>

<Footer />
</>
    );
}