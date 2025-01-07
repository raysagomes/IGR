import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import HeaderMenuVocabulario from "../../components/header-menu-vocabulario";
import Logo from "../../components/logo";
import { Container, Col, Row } from "react-bootstrap";
import ExplicacaoVocab from "../../components/explicacao-vocab";
import { Helmet } from "react-helmet-async";

export default function Vocab4() {
    return(
<>
<Helmet>
        <title>Frutas</title>
      </Helmet>
<Header /> 
<Logo /> 
<HeaderMenuVocabulario />
<div className="h1-titulo-da-pagina"> <h1 className="fw-bold h1-titulo-da-pagina"> Frutas </h1> </div>

<ExplicacaoVocab />

<Container className="colunasVocabulario">
<Row className="borderedRow1">
  <Col className="borderedCol header-col">Como se escreve</Col>
  <Col className="borderedCol header-col">Como soa</Col>
  <Col className="borderedCol header-col">Tradução</Col>
</Row>
<Row className="borderedRow">
  <Col className="borderedCol">Apple</Col>
  <Col className="borderedCol">Épou</Col>
  <Col className="borderedCol">Maçã</Col>
</Row>
<Row className="borderedRow1">
  <Col className="borderedCol">Avocado</Col>
  <Col className="borderedCol">Avocádou</Col>
  <Col className="borderedCol">Abacate</Col>
</Row>
<Row className="borderedRow">
  <Col className="borderedCol">Banana</Col>
  <Col className="borderedCol">Bănena</Col>
  <Col className="borderedCol">Banana</Col>
</Row>
<Row className="borderedRow1">
  <Col className="borderedCol">BlackBerry</Col>
  <Col className="borderedCol">Bléki Bérui</Col>
  <Col className="borderedCol">Amora Silvestre</Col>
</Row>
<Row className="borderedRow">
  <Col className="borderedCol">Cherry</Col>
  <Col className="borderedCol">Chérui</Col>
  <Col className="borderedCol">Cereja</Col>
</Row>
<Row className="borderedRow1">
  <Col className="borderedCol">Coconut</Col>
  <Col className="borderedCol">Côucanât</Col>
  <Col className="borderedCol">Coco</Col>
</Row>
<Row className="borderedRow">
  <Col className="borderedCol">Dragon Fruit</Col>
  <Col className="borderedCol">Druágon Frút</Col>
  <Col className="borderedCol">Pitaya</Col>
</Row>
<Row className="borderedRow1">
  <Col className="borderedCol">Fig</Col>
  <Col className="borderedCol">Fíg</Col>
  <Col className="borderedCol">Figo</Col>
</Row>
<Row className="borderedRow">
  <Col className="borderedCol">Grapes</Col>
  <Col className="borderedCol">Gruêips</Col>
  <Col className="borderedCol">Uvas</Col>
</Row>
<Row className="borderedRow1">
  <Col className="borderedCol">Jelly</Col>
  <Col className="borderedCol">Jélí</Col>
  <Col className="borderedCol">Geleia</Col>
</Row>
<Row className="borderedRow">
  <Col className="borderedCol">Kiwi</Col>
  <Col className="borderedCol">Kíwi</Col>
  <Col className="borderedCol">Kiwi</Col>
</Row>
<Row className="borderedRow1">
  <Col className="borderedCol">Lemon</Col>
  <Col className="borderedCol">Lémôn</Col>
  <Col className="borderedCol">Limão</Col>
</Row>
<Row className="borderedRow">
  <Col className="borderedCol">Lime</Col>
  <Col className="borderedCol">Láim</Col>
  <Col className="borderedCol">Lima</Col>
</Row>
<Row className="borderedRow1">
  <Col className="borderedCol">Mango</Col>
  <Col className="borderedCol">Mengô</Col>
  <Col className="borderedCol">Manga</Col>
</Row>
<Row className="borderedRow">
  <Col className="borderedCol">Melons</Col>
  <Col className="borderedCol">Melâns</Col>
  <Col className="borderedCol">Melões</Col>
</Row>
<Row className="borderedRow1">
  <Col className="borderedCol">Olive</Col>
  <Col className="borderedCol">Ólív</Col>
  <Col className="borderedCol">Oliva</Col>
</Row>
<Row className="borderedRow">
  <Col className="borderedCol">Orange</Col>
  <Col className="borderedCol">Órindj</Col>
  <Col className="borderedCol">Laranja</Col>
</Row>
<Row className="borderedRow1">
  <Col className="borderedCol">Passion Fruit</Col>
  <Col className="borderedCol">Péxian Frút</Col>
  <Col className="borderedCol">Maracujá</Col>
</Row>
<Row className="borderedRow">
  <Col className="borderedCol">Peach</Col>
  <Col className="borderedCol">Pítch</Col>
  <Col className="borderedCol">Pêssego</Col>
</Row>
<Row className="borderedRow1">
  <Col className="borderedCol">Pear</Col>
  <Col className="borderedCol">Pér</Col>
  <Col className="borderedCol">Pera</Col>
</Row>
<Row className="borderedRow">
  <Col className="borderedCol">Pineapple</Col>
  <Col className="borderedCol">Páinépou</Col>
  <Col className="borderedCol">Abacaxi</Col>
</Row>
<Row className="borderedRow1">
  <Col className="borderedCol">Plum</Col>
  <Col className="borderedCol">Plâm</Col>
  <Col className="borderedCol">Ameixa</Col>
</Row>
<Row className="borderedRow">
  <Col className="borderedCol">Prune</Col>
  <Col className="borderedCol">Prún</Col>
  <Col className="borderedCol">Ameixa Seca</Col>
</Row>
<Row className="borderedRow1">
  <Col className="borderedCol">Raisins</Col>
  <Col className="borderedCol">Réizîns</Col>
  <Col className="borderedCol">Uvas Passas</Col>
</Row>
<Row className="borderedRow">
  <Col className="borderedCol">Raspberry</Col>
  <Col className="borderedCol">Ruásbêrui</Col>
  <Col className="borderedCol">Framboesa</Col>
</Row>
<Row className="borderedRow1">
  <Col className="borderedCol">Seed</Col>
  <Col className="borderedCol">Síid</Col>
  <Col className="borderedCol">Semente</Col>
</Row>
<Row className="borderedRow">
  <Col className="borderedCol">Strawberry</Col>
  <Col className="borderedCol">Stróbêrui</Col>
  <Col className="borderedCol">Morango</Col>
</Row>
<Row className="borderedRow1">
  <Col className="borderedCol">Watermelon</Col>
  <Col className="borderedCol">Wótermêlôn/uárêrmélon</Col>
  <Col className="borderedCol">Melancia</Col>
</Row>
<Row className="borderedRow">
  <Col className="borderedCol">Apricot</Col>
  <Col className="borderedCol">Ápruicá</Col>
  <Col className="borderedCol">Damasco</Col>
</Row>
<Row className="borderedRow1">
  <Col className="borderedCol">Blueberry</Col>
  <Col className="borderedCol">Blúbêrui</Col>
  <Col className="borderedCol">Mirtilo</Col>
</Row>
<Row className="borderedRow">
  <Col className="borderedCol">Cantaloupe</Col>
  <Col className="borderedCol">Kentâlôup</Col>
  <Col className="borderedCol">Melão</Col>
</Row>
<Row className="borderedRow1">
  <Col className="borderedCol">Clementine</Col>
  <Col className="borderedCol">Clémêntáin</Col>
  <Col className="borderedCol">Tangerina</Col>
</Row>
<Row className="borderedRow">
  <Col className="borderedCol">Cranberry</Col>
  <Col className="borderedCol">Cruenbérui</Col>
  <Col className="borderedCol">Airela/Oxicoco</Col>
</Row>
<Row className="borderedRow1">
  <Col className="borderedCol">Date</Col>
  <Col className="borderedCol">Dêit</Col>
  <Col className="borderedCol">Tâmara</Col>
</Row>
<Row className="borderedRow">
  <Col className="borderedCol">Elderberry</Col>
  <Col className="borderedCol">ÉldêrbÉrUi</Col>
  <Col className="borderedCol">Sabugueiro</Col>
</Row>
<Row className="borderedRow1">
  <Col className="borderedCol">Gooseberry</Col>
  <Col className="borderedCol">Gúzbérui</Col>
  <Col className="borderedCol">Groselha</Col>
</Row>
<Row className="borderedRow">
  <Col className="borderedCol">Guava</Col>
  <Col className="borderedCol">Guáva</Col>
  <Col className="borderedCol">Goiaba</Col>
</Row>
<Row className="borderedRow1">
  <Col className="borderedCol">Lychee</Col>
  <Col className="borderedCol">Láíchí</Col>
  <Col className="borderedCol">Lichia</Col>
</Row>
<Row className="borderedRow">
  <Col className="borderedCol">Mulberry</Col>
  <Col className="borderedCol">Mólberui</Col>
  <Col className="borderedCol">Amoreira</Col>
</Row>
<Row className="borderedRow1">
  <Col className="borderedCol">Nectarine</Col>
  <Col className="borderedCol">Néctarín</Col>
  <Col className="borderedCol">Nectarina</Col>
</Row>
<Row className="borderedRow">
  <Col className="borderedCol">Papaya</Col>
  <Col className="borderedCol">Pápáia</Col>
  <Col className="borderedCol">Papaia</Col>
</Row>
<Row className="borderedRow1">
  <Col className="borderedCol">Pomegranate</Col>
  <Col className="borderedCol">Pômêgruênêt</Col>
  <Col className="borderedCol">Romã</Col>
</Row>
<Row className="borderedRow">
  <Col className="borderedCol">Starfruit</Col>
  <Col className="borderedCol">Stárfrút</Col>
  <Col className="borderedCol">Carambola</Col>
</Row>

    </Container>



<Footer />
</>
    );
}
