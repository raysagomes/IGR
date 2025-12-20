import Header from "../../components/header";
import Footer from "../../components/footer";
import HeaderMenuVocabulario from "../../components/headers/header-menu-vocabulario";
import Logo from "../../components/logo";
import { Container, Col, Row } from "react-bootstrap";
import ExplicacaoVocab from "../../components/explicacao-vocab";
import { Helmet } from "react-helmet-async";
import AudioPlayerVocab from '../../components/audio-player-vocab';

export default function Vocab24() {
    return(
<>
<Helmet>
        <title>Natureza</title>
      </Helmet>
<Header /> 
<Logo /> 
<HeaderMenuVocabulario />
<div className="h1-titulo-da-pagina"> <h1 className="fw-bold h1-titulo-da-pagina">Natureza</h1> </div>

<ExplicacaoVocab />

<Container className="colunasVocabulario">

<Row className="borderedRow">
  <Col className="borderedCol header-col">Como se escreve</Col>
  <Col className="borderedCol header-col">Como sôa</Col>
  <Col className="borderedCol header-col">Tradução</Col>
</Row>
<Row className="borderedRow1">
        <Col className="borderedCol">Tree</Col>
        <Col className="borderedCol">Trí</Col>
        <Col className="borderedCol">Árvore</Col>
        <AudioPlayerVocab
          text="Tree"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Flower</Col>
        <Col className="borderedCol">Fláuêr</Col>
        <Col className="borderedCol">Flor</Col>
        <AudioPlayerVocab
          text="Flower"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Grass</Col>
        <Col className="borderedCol">Grés</Col>
        <Col className="borderedCol">Grama</Col>
        <AudioPlayerVocab
          text="Grass"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Mountain</Col>
        <Col className="borderedCol">Máuntên</Col>
        <Col className="borderedCol">Montanha</Col>
        <AudioPlayerVocab
          text="Mountain"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">River</Col>
        <Col className="borderedCol">Rívêr</Col>
        <Col className="borderedCol">Rio</Col>
        <AudioPlayerVocab
          text="River"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Lake</Col>
        <Col className="borderedCol">Lêik</Col>
        <Col className="borderedCol">Lago</Col>
        <AudioPlayerVocab
          text="Lake"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Ocean</Col>
        <Col className="borderedCol">Ôushân</Col>
        <Col className="borderedCol">Oceano</Col>
        <AudioPlayerVocab
          text="Ocean"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Beach</Col>
        <Col className="borderedCol">Bích</Col>
        <Col className="borderedCol">Praia</Col>
        <AudioPlayerVocab
          text="Beach"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Forest</Col>
        <Col className="borderedCol">Fórêst</Col>
        <Col className="borderedCol">Floresta</Col>
        <AudioPlayerVocab
          text="Forest"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Desert</Col>
        <Col className="borderedCol">Dézêrt</Col>
        <Col className="borderedCol">Deserto</Col>
        <AudioPlayerVocab
          text="Desert"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Sky</Col>
        <Col className="borderedCol">Skái</Col>
        <Col className="borderedCol">Céu</Col>
        <AudioPlayerVocab
          text="Sky"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Sun</Col>
        <Col className="borderedCol">Sân</Col>
        <Col className="borderedCol">Sol</Col>
        <AudioPlayerVocab
          text="Sun"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Moon</Col>
        <Col className="borderedCol">Mún</Col>
        <Col className="borderedCol">Lua</Col>
        <AudioPlayerVocab
          text="Moon"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Star</Col>
        <Col className="borderedCol">Stár</Col>
        <Col className="borderedCol">Estrela</Col>
        <AudioPlayerVocab
          text="Star"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>

    </Container>

<Footer />
</>
    );
}