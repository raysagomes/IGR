import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import HeaderMenuVocabulario from "../../components/headers/header-menu-vocabulario";
import Logo from "../../components/logo";
import { Container, Col, Row } from "react-bootstrap";
import ExplicacaoVocab from "../../components/explicacao-vocab";
import { Helmet } from "react-helmet-async";
import AudioPlayerVocab from '../../components/audio-player-vocab';

export default function VocabAdjetivo4() {
    return(
      <>
      <Helmet>
          <title>Adjetivos de Sentimentos</title>
      </Helmet>
      <Header />
      <Logo />
      <HeaderMenuVocabulario />
      <div className="h1-titulo-da-pagina">
          <h1 className="fw-bold h1-titulo-da-pagina">Adjetivos de Sentimentos</h1>
      </div>

      <ExplicacaoVocab />

      <Container className="colunasVocabulario">
          <Row className="borderedRow">
              <Col className="borderedCol header-col">Como se escreve</Col>
              <Col className="borderedCol header-col">Como sôa</Col>
              <Col className="borderedCol header-col">Tradução</Col>
          </Row>

          <Row className="borderedRow">
              <Col className="borderedCol">Happy</Col>
              <Col className="borderedCol">Répî</Col>
              <Col className="borderedCol">Feliz</Col>
              <AudioPlayerVocab text="Happy" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
          </Row>

          <Row className="borderedRow1">
              <Col className="borderedCol">Sad</Col>
              <Col className="borderedCol">Séd</Col>
              <Col className="borderedCol">Triste</Col>
              <AudioPlayerVocab text="Sad" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
          </Row>

          <Row className="borderedRow">
              <Col className="borderedCol">Angry</Col>
              <Col className="borderedCol">Êngri</Col>
              <Col className="borderedCol">Bravo</Col>
              <AudioPlayerVocab text="Angry" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
          </Row>

          <Row className="borderedRow1">
              <Col className="borderedCol">Excited</Col>
              <Col className="borderedCol">Êk-sáitêd</Col>
              <Col className="borderedCol">Animado</Col>
              <AudioPlayerVocab text="Excited" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
          </Row>

          <Row className="borderedRow">
              <Col className="borderedCol">Nervous</Col>
              <Col className="borderedCol">Nârvâs</Col>
              <Col className="borderedCol">Nervoso</Col>
              <AudioPlayerVocab text="Nervous" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
          </Row>

          <Row className="borderedRow1">
              <Col className="borderedCol">Scared</Col>
              <Col className="borderedCol">Skérd</Col>
              <Col className="borderedCol">Assustado</Col>
              <AudioPlayerVocab text="Scared" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
          </Row>

          <Row className="borderedRow">
              <Col className="borderedCol">Proud</Col>
              <Col className="borderedCol">Práud</Col>
              <Col className="borderedCol">Orgulhoso</Col>
              <AudioPlayerVocab text="Proud" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
          </Row>

          <Row className="borderedRow1">
              <Col className="borderedCol">Lonely</Col>
              <Col className="borderedCol">Lôunlî</Col>
              <Col className="borderedCol">Solitário</Col>
              <AudioPlayerVocab text="Lonely" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
          </Row>

          <Row className="borderedRow">
              <Col className="borderedCol">Confused</Col>
              <Col className="borderedCol">Cân-fiuzd</Col>
              <Col className="borderedCol">Confuso</Col>
              <AudioPlayerVocab text="Confused" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
          </Row>

          <Row className="borderedRow1">
              <Col className="borderedCol">Relaxed</Col>
              <Col className="borderedCol">Ri-lákst</Col>
              <Col className="borderedCol">Relaxado</Col>
              <AudioPlayerVocab text="Relaxed" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
          </Row>

          <Row className="borderedRow">
              <Col className="borderedCol">Bored</Col>
              <Col className="borderedCol">Bórd</Col>
              <Col className="borderedCol">Entediado</Col>
              <AudioPlayerVocab text="Bored" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
          </Row>

          {/* Mais adjetivos adicionados aqui */}
          <Row className="borderedRow1">
              <Col className="borderedCol">Anxious</Col>
              <Col className="borderedCol">Ênk-shâs</Col>
              <Col className="borderedCol">Ansioso</Col>
              <AudioPlayerVocab text="Anxious" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
          </Row>

          <Row className="borderedRow">
              <Col className="borderedCol">Hopeful</Col>
              <Col className="borderedCol">Rôup-fâl</Col>
              <Col className="borderedCol">Esperançoso</Col>
              <AudioPlayerVocab text="Hopeful" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
          </Row>

          <Row className="borderedRow1">
              <Col className="borderedCol">Jealous</Col>
              <Col className="borderedCol">Djélâs</Col>
              <Col className="borderedCol">Com ciúmes</Col>
              <AudioPlayerVocab text="Jealous" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
          </Row>

          <Row className="borderedRow">
              <Col className="borderedCol">Grateful</Col>
              <Col className="borderedCol">Greit-fâl</Col>
              <Col className="borderedCol">Grato</Col>
              <AudioPlayerVocab text="Grateful" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
          </Row>

          <Row className="borderedRow1">
              <Col className="borderedCol">Ashamed</Col>
              <Col className="borderedCol">â-shêimd</Col>
              <Col className="borderedCol">Envergonhado</Col>
              <AudioPlayerVocab text="Ashamed" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
          </Row>

          <Row className="borderedRow">
              <Col className="borderedCol">Embarrassed</Col>
              <Col className="borderedCol">Êm-bérâst</Col>
              <Col className="borderedCol">Constrangido</Col>
              <AudioPlayerVocab text="Embarrassed" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
          </Row>

          <Row className="borderedRow1">
              <Col className="borderedCol">Guilty</Col>
              <Col className="borderedCol">Guílti</Col>
              <Col className="borderedCol">Culpado</Col>
              <AudioPlayerVocab text="Guilty" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
          </Row>

          <Row className="borderedRow">
              <Col className="borderedCol">Frustrated</Col>
              <Col className="borderedCol">Frâs-trêi-têd</Col>
              <Col className="borderedCol">Frustrado</Col>
              <AudioPlayerVocab text="Frustrated" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
          </Row>

          <Row className="borderedRow1">
                    <Col className="borderedCol">Overwhelmed</Col>
                    <Col className="borderedCol">Ôuvâr-uélmd</Col>
                    <Col className="borderedCol">Sobrecarregado</Col>
                    <AudioPlayerVocab text="Overwhelmed" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
                </Row>

                <Row className="borderedRow">
                    <Col className="borderedCol">Content</Col>
                    <Col className="borderedCol">Cân-tênt</Col>
                    <Col className="borderedCol">Satisfeito</Col>
                    <AudioPlayerVocab text="Content" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
                </Row>

                <Row className="borderedRow1">
                    <Col className="borderedCol">Amazed</Col>
                    <Col className="borderedCol">â-mêizd</Col>
                    <Col className="borderedCol">Maravilhado</Col>
                    <AudioPlayerVocab text="Amazed" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
                </Row>

                <Row className="borderedRow">
                    <Col className="borderedCol">Heartbroken</Col>
                    <Col className="borderedCol">Hárt-brôukân</Col>
                    <Col className="borderedCol">De coração partido</Col>
                    <AudioPlayerVocab text="Heartbroken" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
                </Row>

                <Row className="borderedRow1">
                    <Col className="borderedCol">Hopeful</Col>
                    <Col className="borderedCol">Rôup-fâl</Col>
                    <Col className="borderedCol">Esperançoso</Col>
                    <AudioPlayerVocab text="Hopeful" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
                </Row>

                <Row className="borderedRow">
                    <Col className="borderedCol">Surprised</Col>
                    <Col className="borderedCol">Sâr-práizd</Col>
                    <Col className="borderedCol">Surpreso</Col>
                    <AudioPlayerVocab text="Surprised" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
                </Row>

                <Row className="borderedRow1">
                    <Col className="borderedCol">Disappointed</Col>
                    <Col className="borderedCol">Dî-sâ-póin-têd</Col>
                    <Col className="borderedCol">Decepcionado</Col>
                    <AudioPlayerVocab text="Disappointed" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
                </Row>

                <Row className="borderedRow">
                    <Col className="borderedCol">Grumpy</Col>
                    <Col className="borderedCol">Grâmpî</Col>
                    <Col className="borderedCol">Mal-humorado</Col>
                    <AudioPlayerVocab text="Grumpy" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
                </Row>

                <Row className="borderedRow1">
                    <Col className="borderedCol">Optimistic</Col>
                    <Col className="borderedCol">Óp-tê-mîstic</Col>
                    <Col className="borderedCol">Otimista</Col>
                    <AudioPlayerVocab text="Optimistic" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
                </Row>

                <Row className="borderedRow">
                    <Col className="borderedCol">Pessimistic</Col>
                    <Col className="borderedCol">Pésê-mîstic</Col>
                    <Col className="borderedCol">Pessimista</Col>
                    <AudioPlayerVocab text="Pessimistic" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
                </Row>
      </Container>

      <Footer />
  </>
    );
}
