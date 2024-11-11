import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import HeaderMenuVocabulario from "../../components/header-menu-vocabulario";
import Logo from "../../components/logo";
import { Container, Col, Row } from "react-bootstrap";
import ExplicacaoVocab from "../../components/explicacao-vocab";
import { Helmet } from "react-helmet-async";

export default function Vocab11() {
    return(
<>
<Helmet>
        <title>Cozinha</title>
      </Helmet>
<Header /> 
<Logo /> 
<HeaderMenuVocabulario />
<div className="h1-titulo-da-pagina"> <h1 className="fw-bold h1-titulo-da-pagina">Cozinha</h1> </div>

<ExplicacaoVocab />

<Container className="colunasVocabulario">

<Row className="borderedRow1">
  <Col className="borderedCol header-col">Como se escreve</Col>
  <Col className="borderedCol header-col">Como sôa</Col>
  <Col className="borderedCol header-col">Tradução</Col>
</Row>
<Row className="borderedRow">
  <Col className="borderedCol">Blender</Col>
  <Col className="borderedCol">Blêndêr</Col>
  <Col className="borderedCol">Liquidificador</Col>
</Row>
<Row className="borderedRow1">
  <Col className="borderedCol">Can</Col>
  <Col className="borderedCol">Kæn</Col>
  <Col className="borderedCol">Lata</Col>
</Row>
<Row className="borderedRow">
  <Col className="borderedCol">Can Opener</Col>
  <Col className="borderedCol">Kæn Óupênêr</Col>
  <Col className="borderedCol">Abridor de Lata</Col>
</Row>
<Row className="borderedRow1">
  <Col className="borderedCol">Coffee Grinder</Col>
  <Col className="borderedCol">Kôfî Gráindêr</Col>
  <Col className="borderedCol">Moedor de Café</Col>
</Row>
<Row className="borderedRow">
  <Col className="borderedCol">Coffee Maker</Col>
  <Col className="borderedCol">Kôfî Mêikêr</Col>
  <Col className="borderedCol">Cafeteira</Col>
</Row>
<Row className="borderedRow1">
  <Col className="borderedCol">Detergent</Col>
  <Col className="borderedCol">Dêrtérjênt</Col>
  <Col className="borderedCol">Detergente</Col>
</Row>
<Row className="borderedRow">
  <Col className="borderedCol">Dishes</Col>
  <Col className="borderedCol">Dîshêz</Col>
  <Col className="borderedCol">Louça</Col>
</Row>
<Row className="borderedRow1">
  <Col className="borderedCol">Dishwasher</Col>
  <Col className="borderedCol">Dîshwâshêr</Col>
  <Col className="borderedCol">Lava-Louças</Col>
</Row>
<Row className="borderedRow">
  <Col className="borderedCol">Food Processor</Col>
  <Col className="borderedCol">Fúd Prôcêssôr</Col>
  <Col className="borderedCol">Processador de Alimentos</Col>
</Row>
<Row className="borderedRow1">
  <Col className="borderedCol">Freezer</Col>
  <Col className="borderedCol">Frîzêr</Col>
  <Col className="borderedCol">Freezer</Col>
</Row>
<Row className="borderedRow">
  <Col className="borderedCol">Ice Tray</Col>
  <Col className="borderedCol">Áis Trêi</Col>
  <Col className="borderedCol">Bandeja de Gelo</Col>
</Row>
<Row className="borderedRow1">
  <Col className="borderedCol">Jar</Col>
  <Col className="borderedCol">Jár</Col>
  <Col className="borderedCol">Jarra</Col>
</Row>
<Row className="borderedRow">
  <Col className="borderedCol">Lid</Col>
  <Col className="borderedCol">Líd</Col>
  <Col className="borderedCol">Tampa</Col>
</Row>
<Row className="borderedRow1">
  <Col className="borderedCol">Microwave Oven</Col>
  <Col className="borderedCol">Máikrówéiv Óvên</Col>
  <Col className="borderedCol">Forno Micro-ondas</Col>
</Row>
<Row className="borderedRow">
  <Col className="borderedCol">Mixer</Col>
  <Col className="borderedCol">Míxêr</Col>
  <Col className="borderedCol">Batedeira</Col>
</Row>
<Row className="borderedRow1">
  <Col className="borderedCol">Oven</Col>
  <Col className="borderedCol">Óvên</Col>
  <Col className="borderedCol">Forno</Col>
</Row>
<Row className="borderedRow">
  <Col className="borderedCol">Paper Towels</Col>
  <Col className="borderedCol">Pêipêr Tóuwêlz</Col>
  <Col className="borderedCol">Papel Toalha</Col>
</Row>
<Row className="borderedRow1">
  <Col className="borderedCol">Rag</Col>
  <Col className="borderedCol">Rág</Col>
  <Col className="borderedCol">Pano</Col>
</Row>
<Row className="borderedRow">
  <Col className="borderedCol">Refrigerator</Col>
  <Col className="borderedCol">Rêfrijêrêtôr</Col>
  <Col className="borderedCol">Geladeira</Col>
</Row>
<Row className="borderedRow1">
  <Col className="borderedCol">Sink</Col>
  <Col className="borderedCol">Sînkh</Col>
  <Col className="borderedCol">Pia</Col>
</Row>
<Row className="borderedRow">
  <Col className="borderedCol">Sponge</Col>
  <Col className="borderedCol">Spônj</Col>
  <Col className="borderedCol">Esponja</Col>
</Row>
<Row className="borderedRow1">
  <Col className="borderedCol">Stove</Col>
  <Col className="borderedCol">Stôv</Col>
  <Col className="borderedCol">Fogão</Col>
</Row>
<Row className="borderedRow">
  <Col className="borderedCol">Timer</Col>
  <Col className="borderedCol">Táimêr</Col>
  <Col className="borderedCol">Cronômetro</Col>
</Row>
<Row className="borderedRow1">
  <Col className="borderedCol">Toaster</Col>
  <Col className="borderedCol">Tôustêr</Col>
  <Col className="borderedCol">Torradeira</Col>
</Row>
<Row className="borderedRow">
  <Col className="borderedCol">Coffee Pot</Col>
  <Col className="borderedCol">Kôfî Pôt</Col>
  <Col className="borderedCol">Cafeteira (para preparo de café)</Col>
</Row>
<Row className="borderedRow1">
  <Col className="borderedCol">Dish Rack</Col>
  <Col className="borderedCol">Dîsh Rák</Col>
  <Col className="borderedCol">Escorredor de Louça</Col>
</Row>
<Row className="borderedRow">
  <Col className="borderedCol">Electric Kettle</Col>
  <Col className="borderedCol">Êlêktrîk Kêtl</Col>
  <Col className="borderedCol">Chaleira Elétrica</Col>
</Row>
<Row className="borderedRow1">
  <Col className="borderedCol">Grill</Col>
  <Col className="borderedCol">Grîl</Col>
  <Col className="borderedCol">Churrasqueira</Col>
</Row>
<Row className="borderedRow">
  <Col className="borderedCol">Juicer</Col>
  <Col className="borderedCol">Djúicêr</Col>
  <Col className="borderedCol">Espremedor</Col>
</Row>
<Row className="borderedRow1">
  <Col className="borderedCol">Trash Can</Col>
  <Col className="borderedCol">Trásh Kæn</Col>
  <Col className="borderedCol">Lixeira</Col>
</Row>



    </Container>



<Footer />
</>
    );
}
