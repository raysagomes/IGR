import Header from "../../components/header";
import Footer from "../../components/footer";
import HeaderMenuVocabulario from "../../components/headers/header-menu-vocabulario";
import Logo from "../../components/logo";
import { Container, Col, Row } from "react-bootstrap";
import ExplicacaoVocab from "../../components/explicacao-vocab";
import { Helmet } from "react-helmet-async";
import AudioPlayerVocab from '../../components/audio-player-vocab';

export default function Vocab2() {
    return(
<>
<Helmet>
        <title>Cores</title>
      </Helmet>
<Header /> 
<Logo /> 
<HeaderMenuVocabulario />
<div className="h1-titulo-da-pagina"> <h1 className="fw-bold h1-titulo-da-pagina"> Cores </h1> </div>

<ExplicacaoVocab />

<Container className="colunasVocabulario">
<Row className="borderedRow1">
  <Col className="borderedCol header-col">Como se escreve</Col>
  <Col className="borderedCol header-col">Como soa</Col>
  <Col className="borderedCol header-col">Tradução</Col>
</Row>
<Row className="borderedRow">
  <Col className="borderedCol">Beige</Col>
  <Col className="borderedCol">Bêigi</Col>
  <Col className="borderedCol">Bege</Col>
</Row>
<AudioPlayerVocab
  text="Beige"
  voiceName="Microsoft Jenny Online (Natural) - English (United States)"
/>

<Row className="borderedRow1">
  <Col className="borderedCol">Black</Col>
  <Col className="borderedCol">Bléki</Col>
  <Col className="borderedCol">Preto</Col>
</Row>
<AudioPlayerVocab
  text="Black"
  voiceName="Microsoft Jenny Online (Natural) - English (United States)"
/>

<Row className="borderedRow">
  <Col className="borderedCol">Blue</Col>
  <Col className="borderedCol">Blu</Col>
  <Col className="borderedCol">Azul</Col>
</Row>
<AudioPlayerVocab
  text="Blue"
  voiceName="Microsoft Jenny Online (Natural) - English (United States)"
/>

<Row className="borderedRow1">
  <Col className="borderedCol">Brown</Col>
  <Col className="borderedCol">Bruaun</Col>
  <Col className="borderedCol">Marrom</Col>
</Row>
<AudioPlayerVocab
  text="Brown"
  voiceName="Microsoft Jenny Online (Natural) - English (United States)"
/>

<Row className="borderedRow">
  <Col className="borderedCol">Dark Blue</Col>
  <Col className="borderedCol">Dárk Blú</Col>
  <Col className="borderedCol">Azul Escuro</Col>
</Row>
<AudioPlayerVocab
  text="Dark Blue"
  voiceName="Microsoft Jenny Online (Natural) - English (United States)"
/>

<Row className="borderedRow1">
  <Col className="borderedCol">Dark Green</Col>
  <Col className="borderedCol">Dárk Gruin</Col>
  <Col className="borderedCol">Verde Escuro</Col>
</Row>
<AudioPlayerVocab
  text="Dark Green"
  voiceName="Microsoft Jenny Online (Natural) - English (United States)"
/>

<Row className="borderedRow">
  <Col className="borderedCol">Green</Col>
  <Col className="borderedCol">Gruin</Col>
  <Col className="borderedCol">Verde</Col>
</Row>
<AudioPlayerVocab
  text="Green"
  voiceName="Microsoft Jenny Online (Natural) - English (United States)"
/>

<Row className="borderedRow1">
  <Col className="borderedCol">Grey or Gray</Col>
  <Col className="borderedCol">Gruéi or Gruêi</Col>
  <Col className="borderedCol">Cinza ou Cinza</Col>
</Row>
<AudioPlayerVocab
  text="Grey or Gray"
  voiceName="Microsoft Jenny Online (Natural) - English (United States)"
/>

<Row className="borderedRow">
  <Col className="borderedCol">Light Blue</Col>
  <Col className="borderedCol">Láit Blú</Col>
  <Col className="borderedCol">Azul Claro</Col>
</Row>
<AudioPlayerVocab
  text="Light Blue"
  voiceName="Microsoft Jenny Online (Natural) - English (United States)"
/>

<Row className="borderedRow1">
  <Col className="borderedCol">Light Green</Col>
  <Col className="borderedCol">Láit Gruin</Col>
  <Col className="borderedCol">Verde Claro</Col>
</Row>
<AudioPlayerVocab
  text="Light Green"
  voiceName="Microsoft Jenny Online (Natural) - English (United States)"
/>

<Row className="borderedRow">
  <Col className="borderedCol">Olive</Col>
  <Col className="borderedCol">Óliv</Col>
  <Col className="borderedCol">Oliva</Col>
</Row>
<AudioPlayerVocab
  text="Olive"
  voiceName="Microsoft Jenny Online (Natural) - English (United States)"
/>

<Row className="borderedRow1">
  <Col className="borderedCol">Orange</Col>
  <Col className="borderedCol">Ôruindj</Col>
  <Col className="borderedCol">Laranja</Col>
</Row>
<AudioPlayerVocab
  text="Orange"
  voiceName="Microsoft Jenny Online (Natural) - English (United States)"
/>

<Row className="borderedRow">
  <Col className="borderedCol">Pink</Col>
  <Col className="borderedCol">Pínk</Col>
  <Col className="borderedCol">Rosa</Col>
</Row>
<AudioPlayerVocab
  text="Pink"
  voiceName="Microsoft Jenny Online (Natural) - English (United States)"
/>

<Row className="borderedRow1">
  <Col className="borderedCol">Purple</Col>
  <Col className="borderedCol">Pârpou</Col>
  <Col className="borderedCol">Roxo</Col>
</Row>
<AudioPlayerVocab
  text="Purple"
  voiceName="Microsoft Jenny Online (Natural) - English (United States)"
/>

<Row className="borderedRow">
  <Col className="borderedCol">Red</Col>
  <Col className="borderedCol">Ruéd</Col>
  <Col className="borderedCol">Vermelho</Col>
</Row>
<AudioPlayerVocab
  text="Red"
  voiceName="Microsoft Jenny Online (Natural) - English (United States)"
/>

<Row className="borderedRow1">
  <Col className="borderedCol">Silver</Col>
  <Col className="borderedCol">Sílver</Col>
  <Col className="borderedCol">Prata</Col>
</Row>
<AudioPlayerVocab
  text="Silver"
  voiceName="Microsoft Jenny Online (Natural) - English (United States)"
/>

<Row className="borderedRow">
  <Col className="borderedCol">Violet</Col>
  <Col className="borderedCol">Váiolêt</Col>
  <Col className="borderedCol">Violeta</Col>
</Row>
<AudioPlayerVocab
  text="Violet"
  voiceName="Microsoft Jenny Online (Natural) - English (United States)"
/>

<Row className="borderedRow1">
  <Col className="borderedCol">White</Col>
  <Col className="borderedCol">Uáit</Col>
  <Col className="borderedCol">Branco</Col>
</Row>
<AudioPlayerVocab
  text="White"
  voiceName="Microsoft Jenny Online (Natural) - English (United States)"
/>

<Row className="borderedRow">
  <Col className="borderedCol">Yellow</Col>
  <Col className="borderedCol">Iélou</Col>
  <Col className="borderedCol">Amarelo</Col>
</Row>
<AudioPlayerVocab
  text="Yellow"
  voiceName="Microsoft Jenny Online (Natural) - English (United States)"
/>

<Row className="borderedRow1">
  <Col className="borderedCol">Golden</Col>
  <Col className="borderedCol">Gôldên</Col>
  <Col className="borderedCol">Dourado</Col>
</Row>
<AudioPlayerVocab
  text="Golden"
  voiceName="Microsoft Jenny Online (Natural) - English (United States)"
/>


    </Container>



<Footer />
</>
    );
}
