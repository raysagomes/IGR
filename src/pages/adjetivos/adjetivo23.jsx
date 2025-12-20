import Header from "../../components/header";
import Footer from "../../components/footer";
import HeaderMenuVocabulario from "../../components/headers/header-menu-vocabulario";
import Logo from "../../components/logo";
import { Container, Col, Row } from "react-bootstrap";
import ExplicacaoVocab from "../../components/explicacao-vocab";
import { Helmet } from "react-helmet-async";
import AudioPlayerVocab from '../../components/audio-player-vocab';

export default function VocabAdjetivo23() {
    return(
<>
<Helmet>
        <title>Adjetivos de Limpeza</title>
      </Helmet>
<Header /> 
<Logo /> 
<HeaderMenuVocabulario />
<div className="h1-titulo-da-pagina"> <h1 className="fw-bold h1-titulo-da-pagina">Adjetivos de Limpeza</h1> </div>

<ExplicacaoVocab />

<Container className="colunasVocabulario">

<Row className="borderedRow">
  <Col className="borderedCol header-col">Como se escreve</Col>
  <Col className="borderedCol header-col">Como sôa</Col>
  <Col className="borderedCol header-col">Tradução</Col>
</Row>
<Row className="borderedRow">
        <Col className="borderedCol">Clean</Col>
        <Col className="borderedCol">Klín</Col>
        <Col className="borderedCol">Limpo</Col>
        <AudioPlayerVocab
          text="Clean"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Dirty</Col>
        <Col className="borderedCol">Dârti</Col>
        <Col className="borderedCol">Sujo</Col>
        <AudioPlayerVocab
          text="Dirty"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Spotless</Col>
        <Col className="borderedCol">Spótlês</Col>
        <Col className="borderedCol">Impecável</Col>
        <AudioPlayerVocab
          text="Spotless"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Messy</Col>
        <Col className="borderedCol">Mési</Col>
        <Col className="borderedCol">Bagunçado</Col>
        <AudioPlayerVocab
          text="Messy"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Tidy</Col>
        <Col className="borderedCol">Táidi</Col>
        <Col className="borderedCol">Arrumado</Col>
        <AudioPlayerVocab
          text="Tidy"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Untidy</Col>
        <Col className="borderedCol">Ântáidi</Col>
        <Col className="borderedCol">Desarrumado</Col>
        <AudioPlayerVocab
          text="Untidy"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Neat</Col>
        <Col className="borderedCol">Nít</Col>
        <Col className="borderedCol">Organizado</Col>
        <AudioPlayerVocab
          text="Neat"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Cluttered</Col>
        <Col className="borderedCol">Klâtêrd</Col>
        <Col className="borderedCol">Entulhado</Col>
        <AudioPlayerVocab
          text="Cluttered"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Organized</Col>
        <Col className="borderedCol">Órgânaizd</Col>
        <Col className="borderedCol">Organizado</Col>
        <AudioPlayerVocab
          text="Organized"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Chaotic</Col>
        <Col className="borderedCol">Kêótik</Col>
        <Col className="borderedCol">Caótico</Col>
        <AudioPlayerVocab
          text="Chaotic"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>

    </Container>

<Footer />
</>
    );
}