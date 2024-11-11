import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import HeaderMenuVocabulario from "../../components/header-menu-vocabulario";
import Logo from "../../components/logo";
import { Container, Col, Row } from "react-bootstrap";
import ExplicacaoVocab from "../../components/explicacao-vocab";
import { Helmet } from "react-helmet-async";

export default function Vocab10() {
    return(
<>
<Helmet>
        <title>Sala de jantar</title>
      </Helmet>
<Header /> 
<Logo /> 
<HeaderMenuVocabulario />
<div className="h1-titulo-da-pagina"> <h1 className="fw-bold h1-titulo-da-pagina">Sala de jantar</h1> </div>

<ExplicacaoVocab />

<Container className="colunasVocabulario">

<Row className="borderedRow">
  <Col className="borderedCol header-col">Como se escreve</Col>
  <Col className="borderedCol header-col">Como sôa</Col>
  <Col className="borderedCol header-col">Tradução</Col>
</Row>
<Row className="borderedRow1">
  <Col className="borderedCol">Bottle</Col>
  <Col className="borderedCol">Bótâl</Col>
  <Col className="borderedCol">Garrafa</Col>
</Row>
<Row className="borderedRow">
  <Col className="borderedCol">Bottle Cap</Col>
  <Col className="borderedCol">Bótâl Káp</Col>
  <Col className="borderedCol">Tampa de Garrafa</Col>
</Row>
<Row className="borderedRow1">
  <Col className="borderedCol">Bottle Opener</Col>
  <Col className="borderedCol">Bótâl Óupênêr</Col>
  <Col className="borderedCol">Abridor de Garrafas</Col>
</Row>
<Row className="borderedRow">
  <Col className="borderedCol">Bowl</Col>
  <Col className="borderedCol">Bôul</Col>
  <Col className="borderedCol">Tigela</Col>
</Row>
<Row className="borderedRow1">
  <Col className="borderedCol">Cork</Col>
  <Col className="borderedCol">Kôrk</Col>
  <Col className="borderedCol">Cortiça</Col>
</Row>
<Row className="borderedRow">
  <Col className="borderedCol">Corkscrew</Col>
  <Col className="borderedCol">Kôrkskrú</Col>
  <Col className="borderedCol">Saca-Rolhas</Col>
</Row>
<Row className="borderedRow1">
  <Col className="borderedCol">Cup</Col>
  <Col className="borderedCol">Kâp</Col>
  <Col className="borderedCol">Copo</Col>
</Row>
<Row className="borderedRow">
  <Col className="borderedCol">Eating Utensils</Col>
  <Col className="borderedCol">Íting Yutênsîls</Col>
  <Col className="borderedCol">Utensílios de Cozinha</Col>
</Row>
<Row className="borderedRow1">
  <Col className="borderedCol">Fork</Col>
  <Col className="borderedCol">Fôrk</Col>
  <Col className="borderedCol">Garfo</Col>
</Row>
<Row className="borderedRow">
  <Col className="borderedCol">Grater</Col>
  <Col className="borderedCol">Grêitêr</Col>
  <Col className="borderedCol">Ralador</Col>
</Row>
<Row className="borderedRow1">
  <Col className="borderedCol">Knife</Col>
  <Col className="borderedCol">Náif</Col>
  <Col className="borderedCol">Faca</Col>
</Row>
<Row className="borderedRow">
  <Col className="borderedCol">Ladle</Col>
  <Col className="borderedCol">Lêidl</Col>
  <Col className="borderedCol">Concha</Col>
</Row>
<Row className="borderedRow1">
  <Col className="borderedCol">Mug</Col>
  <Col className="borderedCol">Mâg</Col>
  <Col className="borderedCol">Caneca</Col>
</Row>
<Row className="borderedRow">
  <Col className="borderedCol">Napkin</Col>
  <Col className="borderedCol">Nápkîn</Col>
  <Col className="borderedCol">Guardanapo</Col>
</Row>
<Row className="borderedRow1">
  <Col className="borderedCol">Pepper</Col>
  <Col className="borderedCol">Pépêr</Col>
  <Col className="borderedCol">Pimenta</Col>
</Row>
<Row className="borderedRow">
  <Col className="borderedCol">Pitcher</Col>
  <Col className="borderedCol">Pítchêr</Col>
  <Col className="borderedCol">Jarro</Col>
</Row>
<Row className="borderedRow1">
  <Col className="borderedCol">Plate</Col>
  <Col className="borderedCol">Plêt</Col>
  <Col className="borderedCol">Prato</Col>
</Row>
<Row className="borderedRow">
  <Col className="borderedCol">Pot</Col>
  <Col className="borderedCol">Pót</Col>
  <Col className="borderedCol">Panela</Col>
</Row>
<Row className="borderedRow1">
  <Col className="borderedCol">Pan</Col>
  <Col className="borderedCol">Pæn</Col>
  <Col className="borderedCol">Frigideira</Col>
</Row>
<Row className="borderedRow">
  <Col className="borderedCol">Peeler</Col>
  <Col className="borderedCol">Pílêr</Col>
  <Col className="borderedCol">Descascador</Col>
</Row>
<Row className="borderedRow1">
  <Col className="borderedCol">Salt Shaker</Col>
  <Col className="borderedCol">Sôlt Shêikêr</Col>
  <Col className="borderedCol">Saleiro</Col>
</Row>
<Row className="borderedRow">
  <Col className="borderedCol">Saucer</Col>
  <Col className="borderedCol">Sósêr</Col>
  <Col className="borderedCol">Pires</Col>
</Row>
<Row className="borderedRow1">
  <Col className="borderedCol">Spoon</Col>
  <Col className="borderedCol">Spûn</Col>
  <Col className="borderedCol">Colher</Col>
</Row>
<Row className="borderedRow">
  <Col className="borderedCol">Straw</Col>
  <Col className="borderedCol">Stró</Col>
  <Col className="borderedCol">Canudo</Col>
</Row>
<Row className="borderedRow1">
  <Col className="borderedCol">Table</Col>
  <Col className="borderedCol">Téibl</Col>
  <Col className="borderedCol">Mesa</Col>
</Row>
<Row className="borderedRow">
  <Col className="borderedCol">Table Cloth</Col>
  <Col className="borderedCol">Téibl Klôth</Col>
  <Col className="borderedCol">Toalha de Mesa</Col>
</Row>
<Row className="borderedRow1">
  <Col className="borderedCol">Teapot</Col>
  <Col className="borderedCol">Típôt</Col>
  <Col className="borderedCol">Bule</Col>
</Row>
<Row className="borderedRow">
  <Col className="borderedCol">Tongs</Col>
  <Col className="borderedCol">Tôngz</Col>
  <Col className="borderedCol">Pinça</Col>
</Row>
<Row className="borderedRow1">
  <Col className="borderedCol">Wine Glass</Col>
  <Col className="borderedCol">Wáin Gláss</Col>
  <Col className="borderedCol">Taça</Col>
</Row>

    </Container>



<Footer />
</>
    );
}
