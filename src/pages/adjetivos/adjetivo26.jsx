import Header from "../../components/header";
import Footer from "../../components/footer";
import HeaderMenuVocabulario from "../../components/headers/header-menu-vocabulario";
import Logo from "../../components/logo";
import { Container, Col, Row } from "react-bootstrap";
import ExplicacaoVocab from "../../components/explicacao-vocab";
import { Helmet } from "react-helmet-async";
import AudioPlayerVocab from '../../components/audio-player-vocab';

export default function VocabAdjetivo26() {
    return(
<>
<Helmet>
        <title>Adjetivos de Riqueza</title>
      </Helmet>
<Header /> 
<Logo /> 
<HeaderMenuVocabulario />
<div className="h1-titulo-da-pagina"> <h1 className="fw-bold h1-titulo-da-pagina">Adjetivos de Riqueza</h1> </div>

<ExplicacaoVocab />

<Container className="colunasVocabulario">

<Row className="borderedRow">
  <Col className="borderedCol header-col">Como se escreve</Col>
  <Col className="borderedCol header-col">Como sôa</Col>
  <Col className="borderedCol header-col">Tradução</Col>
</Row>
<Row className="borderedRow">
        <Col className="borderedCol">Rich</Col>
        <Col className="borderedCol">Rítch</Col>
        <Col className="borderedCol">Rico</Col>
        <AudioPlayerVocab
          text="Rich"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Poor</Col>
        <Col className="borderedCol">Púr</Col>
        <Col className="borderedCol">Pobre</Col>
        <AudioPlayerVocab
          text="Poor"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Wealthy</Col>
        <Col className="borderedCol">Uélti</Col>
        <Col className="borderedCol">Abastado</Col>
        <AudioPlayerVocab
          text="Wealthy"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Broke</Col>
        <Col className="borderedCol">Brôuk</Col>
        <Col className="borderedCol">Sem dinheiro</Col>
        <AudioPlayerVocab
          text="Broke"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Expensive</Col>
        <Col className="borderedCol">Ikspénsiv</Col>
        <Col className="borderedCol">Caro</Col>
        <AudioPlayerVocab
          text="Expensive"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Cheap</Col>
        <Col className="borderedCol">Chíp</Col>
        <Col className="borderedCol">Barato</Col>
        <AudioPlayerVocab
          text="Cheap"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Affordable</Col>
        <Col className="borderedCol">Âfórdâbôl</Col>
        <Col className="borderedCol">Acessível</Col>
        <AudioPlayerVocab
          text="Affordable"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Luxurious</Col>
        <Col className="borderedCol">Lâgjiúriâs</Col>
        <Col className="borderedCol">Luxuoso</Col>
        <AudioPlayerVocab
          text="Luxurious"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Valuable</Col>
        <Col className="borderedCol">Véliuâbôl</Col>
        <Col className="borderedCol">Valioso</Col>
        <AudioPlayerVocab
          text="Valuable"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Worthless</Col>
        <Col className="borderedCol">Wârthles</Col>
        <Col className="borderedCol">Sem valor</Col>
        <AudioPlayerVocab
          text="Worthless"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>

    </Container>

<Footer />
</>
    );
}