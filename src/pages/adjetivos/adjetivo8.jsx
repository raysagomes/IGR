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
          <title>Opinião</title>
      </Helmet>
      <Header />
      <Logo />
      <HeaderMenuVocabulario />
      <div className="h1-titulo-da-pagina">
          <h1 className="fw-bold h1-titulo-da-pagina">Opinião</h1>
      </div>

      <ExplicacaoVocab />

      <Container className="colunasVocabulario">
      
      <Row className="borderedRow1">
                    <Col className="borderedCol">Good</Col>
                    <Col className="borderedCol">Gúd</Col>
                    <Col className="borderedCol">Bom</Col>
                    <AudioPlayerVocab text="Good" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
                </Row>

                <Row className="borderedRow">
                    <Col className="borderedCol">Bad</Col>
                    <Col className="borderedCol">Bád</Col>
                    <Col className="borderedCol">Ruim</Col>
                    <AudioPlayerVocab text="Bad" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
                </Row>

                <Row className="borderedRow1">
                    <Col className="borderedCol">Excellent</Col>
                    <Col className="borderedCol">Ék-sel-ent</Col>
                    <Col className="borderedCol">Excelente</Col>
                    <AudioPlayerVocab text="Excellent" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
                </Row>

                <Row className="borderedRow">
                    <Col className="borderedCol">Terrible</Col>
                    <Col className="borderedCol">Té-rri-bul</Col>
                    <Col className="borderedCol">Terrível</Col>
                    <AudioPlayerVocab text="Terrible" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
                </Row>

                <Row className="borderedRow1">
                    <Col className="borderedCol">Wonderful</Col>
                    <Col className="borderedCol">Wând-er-ful</Col>
                    <Col className="borderedCol">Maravilhoso</Col>
                    <AudioPlayerVocab text="Wonderful" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
                </Row>

                <Row className="borderedRow">
                    <Col className="borderedCol">Awful</Col>
                    <Col className="borderedCol">Ó-ful</Col>
                    <Col className="borderedCol">Horrível</Col>
                    <AudioPlayerVocab text="Awful" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
                </Row>

                <Row className="borderedRow1">
                    <Col className="borderedCol">Nice</Col>
                    <Col className="borderedCol">Náis</Col>
                    <Col className="borderedCol">Legal</Col>
                    <AudioPlayerVocab text="Nice" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
                </Row>

                <Row className="borderedRow">
                    <Col className="borderedCol">Ugly</Col>
                    <Col className="borderedCol">Ág-li</Col>
                    <Col className="borderedCol">Feio</Col>
                    <AudioPlayerVocab text="Ugly" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
                </Row>

                <Row className="borderedRow1">
                    <Col className="borderedCol">Beautiful</Col>
                    <Col className="borderedCol">Bí-u-ti-ful</Col>
                    <Col className="borderedCol">Bonito</Col>
                    <AudioPlayerVocab text="Beautiful" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
                </Row>

                <Row className="borderedRow">
                    <Col className="borderedCol">Boring</Col>
                    <Col className="borderedCol">Bó-ring</Col>
                    <Col className="borderedCol">Chato</Col>
                    <AudioPlayerVocab text="Boring" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
                </Row>

                <Row className="borderedRow1">
                    <Col className="borderedCol">Interesting</Col>
                    <Col className="borderedCol">Ín-tres-ting</Col>
                    <Col className="borderedCol">Interessante</Col>
                    <AudioPlayerVocab text="Interesting" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
                </Row>

                <Row className="borderedRow">
                    <Col className="borderedCol">Fun</Col>
                    <Col className="borderedCol">Fãn</Col>
                    <Col className="borderedCol">Divertido</Col>
                    <AudioPlayerVocab text="Fun" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
                </Row>

                <Row className="borderedRow1">
                    <Col className="borderedCol">Dull</Col>
                    <Col className="borderedCol">Dâl</Col>
                    <Col className="borderedCol">Sem graça</Col>
                    <AudioPlayerVocab text="Dull" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
                </Row>

                <Row className="borderedRow">
                    <Col className="borderedCol">Amazing</Col>
                    <Col className="borderedCol">Ê-mêi-zing</Col>
                    <Col className="borderedCol">Incrível</Col>
                    <AudioPlayerVocab text="Amazing" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
                </Row>

                <Row className="borderedRow1">
                    <Col className="borderedCol">Lousy</Col>
                    <Col className="borderedCol">Láu-zi</Col>
                    <Col className="borderedCol">Ruim</Col>
                    <AudioPlayerVocab text="Lousy" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
                </Row>

                <Row className="borderedRow">
                    <Col className="borderedCol">Impressive</Col>
                    <Col className="borderedCol">Im-pré-siv</Col>
                    <Col className="borderedCol">Impressionante</Col>
                    <AudioPlayerVocab text="Impressive" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
                </Row>

                <Row className="borderedRow1">
                    <Col className="borderedCol">Disappointing</Col>
                    <Col className="borderedCol">Dî-sâ-póint-ing</Col>
                    <Col className="borderedCol">Decepcionante</Col>
                    <AudioPlayerVocab text="Disappointing" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
                </Row>

                <Row className="borderedRow">
                    <Col className="borderedCol">Fantastic</Col>
                    <Col className="borderedCol">Fân-tás-tik</Col>
                    <Col className="borderedCol">Fantástico</Col>
                    <AudioPlayerVocab text="Fantastic" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
                </Row>

                <Row className="borderedRow1">
                    <Col className="borderedCol">Mediocre</Col>
                    <Col className="borderedCol">Mí-di-ô-kêr</Col>
                    <Col className="borderedCol">Medíocre</Col>
                    <AudioPlayerVocab text="Mediocre" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
                </Row>


      </Container>

      <Footer />
  </>
    );
}
