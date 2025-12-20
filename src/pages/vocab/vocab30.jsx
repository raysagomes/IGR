import Header from "../../components/header";
import Footer from "../../components/footer";
import HeaderMenuVocabulario from "../../components/headers/header-menu-vocabulario";
import Logo from "../../components/logo";
import { Container, Col, Row } from "react-bootstrap";
import ExplicacaoVocab from "../../components/explicacao-vocab";
import { Helmet } from "react-helmet-async";
import AudioPlayerVocab from '../../components/audio-player-vocab';

export default function Vocab30() {
    return(
<>
<Helmet>
        <title>Trabalho</title>
      </Helmet>
<Header /> 
<Logo /> 
<HeaderMenuVocabulario />
<div className="h1-titulo-da-pagina"> <h1 className="fw-bold h1-titulo-da-pagina">Trabalho</h1> </div>

<ExplicacaoVocab />

<Container className="colunasVocabulario">

<Row className="borderedRow">
  <Col className="borderedCol header-col">Como se escreve</Col>
  <Col className="borderedCol header-col">Como sôa</Col>
  <Col className="borderedCol header-col">Tradução</Col>
</Row>
<Row className="borderedRow1">
        <Col className="borderedCol">Office</Col>
        <Col className="borderedCol">Ófis</Col>
        <Col className="borderedCol">Escritório</Col>
        <AudioPlayerVocab
          text="Office"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Job</Col>
        <Col className="borderedCol">Jób</Col>
        <Col className="borderedCol">Trabalho</Col>
        <AudioPlayerVocab
          text="Job"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Boss</Col>
        <Col className="borderedCol">Bós</Col>
        <Col className="borderedCol">Chefe</Col>
        <AudioPlayerVocab
          text="Boss"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Employee</Col>
        <Col className="borderedCol">Êmplóii</Col>
        <Col className="borderedCol">Funcionário</Col>
        <AudioPlayerVocab
          text="Employee"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Meeting</Col>
        <Col className="borderedCol">Mítin</Col>
        <Col className="borderedCol">Reunião</Col>
        <AudioPlayerVocab
          text="Meeting"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Project</Col>
        <Col className="borderedCol">Prójêkt</Col>
        <Col className="borderedCol">Projeto</Col>
        <AudioPlayerVocab
          text="Project"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Salary</Col>
        <Col className="borderedCol">Sélêri</Col>
        <Col className="borderedCol">Salário</Col>
        <AudioPlayerVocab
          text="Salary"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Schedule</Col>
        <Col className="borderedCol">Skéjul</Col>
        <Col className="borderedCol">Horário</Col>
        <AudioPlayerVocab
          text="Schedule"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Interview</Col>
        <Col className="borderedCol">Íntêrviú</Col>
        <Col className="borderedCol">Entrevista</Col>
        <AudioPlayerVocab
          text="Interview"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Resume</Col>
        <Col className="borderedCol">Rêzumêi</Col>
        <Col className="borderedCol">Currículo</Col>
        <AudioPlayerVocab
          text="Resume"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Career</Col>
        <Col className="borderedCol">Kêrír</Col>
        <Col className="borderedCol">Carreira</Col>
        <AudioPlayerVocab
          text="Career"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Company</Col>
        <Col className="borderedCol">Kâmpêni</Col>
        <Col className="borderedCol">Empresa</Col>
        <AudioPlayerVocab
          text="Company"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>

    </Container>

<Footer />
</>
    );
}