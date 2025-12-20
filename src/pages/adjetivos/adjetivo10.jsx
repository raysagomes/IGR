import Header from "../../components/header";
import Footer from "../../components/footer";
import HeaderMenuVocabulario from "../../components/headers/header-menu-vocabulario";
import Logo from "../../components/logo";
import { Container, Col, Row } from "react-bootstrap";
import ExplicacaoVocab from "../../components/explicacao-vocab";
import { Helmet } from "react-helmet-async";
import AudioPlayerVocab from '../../components/audio-player-vocab';

export default function VocabAdjetivo5() {
    return(
      <>
      <Helmet>
          <title>Tamanho</title>
      </Helmet>
      <Header />
      <Logo />
      <HeaderMenuVocabulario />
      <div className="h1-titulo-da-pagina">
          <h1 className="fw-bold h1-titulo-da-pagina">Tamanho</h1>
      </div>

      <ExplicacaoVocab />

      <Container className="colunasVocabulario">
      
      <Row className="borderedRow1">
                    <Col className="borderedCol">Small</Col>
                    <Col className="borderedCol">Smôul</Col>
                    <Col className="borderedCol">Pequeno</Col>
                    <AudioPlayerVocab text="Small" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
                </Row>

                <Row className="borderedRow">
                    <Col className="borderedCol">Large</Col>
                    <Col className="borderedCol">Lárdji</Col>
                    <Col className="borderedCol">Grande</Col>
                    <AudioPlayerVocab text="Large" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
                </Row>

                <Row className="borderedRow1">
                    <Col className="borderedCol">Big</Col>
                    <Col className="borderedCol">Bíg</Col>
                    <Col className="borderedCol">Grande</Col>
                    <AudioPlayerVocab text="Big" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
                </Row>

                <Row className="borderedRow">
                    <Col className="borderedCol">Tiny</Col>
                    <Col className="borderedCol">Táiní</Col>
                    <Col className="borderedCol">Minúsculo</Col>
                    <AudioPlayerVocab text="Tiny" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
                </Row>

                <Row className="borderedRow1">
                    <Col className="borderedCol">Huge</Col>
                    <Col className="borderedCol">Rrútch</Col>
                    <Col className="borderedCol">Enorme</Col>
                    <AudioPlayerVocab text="Huge" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
                </Row>

                <Row className="borderedRow">
                    <Col className="borderedCol">Medium</Col>
                    <Col className="borderedCol">Mídium</Col>
                    <Col className="borderedCol">Médio</Col>
                    <AudioPlayerVocab text="Medium" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
                </Row>

                <Row className="borderedRow1">
                    <Col className="borderedCol">Enormous</Col>
                    <Col className="borderedCol">Enôr-mous</Col>
                    <Col className="borderedCol">Enorme</Col>
                    <AudioPlayerVocab text="Enormous" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
                </Row>

                <Row className="borderedRow">
                    <Col className="borderedCol">Gigantic</Col>
                    <Col className="borderedCol">Jai-gân-tic</Col>
                    <Col className="borderedCol">Gigante</Col>
                    <AudioPlayerVocab text="Gigantic" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
                </Row>

                <Row className="borderedRow1">
                    <Col className="borderedCol">Petite</Col>
                    <Col className="borderedCol">Pê-tít</Col>
                    <Col className="borderedCol">Pequeno (usado para pessoas)</Col>
                    <AudioPlayerVocab text="Petite" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
                </Row>

                <Row className="borderedRow">
                    <Col className="borderedCol">Massive</Col>
                    <Col className="borderedCol">Mâss-iv</Col>
                    <Col className="borderedCol">Massivo</Col>
                    <AudioPlayerVocab text="Massive" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
                </Row>

                <Row className="borderedRow1">
                    <Col className="borderedCol">Immense</Col>
                    <Col className="borderedCol">I-menss</Col>
                    <Col className="borderedCol">Imenso</Col>
                    <AudioPlayerVocab text="Immense" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
                </Row>

                <Row className="borderedRow">
                    <Col className="borderedCol">Compact</Col>
                    <Col className="borderedCol">Côm-pákt</Col>
                    <Col className="borderedCol">Compacto</Col>
                    <AudioPlayerVocab text="Compact" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
                </Row>

                <Row className="borderedRow1">
                    <Col className="borderedCol">Vast</Col>
                    <Col className="borderedCol">Vást</Col>
                    <Col className="borderedCol">Vasto</Col>
                    <AudioPlayerVocab text="Vast" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
                </Row>

                <Row className="borderedRow">
                    <Col className="borderedCol">Bulky</Col>
                    <Col className="borderedCol">Bâl-ki</Col>
                    <Col className="borderedCol">Volumoso</Col>
                    <AudioPlayerVocab text="Bulky" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
                </Row>

                <Row className="borderedRow1">
                    <Col className="borderedCol">Grand</Col>
                    <Col className="borderedCol">Grând</Col>
                    <Col className="borderedCol">Grandioso</Col>
                    <AudioPlayerVocab text="Grand" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
                </Row>

                <Row className="borderedRow">
                    <Col className="borderedCol">Oversized</Col>
                    <Col className="borderedCol">Ôv-er-sáizd</Col>
                    <Col className="borderedCol">Exagerado, superdimensionado</Col>
                    <AudioPlayerVocab text="Oversized" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
                </Row>

                <Row className="borderedRow1">
                    <Col className="borderedCol">Little</Col>
                    <Col className="borderedCol">Lít-oul</Col>
                    <Col className="borderedCol">Pouco, pequeno</Col>
                    <AudioPlayerVocab text="Little" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
                </Row>

      </Container>

      <Footer />
  </>
    );
}
