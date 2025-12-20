import Header from "../../components/header";
import Footer from "../../components/footer";
import HeaderMenuVocabulario from "../../components/headers/header-menu-vocabulario";
import Logo from "../../components/logo";
import { Container, Col, Row } from "react-bootstrap";
import ExplicacaoVocab from "../../components/explicacao-vocab";
import { Helmet } from "react-helmet-async";
import AudioPlayerVocab from '../../components/audio-player-vocab';

export default function VocabAdjetivo16() {
    return(
<>
<Helmet>
        <title>Adjetivos de Sabor</title>
      </Helmet>
<Header /> 
<Logo /> 
<HeaderMenuVocabulario />
<div className="h1-titulo-da-pagina"> <h1 className="fw-bold h1-titulo-da-pagina">Adjetivos de Sabor</h1> </div>

<ExplicacaoVocab />

<Container className="colunasVocabulario">

<Row className="borderedRow">
  <Col className="borderedCol header-col">Como se escreve</Col>
  <Col className="borderedCol header-col">Como sôa</Col>
  <Col className="borderedCol header-col">Tradução</Col>
</Row>
<Row className="borderedRow">
        <Col className="borderedCol">Sweet</Col>
        <Col className="borderedCol">Suít</Col>
        <Col className="borderedCol">Doce</Col>
        <AudioPlayerVocab
          text="Sweet"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Sour</Col>
        <Col className="borderedCol">Sáuêr</Col>
        <Col className="borderedCol">Azedo</Col>
        <AudioPlayerVocab
          text="Sour"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Bitter</Col>
        <Col className="borderedCol">Bítêr</Col>
        <Col className="borderedCol">Amargo</Col>
        <AudioPlayerVocab
          text="Bitter"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Salty</Col>
        <Col className="borderedCol">Sólti</Col>
        <Col className="borderedCol">Salgado</Col>
        <AudioPlayerVocab
          text="Salty"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Spicy</Col>
        <Col className="borderedCol">Spáisi</Col>
        <Col className="borderedCol">Picante</Col>
        <AudioPlayerVocab
          text="Spicy"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Mild</Col>
        <Col className="borderedCol">Máild</Col>
        <Col className="borderedCol">Suave</Col>
        <AudioPlayerVocab
          text="Mild"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Delicious</Col>
        <Col className="borderedCol">Dilíshâs</Col>
        <Col className="borderedCol">Delicioso</Col>
        <AudioPlayerVocab
          text="Delicious"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Tasty</Col>
        <Col className="borderedCol">Têisti</Col>
        <Col className="borderedCol">Saboroso</Col>
        <AudioPlayerVocab
          text="Tasty"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Bland</Col>
        <Col className="borderedCol">Blénd</Col>
        <Col className="borderedCol">Sem sabor</Col>
        <AudioPlayerVocab
          text="Bland"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Flavorful</Col>
        <Col className="borderedCol">Flêivêrfâl</Col>
        <Col className="borderedCol">Saboroso</Col>
        <AudioPlayerVocab
          text="Flavorful"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>

    </Container>

<Footer />
</>
    );
}