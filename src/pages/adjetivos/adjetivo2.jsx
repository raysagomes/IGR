import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import HeaderMenuVocabulario from "../../components/headers/header-menu-vocabulario";
import Logo from "../../components/logo";
import { Container, Col, Row } from "react-bootstrap";
import ExplicacaoVocab from "../../components/explicacao-vocab";
import { Helmet } from "react-helmet-async";
import AudioPlayerVocab from '../../components/audio-player-vocab';

export default function VocabAdjetivo2() {
    return(
<>
<Helmet>
                <title>Aparência Física</title>
            </Helmet>
            <Header />
            <Logo />
            <HeaderMenuVocabulario />
            <div className="h1-titulo-da-pagina">
                <h1 className="fw-bold h1-titulo-da-pagina">Aparência Física</h1>
            </div>

            <ExplicacaoVocab />

            <Container className="colunasVocabulario">
                <Row className="borderedRow">
                    <Col className="borderedCol header-col">Como se escreve</Col>
                    <Col className="borderedCol header-col">Como sôa</Col>
                    <Col className="borderedCol header-col">Tradução</Col>
                </Row>

                <Row className="borderedRow">
                    <Col className="borderedCol">Tall</Col>
                    <Col className="borderedCol">Tól</Col>
                    <Col className="borderedCol">Alto</Col>
                    <AudioPlayerVocab text="Tall" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
                </Row>

                <Row className="borderedRow1">
                    <Col className="borderedCol">Short</Col>
                    <Col className="borderedCol">Shórt</Col>
                    <Col className="borderedCol">Baixo</Col>
                    <AudioPlayerVocab text="Short" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
                </Row>

                <Row className="borderedRow">
                    <Col className="borderedCol">Slim</Col>
                    <Col className="borderedCol">Slîm</Col>
                    <Col className="borderedCol">Magro</Col>
                    <AudioPlayerVocab text="Slim" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
                </Row>

                <Row className="borderedRow1">
                    <Col className="borderedCol">Fat</Col>
                    <Col className="borderedCol">Fét</Col>
                    <Col className="borderedCol">Gordo</Col>
                    <AudioPlayerVocab text="Fat" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
                </Row>

                <Row className="borderedRow">
                    <Col className="borderedCol">Muscular</Col>
                    <Col className="borderedCol">Mâsquiulâr</Col>
                    <Col className="borderedCol">Musculoso</Col>
                    <AudioPlayerVocab text="Muscular" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
                </Row>

                <Row className="borderedRow1">
                    <Col className="borderedCol">Chubby</Col>
                    <Col className="borderedCol">Tchâbi</Col>
                    <Col className="borderedCol">Gordinho</Col>
                    <AudioPlayerVocab text="Chubby" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
                </Row>

                <Row className="borderedRow">
                    <Col className="borderedCol">Skinny</Col>
                    <Col className="borderedCol">Skîni</Col>
                    <Col className="borderedCol">Muito magro</Col>
                    <AudioPlayerVocab text="Skinny" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
                </Row>

                <Row className="borderedRow1">
                    <Col className="borderedCol">Handsome</Col>
                    <Col className="borderedCol">Hêndsâm</Col>
                    <Col className="borderedCol">Bonito (para homens)</Col>
                    <AudioPlayerVocab text="Handsome" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
                </Row>

                <Row className="borderedRow">
                    <Col className="borderedCol">Beautiful</Col>
                    <Col className="borderedCol">Bíutifâl</Col>
                    <Col className="borderedCol">Bonita</Col>
                    <AudioPlayerVocab text="Beautiful" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
                </Row>

                <Row className="borderedRow1">
                    <Col className="borderedCol">Pretty</Col>
                    <Col className="borderedCol">Prîri</Col>
                    <Col className="borderedCol">Linda</Col>
                    <AudioPlayerVocab text="Pretty" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
                </Row>

                <Row className="borderedRow">
                    <Col className="borderedCol">Ugly</Col>
                    <Col className="borderedCol">Âgli</Col>
                    <Col className="borderedCol">Feio</Col>
                    <AudioPlayerVocab text="Ugly" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
                </Row>

                <Row className="borderedRow1">
                    <Col className="borderedCol">Attractive</Col>
                    <Col className="borderedCol">âtráctiv</Col>
                    <Col className="borderedCol">Atraente</Col>
                    <AudioPlayerVocab text="Attractive" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
                </Row>

                <Row className="borderedRow">
                    <Col className="borderedCol">Overweight</Col>
                    <Col className="borderedCol">Ôuvêr-uêit</Col>
                    <Col className="borderedCol">Acima do peso</Col>
                    <AudioPlayerVocab text="Overweight" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
                </Row>

                <Row className="borderedRow1">
                    <Col className="borderedCol">Fit</Col>
                    <Col className="borderedCol">Fît</Col>
                    <Col className="borderedCol">Em forma</Col>
                    <AudioPlayerVocab text="Fit" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
                </Row>

                <Row className="borderedRow">
                    <Col className="borderedCol">Well-built</Col>
                    <Col className="borderedCol">Uél-bílt</Col>
                    <Col className="borderedCol">Bem estruturado (forte)</Col>
                    <AudioPlayerVocab text="Well-built" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
                </Row>

            </Container>

            <Footer />
        </>
    );
}

