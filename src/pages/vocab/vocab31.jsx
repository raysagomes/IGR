import Header from "../../components/header";
import Footer from "../../components/footer";
import HeaderMenuVocabulario from "../../components/headers/header-menu-vocabulario";
import Logo from "../../components/logo";
import { Container, Col, Row } from "react-bootstrap";
import ExplicacaoVocab from "../../components/explicacao-vocab";
import { Helmet } from "react-helmet-async";
import AudioPlayerVocab from '../../components/audio-player-vocab';

export default function Vocab31() {
    return(
<>
<Helmet>
        <title>Comida</title>
      </Helmet>
<Header /> 
<Logo /> 
<HeaderMenuVocabulario />
<div className="h1-titulo-da-pagina"> <h1 className="fw-bold h1-titulo-da-pagina">Comida</h1> </div>

<ExplicacaoVocab />

<Container className="colunasVocabulario">

<Row className="borderedRow">
  <Col className="borderedCol header-col">Como se escreve</Col>
  <Col className="borderedCol header-col">Como sôa</Col>
  <Col className="borderedCol header-col">Tradução</Col>
</Row>
<Row className="borderedRow1">
        <Col className="borderedCol">Bread</Col>
        <Col className="borderedCol">Bréd</Col>
        <Col className="borderedCol">Pão</Col>
        <AudioPlayerVocab
          text="Bread"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Meat</Col>
        <Col className="borderedCol">Mít</Col>
        <Col className="borderedCol">Carne</Col>
        <AudioPlayerVocab
          text="Meat"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Chicken</Col>
        <Col className="borderedCol">Chíkên</Col>
        <Col className="borderedCol">Frango</Col>
        <AudioPlayerVocab
          text="Chicken"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Rice</Col>
        <Col className="borderedCol">Ráis</Col>
        <Col className="borderedCol">Arroz</Col>
        <AudioPlayerVocab
          text="Rice"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Pasta</Col>
        <Col className="borderedCol">Péstâ</Col>
        <Col className="borderedCol">Macarrão</Col>
        <AudioPlayerVocab
          text="Pasta"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Cheese</Col>
        <Col className="borderedCol">Chíz</Col>
        <Col className="borderedCol">Queijo</Col>
        <AudioPlayerVocab
          text="Cheese"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Egg</Col>
        <Col className="borderedCol">Ég</Col>
        <Col className="borderedCol">Ovo</Col>
        <AudioPlayerVocab
          text="Egg"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Milk</Col>
        <Col className="borderedCol">Mílk</Col>
        <Col className="borderedCol">Leite</Col>
        <AudioPlayerVocab
          text="Milk"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Butter</Col>
        <Col className="borderedCol">Bâtêr</Col>
        <Col className="borderedCol">Manteiga</Col>
        <AudioPlayerVocab
          text="Butter"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Sugar</Col>
        <Col className="borderedCol">Shúgêr</Col>
        <Col className="borderedCol">Açúcar</Col>
        <AudioPlayerVocab
          text="Sugar"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Salt</Col>
        <Col className="borderedCol">Sólt</Col>
        <Col className="borderedCol">Sal</Col>
        <AudioPlayerVocab
          text="Salt"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Soup</Col>
        <Col className="borderedCol">Súp</Col>
        <Col className="borderedCol">Sopa</Col>
        <AudioPlayerVocab
          text="Soup"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Salad</Col>
        <Col className="borderedCol">Sélêd</Col>
        <Col className="borderedCol">Salada</Col>
        <AudioPlayerVocab
          text="Salad"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Dessert</Col>
        <Col className="borderedCol">Dizârt</Col>
        <Col className="borderedCol">Sobremesa</Col>
        <AudioPlayerVocab
          text="Dessert"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>

    </Container>

<Footer />
</>
    );
}