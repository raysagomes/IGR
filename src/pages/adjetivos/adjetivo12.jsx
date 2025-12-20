import Header from "../../components/header";
import Footer from "../../components/footer";
import HeaderMenuVocabulario from "../../components/headers/header-menu-vocabulario";
import Logo from "../../components/logo";
import { Container, Col, Row } from "react-bootstrap";
import ExplicacaoVocab from "../../components/explicacao-vocab";
import { Helmet } from "react-helmet-async";
import AudioPlayerVocab from '../../components/audio-player-vocab';

export default function VocabAdjetivo12() {
    return(
<>
<Helmet>
        <title>Adjetivos de Qualidade</title>
      </Helmet>
<Header /> 
<Logo /> 
<HeaderMenuVocabulario />
<div className="h1-titulo-da-pagina"> <h1 className="fw-bold h1-titulo-da-pagina">Adjetivos de Qualidade</h1> </div>

<ExplicacaoVocab />

<Container className="colunasVocabulario">

<Row className="borderedRow">
  <Col className="borderedCol header-col">Como se escreve</Col>
  <Col className="borderedCol header-col">Como sôa</Col>
  <Col className="borderedCol header-col">Tradução</Col>
</Row>
<Row className="borderedRow">
        <Col className="borderedCol">Good</Col>
        <Col className="borderedCol">Gúd</Col>
        <Col className="borderedCol">Bom</Col>
        <AudioPlayerVocab
          text="Good"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Bad</Col>
        <Col className="borderedCol">Béd</Col>
        <Col className="borderedCol">Ruim</Col>
        <AudioPlayerVocab
          text="Bad"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Excellent</Col>
        <Col className="borderedCol">Éksêlênt</Col>
        <Col className="borderedCol">Excelente</Col>
        <AudioPlayerVocab
          text="Excellent"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Perfect</Col>
        <Col className="borderedCol">Pârfêkt</Col>
        <Col className="borderedCol">Perfeito</Col>
        <AudioPlayerVocab
          text="Perfect"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Terrible</Col>
        <Col className="borderedCol">Térêbôl</Col>
        <Col className="borderedCol">Terrível</Col>
        <AudioPlayerVocab
          text="Terrible"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Amazing</Col>
        <Col className="borderedCol">Âmêizin</Col>
        <Col className="borderedCol">Incrível</Col>
        <AudioPlayerVocab
          text="Amazing"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Wonderful</Col>
        <Col className="borderedCol">Wândêrfâl</Col>
        <Col className="borderedCol">Maravilhoso</Col>
        <AudioPlayerVocab
          text="Wonderful"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Awful</Col>
        <Col className="borderedCol">Ófâl</Col>
        <Col className="borderedCol">Horrível</Col>
        <AudioPlayerVocab
          text="Awful"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Fantastic</Col>
        <Col className="borderedCol">Fentéstik</Col>
        <Col className="borderedCol">Fantástico</Col>
        <AudioPlayerVocab
          text="Fantastic"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Great</Col>
        <Col className="borderedCol">Grêit</Col>
        <Col className="borderedCol">Ótimo</Col>
        <AudioPlayerVocab
          text="Great"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>

    </Container>

<Footer />
</>
    );
}