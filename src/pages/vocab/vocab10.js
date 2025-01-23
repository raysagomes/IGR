import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import HeaderMenuVocabulario from "../../components/header-menu-vocabulario";
import Logo from "../../components/logo";
import { Container, Col, Row } from "react-bootstrap";
import ExplicacaoVocab from "../../components/explicacao-vocab";
import { Helmet } from "react-helmet-async";
import AudioPlayerVocab from '../../components/audio-player-vocab';

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
</Row><Row className="borderedRow1">
        <Col className="borderedCol">Bottle</Col>
        <Col className="borderedCol">Bórou</Col>
        <Col className="borderedCol">Garrafa</Col>
        <AudioPlayerVocab
          text="Bottle"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Bottle Cap</Col>
        <Col className="borderedCol">Bórou Kép</Col>
        <Col className="borderedCol">Tampa de Garrafa</Col>
        <AudioPlayerVocab
          text="Bottle Cap"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Bottle Opener</Col>
        <Col className="borderedCol">Bórou Óupênêr</Col>
        <Col className="borderedCol">Abridor de Garrafas</Col>
        <AudioPlayerVocab
          text="Bottle Opener"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Bowl</Col>
        <Col className="borderedCol">Bôul</Col>
        <Col className="borderedCol">Tigela</Col>
        <AudioPlayerVocab
          text="Bowl"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Corkscrew</Col>
        <Col className="borderedCol">Kôrk-iskrú</Col>
        <Col className="borderedCol">Saca-Rolhas</Col>
        <AudioPlayerVocab
          text="Corkscrew"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Cup</Col>
        <Col className="borderedCol">Kâp</Col>
        <Col className="borderedCol">Copo</Col>
        <AudioPlayerVocab
          text="Cup"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Eating Utensils</Col>
        <Col className="borderedCol">Ítin Yutênsîls</Col>
        <Col className="borderedCol">Utensílios de Cozinha</Col>
        <AudioPlayerVocab
          text="Eating Utensils"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Fork</Col>
        <Col className="borderedCol">Fôrk</Col>
        <Col className="borderedCol">Garfo</Col>
        <AudioPlayerVocab
          text="Fork"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Grater</Col>
        <Col className="borderedCol">Gruêirêr</Col>
        <Col className="borderedCol">Ralador</Col>
        <AudioPlayerVocab
          text="Grater"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Knife</Col>
        <Col className="borderedCol">Náif</Col>
        <Col className="borderedCol">Faca</Col>
        < AudioPlayerVocab
          text="Knife"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Ladle</Col>
        <Col className="borderedCol">Lêidou</Col>
        <Col className="borderedCol">Concha</Col>
        <AudioPlayerVocab
          text="Ladle"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Mug</Col>
        <Col className="borderedCol">Mâg</Col>
        <Col className="borderedCol">Caneca</Col>
        <AudioPlayerVocab
          text="Mug"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Napkin</Col>
        <Col className="borderedCol">Népkîn</Col>
        <Col className="borderedCol">Guardanapo</Col>
        <AudioPlayerVocab
          text="Napkin"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Pepper</Col>
        <Col className="borderedCol">Pépêr</Col>
        <Col className="borderedCol">Pimenta</Col>
        <AudioPlayerVocab
          text="Pepper"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Pitcher</Col>
        <Col className="borderedCol">Pítchêr</Col>
        <Col className="borderedCol">Jarro</Col>
        <AudioPlayerVocab
          text="Pitcher"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Plate</Col>
        <Col className="borderedCol">Plêit</Col>
        <Col className="borderedCol">Prato</Col>
        <AudioPlayerVocab
          text="Plate"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Pot</Col>
        <Col className="borderedCol">Pót</Col>
        <Col className="borderedCol">Panela</Col>
        <AudioPlayerVocab
          text="Pot"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Pan</Col>
        <Col className="borderedCol">Pen</Col>
        <Col className="borderedCol">Frigideira</Col>
        <AudioPlayerVocab
          text="Pan"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Peeler</Col>
        <Col className="borderedCol">Pílêr</Col>
        <Col className="borderedCol">Descascador</Col>
        <AudioPlayerVocab
          text="Peeler"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Salt Shaker</Col>
        <Col className="borderedCol">Sóut Shêikêr</Col>
        <Col className="borderedCol">Saleiro</Col>
        <AudioPlayerVocab
          text="Salt Shaker"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Saucer</Col>
        <Col className="borderedCol">Sóssêr</Col>
        <Col className="borderedCol">Pires</Col>
        <AudioPlayerVocab
          text="Saucer"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Spoon</Col>
        <Col className="borderedCol">Spûn</Col>
        <Col className="borderedCol">Colher</Col>
        <AudioPlayerVocab
          text="Spoon"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Straw</Col>
        <Col className="borderedCol">Stróu</Col>
        <Col className="borderedCol">Canudo</Col>
        <AudioPlayerVocab
          text="Straw"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Table</Col>
        <Col className="borderedCol">Teibou</Col>
        <Col className="borderedCol">Mesa</Col>
        <AudioPlayerVocab
          text="Table"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Table Cloth</Col>
        <Col className="borderedCol">Teibou Klóth</Col>
        <Col className="borderedCol">Toalha de Mesa</Col>
        <AudioPlayerVocab
          text="Table Cloth"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Teapot</Col>
        <Col className="borderedCol">Típót</Col>
        <Col className="borderedCol">Bule</Col>
        <AudioPlayerVocab
          text="Teapot"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Tongs</Col>
        <Col className="borderedCol">Tôngz</Col>
        <Col className="borderedCol">Pinça</Col>
        <AudioPlayerVocab
          text="Tongs"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Wine Glass</Col>
        <Col className="borderedCol">Wáini Gléss</Col>
        <Col className="borderedCol">Taça</Col>
        <AudioPlayerVocab
          text="Wine Glass"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>

    </Container>



<Footer />
</>
    );
}
