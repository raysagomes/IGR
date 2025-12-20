import Header from "../../components/header";
import Footer from "../../components/footer";
import HeaderMenuVocabulario from "../../components/headers/header-menu-vocabulario";
import Logo from "../../components/logo";
import { Container, Col, Row } from "react-bootstrap";
import ExplicacaoVocab from "../../components/explicacao-vocab";
import { Helmet } from "react-helmet-async";
import AudioPlayerVocab from '../../components/audio-player-vocab';

export default function VocabAdjetivo21() {
    return(
<>
<Helmet>
        <title>Adjetivos de Dificuldade</title>
      </Helmet>
<Header /> 
<Logo /> 
<HeaderMenuVocabulario />
<div className="h1-titulo-da-pagina"> <h1 className="fw-bold h1-titulo-da-pagina">Adjetivos de Dificuldade</h1> </div>

<ExplicacaoVocab />

<Container className="colunasVocabulario">

<Row className="borderedRow">
  <Col className="borderedCol header-col">Como se escreve</Col>
  <Col className="borderedCol header-col">Como sôa</Col>
  <Col className="borderedCol header-col">Tradução</Col>
</Row>
<Row className="borderedRow">
        <Col className="borderedCol">Easy</Col>
        <Col className="borderedCol">Ízi</Col>
        <Col className="borderedCol">Fácil</Col>
        <AudioPlayerVocab
          text="Easy"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Difficult</Col>
        <Col className="borderedCol">Díficâlt</Col>
        <Col className="borderedCol">Difícil</Col>
        <AudioPlayerVocab
          text="Difficult"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Hard</Col>
        <Col className="borderedCol">Hárd</Col>
        <Col className="borderedCol">Difícil</Col>
        <AudioPlayerVocab
          text="Hard"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Simple</Col>
        <Col className="borderedCol">Símpôl</Col>
        <Col className="borderedCol">Simples</Col>
        <AudioPlayerVocab
          text="Simple"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Complex</Col>
        <Col className="borderedCol">Kômplêks</Col>
        <Col className="borderedCol">Complexo</Col>
        <AudioPlayerVocab
          text="Complex"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Complicated</Col>
        <Col className="borderedCol">Kômplikêitêd</Col>
        <Col className="borderedCol">Complicado</Col>
        <AudioPlayerVocab
          text="Complicated"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Challenging</Col>
        <Col className="borderedCol">Chélênjin</Col>
        <Col className="borderedCol">Desafiador</Col>
        <AudioPlayerVocab
          text="Challenging"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Effortless</Col>
        <Col className="borderedCol">Éfôrtlês</Col>
        <Col className="borderedCol">Sem esforço</Col>
        <AudioPlayerVocab
          text="Effortless"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Impossible</Col>
        <Col className="borderedCol">Impósêbôl</Col>
        <Col className="borderedCol">Impossível</Col>
        <AudioPlayerVocab
          text="Impossible"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Manageable</Col>
        <Col className="borderedCol">Ménijêbôl</Col>
        <Col className="borderedCol">Gerenciável</Col>
        <AudioPlayerVocab
          text="Manageable"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>

    </Container>

<Footer />
</>
    );
}