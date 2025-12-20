import Header from "../../components/header";
import Footer from "../../components/footer";
import HeaderMenuVocabulario from "../../components/headers/header-menu-vocabulario";
import Logo from "../../components/logo";
import { Container, Col, Row } from "react-bootstrap";
import ExplicacaoVocab from "../../components/explicacao-vocab";
import { Helmet } from "react-helmet-async";
import AudioPlayerVocab from '../../components/audio-player-vocab';

export default function Vocab18() {
    return(
<>
<Helmet>
        <title>Profissões</title>
      </Helmet>
<Header /> 
<Logo /> 
<HeaderMenuVocabulario />
<div className="h1-titulo-da-pagina"> <h1 className="fw-bold h1-titulo-da-pagina">Profissões</h1> </div>

<ExplicacaoVocab />

<Container className="colunasVocabulario">

<Row className="borderedRow">
  <Col className="borderedCol header-col">Como se escreve</Col>
  <Col className="borderedCol header-col">Como sôa</Col>
  <Col className="borderedCol header-col">Tradução</Col>
</Row>
<Row className="borderedRow1">
        <Col className="borderedCol">Doctor</Col>
        <Col className="borderedCol">Dóctêr</Col>
        <Col className="borderedCol">Médico</Col>
        <AudioPlayerVocab
          text="Doctor"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Teacher</Col>
        <Col className="borderedCol">Tíchêr</Col>
        <Col className="borderedCol">Professor</Col>
        <AudioPlayerVocab
          text="Teacher"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Engineer</Col>
        <Col className="borderedCol">Ênjinír</Col>
        <Col className="borderedCol">Engenheiro</Col>
        <AudioPlayerVocab
          text="Engineer"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Lawyer</Col>
        <Col className="borderedCol">Lóiêr</Col>
        <Col className="borderedCol">Advogado</Col>
        <AudioPlayerVocab
          text="Lawyer"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Nurse</Col>
        <Col className="borderedCol">Nârs</Col>
        <Col className="borderedCol">Enfermeiro</Col>
        <AudioPlayerVocab
          text="Nurse"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Police Officer</Col>
        <Col className="borderedCol">Polís Ófisêr</Col>
        <Col className="borderedCol">Policial</Col>
        <AudioPlayerVocab
          text="Police Officer"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Firefighter</Col>
        <Col className="borderedCol">Fáiêr-fáitêr</Col>
        <Col className="borderedCol">Bombeiro</Col>
        <AudioPlayerVocab
          text="Firefighter"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Chef</Col>
        <Col className="borderedCol">Shéf</Col>
        <Col className="borderedCol">Chef</Col>
        <AudioPlayerVocab
          text="Chef"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Pilot</Col>
        <Col className="borderedCol">Páilôt</Col>
        <Col className="borderedCol">Piloto</Col>
        <AudioPlayerVocab
          text="Pilot"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Dentist</Col>
        <Col className="borderedCol">Déntist</Col>
        <Col className="borderedCol">Dentista</Col>
        <AudioPlayerVocab
          text="Dentist"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Mechanic</Col>
        <Col className="borderedCol">Mekénik</Col>
        <Col className="borderedCol">Mecânico</Col>
        <AudioPlayerVocab
          text="Mechanic"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Artist</Col>
        <Col className="borderedCol">Ártist</Col>
        <Col className="borderedCol">Artista</Col>
        <AudioPlayerVocab
          text="Artist"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Musician</Col>
        <Col className="borderedCol">Miuzíshân</Col>
        <Col className="borderedCol">Músico</Col>
        <AudioPlayerVocab
          text="Musician"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Farmer</Col>
        <Col className="borderedCol">Fármêr</Col>
        <Col className="borderedCol">Fazendeiro</Col>
        <AudioPlayerVocab
          text="Farmer"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>

    </Container>

<Footer />
</>
    );
}