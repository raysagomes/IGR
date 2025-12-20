import Header from "../../components/header";
import Footer from "../../components/footer";
import HeaderMenuVocabulario from "../../components/headers/header-menu-vocabulario";
import Logo from "../../components/logo";
import { Container, Col, Row } from "react-bootstrap";
import ExplicacaoVocab from "../../components/explicacao-vocab";
import { Helmet } from "react-helmet-async";
import AudioPlayerVocab from '../../components/audio-player-vocab';

export default function Vocab33() {
    return(
<>
<Helmet>
        <title>Objetos Pessoais</title>
      </Helmet>
<Header /> 
<Logo /> 
<HeaderMenuVocabulario />
<div className="h1-titulo-da-pagina"> <h1 className="fw-bold h1-titulo-da-pagina">Objetos Pessoais</h1> </div>

<ExplicacaoVocab />

<Container className="colunasVocabulario">

<Row className="borderedRow">
  <Col className="borderedCol header-col">Como se escreve</Col>
  <Col className="borderedCol header-col">Como sôa</Col>
  <Col className="borderedCol header-col">Tradução</Col>
</Row>
<Row className="borderedRow1">
        <Col className="borderedCol">Watch</Col>
        <Col className="borderedCol">Wótch</Col>
        <Col className="borderedCol">Relógio</Col>
        <AudioPlayerVocab
          text="Watch"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Glasses</Col>
        <Col className="borderedCol">Glésiz</Col>
        <Col className="borderedCol">Óculos</Col>
        <AudioPlayerVocab
          text="Glasses"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Keys</Col>
        <Col className="borderedCol">Kíz</Col>
        <Col className="borderedCol">Chaves</Col>
        <AudioPlayerVocab
          text="Keys"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Bag</Col>
        <Col className="borderedCol">Bég</Col>
        <Col className="borderedCol">Bolsa</Col>
        <AudioPlayerVocab
          text="Bag"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Purse</Col>
        <Col className="borderedCol">Pârs</Col>
        <Col className="borderedCol">Carteira</Col>
        <AudioPlayerVocab
          text="Purse"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Ring</Col>
        <Col className="borderedCol">Rín</Col>
        <Col className="borderedCol">Anel</Col>
        <AudioPlayerVocab
          text="Ring"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Necklace</Col>
        <Col className="borderedCol">Néklês</Col>
        <Col className="borderedCol">Colar</Col>
        <AudioPlayerVocab
          text="Necklace"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Bracelet</Col>
        <Col className="borderedCol">Brêislêt</Col>
        <Col className="borderedCol">Pulseira</Col>
        <AudioPlayerVocab
          text="Bracelet"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Earrings</Col>
        <Col className="borderedCol">Írinz</Col>
        <Col className="borderedCol">Brincos</Col>
        <AudioPlayerVocab
          text="Earrings"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Perfume</Col>
        <Col className="borderedCol">Pârfiúm</Col>
        <Col className="borderedCol">Perfume</Col>
        <AudioPlayerVocab
          text="Perfume"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Comb</Col>
        <Col className="borderedCol">Kôum</Col>
        <Col className="borderedCol">Pente</Col>
        <AudioPlayerVocab
          text="Comb"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Mirror</Col>
        <Col className="borderedCol">Mírêr</Col>
        <Col className="borderedCol">Espelho</Col>
        <AudioPlayerVocab
          text="Mirror"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>

    </Container>

<Footer />
</>
    );
}