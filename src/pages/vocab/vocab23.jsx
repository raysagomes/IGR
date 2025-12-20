import Header from "../../components/header";
import Footer from "../../components/footer";
import HeaderMenuVocabulario from "../../components/headers/header-menu-vocabulario";
import Logo from "../../components/logo";
import { Container, Col, Row } from "react-bootstrap";
import ExplicacaoVocab from "../../components/explicacao-vocab";
import { Helmet } from "react-helmet-async";
import AudioPlayerVocab from '../../components/audio-player-vocab';

export default function Vocab23() {
    return(
<>
<Helmet>
        <title>Tecnologia</title>
      </Helmet>
<Header /> 
<Logo /> 
<HeaderMenuVocabulario />
<div className="h1-titulo-da-pagina"> <h1 className="fw-bold h1-titulo-da-pagina">Tecnologia</h1> </div>

<ExplicacaoVocab />

<Container className="colunasVocabulario">

<Row className="borderedRow">
  <Col className="borderedCol header-col">Como se escreve</Col>
  <Col className="borderedCol header-col">Como sôa</Col>
  <Col className="borderedCol header-col">Tradução</Col>
</Row>
<Row className="borderedRow1">
        <Col className="borderedCol">Smartphone</Col>
        <Col className="borderedCol">Smártfôun</Col>
        <Col className="borderedCol">Smartphone</Col>
        <AudioPlayerVocab
          text="Smartphone"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Laptop</Col>
        <Col className="borderedCol">Léptóp</Col>
        <Col className="borderedCol">Notebook</Col>
        <AudioPlayerVocab
          text="Laptop"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Tablet</Col>
        <Col className="borderedCol">Téblêt</Col>
        <Col className="borderedCol">Tablet</Col>
        <AudioPlayerVocab
          text="Tablet"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Internet</Col>
        <Col className="borderedCol">Íntêrnêt</Col>
        <Col className="borderedCol">Internet</Col>
        <AudioPlayerVocab
          text="Internet"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Website</Col>
        <Col className="borderedCol">Uébsáit</Col>
        <Col className="borderedCol">Site</Col>
        <AudioPlayerVocab
          text="Website"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Email</Col>
        <Col className="borderedCol">Ímêil</Col>
        <Col className="borderedCol">Email</Col>
        <AudioPlayerVocab
          text="Email"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Password</Col>
        <Col className="borderedCol">Pésuôrd</Col>
        <Col className="borderedCol">Senha</Col>
        <AudioPlayerVocab
          text="Password"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Software</Col>
        <Col className="borderedCol">Sóftuér</Col>
        <Col className="borderedCol">Software</Col>
        <AudioPlayerVocab
          text="Software"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Hardware</Col>
        <Col className="borderedCol">Hárduér</Col>
        <Col className="borderedCol">Hardware</Col>
        <AudioPlayerVocab
          text="Hardware"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Keyboard</Col>
        <Col className="borderedCol">Kíbôrd</Col>
        <Col className="borderedCol">Teclado</Col>
        <AudioPlayerVocab
          text="Keyboard"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Mouse</Col>
        <Col className="borderedCol">Máus</Col>
        <Col className="borderedCol">Mouse</Col>
        <AudioPlayerVocab
          text="Mouse"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Screen</Col>
        <Col className="borderedCol">Skrín</Col>
        <Col className="borderedCol">Tela</Col>
        <AudioPlayerVocab
          text="Screen"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>

    </Container>

<Footer />
</>
    );
}