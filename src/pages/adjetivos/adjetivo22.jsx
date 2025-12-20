import Header from "../../components/header";
import Footer from "../../components/footer";
import HeaderMenuVocabulario from "../../components/headers/header-menu-vocabulario";
import Logo from "../../components/logo";
import { Container, Col, Row } from "react-bootstrap";
import ExplicacaoVocab from "../../components/explicacao-vocab";
import { Helmet } from "react-helmet-async";
import AudioPlayerVocab from '../../components/audio-player-vocab';

export default function VocabAdjetivo22() {
    return(
<>
<Helmet>
        <title>Adjetivos de Importância</title>
      </Helmet>
<Header /> 
<Logo /> 
<HeaderMenuVocabulario />
<div className="h1-titulo-da-pagina"> <h1 className="fw-bold h1-titulo-da-pagina">Adjetivos de Importância</h1> </div>

<ExplicacaoVocab />

<Container className="colunasVocabulario">

<Row className="borderedRow">
  <Col className="borderedCol header-col">Como se escreve</Col>
  <Col className="borderedCol header-col">Como sôa</Col>
  <Col className="borderedCol header-col">Tradução</Col>
</Row>
<Row className="borderedRow">
        <Col className="borderedCol">Important</Col>
        <Col className="borderedCol">Impórtânt</Col>
        <Col className="borderedCol">Importante</Col>
        <AudioPlayerVocab
          text="Important"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Unimportant</Col>
        <Col className="borderedCol">Ânimpórtânt</Col>
        <Col className="borderedCol">Sem importância</Col>
        <AudioPlayerVocab
          text="Unimportant"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Essential</Col>
        <Col className="borderedCol">Isénshâl</Col>
        <Col className="borderedCol">Essencial</Col>
        <AudioPlayerVocab
          text="Essential"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Necessary</Col>
        <Col className="borderedCol">Nésêsêri</Col>
        <Col className="borderedCol">Necessário</Col>
        <AudioPlayerVocab
          text="Necessary"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Optional</Col>
        <Col className="borderedCol">Ópshânâl</Col>
        <Col className="borderedCol">Opcional</Col>
        <AudioPlayerVocab
          text="Optional"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Crucial</Col>
        <Col className="borderedCol">Krúshâl</Col>
        <Col className="borderedCol">Crucial</Col>
        <AudioPlayerVocab
          text="Crucial"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Vital</Col>
        <Col className="borderedCol">Váitâl</Col>
        <Col className="borderedCol">Vital</Col>
        <AudioPlayerVocab
          text="Vital"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Trivial</Col>
        <Col className="borderedCol">Tríviâl</Col>
        <Col className="borderedCol">Trivial</Col>
        <AudioPlayerVocab
          text="Trivial"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Significant</Col>
        <Col className="borderedCol">Signíficânt</Col>
        <Col className="borderedCol">Significativo</Col>
        <AudioPlayerVocab
          text="Significant"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Minor</Col>
        <Col className="borderedCol">Máinêr</Col>
        <Col className="borderedCol">Menor</Col>
        <AudioPlayerVocab
          text="Minor"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>

    </Container>

<Footer />
</>
    );
}