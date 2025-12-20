import Header from "../../components/header";
import Footer from "../../components/footer";
import HeaderMenuVocabulario from "../../components/headers/header-menu-vocabulario";
import Logo from "../../components/logo";
import { Container, Col, Row } from "react-bootstrap";
import ExplicacaoVocab from "../../components/explicacao-vocab";
import { Helmet } from "react-helmet-async";
import AudioPlayerVocab from '../../components/audio-player-vocab';

export default function VocabAdjetivo29() {
    return(
<>
<Helmet>
        <title>Adjetivos de Humor</title>
      </Helmet>
<Header /> 
<Logo /> 
<HeaderMenuVocabulario />
<div className="h1-titulo-da-pagina"> <h1 className="fw-bold h1-titulo-da-pagina">Adjetivos de Humor</h1> </div>

<ExplicacaoVocab />

<Container className="colunasVocabulario">

<Row className="borderedRow">
  <Col className="borderedCol header-col">Como se escreve</Col>
  <Col className="borderedCol header-col">Como sôa</Col>
  <Col className="borderedCol header-col">Tradução</Col>
</Row>
<Row className="borderedRow">
        <Col className="borderedCol">Cheerful</Col>
        <Col className="borderedCol">Chírfâl</Col>
        <Col className="borderedCol">Alegre</Col>
        <AudioPlayerVocab
          text="Cheerful"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Grumpy</Col>
        <Col className="borderedCol">Grâmpi</Col>
        <Col className="borderedCol">Mal-humorado</Col>
        <AudioPlayerVocab
          text="Grumpy"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Optimistic</Col>
        <Col className="borderedCol">Óptimístik</Col>
        <Col className="borderedCol">Otimista</Col>
        <AudioPlayerVocab
          text="Optimistic"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Pessimistic</Col>
        <Col className="borderedCol">Pésimístik</Col>
        <Col className="borderedCol">Pessimista</Col>
        <AudioPlayerVocab
          text="Pessimistic"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Positive</Col>
        <Col className="borderedCol">Pózitiv</Col>
        <Col className="borderedCol">Positivo</Col>
        <AudioPlayerVocab
          text="Positive"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Negative</Col>
        <Col className="borderedCol">Négâtiv</Col>
        <Col className="borderedCol">Negativo</Col>
        <AudioPlayerVocab
          text="Negative"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Enthusiastic</Col>
        <Col className="borderedCol">Ênthiuziéstik</Col>
        <Col className="borderedCol">Entusiasmado</Col>
        <AudioPlayerVocab
          text="Enthusiastic"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Apathetic</Col>
        <Col className="borderedCol">Épâthétik</Col>
        <Col className="borderedCol">Apático</Col>
        <AudioPlayerVocab
          text="Apathetic"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Hopeful</Col>
        <Col className="borderedCol">Hôupfâl</Col>
        <Col className="borderedCol">Esperançoso</Col>
        <AudioPlayerVocab
          text="Hopeful"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Hopeless</Col>
        <Col className="borderedCol">Hôuplês</Col>
        <Col className="borderedCol">Sem esperança</Col>
        <AudioPlayerVocab
          text="Hopeless"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>

    </Container>

<Footer />
</>
    );
}