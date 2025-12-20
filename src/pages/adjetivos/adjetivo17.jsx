import Header from "../../components/header";
import Footer from "../../components/footer";
import HeaderMenuVocabulario from "../../components/headers/header-menu-vocabulario";
import Logo from "../../components/logo";
import { Container, Col, Row } from "react-bootstrap";
import ExplicacaoVocab from "../../components/explicacao-vocab";
import { Helmet } from "react-helmet-async";
import AudioPlayerVocab from '../../components/audio-player-vocab';

export default function VocabAdjetivo17() {
    return(
<>
<Helmet>
        <title>Adjetivos de Som</title>
      </Helmet>
<Header /> 
<Logo /> 
<HeaderMenuVocabulario />
<div className="h1-titulo-da-pagina"> <h1 className="fw-bold h1-titulo-da-pagina">Adjetivos de Som</h1> </div>

<ExplicacaoVocab />

<Container className="colunasVocabulario">

<Row className="borderedRow">
  <Col className="borderedCol header-col">Como se escreve</Col>
  <Col className="borderedCol header-col">Como sôa</Col>
  <Col className="borderedCol header-col">Tradução</Col>
</Row>
<Row className="borderedRow">
        <Col className="borderedCol">Loud</Col>
        <Col className="borderedCol">Láud</Col>
        <Col className="borderedCol">Alto (som)</Col>
        <AudioPlayerVocab
          text="Loud"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Quiet</Col>
        <Col className="borderedCol">Kuáiêt</Col>
        <Col className="borderedCol">Silencioso</Col>
        <AudioPlayerVocab
          text="Quiet"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Noisy</Col>
        <Col className="borderedCol">Nóizi</Col>
        <Col className="borderedCol">Barulhento</Col>
        <AudioPlayerVocab
          text="Noisy"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Silent</Col>
        <Col className="borderedCol">Sáilênt</Col>
        <Col className="borderedCol">Silencioso</Col>
        <AudioPlayerVocab
          text="Silent"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Soft</Col>
        <Col className="borderedCol">Sóft</Col>
        <Col className="borderedCol">Suave (som)</Col>
        <AudioPlayerVocab
          text="Soft"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Sharp</Col>
        <Col className="borderedCol">Shárp</Col>
        <Col className="borderedCol">Agudo</Col>
        <AudioPlayerVocab
          text="Sharp"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Deep</Col>
        <Col className="borderedCol">Díp</Col>
        <Col className="borderedCol">Grave</Col>
        <AudioPlayerVocab
          text="Deep"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">High</Col>
        <Col className="borderedCol">Hái</Col>
        <Col className="borderedCol">Agudo</Col>
        <AudioPlayerVocab
          text="High"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Low</Col>
        <Col className="borderedCol">Lôu</Col>
        <Col className="borderedCol">Baixo</Col>
        <AudioPlayerVocab
          text="Low"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Musical</Col>
        <Col className="borderedCol">Miúzikâl</Col>
        <Col className="borderedCol">Musical</Col>
        <AudioPlayerVocab
          text="Musical"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>

    </Container>

<Footer />
</>
    );
}