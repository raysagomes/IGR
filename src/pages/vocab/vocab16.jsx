import Header from "../../components/header";
import Footer from "../../components/footer";
import HeaderMenuVocabulario from "../../components/headers/header-menu-vocabulario";
import Logo from "../../components/logo";
import { Container, Col, Row } from "react-bootstrap";
import ExplicacaoVocab from "../../components/explicacao-vocab";
import { Helmet } from "react-helmet-async";
import AudioPlayerVocab from '../../components/audio-player-vocab';

export default function Vocab16() {
    return(
<>
<Helmet>
        <title>Roupas</title>
      </Helmet>
<Header /> 
<Logo /> 
<HeaderMenuVocabulario />
<div className="h1-titulo-da-pagina"> <h1 className="fw-bold h1-titulo-da-pagina">Roupas</h1> </div>

<ExplicacaoVocab />

<Container className="colunasVocabulario">

<Row className="borderedRow">
  <Col className="borderedCol header-col">Como se escreve</Col>
  <Col className="borderedCol header-col">Como sôa</Col>
  <Col className="borderedCol header-col">Tradução</Col>
</Row>
<Row className="borderedRow1">
        <Col className="borderedCol">Shirt</Col>
        <Col className="borderedCol">Shârt</Col>
        <Col className="borderedCol">Camisa</Col>
        <AudioPlayerVocab
          text="Shirt"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">T-shirt</Col>
        <Col className="borderedCol">Tí-shârt</Col>
        <Col className="borderedCol">Camiseta</Col>
        <AudioPlayerVocab
          text="T-shirt"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Pants</Col>
        <Col className="borderedCol">Pénts</Col>
        <Col className="borderedCol">Calças</Col>
        <AudioPlayerVocab
          text="Pants"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Jeans</Col>
        <Col className="borderedCol">Jínz</Col>
        <Col className="borderedCol">Jeans</Col>
        <AudioPlayerVocab
          text="Jeans"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Dress</Col>
        <Col className="borderedCol">Drés</Col>
        <Col className="borderedCol">Vestido</Col>
        <AudioPlayerVocab
          text="Dress"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Skirt</Col>
        <Col className="borderedCol">Skârt</Col>
        <Col className="borderedCol">Saia</Col>
        <AudioPlayerVocab
          text="Skirt"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Jacket</Col>
        <Col className="borderedCol">Jékêt</Col>
        <Col className="borderedCol">Jaqueta</Col>
        <AudioPlayerVocab
          text="Jacket"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Coat</Col>
        <Col className="borderedCol">Côut</Col>
        <Col className="borderedCol">Casaco</Col>
        <AudioPlayerVocab
          text="Coat"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Shoes</Col>
        <Col className="borderedCol">Shúz</Col>
        <Col className="borderedCol">Sapatos</Col>
        <AudioPlayerVocab
          text="Shoes"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Socks</Col>
        <Col className="borderedCol">Sóks</Col>
        <Col className="borderedCol">Meias</Col>
        <AudioPlayerVocab
          text="Socks"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Hat</Col>
        <Col className="borderedCol">Hét</Col>
        <Col className="borderedCol">Chapéu</Col>
        <AudioPlayerVocab
          text="Hat"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Cap</Col>
        <Col className="borderedCol">Kép</Col>
        <Col className="borderedCol">Boné</Col>
        <AudioPlayerVocab
          text="Cap"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Gloves</Col>
        <Col className="borderedCol">Glâvz</Col>
        <Col className="borderedCol">Luvas</Col>
        <AudioPlayerVocab
          text="Gloves"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Scarf</Col>
        <Col className="borderedCol">Skárf</Col>
        <Col className="borderedCol">Cachecol</Col>
        <AudioPlayerVocab
          text="Scarf"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Belt</Col>
        <Col className="borderedCol">Bélt</Col>
        <Col className="borderedCol">Cinto</Col>
        <AudioPlayerVocab
          text="Belt"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Tie</Col>
        <Col className="borderedCol">Tái</Col>
        <Col className="borderedCol">Gravata</Col>
        <AudioPlayerVocab
          text="Tie"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Underwear</Col>
        <Col className="borderedCol">Ândêr-wér</Col>
        <Col className="borderedCol">Roupa íntima</Col>
        <AudioPlayerVocab
          text="Underwear"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Pajamas</Col>
        <Col className="borderedCol">Pâjâmâz</Col>
        <Col className="borderedCol">Pijama</Col>
        <AudioPlayerVocab
          text="Pajamas"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>

    </Container>

<Footer />
</>
    );
}