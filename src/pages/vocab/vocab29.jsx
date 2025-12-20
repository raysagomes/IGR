import Header from "../../components/header";
import Footer from "../../components/footer";
import HeaderMenuVocabulario from "../../components/headers/header-menu-vocabulario";
import Logo from "../../components/logo";
import { Container, Col, Row } from "react-bootstrap";
import ExplicacaoVocab from "../../components/explicacao-vocab";
import { Helmet } from "react-helmet-async";
import AudioPlayerVocab from '../../components/audio-player-vocab';

export default function Vocab29() {
    return(
<>
<Helmet>
        <title>Entretenimento</title>
      </Helmet>
<Header /> 
<Logo /> 
<HeaderMenuVocabulario />
<div className="h1-titulo-da-pagina"> <h1 className="fw-bold h1-titulo-da-pagina">Entretenimento</h1> </div>

<ExplicacaoVocab />

<Container className="colunasVocabulario">

<Row className="borderedRow">
  <Col className="borderedCol header-col">Como se escreve</Col>
  <Col className="borderedCol header-col">Como sôa</Col>
  <Col className="borderedCol header-col">Tradução</Col>
</Row>
<Row className="borderedRow1">
        <Col className="borderedCol">Movie</Col>
        <Col className="borderedCol">Múvi</Col>
        <Col className="borderedCol">Filme</Col>
        <AudioPlayerVocab
          text="Movie"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Theater</Col>
        <Col className="borderedCol">Thíêtêr</Col>
        <Col className="borderedCol">Teatro</Col>
        <AudioPlayerVocab
          text="Theater"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Concert</Col>
        <Col className="borderedCol">Kónsêrt</Col>
        <Col className="borderedCol">Concerto</Col>
        <AudioPlayerVocab
          text="Concert"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Music</Col>
        <Col className="borderedCol">Miúzik</Col>
        <Col className="borderedCol">Música</Col>
        <AudioPlayerVocab
          text="Music"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Dance</Col>
        <Col className="borderedCol">Déns</Col>
        <Col className="borderedCol">Dança</Col>
        <AudioPlayerVocab
          text="Dance"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Party</Col>
        <Col className="borderedCol">Párti</Col>
        <Col className="borderedCol">Festa</Col>
        <AudioPlayerVocab
          text="Party"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Game</Col>
        <Col className="borderedCol">Gêim</Col>
        <Col className="borderedCol">Jogo</Col>
        <AudioPlayerVocab
          text="Game"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Television</Col>
        <Col className="borderedCol">Télêvíjân</Col>
        <Col className="borderedCol">Televisão</Col>
        <AudioPlayerVocab
          text="Television"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Radio</Col>
        <Col className="borderedCol">Rêidiôu</Col>
        <Col className="borderedCol">Rádio</Col>
        <AudioPlayerVocab
          text="Radio"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Show</Col>
        <Col className="borderedCol">Shôu</Col>
        <Col className="borderedCol">Show</Col>
        <AudioPlayerVocab
          text="Show"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Fun</Col>
        <Col className="borderedCol">Fân</Col>
        <Col className="borderedCol">Diversão</Col>
        <AudioPlayerVocab
          text="Fun"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Hobby</Col>
        <Col className="borderedCol">Hóbi</Col>
        <Col className="borderedCol">Hobby</Col>
        <AudioPlayerVocab
          text="Hobby"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>

    </Container>

<Footer />
</>
    );
}