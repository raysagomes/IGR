import Header from "../../components/header";
import Footer from "../../components/footer";
import HeaderMenuVocabulario from "../../components/headers/header-menu-vocabulario";
import Logo from "../../components/logo";
import { Container, Col, Row } from "react-bootstrap";
import ExplicacaoVocab from "../../components/explicacao-vocab";
import { Helmet } from "react-helmet-async";
import AudioPlayerVocab from '../../components/audio-player-vocab';

export default function VocabAdjetivo15() {
    return(
<>
<Helmet>
        <title>Adjetivos de Idade</title>
      </Helmet>
<Header /> 
<Logo /> 
<HeaderMenuVocabulario />
<div className="h1-titulo-da-pagina"> <h1 className="fw-bold h1-titulo-da-pagina">Adjetivos de Idade</h1> </div>

<ExplicacaoVocab />

<Container className="colunasVocabulario">

<Row className="borderedRow">
  <Col className="borderedCol header-col">Como se escreve</Col>
  <Col className="borderedCol header-col">Como sôa</Col>
  <Col className="borderedCol header-col">Tradução</Col>
</Row>
<Row className="borderedRow">
        <Col className="borderedCol">Young</Col>
        <Col className="borderedCol">Yân</Col>
        <Col className="borderedCol">Jovem</Col>
        <AudioPlayerVocab
          text="Young"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Old</Col>
        <Col className="borderedCol">Ôuld</Col>
        <Col className="borderedCol">Velho</Col>
        <AudioPlayerVocab
          text="Old"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">New</Col>
        <Col className="borderedCol">Niú</Col>
        <Col className="borderedCol">Novo</Col>
        <AudioPlayerVocab
          text="New"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Ancient</Col>
        <Col className="borderedCol">Êinshênt</Col>
        <Col className="borderedCol">Antigo</Col>
        <AudioPlayerVocab
          text="Ancient"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Modern</Col>
        <Col className="borderedCol">Módêrn</Col>
        <Col className="borderedCol">Moderno</Col>
        <AudioPlayerVocab
          text="Modern"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Fresh</Col>
        <Col className="borderedCol">Frésh</Col>
        <Col className="borderedCol">Fresco</Col>
        <AudioPlayerVocab
          text="Fresh"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Stale</Col>
        <Col className="borderedCol">Stêil</Col>
        <Col className="borderedCol">Velho (comida)</Col>
        <AudioPlayerVocab
          text="Stale"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Recent</Col>
        <Col className="borderedCol">Rísênt</Col>
        <Col className="borderedCol">Recente</Col>
        <AudioPlayerVocab
          text="Recent"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Vintage</Col>
        <Col className="borderedCol">Víntij</Col>
        <Col className="borderedCol">Vintage</Col>
        <AudioPlayerVocab
          text="Vintage"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Contemporary</Col>
        <Col className="borderedCol">Kântêmpôrêri</Col>
        <Col className="borderedCol">Contemporâneo</Col>
        <AudioPlayerVocab
          text="Contemporary"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>

    </Container>

<Footer />
</>
    );
}