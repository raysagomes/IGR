import Header from "../../components/header";
import Footer from "../../components/footer";
import HeaderMenuVocabulario from "../../components/headers/header-menu-vocabulario";
import Logo from "../../components/logo";
import { Container, Col, Row } from "react-bootstrap";
import ExplicacaoVocab from "../../components/explicacao-vocab";
import { Helmet } from "react-helmet-async";
import AudioPlayerVocab from '../../components/audio-player-vocab';

export default function Vocab22() {
    return(
<>
<Helmet>
        <title>Escola</title>
      </Helmet>
<Header /> 
<Logo /> 
<HeaderMenuVocabulario />
<div className="h1-titulo-da-pagina"> <h1 className="fw-bold h1-titulo-da-pagina">Escola</h1> </div>

<ExplicacaoVocab />

<Container className="colunasVocabulario">

<Row className="borderedRow">
  <Col className="borderedCol header-col">Como se escreve</Col>
  <Col className="borderedCol header-col">Como sôa</Col>
  <Col className="borderedCol header-col">Tradução</Col>
</Row>
<Row className="borderedRow1">
        <Col className="borderedCol">Book</Col>
        <Col className="borderedCol">Búk</Col>
        <Col className="borderedCol">Livro</Col>
        <AudioPlayerVocab
          text="Book"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Pen</Col>
        <Col className="borderedCol">Pén</Col>
        <Col className="borderedCol">Caneta</Col>
        <AudioPlayerVocab
          text="Pen"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Pencil</Col>
        <Col className="borderedCol">Pénsôl</Col>
        <Col className="borderedCol">Lápis</Col>
        <AudioPlayerVocab
          text="Pencil"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Notebook</Col>
        <Col className="borderedCol">Nôutbúk</Col>
        <Col className="borderedCol">Caderno</Col>
        <AudioPlayerVocab
          text="Notebook"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Eraser</Col>
        <Col className="borderedCol">Irêisêr</Col>
        <Col className="borderedCol">Borracha</Col>
        <AudioPlayerVocab
          text="Eraser"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Ruler</Col>
        <Col className="borderedCol">Rúlêr</Col>
        <Col className="borderedCol">Régua</Col>
        <AudioPlayerVocab
          text="Ruler"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Backpack</Col>
        <Col className="borderedCol">Békpék</Col>
        <Col className="borderedCol">Mochila</Col>
        <AudioPlayerVocab
          text="Backpack"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Desk</Col>
        <Col className="borderedCol">Désk</Col>
        <Col className="borderedCol">Mesa</Col>
        <AudioPlayerVocab
          text="Desk"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Chair</Col>
        <Col className="borderedCol">Chér</Col>
        <Col className="borderedCol">Cadeira</Col>
        <AudioPlayerVocab
          text="Chair"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Blackboard</Col>
        <Col className="borderedCol">Blékbôrd</Col>
        <Col className="borderedCol">Quadro Negro</Col>
        <AudioPlayerVocab
          text="Blackboard"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Calculator</Col>
        <Col className="borderedCol">Kélkiulêitêr</Col>
        <Col className="borderedCol">Calculadora</Col>
        <AudioPlayerVocab
          text="Calculator"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Computer</Col>
        <Col className="borderedCol">Kômpiútêr</Col>
        <Col className="borderedCol">Computador</Col>
        <AudioPlayerVocab
          text="Computer"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>

    </Container>

<Footer />
</>
    );
}