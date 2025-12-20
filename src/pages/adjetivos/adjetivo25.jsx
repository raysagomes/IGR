import Header from "../../components/header";
import Footer from "../../components/footer";
import HeaderMenuVocabulario from "../../components/headers/header-menu-vocabulario";
import Logo from "../../components/logo";
import { Container, Col, Row } from "react-bootstrap";
import ExplicacaoVocab from "../../components/explicacao-vocab";
import { Helmet } from "react-helmet-async";
import AudioPlayerVocab from '../../components/audio-player-vocab';

export default function VocabAdjetivo25() {
    return(
<>
<Helmet>
        <title>Adjetivos de Popularidade</title>
      </Helmet>
<Header /> 
<Logo /> 
<HeaderMenuVocabulario />
<div className="h1-titulo-da-pagina"> <h1 className="fw-bold h1-titulo-da-pagina">Adjetivos de Popularidade</h1> </div>

<ExplicacaoVocab />

<Container className="colunasVocabulario">

<Row className="borderedRow">
  <Col className="borderedCol header-col">Como se escreve</Col>
  <Col className="borderedCol header-col">Como sôa</Col>
  <Col className="borderedCol header-col">Tradução</Col>
</Row>
<Row className="borderedRow">
        <Col className="borderedCol">Popular</Col>
        <Col className="borderedCol">Pópiulâr</Col>
        <Col className="borderedCol">Popular</Col>
        <AudioPlayerVocab
          text="Popular"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Unpopular</Col>
        <Col className="borderedCol">Ânpópiulâr</Col>
        <Col className="borderedCol">Impopular</Col>
        <AudioPlayerVocab
          text="Unpopular"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Famous</Col>
        <Col className="borderedCol">Fêimâs</Col>
        <Col className="borderedCol">Famoso</Col>
        <AudioPlayerVocab
          text="Famous"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Unknown</Col>
        <Col className="borderedCol">Ânknôun</Col>
        <Col className="borderedCol">Desconhecido</Col>
        <AudioPlayerVocab
          text="Unknown"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Well-known</Col>
        <Col className="borderedCol">Uél-nôun</Col>
        <Col className="borderedCol">Bem conhecido</Col>
        <AudioPlayerVocab
          text="Well-known"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Obscure</Col>
        <Col className="borderedCol">Ôbskíur</Col>
        <Col className="borderedCol">Obscuro</Col>
        <AudioPlayerVocab
          text="Obscure"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Trendy</Col>
        <Col className="borderedCol">Tréndi</Col>
        <Col className="borderedCol">Na moda</Col>
        <AudioPlayerVocab
          text="Trendy"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Outdated</Col>
        <Col className="borderedCol">Áutdêitêd</Col>
        <Col className="borderedCol">Desatualizado</Col>
        <AudioPlayerVocab
          text="Outdated"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Fashionable</Col>
        <Col className="borderedCol">Féshânâbôl</Col>
        <Col className="borderedCol">Na moda</Col>
        <AudioPlayerVocab
          text="Fashionable"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Old-fashioned</Col>
        <Col className="borderedCol">Ôuld-féshând</Col>
        <Col className="borderedCol">Antiquado</Col>
        <AudioPlayerVocab
          text="Old-fashioned"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>

    </Container>

<Footer />
</>
    );
}