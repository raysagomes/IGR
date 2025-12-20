import Header from "../../components/header";
import Footer from "../../components/footer";
import HeaderMenuVocabulario from "../../components/headers/header-menu-vocabulario";
import Logo from "../../components/logo";
import { Container, Col, Row } from "react-bootstrap";
import ExplicacaoVocab from "../../components/explicacao-vocab";
import { Helmet } from "react-helmet-async";
import AudioPlayerVocab from '../../components/audio-player-vocab';

export default function VocabAdjetivo3() {
    return(
<>
            <Helmet>
                <title>Adjetivos de Distância</title>
            </Helmet>
            <Header />
            <Logo />
            <HeaderMenuVocabulario />
            <div className="h1-titulo-da-pagina">
                <h1 className="fw-bold h1-titulo-da-pagina">Adjetivos de Distância</h1>
            </div>

            <ExplicacaoVocab />

            <Container className="colunasVocabulario">
                <Row className="borderedRow">
                    <Col className="borderedCol header-col">Como se escreve</Col>
                    <Col className="borderedCol header-col">Como sôa</Col>
                    <Col className="borderedCol header-col">Tradução</Col>
                </Row>

                <Row className="borderedRow">
                    <Col className="borderedCol">Near</Col>
                    <Col className="borderedCol">Nîr</Col>
                    <Col className="borderedCol">Perto</Col>
                    <AudioPlayerVocab text="Near" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
                </Row>

                <Row className="borderedRow1">
                    <Col className="borderedCol">Far</Col>
                    <Col className="borderedCol">Fár</Col>
                    <Col className="borderedCol">Longe</Col>
                    <AudioPlayerVocab text="Far" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
                </Row>

                <Row className="borderedRow">
                    <Col className="borderedCol">Close</Col>
                    <Col className="borderedCol">Clôus</Col>
                    <Col className="borderedCol">Próximo</Col>
                    <AudioPlayerVocab text="Close" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
                </Row>

                <Row className="borderedRow1">
                    <Col className="borderedCol">Distant</Col>
                    <Col className="borderedCol">Dîstânt</Col>
                    <Col className="borderedCol">Distante</Col>
                    <AudioPlayerVocab text="Distant" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
                </Row>

                <Row className="borderedRow">
                    <Col className="borderedCol">Adjacent</Col>
                    <Col className="borderedCol">âdjêiçânt</Col>
                    <Col className="borderedCol">Adjacente (muito próximo)</Col>
                    <AudioPlayerVocab text="Adjacent" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
                </Row>

                <Row className="borderedRow1">
                    <Col className="borderedCol">Remote</Col>
                    <Col className="borderedCol">Rimôt</Col>
                    <Col className="borderedCol">Remoto (muito distante)</Col>
                    <AudioPlayerVocab text="Remote" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
                </Row>

                <Row className="borderedRow">
                    <Col className="borderedCol">Nearby</Col>
                    <Col className="borderedCol">Nîr-bái</Col>
                    <Col className="borderedCol">Nas proximidades</Col>
                    <AudioPlayerVocab text="Nearby" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
                </Row>

                <Row className="borderedRow1">
                    <Col className="borderedCol">Outlying</Col>
                    <Col className="borderedCol">Áut-láing</Col>
                    <Col className="borderedCol">Periférico (distante do centro)</Col>
                    <AudioPlayerVocab text="Outlying" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
                </Row>

                <Row className="borderedRow">
                    <Col className="borderedCol">Bordering</Col>
                    <Col className="borderedCol">Bórdêrîn</Col>
                    <Col className="borderedCol">Limitando (muito próximo da borda)</Col>
                    <AudioPlayerVocab text="Bordering" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
                </Row>

            </Container>

            <Footer />
        </>
    );
}
