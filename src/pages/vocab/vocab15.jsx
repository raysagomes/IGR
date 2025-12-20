import Header from "../../components/header";
import Footer from "../../components/footer";
import HeaderMenuVocabulario from "../../components/headers/header-menu-vocabulario";
import Logo from "../../components/logo";
import { Container, Col, Row } from "react-bootstrap";
import ExplicacaoVocab from "../../components/explicacao-vocab";
import { Helmet } from "react-helmet-async";
import AudioPlayerVocab from '../../components/audio-player-vocab';

export default function Vocab15() {
    return(
<>
<Helmet>
        <title>Animais</title>
      </Helmet>
<Header /> 
<Logo /> 
<HeaderMenuVocabulario />
<div className="h1-titulo-da-pagina"> <h1 className="fw-bold h1-titulo-da-pagina">Animais</h1> </div>

<ExplicacaoVocab />

<Container className="colunasVocabulario">

<Row className="borderedRow">
  <Col className="borderedCol header-col">Como se escreve</Col>
  <Col className="borderedCol header-col">Como sôa</Col>
  <Col className="borderedCol header-col">Tradução</Col>
</Row>
<Row className="borderedRow1">
        <Col className="borderedCol">Dog</Col>
        <Col className="borderedCol">Dóg</Col>
        <Col className="borderedCol">Cachorro</Col>
        <AudioPlayerVocab
          text="Dog"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Cat</Col>
        <Col className="borderedCol">Két</Col>
        <Col className="borderedCol">Gato</Col>
        <AudioPlayerVocab
          text="Cat"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Bird</Col>
        <Col className="borderedCol">Bârd</Col>
        <Col className="borderedCol">Pássaro</Col>
        <AudioPlayerVocab
          text="Bird"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Fish</Col>
        <Col className="borderedCol">Físh</Col>
        <Col className="borderedCol">Peixe</Col>
        <AudioPlayerVocab
          text="Fish"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Horse</Col>
        <Col className="borderedCol">Hórs</Col>
        <Col className="borderedCol">Cavalo</Col>
        <AudioPlayerVocab
          text="Horse"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Cow</Col>
        <Col className="borderedCol">Káu</Col>
        <Col className="borderedCol">Vaca</Col>
        <AudioPlayerVocab
          text="Cow"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Pig</Col>
        <Col className="borderedCol">Píg</Col>
        <Col className="borderedCol">Porco</Col>
        <AudioPlayerVocab
          text="Pig"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Sheep</Col>
        <Col className="borderedCol">Shíp</Col>
        <Col className="borderedCol">Ovelha</Col>
        <AudioPlayerVocab
          text="Sheep"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Chicken</Col>
        <Col className="borderedCol">Chíkên</Col>
        <Col className="borderedCol">Galinha</Col>
        <AudioPlayerVocab
          text="Chicken"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Duck</Col>
        <Col className="borderedCol">Dâk</Col>
        <Col className="borderedCol">Pato</Col>
        <AudioPlayerVocab
          text="Duck"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Rabbit</Col>
        <Col className="borderedCol">Rébît</Col>
        <Col className="borderedCol">Coelho</Col>
        <AudioPlayerVocab
          text="Rabbit"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Mouse</Col>
        <Col className="borderedCol">Máus</Col>
        <Col className="borderedCol">Rato</Col>
        <AudioPlayerVocab
          text="Mouse"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Lion</Col>
        <Col className="borderedCol">Láiôn</Col>
        <Col className="borderedCol">Leão</Col>
        <AudioPlayerVocab
          text="Lion"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Tiger</Col>
        <Col className="borderedCol">Táiguêr</Col>
        <Col className="borderedCol">Tigre</Col>
        <AudioPlayerVocab
          text="Tiger"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Elephant</Col>
        <Col className="borderedCol">Élêfânt</Col>
        <Col className="borderedCol">Elefante</Col>
        <AudioPlayerVocab
          text="Elephant"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Monkey</Col>
        <Col className="borderedCol">Mânki</Col>
        <Col className="borderedCol">Macaco</Col>
        <AudioPlayerVocab
          text="Monkey"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Bear</Col>
        <Col className="borderedCol">Bér</Col>
        <Col className="borderedCol">Urso</Col>
        <AudioPlayerVocab
          text="Bear"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Wolf</Col>
        <Col className="borderedCol">Wúlf</Col>
        <Col className="borderedCol">Lobo</Col>
        <AudioPlayerVocab
          text="Wolf"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>

    </Container>

<Footer />
</>
    );
}