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
          <title>Quantidade</title>
      </Helmet>
      <Header />
      <Logo />
      <HeaderMenuVocabulario />
      <div className="h1-titulo-da-pagina">
          <h1 className="fw-bold h1-titulo-da-pagina">Quantidade</h1>
      </div>

      <ExplicacaoVocab />

      <Container className="colunasVocabulario">
      
      <Row className="borderedRow1">
                    <Col className="borderedCol">Few</Col>
                    <Col className="borderedCol">Fíu</Col>
                    <Col className="borderedCol">Poucos</Col>
                    <AudioPlayerVocab text="Few" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
                </Row>

                <Row className="borderedRow">
                    <Col className="borderedCol">Many</Col>
                    <Col className="borderedCol">Mê-ni</Col>
                    <Col className="borderedCol">Muitos</Col>
                    <AudioPlayerVocab text="Many" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
                </Row>

                <Row className="borderedRow1">
                    <Col className="borderedCol">Some</Col>
                    <Col className="borderedCol">Sâm</Col>
                    <Col className="borderedCol">Alguns</Col>
                    <AudioPlayerVocab text="Some" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
                </Row>

                <Row className="borderedRow">
                    <Col className="borderedCol">All</Col>
                    <Col className="borderedCol">Ól</Col>
                    <Col className="borderedCol">Todos</Col>
                    <AudioPlayerVocab text="All" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
                </Row>

                <Row className="borderedRow1">
                    <Col className="borderedCol">None</Col>
                    <Col className="borderedCol">Nân</Col>
                    <Col className="borderedCol">Nenhum</Col>
                    <AudioPlayerVocab text="None" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
                </Row>

                <Row className="borderedRow">
                    <Col className="borderedCol">Several</Col>
                    <Col className="borderedCol">Sév-er-al</Col>
                    <Col className="borderedCol">Vários</Col>
                    <AudioPlayerVocab text="Several" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
                </Row>

                <Row className="borderedRow1">
                    <Col className="borderedCol">Plenty</Col>
                    <Col className="borderedCol">Plên-ti</Col>
                    <Col className="borderedCol">Muitos, abundante</Col>
                    <AudioPlayerVocab text="Plenty" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
                </Row>

                <Row className="borderedRow">
                    <Col className="borderedCol">A lot of</Col>
                    <Col className="borderedCol">A lot of</Col>
                    <Col className="borderedCol">Muitos</Col>
                    <AudioPlayerVocab text="A lot of" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
                </Row>

                <Row className="borderedRow1">
                    <Col className="borderedCol">Much</Col>
                    <Col className="borderedCol">Mâch</Col>
                    <Col className="borderedCol">Muito</Col>
                    <AudioPlayerVocab text="Much" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
                </Row>

                <Row className="borderedRow">
                    <Col className="borderedCol">Enough</Col>
                    <Col className="borderedCol">Ináf</Col>
                    <Col className="borderedCol">Suficiente</Col>
                    <AudioPlayerVocab text="Enough" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
                </Row>

                <Row className="borderedRow1">
                    <Col className="borderedCol">Most</Col>
                    <Col className="borderedCol">Môust</Col>
                    <Col className="borderedCol">Maioria</Col>
                    <AudioPlayerVocab text="Most" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
                </Row>

                <Row className="borderedRow">
                    <Col className="borderedCol">Less</Col>
                    <Col className="borderedCol">Lés</Col>
                    <Col className="borderedCol">Menos</Col>
                    <AudioPlayerVocab text="Less" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
                </Row>

                <Row className="borderedRow1">
                    <Col className="borderedCol">Little</Col>
                    <Col className="borderedCol">Lít-oul</Col>
                    <Col className="borderedCol">Pouco</Col>
                    <AudioPlayerVocab text="Little" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
                </Row>

                <Row className="borderedRow">
                    <Col className="borderedCol">Several</Col>
                    <Col className="borderedCol">Sév-er-al</Col>
                    <Col className="borderedCol">Vários</Col>
                    <AudioPlayerVocab text="Several" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
                </Row>

                <Row className="borderedRow1">
                    <Col className="borderedCol">Abundant</Col>
                    <Col className="borderedCol">A-bán-dant</Col>
                    <Col className="borderedCol">Abundante</Col>
                    <AudioPlayerVocab text="Abundant" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
                </Row>

                <Row className="borderedRow">
                    <Col className="borderedCol">Numerous</Col>
                    <Col className="borderedCol">Nú-me-rous</Col>
                    <Col className="borderedCol">Numeroso</Col>
                    <AudioPlayerVocab text="Numerous" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
                </Row>

                <Row className="borderedRow1">
                    <Col className="borderedCol">Tons of</Col>
                    <Col className="borderedCol">Tâns of</Col>
                    <Col className="borderedCol">Toneladas de</Col>
                    <AudioPlayerVocab text="Tons of" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
                </Row>

                <Row className="borderedRow">
                    <Col className="borderedCol">Countless</Col>
                    <Col className="borderedCol">Cáunt-les</Col>
                    <Col className="borderedCol">Incontáveis</Col>
                    <AudioPlayerVocab text="Countless" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
                </Row>


      </Container>

      <Footer />
  </>
    );
}
