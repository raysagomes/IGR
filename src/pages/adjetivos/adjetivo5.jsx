import React from "react";
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
          <title>Temperatura</title>
      </Helmet>
      <Header />
      <Logo />
      <HeaderMenuVocabulario />
      <div className="h1-titulo-da-pagina">
          <h1 className="fw-bold h1-titulo-da-pagina">Temperatura</h1>
      </div>

      <ExplicacaoVocab />

      <Container className="colunasVocabulario">
      <Row className="borderedRow1">
                    <Col className="borderedCol">Hot</Col>
                    <Col className="borderedCol">Rót</Col>
                    <Col className="borderedCol">Quente</Col>
                    <AudioPlayerVocab text="Hot" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
                </Row>

                <Row className="borderedRow">
                    <Col className="borderedCol">Warm</Col>
                    <Col className="borderedCol">Uórm</Col>
                    <Col className="borderedCol">Morno</Col>
                    <AudioPlayerVocab text="Warm" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
                </Row>

                <Row className="borderedRow1">
                    <Col className="borderedCol">Cool</Col>
                    <Col className="borderedCol">Cúl</Col>
                    <Col className="borderedCol">Fresco</Col>
                    <AudioPlayerVocab text="Cool" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
                </Row>

                <Row className="borderedRow">
                    <Col className="borderedCol">Cold</Col>
                    <Col className="borderedCol">Côuld</Col>
                    <Col className="borderedCol">Frio</Col>
                    <AudioPlayerVocab text="Cold" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
                </Row>

                <Row className="borderedRow1">
                    <Col className="borderedCol">Freezing</Col>
                    <Col className="borderedCol">Frí-zing</Col>
                    <Col className="borderedCol">Congelante</Col>
                    <AudioPlayerVocab text="Freezing" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
                </Row>

                <Row className="borderedRow">
                    <Col className="borderedCol">Boiling</Col>
                    <Col className="borderedCol">Bói-ling</Col>
                    <Col className="borderedCol">Fervendo</Col>
                    <AudioPlayerVocab text="Boiling" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
                </Row>

                <Row className="borderedRow1">
                    <Col className="borderedCol">Chilly</Col>
                    <Col className="borderedCol">Tchí-li</Col>
                    <Col className="borderedCol">Friozinho</Col>
                    <AudioPlayerVocab text="Chilly" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
                </Row>

                <Row className="borderedRow">
                    <Col className="borderedCol">Scorching</Col>
                    <Col className="borderedCol">Scór-tching</Col>
                    <Col className="borderedCol">Escaldante</Col>
                    <AudioPlayerVocab text="Scorching" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
                </Row>

                <Row className="borderedRow1">
                    <Col className="borderedCol">Icy</Col>
                    <Col className="borderedCol">Ái-si</Col>
                    <Col className="borderedCol">Gélido</Col>
                    <AudioPlayerVocab text="Icy" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
                </Row>

                <Row className="borderedRow1">
                    <Col className="borderedCol">Hot</Col>
                    <Col className="borderedCol">Rót</Col>
                    <Col className="borderedCol">Quente</Col>
                    <AudioPlayerVocab text="Hot" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
                </Row>

                <Row className="borderedRow">
                    <Col className="borderedCol">Warm</Col>
                    <Col className="borderedCol">Uórm</Col>
                    <Col className="borderedCol">Morno</Col>
                    <AudioPlayerVocab text="Warm" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
                </Row>

                <Row className="borderedRow1">
                    <Col className="borderedCol">Cool</Col>
                    <Col className="borderedCol">Cúl</Col>
                    <Col className="borderedCol">Fresco</Col>
                    <AudioPlayerVocab text="Cool" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
                </Row>

                <Row className="borderedRow">
                    <Col className="borderedCol">Cold</Col>
                    <Col className="borderedCol">Côuld</Col>
                    <Col className="borderedCol">Frio</Col>
                    <AudioPlayerVocab text="Cold" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
                </Row>

                <Row className="borderedRow1">
                    <Col className="borderedCol">Freezing</Col>
                    <Col className="borderedCol">Frí-zing</Col>
                    <Col className="borderedCol">Congelante</Col>
                    <AudioPlayerVocab text="Freezing" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
                </Row>

                <Row className="borderedRow">
                    <Col className="borderedCol">Boiling</Col>
                    <Col className="borderedCol">Bói-ling</Col>
                    <Col className="borderedCol">Fervendo</Col>
                    <AudioPlayerVocab text="Boiling" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
                </Row>

                <Row className="borderedRow1">
                    <Col className="borderedCol">Chilly</Col>
                    <Col className="borderedCol">Tchí-li</Col>
                    <Col className="borderedCol">Friozinho</Col>
                    <AudioPlayerVocab text="Chilly" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
                </Row>

                <Row className="borderedRow">
                    <Col className="borderedCol">Scorching</Col>
                    <Col className="borderedCol">Scór-tching</Col>
                    <Col className="borderedCol">Escaldante</Col>
                    <AudioPlayerVocab text="Scorching" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
                </Row>

                <Row className="borderedRow1">
                    <Col className="borderedCol">Icy</Col>
                    <Col className="borderedCol">Ái-si</Col>
                    <Col className="borderedCol">Gélido</Col>
                    <AudioPlayerVocab text="Icy" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
                </Row>

                <Row className="borderedRow">
                    <Col className="borderedCol">Lukewarm</Col>
                    <Col className="borderedCol">Lú-kew-árm</Col>
                    <Col className="borderedCol">Morno</Col>
                    <AudioPlayerVocab text="Lukewarm" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
                </Row>

                <Row className="borderedRow1">
                    <Col className="borderedCol">Crisp</Col>
                    <Col className="borderedCol">Crisp</Col>
                    <Col className="borderedCol">Ameno</Col>
                    <AudioPlayerVocab text="Crisp" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
                </Row>

                <Row className="borderedRow">
                    <Col className="borderedCol">Steamy</Col>
                    <Col className="borderedCol">Stí-mi</Col>
                    <Col className="borderedCol">Vaporoso</Col>
                    <AudioPlayerVocab text="Steamy" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
                </Row>

                <Row className="borderedRow1">
                    <Col className="borderedCol">Balmy</Col>
                    <Col className="borderedCol">Bá-li</Col>
                    <Col className="borderedCol">Ameno (clima)</Col>
                    <AudioPlayerVocab text="Balmy" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
                </Row>

                <Row className="borderedRow">
                    <Col className="borderedCol">Nippy</Col>
                    <Col className="borderedCol">Ní-pi</Col>
                    <Col className="borderedCol">Frio</Col>
                    <AudioPlayerVocab text="Nippy" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
                </Row>

                <Row className="borderedRow1">
                    <Col className="borderedCol">Mild</Col>
                    <Col className="borderedCol">Máild</Col>
                    <Col className="borderedCol">Suave</Col>
                    <AudioPlayerVocab text="Mild" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
                </Row>

                <Row className="borderedRow">
                    <Col className="borderedCol">Bitter</Col>
                    <Col className="borderedCol">Bí-tur</Col>
                    <Col className="borderedCol">Amargo (muito frio)</Col>
                    <AudioPlayerVocab text="Bitter" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
                </Row>

                <Row className="borderedRow1">
                    <Col className="borderedCol">Sweltering</Col>
                    <Col className="borderedCol">Swé-lter-ing</Col>
                    <Col className="borderedCol">Sufocante</Col>
                    <AudioPlayerVocab text="Sweltering" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
                </Row>

                <Row className="borderedRow">
                    <Col className="borderedCol">Tropical</Col>
                    <Col className="borderedCol">Tró-pi-cal</Col>
                    <Col className="borderedCol">Tropical</Col>
                    <AudioPlayerVocab text="Tropical" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
                </Row>

                <Row className="borderedRow1">
                    <Col className="borderedCol">Tepid</Col>
                    <Col className="borderedCol">Té-pid</Col>
                    <Col className="borderedCol">Morno</Col>
                    <AudioPlayerVocab text="Tepid" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
                </Row>

      </Container>

      <Footer />
  </>
    );
}
