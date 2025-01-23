import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import HeaderMenuVocabulario from "../../components/header-menu-vocabulario";
import Logo from "../../components/logo";
import { Container, Col, Row } from "react-bootstrap";
import ExplicacaoVocab from "../../components/explicacao-vocab";
import { Helmet } from "react-helmet-async";
import AudioPlayerVocab from '../../components/audio-player-vocab';

export default function Vocab7() {
    return(
<>
<Helmet>
        <title>Cômodos da casa</title>
      </Helmet>
<Header /> 
<Logo /> 
<HeaderMenuVocabulario />
<div className="h1-titulo-da-pagina"> <h1 className="fw-bold h1-titulo-da-pagina">Cômodos da casa</h1> </div>

<ExplicacaoVocab />

<Container className="colunasVocabulario">

<Row className="borderedRow">
  <Col className="borderedCol header-col">Como se escreve</Col>
  <Col className="borderedCol header-col">Como sôa</Col>
  <Col className="borderedCol header-col">Tradução</Col>
</Row>
<Row className="borderedRow1">
        <Col className="borderedCol">Attic</Col>
        <Col className="borderedCol">Áric</Col>
        <Col className="borderedCol">Sótão</Col>
        <AudioPlayerVocab
          text="Attic"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Balcony</Col>
        <Col className="borderedCol">Bálkoni</Col>
        <Col className="borderedCol">Varanda</Col>
        <AudioPlayerVocab
          text="Balcony"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Basement</Col>
        <Col className="borderedCol">Béiziment</Col>
        <Col className="borderedCol">Porão</Col>
        <AudioPlayerVocab
          text="Basement"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Bathroom</Col>
        <Col className="borderedCol">Béthrûm</Col>
        <Col className="borderedCol">Banheiro</Col>
        <AudioPlayerVocab
          text="Bathroom"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Bedroom</Col>
        <Col className="borderedCol">Bédrum</Col>
        <Col className="borderedCol">Quarto</Col>
        <AudioPlayerVocab
          text="Bedroom"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Closet</Col>
        <Col className="borderedCol">Klózêt</Col>
        <Col className="borderedCol">Closet</Col>
        <AudioPlayerVocab
          text="Closet"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Dining Room</Col>
        <Col className="borderedCol">Dáinin Rúm</Col>
        <Col className="borderedCol">Sala de Jantar</Col>
        <AudioPlayerVocab
          text="Dining Room"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Entryway</Col>
        <Col className="borderedCol">Éntrîwéi</Col>
        <Col className="borderedCol">Entrada</Col>
        <AudioPlayerVocab
          text="Entryway"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Family Room</Col>
        <Col className="borderedCol">Femîli Rúm</Col>
        <Col className="borderedCol">Sala de Família</Col>
        <AudioPlayerVocab
          text="Family Room"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Garage</Col>
        <Col className="borderedCol">Gáruáj</Col>
        <Col className="borderedCol">Garagem</Col>
        <AudioPlayerVocab
          text="Garage"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Garden</Col>
        <Col className="borderedCol">Gárdn</Col>
        <Col className="borderedCol">Jardim</Col>
        <AudioPlayerVocab
          text="Garden"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Hallway</Col>
        <Col className="borderedCol">Hóu-uêi</Col>
        <Col className="borderedCol">Corredor</Col>
        <AudioPlayerVocab
          text="Hallway"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Kitchen</Col>
        <Col className="borderedCol">Kítchên</Col>
        <Col className="borderedCol">Cozinha</Col>
        <AudioPlayerVocab
          text="Kitchen"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Laundry Room</Col>
        <Col className="borderedCol">Londrui Rúm</Col>
        <Col className="borderedCol">Lavanderia</Col>
        <AudioPlayerVocab
          text="Laundry Room"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Living Room</Col>
        <Col className="borderedCol">Líving Rúm</Col>
        <Col className="borderedCol">Sala de Estar</Col>
        <AudioPlayerVocab
          text="Living Room"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Office</Col>
        <Col className="borderedCol">Ófîs</Col>
        <Col className="borderedCol">Escritório</Col>
        <AudioPlayerVocab
          text="Office"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Pantry</Col>
        <Col className="borderedCol">Pêntruî</Col>
        <Col className="borderedCol">Despensa</Col>
        <AudioPlayerVocab
          text="Pantry"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Patio</Col>
        <Col className="borderedCol">Pédîô</Col>
        <Col className="borderedCol">Pátio</Col>
        <AudioPlayerVocab
          text="Patio"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Study</Col>
        <Col className="borderedCol">Istâdi</Col>
        <Col className="borderedCol">Sala de Estudo</Col>
        <AudioPlayerVocab
          text="Study"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Terrace</Col>
        <Col className="borderedCol">Térâs</Col>
        <Col className="borderedCol">Terraço</Col>
        <AudioPlayerVocab
          text="Terrace"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>



    </Container>



<Footer />
</>
    );
}
