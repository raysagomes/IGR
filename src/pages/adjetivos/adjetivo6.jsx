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
          <title>Velocidade</title>
      </Helmet>
      <Header />
      <Logo />
      <HeaderMenuVocabulario />
      <div className="h1-titulo-da-pagina">
          <h1 className="fw-bold h1-titulo-da-pagina">Velocidade</h1>
      </div>

      <ExplicacaoVocab />

      <Container className="colunasVocabulario">
      
      <Row className="borderedRow1">
                    <Col className="borderedCol">Fast</Col>
                    <Col className="borderedCol">Fást</Col>
                    <Col className="borderedCol">Rápido</Col>
                    <AudioPlayerVocab text="Fast" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
                </Row>

                <Row className="borderedRow">
                    <Col className="borderedCol">Quick</Col>
                    <Col className="borderedCol">Kwik</Col>
                    <Col className="borderedCol">Rápido</Col>
                    <AudioPlayerVocab text="Quick" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
                </Row>

                <Row className="borderedRow1">
                    <Col className="borderedCol">Speedy</Col>
                    <Col className="borderedCol">Spí-di</Col>
                    <Col className="borderedCol">Veloz</Col>
                    <AudioPlayerVocab text="Speedy" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
                </Row>

                <Row className="borderedRow">
                    <Col className="borderedCol">Rapid</Col>
                    <Col className="borderedCol">Ráp-id</Col>
                    <Col className="borderedCol">Rápido</Col>
                    <AudioPlayerVocab text="Rapid" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
                </Row>

                <Row className="borderedRow1">
                    <Col className="borderedCol">Brisk</Col>
                    <Col className="borderedCol">Brisk</Col>
                    <Col className="borderedCol">Ágil, rápido</Col>
                    <AudioPlayerVocab text="Brisk" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
                </Row>

                <Row className="borderedRow">
                    <Col className="borderedCol">Hasty</Col>
                    <Col className="borderedCol">Heis-ti</Col>
                    <Col className="borderedCol">Apresado</Col>
                    <AudioPlayerVocab text="Hasty" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
                </Row>

                <Row className="borderedRow1">
                    <Col className="borderedCol">Fleet</Col>
                    <Col className="borderedCol">Flít</Col>
                    <Col className="borderedCol">Ágil, rápido</Col>
                    <AudioPlayerVocab text="Fleet" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
                </Row>

                <Row className="borderedRow">
                    <Col className="borderedCol">Slow</Col>
                    <Col className="borderedCol">Slôu</Col>
                    <Col className="borderedCol">Lento</Col>
                    <AudioPlayerVocab text="Slow" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
                </Row>

                <Row className="borderedRow1">
                    <Col className="borderedCol">Sluggish</Col>
                    <Col className="borderedCol">Slâg-ish</Col>
                    <Col className="borderedCol">Lento, preguiçoso</Col>
                    <AudioPlayerVocab text="Sluggish" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
                </Row>

                <Row className="borderedRow">
                    <Col className="borderedCol">Leisurely</Col>
                    <Col className="borderedCol">Lí-zhur-li</Col>
                    <Col className="borderedCol">Lento, sossegado</Col>
                    <AudioPlayerVocab text="Leisurely" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
                </Row>

                <Row className="borderedRow1">
                    <Col className="borderedCol">Unhurried</Col>
                    <Col className="borderedCol">Ân-hár-ried</Col>
                    <Col className="borderedCol">Sem pressa</Col>
                    <AudioPlayerVocab text="Unhurried" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
                </Row>

                <Row className="borderedRow">
                    <Col className="borderedCol">Tardy</Col>
                    <Col className="borderedCol">Tár-di</Col>
                    <Col className="borderedCol">Tardio</Col>
                    <AudioPlayerVocab text="Tardy" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
                </Row>

                <Row className="borderedRow1">
                    <Col className="borderedCol">Creeping</Col>
                    <Col className="borderedCol">Crí-ping</Col>
                    <Col className="borderedCol">Arrastando, muito lento</Col>
                    <AudioPlayerVocab text="Creeping" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
                </Row>

                <Row className="borderedRow">
                    <Col className="borderedCol">Snail-like</Col>
                    <Col className="borderedCol">Snél-like</Col>
                    <Col className="borderedCol">Lento como uma lesma</Col>
                    <AudioPlayerVocab text="Snail-like" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
                </Row>

                <Row className="borderedRow1">
                    <Col className="borderedCol">Swift</Col>
                    <Col className="borderedCol">Swíft</Col>
                    <Col className="borderedCol">Veloz, rápido</Col>
                    <AudioPlayerVocab text="Swift" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
                </Row>

                <Row className="borderedRow">
                    <Col className="borderedCol">Nimble</Col>
                    <Col className="borderedCol">Ní-mbl</Col>
                    <Col className="borderedCol">Ágil</Col>
                    <AudioPlayerVocab text="Nimble" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
                </Row>

                <Row className="borderedRow1">
                    <Col className="borderedCol">Zooming</Col>
                    <Col className="borderedCol">Zú-ming</Col>
                    <Col className="borderedCol">Zumbindo, muito rápido</Col>
                    <AudioPlayerVocab text="Zooming" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
                </Row>

                <Row className="borderedRow">
                    <Col className="borderedCol">Brisk</Col>
                    <Col className="borderedCol">Brisk</Col>
                    <Col className="borderedCol">Veloz, ágil</Col>
                    <AudioPlayerVocab text="Brisk" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
                </Row>

      </Container>

      <Footer />
  </>
    );
}
