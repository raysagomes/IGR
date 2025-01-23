import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import HeaderMenuVocabulario from "../../components/header-menu-vocabulario";
import Logo from "../../components/logo";
import { Container, Col, Row } from "react-bootstrap";
import ExplicacaoVocab from "../../components/explicacao-vocab";
import { Helmet } from "react-helmet-async";
import AudioPlayerVocab from '../../components/audio-player-vocab';

export default function Vocab14() {
    return(
<>
<Helmet>
        <title>Corpo</title>
      </Helmet>
<Header /> 
<Logo /> 
<HeaderMenuVocabulario />
<div className="h1-titulo-da-pagina"> <h1 className="fw-bold h1-titulo-da-pagina">Corpo</h1> </div>

<ExplicacaoVocab />

<Container className="colunasVocabulario">

<Row className="borderedRow">
  <Col className="borderedCol header-col">Como se escreve</Col>
  <Col className="borderedCol header-col">Como sôa</Col>
  <Col className="borderedCol header-col">Tradução</Col>
</Row>
<Row className="borderedRow">
        <Col className="borderedCol">Ankle</Col>
        <Col className="borderedCol">ÊnkOU</Col>
        <Col className="borderedCol">Tornozelo</Col>
        <AudioPlayerVocab
          text="Ankle"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Arm</Col>
        <Col className="borderedCol">Árm</Col>
        <Col className="borderedCol">Braço</Col>
        <AudioPlayerVocab
          text="Arm"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Arteries</Col>
        <Col className="borderedCol">Ártiruiz</Col>
        <Col className="borderedCol">Artérias</Col>
        <AudioPlayerVocab
          text="Arteries"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Back</Col>
        <Col className="borderedCol">Bék</Col>
        <Col className="borderedCol">Costas</Col>
        <AudioPlayerVocab
          text="Back"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Blood</Col>
        <Col className="borderedCol">Blâd</Col>
        <Col className="borderedCol">Sangue</Col>
        <AudioPlayerVocab
          text="Blood"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Bones</Col>
        <Col className="borderedCol">Bôunz</Col>
        <Col className="borderedCol">Ossos</Col>
        <AudioPlayerVocab
          text="Bones"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Brain</Col>
        <Col className="borderedCol">Bruêin</Col>
        <Col className="borderedCol">Cérebro</Col>
        <AudioPlayerVocab
          text="Brain"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Chest</Col>
        <Col className="borderedCol">Chést</Col>
        <Col className="borderedCol">Tórax</Col>
        <AudioPlayerVocab
          text="Chest"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Elbow</Col>
        <Col className="borderedCol">Êlbôu</Col>
        <Col className="borderedCol">Cotovelo</Col>
        <AudioPlayerVocab
          text="Elbow"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Finger</Col>
        <Col className="borderedCol">Fínguêr</Col>
        <Col className="borderedCol">Dedo</Col>
        <AudioPlayerVocab
          text="Finger"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Fingernail</Col>
        <Col className="borderedCol">Fínguêr-nêiou</Col>
        <Col className="borderedCol">Unha</Col>
        <AudioPlayerVocab
          text="Fingernail"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Feet</Col>
        <Col className="borderedCol">Fít</Col>
        <Col className="borderedCol">Pés</Col>
        <AudioPlayerVocab
          text="Feet"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Foot</Col>
        <Col className="borderedCol">Fút</Col>
        <Col className="borderedCol">Pé</Col>
        <AudioPlayerVocab
          text="Foot"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Head</Col>
        <Col className="borderedCol">Hêd</Col>
        <Col className="borderedCol">Cabeça</Col>
        <AudioPlayerVocab
          text="Head"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Heart</Col>
        <Col className="borderedCol">Hárt</Col>
        <Col className="borderedCol">Coração</Col>
        <AudioPlayerVocab
          text="Heart"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Hip</Col>
        <Col className="borderedCol">Híp</Col>
        <Col className="borderedCol">Quadril</Col>
        <AudioPlayerVocab
          text="Hip"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Jaw</Col>
        <Col className="borderedCol">Jóu</Col>
        <Col className="borderedCol">Mandíbula</Col>
        <AudioPlayerVocab
          text="Jaw"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Kidney</Col>
        <Col className="borderedCol">Kídnî</Col>
        <Col className="borderedCol">Rim</Col>
        <AudioPlayerVocab
          text="Kidney"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Knee</Col>
        <Col className="borderedCol">Nîi</Col>
        <Col className="borderedCol">Joelho</Col>
        <AudioPlayerVocab
          text="Knee"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Leg</Col>
        <Col className="borderedCol">Lég</Col>
        <Col className="borderedCol">Perna</Col>
        <AudioPlayerVocab
          text="Leg"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Lungs</Col>
        <Col className="borderedCol">Lângz</Col>
        <Col className="borderedCol">Pulmões</Col>
        <AudioPlayerVocab
          text="Lungs"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Neck</Col>
        <Col className="borderedCol">Nék</Col>
        <Col className="borderedCol">Pescoço</Col>
        <AudioPlayerVocab
          text="Neck"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Shoulder</Col>
        <Col className="borderedCol">Shôuldêr</Col>
        <Col className="borderedCol">Ombro</Col>
        <AudioPlayerVocab
          text="Shoulder"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Skeleton</Col>
        <Col className="borderedCol">Skéletên</Col>
        <Col className="borderedCol">Esqueleto</Col>
        <AudioPlayerVocab
          text="Skeleton"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Skull</Col>
        <Col className="borderedCol">Skóu</Col>
        <Col className="borderedCol">Crânio</Col>
        <AudioPlayerVocab
          text="Skull"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Spine, Backbone</Col>
        <Col className="borderedCol">Spáini, Bék-bôun</Col>
        <Col className="borderedCol">Coluna, Espinha Dorsal</Col>
        <AudioPlayerVocab
          text="Spine, Backbone"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Stomach</Col>
        <Col className="borderedCol">Stômâk</Col>
        <Col className="borderedCol">Estômago</Col>
        <AudioPlayerVocab
          text="Stomach"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Teeth</Col>
        <Col className="borderedCol">Tîth</Col>
        <Col className="borderedCol">Dentes</Col>
        <AudioPlayerVocab
          text="Teeth"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Toes</Col>
        <Col className="borderedCol">Tôuz</Col>
        <Col className="borderedCol">Dedos dos Pés</Col>
        <AudioPlayerVocab
          text="Toes"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Tooth</Col>
        <Col className="borderedCol">Tûth</Col>
        <Col className="borderedCol">Dente</Col>
        <AudioPlayerVocab
          text="Tooth"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Veins</Col>
        <Col className="borderedCol">Vêinz</Col>
        <Col className="borderedCol">Veias</Col>
        <AudioPlayerVocab
          text="Veins"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Wrist</Col>
        <Col className="borderedCol">Ruîst</Col>
        <Col className="borderedCol">Pulso</Col>
        <AudioPlayerVocab
          text="Wrist"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
    </Container>



<Footer />
</>
    );
}
