import Header from "../../components/header";
import Footer from "../../components/footer";
import HeaderMenuVocabulario from "../../components/headers/header-menu-vocabulario";
import Logo from "../../components/logo";
import { Container, Col, Row } from "react-bootstrap";
import ExplicacaoVocab from "../../components/explicacao-vocab";
import { Helmet } from "react-helmet-async";
import AudioPlayerVocab from '../../components/audio-player-vocab';

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
<Row className="borderedRow1">
        <Col className="borderedCol">Blender</Col>
        <Col className="borderedCol">Blêndêr</Col>
        <Col className="borderedCol">Liquidificador</Col>
        <AudioPlayerVocab
          text="Blender"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Can</Col>
        <Col className="borderedCol">Ken</Col>
        <Col className="borderedCol">Lata</Col>
        <AudioPlayerVocab
          text="Can"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Can Opener</Col>
        <Col className="borderedCol">Ken Óupênêr</Col>
        <Col className="borderedCol">Abridor de Lata</Col>
        <AudioPlayerVocab
          text="Can Opener"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Coffee Grinder</Col>
        <Col className="borderedCol">Kófî Gruáindêr</Col>
        <Col className="borderedCol">Moedor de Café</Col>
        <AudioPlayerVocab
          text="Coffee Grinder"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Coffee Maker</Col>
        <Col className="borderedCol">Kófî Mêikêr</Col>
        <Col className="borderedCol">Cafeteira</Col>
        <AudioPlayerVocab
          text="Coffee Maker"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Detergent</Col>
        <Col className="borderedCol">Dêterjênt</Col>
        <Col className="borderedCol">Detergente</Col>
        <AudioPlayerVocab
          text="Detergent"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Dishes</Col>
        <Col className="borderedCol">Dîshiz</Col>
        <Col className="borderedCol">Louça</Col>
        <AudioPlayerVocab
          text="Dishes"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Dishwasher</Col>
        <Col className="borderedCol">Dîshwóshêr</Col>
        <Col className="borderedCol">Lava-Louças</Col>
        <AudioPlayerVocab
          text="Dishwasher"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Food Processor</Col>
        <Col className="borderedCol">Fúd Pruôcêssôr</Col>
        <Col className="borderedCol">Processador de Alimentos</Col>
        <AudioPlayerVocab
          text="Food Processor"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Freezer</Col>
        <Col className="borderedCol">Fruîzêr</Col>
        <Col className="borderedCol">Freezer </Col>
        <AudioPlayerVocab
          text="Freezer"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Ice Tray</Col>
        <Col className="borderedCol">Áici Truêi</Col>
        <Col className="borderedCol">Bandeja de Gelo</Col>
        <AudioPlayerVocab
          text="Ice Tray"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Jar</Col>
        <Col className="borderedCol">Jár</Col>
        <Col className="borderedCol">Jarra</Col>
        <AudioPlayerVocab
          text="Jar"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Lid</Col>
        <Col className="borderedCol">Líd</Col>
        <Col className="borderedCol">Tampa</Col>
        <AudioPlayerVocab
          text="Lid"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Microwave Oven</Col>
        <Col className="borderedCol">Máikrouêiv ôvên</Col>
        <Col className="borderedCol">Forno Micro-ondas</Col>
        <AudioPlayerVocab
          text="Microwave Oven"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Mixer</Col>
        <Col className="borderedCol">Míksêr</Col>
        <Col className="borderedCol">Batedeira</Col>
        <AudioPlayerVocab
          text="Mixer"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Oven</Col>
        <Col className="borderedCol">Ôvên</Col>
        <Col className="borderedCol">Forno</Col>
        <AudioPlayerVocab
          text="Oven"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Paper Towels</Col>
        <Col className="borderedCol">Pêipêr Táuêlz</Col>
        <Col className="borderedCol">Papel Toalha</Col>
        <AudioPlayerVocab
          text="Paper Towels"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Rag</Col>
        <Col className="borderedCol">Ruág</Col>
        <Col className="borderedCol">Pano</Col>
        <AudioPlayerVocab
          text="Rag"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Refrigerator</Col>
        <Col className="borderedCol">Rêfruijêrêtôr</Col>
        <Col className="borderedCol">Geladeira</Col>
        <AudioPlayerVocab
          text="Refrigerator"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Sink</Col>
        <Col className="borderedCol">Sînkh</Col>
        <Col className="borderedCol">Pia</Col>
        <AudioPlayerVocab
          text="Sink"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Sponge</Col>
        <Col className="borderedCol">Spônj</Col>
        < Col className="borderedCol">Esponja</Col>
        <AudioPlayerVocab
          text="Sponge"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Stove</Col>
        <Col className="borderedCol">Stôuv</Col>
        <Col className="borderedCol">Fogão</Col>
        <AudioPlayerVocab
          text="Stove"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Timer</Col>
        <Col className="borderedCol">Táimêr</Col>
        <Col className="borderedCol">Cronômetro</Col>
        <AudioPlayerVocab
          text="Timer"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Toaster</Col>
        <Col className="borderedCol">Tôustêr</Col>
        <Col className="borderedCol">Torradeira</Col>
        <AudioPlayerVocab
          text="Toaster"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Coffee Pot</Col>
        <Col className="borderedCol">Kófî Pót</Col>
        <Col className="borderedCol">Cafeteira (para preparo de café)</Col>
        <AudioPlayerVocab
          text="Coffee Pot"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Dish Rack</Col>
        <Col className="borderedCol">Dîsh Ruék</Col>
        <Col className="borderedCol">Escorredor de Louça</Col>
        <AudioPlayerVocab
          text="Dish Rack"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Electric Kettle</Col>
        <Col className="borderedCol">Êlêtruîk Kêrol</Col>
        <Col className="borderedCol">Chaleira Elétrica</Col>
        <AudioPlayerVocab
          text="Electric Kettle"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Grill</Col>
        <Col className="borderedCol">Gruîl</Col>
        <Col className="borderedCol">Churrasqueira</Col>
        <AudioPlayerVocab
          text="Grill"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Juicer</Col>
        <Col className="borderedCol">Djúicêr</Col>
        <Col className="borderedCol">Espremedor</Col>
        <AudioPlayerVocab
          text="Juicer"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Trash Can</Col>
        <Col className="borderedCol">Truésh Ken</Col>
        <Col className="borderedCol">Lixeira</Col>
        <AudioPlayerVocab
          text="Trash Can"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>


    </Container>



<Footer />
</>
    );
}
