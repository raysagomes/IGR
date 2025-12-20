import Header from "../../components/header";
import Footer from "../../components/footer";
import HeaderMenuVocabulario from "../../components/headers/header-menu-vocabulario";
import Logo from "../../components/logo";
import { Container, Col, Row } from "react-bootstrap";
import ExplicacaoVocab from "../../components/explicacao-vocab";
import { Helmet } from "react-helmet-async";
import AudioPlayerVocab from '../../components/audio-player-vocab';

export default function VocabAdjetivo18() {
    return(
<>
<Helmet>
        <title>Adjetivos de Luz</title>
      </Helmet>
<Header /> 
<Logo /> 
<HeaderMenuVocabulario />
<div className="h1-titulo-da-pagina"> <h1 className="fw-bold h1-titulo-da-pagina">Adjetivos de Luz</h1> </div>

<ExplicacaoVocab />

<Container className="colunasVocabulario">

<Row className="borderedRow">
  <Col className="borderedCol header-col">Como se escreve</Col>
  <Col className="borderedCol header-col">Como sôa</Col>
  <Col className="borderedCol header-col">Tradução</Col>
</Row>
<Row className="borderedRow">
        <Col className="borderedCol">Bright</Col>
        <Col className="borderedCol">Bráit</Col>
        <Col className="borderedCol">Brilhante</Col>
        <AudioPlayerVocab
          text="Bright"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Dark</Col>
        <Col className="borderedCol">Dárk</Col>
        <Col className="borderedCol">Escuro</Col>
        <AudioPlayerVocab
          text="Dark"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Light</Col>
        <Col className="borderedCol">Láit</Col>
        <Col className="borderedCol">Claro</Col>
        <AudioPlayerVocab
          text="Light"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Dim</Col>
        <Col className="borderedCol">Dím</Col>
        <Col className="borderedCol">Fraco (luz)</Col>
        <AudioPlayerVocab
          text="Dim"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Shiny</Col>
        <Col className="borderedCol">Sháini</Col>
        <Col className="borderedCol">Brilhoso</Col>
        <AudioPlayerVocab
          text="Shiny"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Dull</Col>
        <Col className="borderedCol">Dâl</Col>
        <Col className="borderedCol">Opaco</Col>
        <AudioPlayerVocab
          text="Dull"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Glowing</Col>
        <Col className="borderedCol">Glôuin</Col>
        <Col className="borderedCol">Brilhando</Col>
        <AudioPlayerVocab
          text="Glowing"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Sparkling</Col>
        <Col className="borderedCol">Spárklinj</Col>
        <Col className="borderedCol">Cintilante</Col>
        <AudioPlayerVocab
          text="Sparkling"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Transparent</Col>
        <Col className="borderedCol">Trénspérênt</Col>
        <Col className="borderedCol">Transparente</Col>
        <AudioPlayerVocab
          text="Transparent"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Opaque</Col>
        <Col className="borderedCol">Ôupêik</Col>
        <Col className="borderedCol">Opaco</Col>
        <AudioPlayerVocab
          text="Opaque"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>

    </Container>

<Footer />
</>
    );
}