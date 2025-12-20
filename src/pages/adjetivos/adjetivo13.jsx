import Header from "../../components/header";
import Footer from "../../components/footer";
import HeaderMenuVocabulario from "../../components/headers/header-menu-vocabulario";
import Logo from "../../components/logo";
import { Container, Col, Row } from "react-bootstrap";
import ExplicacaoVocab from "../../components/explicacao-vocab";
import { Helmet } from "react-helmet-async";
import AudioPlayerVocab from '../../components/audio-player-vocab';

export default function VocabAdjetivo13() {
    return(
<>
<Helmet>
        <title>Adjetivos de Forma</title>
      </Helmet>
<Header /> 
<Logo /> 
<HeaderMenuVocabulario />
<div className="h1-titulo-da-pagina"> <h1 className="fw-bold h1-titulo-da-pagina">Adjetivos de Forma</h1> </div>

<ExplicacaoVocab />

<Container className="colunasVocabulario">

<Row className="borderedRow">
  <Col className="borderedCol header-col">Como se escreve</Col>
  <Col className="borderedCol header-col">Como sôa</Col>
  <Col className="borderedCol header-col">Tradução</Col>
</Row>
<Row className="borderedRow">
        <Col className="borderedCol">Round</Col>
        <Col className="borderedCol">Ráund</Col>
        <Col className="borderedCol">Redondo</Col>
        <AudioPlayerVocab
          text="Round"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Square</Col>
        <Col className="borderedCol">Skuér</Col>
        <Col className="borderedCol">Quadrado</Col>
        <AudioPlayerVocab
          text="Square"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Triangular</Col>
        <Col className="borderedCol">Traiéngiulâr</Col>
        <Col className="borderedCol">Triangular</Col>
        <AudioPlayerVocab
          text="Triangular"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Rectangular</Col>
        <Col className="borderedCol">Rekténgiulâr</Col>
        <Col className="borderedCol">Retangular</Col>
        <AudioPlayerVocab
          text="Rectangular"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Oval</Col>
        <Col className="borderedCol">Ôuvâl</Col>
        <Col className="borderedCol">Oval</Col>
        <AudioPlayerVocab
          text="Oval"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Straight</Col>
        <Col className="borderedCol">Strêit</Col>
        <Col className="borderedCol">Reto</Col>
        <AudioPlayerVocab
          text="Straight"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Curved</Col>
        <Col className="borderedCol">Kârvd</Col>
        <Col className="borderedCol">Curvado</Col>
        <AudioPlayerVocab
          text="Curved"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Flat</Col>
        <Col className="borderedCol">Flét</Col>
        <Col className="borderedCol">Plano</Col>
        <AudioPlayerVocab
          text="Flat"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Sharp</Col>
        <Col className="borderedCol">Shárp</Col>
        <Col className="borderedCol">Afiado</Col>
        <AudioPlayerVocab
          text="Sharp"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Blunt</Col>
        <Col className="borderedCol">Blânt</Col>
        <Col className="borderedCol">Cego (sem corte)</Col>
        <AudioPlayerVocab
          text="Blunt"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>

    </Container>

<Footer />
</>
    );
}