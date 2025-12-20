import Header from "../../components/header";
import Footer from "../../components/footer";
import HeaderMenuVocabulario from "../../components/headers/header-menu-vocabulario";
import Logo from "../../components/logo";
import { Container, Col, Row } from "react-bootstrap";
import ExplicacaoVocab from "../../components/explicacao-vocab";
import { Helmet } from "react-helmet-async";
import AudioPlayerVocab from '../../components/audio-player-vocab';

export default function VocabAdjetivo11() {
    return(
<>
<Helmet>
        <title>Adjetivos de Personalidade</title>
      </Helmet>
<Header /> 
<Logo /> 
<HeaderMenuVocabulario />
<div className="h1-titulo-da-pagina"> <h1 className="fw-bold h1-titulo-da-pagina">Adjetivos de Personalidade</h1> </div>

<ExplicacaoVocab />

<Container className="colunasVocabulario">

<Row className="borderedRow">
  <Col className="borderedCol header-col">Como se escreve</Col>
  <Col className="borderedCol header-col">Como sôa</Col>
  <Col className="borderedCol header-col">Tradução</Col>
</Row>
<Row className="borderedRow">
        <Col className="borderedCol">Kind</Col>
        <Col className="borderedCol">Káind</Col>
        <Col className="borderedCol">Gentil</Col>
        <AudioPlayerVocab
          text="Kind"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Friendly</Col>
        <Col className="borderedCol">Fréndli</Col>
        <Col className="borderedCol">Amigável</Col>
        <AudioPlayerVocab
          text="Friendly"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Honest</Col>
        <Col className="borderedCol">Ónêst</Col>
        <Col className="borderedCol">Honesto</Col>
        <AudioPlayerVocab
          text="Honest"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Generous</Col>
        <Col className="borderedCol">Jénêrâs</Col>
        <Col className="borderedCol">Generoso</Col>
        <AudioPlayerVocab
          text="Generous"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Patient</Col>
        <Col className="borderedCol">Pêishênt</Col>
        <Col className="borderedCol">Paciente</Col>
        <AudioPlayerVocab
          text="Patient"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Impatient</Col>
        <Col className="borderedCol">Impêishênt</Col>
        <Col className="borderedCol">Impaciente</Col>
        <AudioPlayerVocab
          text="Impatient"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Selfish</Col>
        <Col className="borderedCol">Sélfish</Col>
        <Col className="borderedCol">Egoísta</Col>
        <AudioPlayerVocab
          text="Selfish"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Brave</Col>
        <Col className="borderedCol">Brêiv</Col>
        <Col className="borderedCol">Corajoso</Col>
        <AudioPlayerVocab
          text="Brave"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Shy</Col>
        <Col className="borderedCol">Shái</Col>
        <Col className="borderedCol">Tímido</Col>
        <AudioPlayerVocab
          text="Shy"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Outgoing</Col>
        <Col className="borderedCol">Áutgôin</Col>
        <Col className="borderedCol">Extrovertido</Col>
        <AudioPlayerVocab
          text="Outgoing"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Funny</Col>
        <Col className="borderedCol">Fâni</Col>
        <Col className="borderedCol">Engraçado</Col>
        <AudioPlayerVocab
          text="Funny"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Serious</Col>
        <Col className="borderedCol">Síriâs</Col>
        <Col className="borderedCol">Sério</Col>
        <AudioPlayerVocab
          text="Serious"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Lazy</Col>
        <Col className="borderedCol">Lêizi</Col>
        <Col className="borderedCol">Preguiçoso</Col>
        <AudioPlayerVocab
          text="Lazy"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Hardworking</Col>
        <Col className="borderedCol">Hárd-wârkin</Col>
        <Col className="borderedCol">Trabalhador</Col>
        <AudioPlayerVocab
          text="Hardworking"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>

    </Container>

<Footer />
</>
    );
}