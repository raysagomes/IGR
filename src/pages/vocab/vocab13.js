import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import HeaderMenuVocabulario from "../../components/header-menu-vocabulario";
import Logo from "../../components/logo";
import { Container, Col, Row } from "react-bootstrap";
import ExplicacaoVocab from "../../components/explicacao-vocab";
import { Helmet } from "react-helmet-async";

export default function Vocab13() {
    return(
<>
<Helmet>
        <title>Rosto</title>
      </Helmet>
<Header /> 
<Logo /> 
<HeaderMenuVocabulario />
<div className="h1-titulo-da-pagina"> <h1 className="fw-bold h1-titulo-da-pagina">Rosto</h1> </div>

<ExplicacaoVocab />

<Container className="colunasVocabulario">

<Row className="borderedRow1">
  <Col className="borderedCol header-col">Como se escreve</Col>
  <Col className="borderedCol header-col">Como sôa</Col>
  <Col className="borderedCol header-col">Tradução</Col>
</Row>
<Row className="borderedRow">
  <Col className="borderedCol">Beard</Col>
  <Col className="borderedCol">Bîârd</Col>
  <Col className="borderedCol">Barba</Col>
</Row>
<Row className="borderedRow1">
  <Col className="borderedCol">Cheek</Col>
  <Col className="borderedCol">Tchík</Col>
  <Col className="borderedCol">Bochecha</Col>
</Row>
<Row className="borderedRow">
  <Col className="borderedCol">Chin</Col>
  <Col className="borderedCol">Tchîn</Col>
  <Col className="borderedCol">Queixo</Col>
</Row>
<Row className="borderedRow1">
  <Col className="borderedCol">Ear</Col>
  <Col className="borderedCol">Íâr</Col>
  <Col className="borderedCol">Ouvido</Col>
</Row>
<Row className="borderedRow">
  <Col className="borderedCol">Eye</Col>
  <Col className="borderedCol">Ái</Col>
  <Col className="borderedCol">Olho</Col>
</Row>
<Row className="borderedRow1">
  <Col className="borderedCol">Eyebrow</Col>
  <Col className="borderedCol">Ái-bráu</Col>
  <Col className="borderedCol">Sobrancelha</Col>
</Row>
<Row className="borderedRow">
  <Col className="borderedCol">Forehead</Col>
  <Col className="borderedCol">Fór-rêd</Col>
  <Col className="borderedCol">Testa</Col>
</Row>
<Row className="borderedRow1">
  <Col className="borderedCol">Hair</Col>
  <Col className="borderedCol">Hér</Col>
  <Col className="borderedCol">Cabelo</Col>
</Row>
<Row className="borderedRow">
  <Col className="borderedCol">Lip</Col>
  <Col className="borderedCol">Líp</Col>
  <Col className="borderedCol">Lábio</Col>
</Row>
<Row className="borderedRow1">
  <Col className="borderedCol">Moustache</Col>
  <Col className="borderedCol">Mústésh</Col>
  <Col className="borderedCol">Bigode</Col>
</Row>
<Row className="borderedRow">
  <Col className="borderedCol">Mouth</Col>
  <Col className="borderedCol">Máuth</Col>
  <Col className="borderedCol">Boca</Col>
</Row>
<Row className="borderedRow1">
  <Col className="borderedCol">Nose</Col>
  <Col className="borderedCol">Nôuz</Col>
  <Col className="borderedCol">Nariz</Col>
</Row>
<Row className="borderedRow">
  <Col className="borderedCol">Tongue</Col>
  <Col className="borderedCol">Tôngui</Col>
  <Col className="borderedCol">Língua</Col>
</Row>


    </Container>



<Footer />
</>
    );
}
