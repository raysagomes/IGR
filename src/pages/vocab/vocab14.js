import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import HeaderMenuVocabulario from "../../components/header-menu-vocabulario";
import Logo from "../../components/logo";
import { Container, Col, Row } from "react-bootstrap";
import ExplicacaoVocab from "../../components/explicacao-vocab";
import { Helmet } from "react-helmet-async";

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
<Row className="borderedRow1">
  <Col className="borderedCol">Ankle</Col>
  <Col className="borderedCol">ÊnkOU</Col>
  <Col className="borderedCol">Tornozelo</Col>
</Row>
<Row className="borderedRow">
  <Col className="borderedCol">Arm</Col>
  <Col className="borderedCol">Árm</Col>
  <Col className="borderedCol">Braço</Col>
</Row>
<Row className="borderedRow1">
  <Col className="borderedCol">Arteries</Col>
  <Col className="borderedCol">Ártiruiz</Col>
  <Col className="borderedCol">Artérias</Col>
</Row>
<Row className="borderedRow">
  <Col className="borderedCol">Back</Col>
  <Col className="borderedCol">Bék</Col>
  <Col className="borderedCol">Costas</Col>
</Row>
<Row className="borderedRow1">
  <Col className="borderedCol">Blood</Col>
  <Col className="borderedCol">Blâd</Col>
  <Col className="borderedCol">Sangue</Col>
</Row>
<Row className="borderedRow">
  <Col className="borderedCol">Bones</Col>
  <Col className="borderedCol">Bôunz</Col>
  <Col className="borderedCol">Ossos</Col>
</Row>
<Row className="borderedRow1">
  <Col className="borderedCol">Brain</Col>
  <Col className="borderedCol">Bruêin</Col>
  <Col className="borderedCol">Cérebro</Col>
</Row>
<Row className="borderedRow">
  <Col className="borderedCol">Chest</Col>
  <Col className="borderedCol">Chést</Col>
  <Col className="borderedCol">Tórax</Col>
</Row>
<Row className="borderedRow1">
  <Col className="borderedCol">Elbow</Col>
  <Col className="borderedCol">Êlbôu</Col>
  <Col className="borderedCol">Cotovelo</Col>
</Row>
<Row className="borderedRow">
  <Col className="borderedCol">Finger</Col>
  <Col className="borderedCol">Fínguêr</Col>
  <Col className="borderedCol">Dedo</Col>
</Row>
<Row className="borderedRow1">
  <Col className="borderedCol">Fingernail</Col>
  <Col className="borderedCol">Fínguêr-nêiou</Col>
  <Col className="borderedCol">Unha</Col>
</Row>
<Row className="borderedRow">
  <Col className="borderedCol">Feet</Col>
  <Col className="borderedCol">Fít</Col>
  <Col className="borderedCol">Pés</Col>
</Row>
<Row className="borderedRow1">
  <Col className="borderedCol">Foot</Col>
  <Col className="borderedCol">Fút</Col>
  <Col className="borderedCol">Pé</Col>
</Row>
<Row className="borderedRow">
  <Col className="borderedCol">Head</Col>
  <Col className="borderedCol">Hêd</Col>
  <Col className="borderedCol">Cabeça</Col>
</Row>
<Row className="borderedRow1">
  <Col className="borderedCol">Heart</Col>
  <Col className="borderedCol">Hárt</Col>
  <Col className="borderedCol">Coração</Col>
</Row>
<Row className="borderedRow">
  <Col className="borderedCol">Hip</Col>
  <Col className="borderedCol">Híp</Col>
  <Col className="borderedCol">Quadril</Col>
</Row>
<Row className="borderedRow1">
  <Col className="borderedCol">Jaw</Col>
  <Col className="borderedCol">Jóu</Col>
  <Col className="borderedCol">Mandíbula</Col>
</Row>
<Row className="borderedRow">
  <Col className="borderedCol">Kidney</Col>
  <Col className="borderedCol">Kídnî</Col>
  <Col className="borderedCol">Rim</Col>
</Row>
<Row className="borderedRow1">
  <Col className="borderedCol">Knee</Col>
  <Col className="borderedCol">Nîi</Col>
  <Col className="borderedCol">Joelho</Col>
</Row>
<Row className="borderedRow">
  <Col className="borderedCol">Leg</Col>
  <Col className="borderedCol">Lég</Col>
  <Col className="borderedCol">Perna</Col>
</Row>
<Row className="borderedRow1">
  <Col className="borderedCol">Lungs</Col>
  <Col className="borderedCol">Lângz</Col>
  <Col className="borderedCol">Pulmões</Col>
</Row>
<Row className="borderedRow">
  <Col className="borderedCol">Neck</Col>
  <Col className="borderedCol">Nék</Col>
  <Col className="borderedCol">Pescoço</Col>
</Row>
<Row className="borderedRow1">
  <Col className="borderedCol">Shoulder</Col>
  <Col className="borderedCol">Shôuldêr</Col>
  <Col className="borderedCol">Ombro</Col>
</Row>
<Row className="borderedRow">
  <Col className="borderedCol">Skeleton</Col>
  <Col className="borderedCol">Skéletên</Col>
  <Col className="borderedCol">Esqueleto</Col>
</Row>
<Row className="borderedRow1">
  <Col className="borderedCol">Skull</Col>
  <Col className="borderedCol">Skóu</Col>
  <Col className="borderedCol">Crânio</Col>
</Row>
<Row className="borderedRow">
  <Col className="borderedCol">Spine, Backbone</Col>
  <Col className="borderedCol">Spáini, Bék-bôun</Col>
  <Col className="borderedCol">Coluna, Espinha Dorsal</Col>
</Row>
<Row className="borderedRow1">
  <Col className="borderedCol">Stomach</Col>
  <Col className="borderedCol">Stômâk</Col>
  <Col className="borderedCol">Estômago</Col>
</Row>
<Row className="borderedRow">
  <Col className="borderedCol">Teeth</Col>
  <Col className="borderedCol">Tîth</Col>
  <Col className="borderedCol">Dentes</Col>
</Row>
<Row className="borderedRow1">
  <Col className="borderedCol">Toes</Col>
  <Col className="borderedCol">Tôuz</Col>
  <Col className="borderedCol">Dedos dos Pés</Col>
</Row>
<Row className="borderedRow">
  <Col className="borderedCol">Tooth</Col>
  <Col className="borderedCol">Tûth</Col>
  <Col className="borderedCol">Dente</Col>
</Row>
<Row className="borderedRow1">
  <Col className="borderedCol">Veins</Col>
  <Col className="borderedCol">Vêinz</Col>
  <Col className="borderedCol">Veias</Col>
</Row>
<Row className="borderedRow">
  <Col className="borderedCol">Wrist</Col>
  <Col className="borderedCol">Ruîst</Col>
  <Col className="borderedCol">Pulso</Col>
</Row>



    </Container>



<Footer />
</>
    );
}
