import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import HeaderMenuVocabulario from "../../components/header-menu-vocabulario";
import Logo from "../../components/logo";
import { Container, Col, Row } from "react-bootstrap";
import ExplicacaoVocab from "../../components/explicacao-vocab";
import { Helmet } from "react-helmet-async";

export default function Vocab9() {
    return(
<>
<Helmet>
        <title>Quarto</title>
      </Helmet>
<Header /> 
<Logo /> 
<HeaderMenuVocabulario />
<div className="h1-titulo-da-pagina"> <h1 className="fw-bold h1-titulo-da-pagina">Quarto</h1> </div>

<ExplicacaoVocab />

<Container className="colunasVocabulario">

<Row className="borderedRow">
  <Col className="borderedCol header-col">Como se escreve</Col>
  <Col className="borderedCol header-col">Como sôa</Col>
  <Col className="borderedCol header-col">Tradução</Col>
</Row>
<Row className="borderedRow1">
  <Col className="borderedCol">Alarm Clock</Col>
  <Col className="borderedCol">Álárm Clóck</Col>
  <Col className="borderedCol">Despertador</Col>
</Row>
<Row className="borderedRow">
  <Col className="borderedCol">Armoire</Col>
  <Col className="borderedCol">Ármwâr</Col>
  <Col className="borderedCol">Armário</Col>
</Row>
<Row className="borderedRow1">
  <Col className="borderedCol">Bed</Col>
  <Col className="borderedCol">Béd</Col>
  <Col className="borderedCol">Cama</Col>
</Row>
<Row className="borderedRow">
  <Col className="borderedCol">Bed Frame</Col>
  <Col className="borderedCol">Béd Fruêim</Col>
  <Col className="borderedCol">Estrutura da Cama</Col>
</Row>
<Row className="borderedRow1">
  <Col className="borderedCol">Blanket</Col>
  <Col className="borderedCol">Blánkêt</Col>
  <Col className="borderedCol">Cobertor</Col>
</Row>
<Row className="borderedRow">
  <Col className="borderedCol">Bunk Bed</Col>
  <Col className="borderedCol">Bânk Béd</Col>
  <Col className="borderedCol">Beliche</Col>
</Row>
<Row className="borderedRow1">
  <Col className="borderedCol">Chest of Drawers</Col>
  <Col className="borderedCol">Chést ôf Drówers</Col>
  <Col className="borderedCol">Caixa com Gavetas</Col>
</Row>
<Row className="borderedRow">
  <Col className="borderedCol">Chest, Trunk</Col>
  <Col className="borderedCol">Chést, Truânk</Col>
  <Col className="borderedCol">Baú</Col>
</Row>
<Row className="borderedRow1">
  <Col className="borderedCol">Closet</Col>
  <Col className="borderedCol">Klózêt</Col>
  <Col className="borderedCol">Guarda-roupas</Col>
</Row>
<Row className="borderedRow">
  <Col className="borderedCol">Drawer</Col>
  <Col className="borderedCol">Drówêr</Col>
  <Col className="borderedCol">Gaveta</Col>
</Row>
<Row className="borderedRow1">
  <Col className="borderedCol">Dresser</Col>
  <Col className="borderedCol">Druéssêr</Col>
  <Col className="borderedCol">Cômoda</Col>
</Row>
<Row className="borderedRow">
  <Col className="borderedCol">Footstool</Col>
  <Col className="borderedCol">Fútstúl</Col>
  <Col className="borderedCol">Otomano</Col>
</Row>
<Row className="borderedRow1">
  <Col className="borderedCol">Headboard</Col>
  <Col className="borderedCol">Hédbórd</Col>
  <Col className="borderedCol">Cabeceira</Col>
</Row>
<Row className="borderedRow">
  <Col className="borderedCol">Mattress</Col>
  <Col className="borderedCol">Métrués</Col>
  <Col className="borderedCol">Colchão</Col>
</Row>
<Row className="borderedRow1">
  <Col className="borderedCol">Nightstand</Col>
  <Col className="borderedCol">Náit-istend</Col>
  <Col className="borderedCol">Criado-mudo</Col>
</Row>
<Row className="borderedRow">
  <Col className="borderedCol">Pillow</Col>
  <Col className="borderedCol">Pílôu</Col>
  <Col className="borderedCol">Travesseiro</Col>
</Row>
<Row className="borderedRow1">
  <Col className="borderedCol">Sheet</Col>
  <Col className="borderedCol">Shiit</Col>
  <Col className="borderedCol">Lençol</Col>
</Row>
<Row className="borderedRow">
  <Col className="borderedCol">Sofa</Col>
  <Col className="borderedCol">Sôufá</Col>
  <Col className="borderedCol">Sofá</Col>
</Row>
<Row className="borderedRow1">
  <Col className="borderedCol">Table</Col>
  <Col className="borderedCol">Téibou</Col>
  <Col className="borderedCol">Mesa</Col>
</Row>
<Row className="borderedRow">
  <Col className="borderedCol">Wardrobe</Col>
  <Col className="borderedCol">Wórdróub</Col>
  <Col className="borderedCol">Guarda-roupa</Col>
</Row>


    </Container>



<Footer />
</>
    );
}
