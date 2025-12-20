import Header from "../../components/header";
import Footer from "../../components/footer";
import HeaderMenuVocabulario from "../../components/headers/header-menu-vocabulario";
import Logo from "../../components/logo";
import { Container, Col, Row } from "react-bootstrap";
import ExplicacaoVocab from "../../components/explicacao-vocab";
import { Helmet } from "react-helmet-async";
import AudioPlayerVocab from '../../components/audio-player-vocab';

export default function Vocab27() {
    return(
<>
<Helmet>
        <title>Dinheiro</title>
      </Helmet>
<Header /> 
<Logo /> 
<HeaderMenuVocabulario />
<div className="h1-titulo-da-pagina"> <h1 className="fw-bold h1-titulo-da-pagina">Dinheiro</h1> </div>

<ExplicacaoVocab />

<Container className="colunasVocabulario">

<Row className="borderedRow">
  <Col className="borderedCol header-col">Como se escreve</Col>
  <Col className="borderedCol header-col">Como sôa</Col>
  <Col className="borderedCol header-col">Tradução</Col>
</Row>
<Row className="borderedRow1">
        <Col className="borderedCol">Money</Col>
        <Col className="borderedCol">Mâni</Col>
        <Col className="borderedCol">Dinheiro</Col>
        <AudioPlayerVocab
          text="Money"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Dollar</Col>
        <Col className="borderedCol">Dólêr</Col>
        <Col className="borderedCol">Dólar</Col>
        <AudioPlayerVocab
          text="Dollar"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Cent</Col>
        <Col className="borderedCol">Sént</Col>
        <Col className="borderedCol">Centavo</Col>
        <AudioPlayerVocab
          text="Cent"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Cash</Col>
        <Col className="borderedCol">Késh</Col>
        <Col className="borderedCol">Dinheiro em espécie</Col>
        <AudioPlayerVocab
          text="Cash"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Credit Card</Col>
        <Col className="borderedCol">Krédit Kárd</Col>
        <Col className="borderedCol">Cartão de crédito</Col>
        <AudioPlayerVocab
          text="Credit Card"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Bank</Col>
        <Col className="borderedCol">Bénk</Col>
        <Col className="borderedCol">Banco</Col>
        <AudioPlayerVocab
          text="Bank"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">ATM</Col>
        <Col className="borderedCol">Êi-Tí-Ém</Col>
        <Col className="borderedCol">Caixa eletrônico</Col>
        <AudioPlayerVocab
          text="ATM"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Price</Col>
        <Col className="borderedCol">Práis</Col>
        <Col className="borderedCol">Preço</Col>
        <AudioPlayerVocab
          text="Price"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Change</Col>
        <Col className="borderedCol">Chêinj</Col>
        <Col className="borderedCol">Troco</Col>
        <AudioPlayerVocab
          text="Change"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Receipt</Col>
        <Col className="borderedCol">Risít</Col>
        <Col className="borderedCol">Recibo</Col>
        <AudioPlayerVocab
          text="Receipt"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow1">
        <Col className="borderedCol">Wallet</Col>
        <Col className="borderedCol">Wólêt</Col>
        <Col className="borderedCol">Carteira</Col>
        <AudioPlayerVocab
          text="Wallet"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>
      <Row className="borderedRow">
        <Col className="borderedCol">Coin</Col>
        <Col className="borderedCol">Kóin</Col>
        <Col className="borderedCol">Moeda</Col>
        <AudioPlayerVocab
          text="Coin"
          voiceName="Microsoft Jenny Online (Natural) - English (United States)"
        />
      </Row>

    </Container>

<Footer />
</>
    );
}