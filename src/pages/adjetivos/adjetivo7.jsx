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
          <title>Condição</title>
      </Helmet>
      <Header />
      <Logo />
      <HeaderMenuVocabulario />
      <div className="h1-titulo-da-pagina">
          <h1 className="fw-bold h1-titulo-da-pagina">Condição</h1>
      </div>

      <ExplicacaoVocab />

      <Container className="colunasVocabulario">
      
      <Row className="borderedRow1">
                    <Col className="borderedCol">Healthy</Col>
                    <Col className="borderedCol">Hé-lthi</Col>
                    <Col className="borderedCol">Saudável</Col>
                    <AudioPlayerVocab text="Healthy" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
                </Row>

                <Row className="borderedRow">
                    <Col className="borderedCol">Fit</Col>
                    <Col className="borderedCol">Fít</Col>
                    <Col className="borderedCol">Em forma</Col>
                    <AudioPlayerVocab text="Fit" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
                </Row>

                <Row className="borderedRow1">
                    <Col className="borderedCol">Unwell</Col>
                    <Col className="borderedCol">Ân-wél</Col>
                    <Col className="borderedCol">Indisposto</Col>
                    <AudioPlayerVocab text="Unwell" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
                </Row>

                <Row className="borderedRow">
                    <Col className="borderedCol">Sick</Col>
                    <Col className="borderedCol">Sik</Col>
                    <Col className="borderedCol">Doente</Col>
                    <AudioPlayerVocab text="Sick" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
                </Row>

                <Row className="borderedRow1">
                    <Col className="borderedCol">Ill</Col>
                    <Col className="borderedCol">Ihl</Col>
                    <Col className="borderedCol">Mal</Col>
                    <AudioPlayerVocab text="Ill" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
                </Row>

                <Row className="borderedRow">
                    <Col className="borderedCol">Broken</Col>
                    <Col className="borderedCol">Brô-kên</Col>
                    <Col className="borderedCol">Quebrado</Col>
                    <AudioPlayerVocab text="Broken" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
                </Row>

                <Row className="borderedRow1">
                    <Col className="borderedCol">Damaged</Col>
                    <Col className="borderedCol">Dá-mijd</Col>
                    <Col className="borderedCol">Danificado</Col>
                    <AudioPlayerVocab text="Damaged" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
                </Row>

                <Row className="borderedRow">
                    <Col className="borderedCol">Tired</Col>
                    <Col className="borderedCol">Tá-ierd</Col>
                    <Col className="borderedCol">Cansado</Col>
                    <AudioPlayerVocab text="Tired" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
                </Row>

                <Row className="borderedRow1">
                    <Col className="borderedCol">Energetic</Col>
                    <Col className="borderedCol">Ê-nêr-djê-tik</Col>
                    <Col className="borderedCol">Energético</Col>
                    <AudioPlayerVocab text="Energetic" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
                </Row>

                <Row className="borderedRow">
                    <Col className="borderedCol">Clean</Col>
                    <Col className="borderedCol">Kliin</Col>
                    <Col className="borderedCol">Limpo</Col>
                    <AudioPlayerVocab text="Clean" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
                </Row>

                <Row className="borderedRow1">
                    <Col className="borderedCol">Dirty</Col>
                    <Col className="borderedCol">Dér-ti</Col>
                    <Col className="borderedCol">Sujo</Col>
                    <AudioPlayerVocab text="Dirty" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
                </Row>

                <Row className="borderedRow">
                    <Col className="borderedCol">Shiny</Col>
                    <Col className="borderedCol">Shái-ni</Col>
                    <Col className="borderedCol">Brilhante</Col>
                    <AudioPlayerVocab text="Shiny" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
                </Row>

                <Row className="borderedRow1">
                    <Col className="borderedCol">Rusty</Col>
                    <Col className="borderedCol">Rá-sti</Col>
                    <Col className="borderedCol">Enferrujado</Col>
                    <AudioPlayerVocab text="Rusty" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
                </Row>

                <Row className="borderedRow">
                    <Col className="borderedCol">New</Col>
                    <Col className="borderedCol">Nú</Col>
                    <Col className="borderedCol">Novo</Col>
                    <AudioPlayerVocab text="New" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
                </Row>

                <Row className="borderedRow1">
                    <Col className="borderedCol">Old</Col>
                    <Col className="borderedCol">Ôld</Col>
                    <Col className="borderedCol">Antigo</Col>
                    <AudioPlayerVocab text="Old" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
                </Row>

                <Row className="borderedRow">
                    <Col className="borderedCol">Satisfactory</Col>
                    <Col className="borderedCol">Sát-is-fák-to-ri</Col>
                    <Col className="borderedCol">Satisfatório</Col>
                    <AudioPlayerVocab text="Satisfactory" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
                </Row>

                <Row className="borderedRow1">
                    <Col className="borderedCol">Unsatisfactory</Col>
                    <Col className="borderedCol">Ân-sát-is-fá-kto-ri</Col>
                    <Col className="borderedCol">Insatisfatório</Col>
                    <AudioPlayerVocab text="Unsatisfactory" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
                </Row>

                <Row className="borderedRow">
                    <Col className="borderedCol">Ideal</Col>
                    <Col className="borderedCol">Aí-dê-al</Col>
                    <Col className="borderedCol">Ideal</Col>
                    <AudioPlayerVocab text="Ideal" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
                </Row>

                <Row className="borderedRow1">
                    <Col className="borderedCol">Imperfect</Col>
                    <Col className="borderedCol">Im-pér-fekt</Col>
                    <Col className="borderedCol">Imperfeito</Col>
                    <AudioPlayerVocab text="Imperfect" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
                </Row>

                <Row className="borderedRow">
                    <Col className="borderedCol">Stable</Col>
                    <Col className="borderedCol">Stêi-bul</Col>
                    <Col className="borderedCol">Estável</Col>
                    <AudioPlayerVocab text="Stable" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
                </Row>

                <Row className="borderedRow1">
                    <Col className="borderedCol">Unstable</Col>
                    <Col className="borderedCol">Ân-stêi-bul</Col>
                    <Col className="borderedCol">Instável</Col>
                    <AudioPlayerVocab text="Unstable" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
                </Row>

                <Row className="borderedRow">
                    <Col className="borderedCol">Dirty</Col>
                    <Col className="borderedCol">Dért-i</Col>
                    <Col className="borderedCol">Sujo</Col>
                    <AudioPlayerVocab text="Dirty" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
                </Row>

                <Row className="borderedRow1">
                    <Col className="borderedCol">Clean</Col>
                    <Col className="borderedCol">Kliin</Col>
                    <Col className="borderedCol">Limpo</Col>
                    <AudioPlayerVocab text="Clean" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
                </Row>

      </Container>

      <Footer />
  </>
    );
}
