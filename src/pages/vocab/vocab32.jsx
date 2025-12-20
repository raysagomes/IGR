import Header from "../../components/header";
import Footer from "../../components/footer";
import HeaderMenuVocabulario from "../../components/headers/header-menu-vocabulario";
import Logo from "../../components/logo";
import { Container, Col, Row } from "react-bootstrap";
import ExplicacaoVocab from "../../components/explicacao-vocab";
import { Helmet } from "react-helmet-async";
import AudioPlayerVocab from '../../components/audio-player-vocab';

export default function Vocab32() {
    return(
<>
<Helmet>
        <title>Cidade</title>
      </Helmet>
<Header /> 
<Logo /> 
<HeaderMenuVocabulario />
<div className="h1-titulo-da-pagina"> <h1 className="fw-bold h1-titulo-da-pagina">Cidade</h1> </div>

<ExplicacaoVocab />

<Container className="colunasVocabulario">

<Row className="borderedRow">
  <Col className="borderedCol header-col">Como se escreve</Col>
  <Col className="borderedCol header-col">Como sôa</Col>
  <Col className="borderedCol header-col">Tradução</Col>
</Row>
<Row className="borderedRow1">
        <Col className="borderedCol">Street</Col>
        <Col className="borderedCol">Strít</Col>
        <Col className="borderedCol">Rua</Col>
        <AudioPlayerVocab
          text="Street"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Building</Col>
        <Col className="borderedCol">Bíldin</Col>
        <Col className="borderedCol">Prédio</Col>
        <AudioPlayerVocab
          text="Building"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Park</Col>
        <Col className="borderedCol">Párk</Col>
        <Col className="borderedCol">Parque</Col>
        <AudioPlayerVocab
          text="Park"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Store</Col>
        <Col className="borderedCol">Stôr</Col>
        <Col className="borderedCol">Loja</Col>
        <AudioPlayerVocab
          text="Store"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Restaurant</Col>
        <Col className="borderedCol">Réstôrânt</Col>
        <Col className="borderedCol">Restaurante</Col>
        <AudioPlayerVocab
          text="Restaurant"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Library</Col>
        <Col className="borderedCol">Láibrêri</Col>
        <Col className="borderedCol">Biblioteca</Col>
        <AudioPlayerVocab
          text="Library"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Museum</Col>
        <Col className="borderedCol">Miuzíêm</Col>
        <Col className="borderedCol">Museu</Col>
        <AudioPlayerVocab
          text="Museum"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Church</Col>
        <Col className="borderedCol">Chârtch</Col>
        <Col className="borderedCol">Igreja</Col>
        <AudioPlayerVocab
          text="Church"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">School</Col>
        <Col className="borderedCol">Skúl</Col>
        <Col className="borderedCol">Escola</Col>
        <AudioPlayerVocab
          text="School"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Bridge</Col>
        <Col className="borderedCol">Brídj</Col>
        <Col className="borderedCol">Ponte</Col>
        <AudioPlayerVocab
          text="Bridge"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Square</Col>
        <Col className="borderedCol">Skuér</Col>
        <Col className="borderedCol">Praça</Col>
        <AudioPlayerVocab
          text="Square"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Traffic</Col>
        <Col className="borderedCol">Tréfik</Col>
        <Col className="borderedCol">Trânsito</Col>
        <AudioPlayerVocab
          text="Traffic"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>

    </Container>

<Footer />
</>
    );
}