import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import HeaderMenuVocabulario from "../../components/header-menu-vocabulario";
import Logo from "../../components/logo";
import { Container, Col, Row } from "react-bootstrap";
import { Helmet } from "react-helmet-async";

export default function Vocab1() {
    return(
<>  
<Helmet>
        <title>Números</title>
      </Helmet>
<Header /> 
<Logo /> 
<HeaderMenuVocabulario />
<div className="h1-titulo-da-pagina"> <h1 className="fw-bold h1-titulo-da-pagina"> Números </h1> </div>

<Container className="colunasVocabulario">
  <Row className="borderedRow1">
    <Col className="borderedCol header-col">Número</Col>
    <Col className="borderedCol header-col">Como soa</Col>
    <Col className="borderedCol header-col">Como se escreve</Col>
    <Col className="borderedCol header-col">Tradução</Col>
  </Row>
  <Row className="borderedRow">
    <Col className="borderedCol">0</Col>
    <Col className="borderedCol">Zirôu</Col>
    <Col className="borderedCol">Zero</Col>
    <Col className="borderedCol">Zero</Col>
  </Row>
  <Row className="borderedRow1">
    <Col className="borderedCol">1</Col>
    <Col className="borderedCol">Uâni</Col>
    <Col className="borderedCol">One</Col>
    <Col className="borderedCol">Um</Col>
  </Row>
  <Row className="borderedRow">
    <Col className="borderedCol">2</Col>
    <Col className="borderedCol">Tchû</Col>
    <Col className="borderedCol">Two</Col>
    <Col className="borderedCol">Dois</Col>
  </Row>
  <Row className="borderedRow1">
    <Col className="borderedCol">3</Col>
    <Col className="borderedCol">Trí</Col>
    <Col className="borderedCol">Three</Col>
    <Col className="borderedCol">Três</Col>
  </Row>
  <Row className="borderedRow">
    <Col className="borderedCol">4</Col>
    <Col className="borderedCol">Fô</Col>
    <Col className="borderedCol">Four</Col>
    <Col className="borderedCol">Quatro</Col>
  </Row>
  <Row className="borderedRow1">
    <Col className="borderedCol">5</Col>
    <Col className="borderedCol">Faive</Col>
    <Col className="borderedCol">Five</Col>
    <Col className="borderedCol">Cinco</Col>
  </Row>
  <Row className="borderedRow">
    <Col className="borderedCol">6</Col>
    <Col className="borderedCol">Sics</Col>
    <Col className="borderedCol">Six</Col>
    <Col className="borderedCol">Seis</Col>
  </Row>
  <Row className="borderedRow1">
    <Col className="borderedCol">7</Col>
    <Col className="borderedCol">Seven</Col>
    <Col className="borderedCol">Seven</Col>
    <Col className="borderedCol">Sete</Col>
  </Row>
  <Row className="borderedRow">
    <Col className="borderedCol">8</Col>
    <Col className="borderedCol">Eit</Col>
    <Col className="borderedCol">Eight</Col>
    <Col className="borderedCol">Oito</Col>
  </Row>
  <Row className="borderedRow1">
    <Col className="borderedCol">9</Col>
    <Col className="borderedCol">Nain</Col>
    <Col className="borderedCol">Nine</Col>
    <Col className="borderedCol">Nove</Col>
  </Row>
  <Row className="borderedRow">
    <Col className="borderedCol">10</Col>
    <Col className="borderedCol">Ten</Col>
    <Col className="borderedCol">Ten</Col>
    <Col className="borderedCol">Dez</Col>
  </Row>
  <Row className="borderedRow1">
    <Col className="borderedCol">11</Col>
    <Col className="borderedCol">Ilevn</Col>
    <Col className="borderedCol">Eleven</Col>
    <Col className="borderedCol">Onze</Col>
  </Row>
  <Row className="borderedRow">
    <Col className="borderedCol">12</Col>
    <Col className="borderedCol">Tuélv</Col>
    <Col className="borderedCol">Twelve</Col>
    <Col className="borderedCol">Doze</Col>
  </Row>
  <Row className="borderedRow1">
    <Col className="borderedCol">13</Col>
    <Col className="borderedCol">Tãrtín</Col>
    <Col className="borderedCol">Thirteen</Col>
    <Col className="borderedCol">Treze</Col>
  </Row>
  <Row className="borderedRow">
    <Col className="borderedCol">14</Col>
    <Col className="borderedCol">Fórtin</Col>
    <Col className="borderedCol">Fourteen</Col>
    <Col className="borderedCol">Catorze</Col>
  </Row>
  <Row className="borderedRow1">
    <Col className="borderedCol">15</Col>
    <Col className="borderedCol">Fiftin</Col>
    <Col className="borderedCol">Fifteen</Col>
    <Col className="borderedCol">Quinze</Col>
  </Row>
  <Row className="borderedRow">
    <Col className="borderedCol">16</Col>
    <Col className="borderedCol">Sikstin</Col>
    <Col className="borderedCol">Sixteen</Col>
    <Col className="borderedCol">Dezesseis</Col>
  </Row>
  <Row className="borderedRow1">
    <Col className="borderedCol">17</Col>
    <Col className="borderedCol">Seventin</Col>
    <Col className="borderedCol">Seventeen</Col>
    <Col className="borderedCol">Dezessete</Col>
  </Row>
  <Row className="borderedRow">
    <Col className="borderedCol">18</Col>
    <Col className="borderedCol">Eitín</Col>
    <Col className="borderedCol">Eighteen</Col>
    <Col className="borderedCol">Dezoito</Col>
  </Row>
  <Row className="borderedRow1">
    <Col className="borderedCol">19</Col>
    <Col className="borderedCol">Naintin</Col>
    <Col className="borderedCol">Nineteen</Col>
    <Col className="borderedCol">Dezenove</Col>
  </Row>
  <Row className="borderedRow">
    <Col className="borderedCol">20</Col>
    <Col className="borderedCol">Tuenti</Col>
    <Col className="borderedCol">Twenty</Col>
    <Col className="borderedCol">Vinte</Col>
  </Row>
  <Row className="borderedRow1">
    <Col className="borderedCol">21</Col>
    <Col className="borderedCol">Tuenti Uã</Col>
    <Col className="borderedCol">Twenty-One</Col>
    <Col className="borderedCol">Vinte e Um</Col>
  </Row>
  <Row className="borderedRow">
    <Col className="borderedCol">30</Col>
    <Col className="borderedCol">Tãrti</Col>
    <Col className="borderedCol">Thirty</Col>
    <Col className="borderedCol">Trinta</Col>
  </Row>
  <Row className="borderedRow1">
    <Col className="borderedCol">40</Col>
    <Col className="borderedCol">Fôrti</Col>
    <Col className="borderedCol">Forty</Col>
    <Col className="borderedCol">Quarenta</Col>
  </Row>
  <Row className="borderedRow">
    <Col className="borderedCol">50</Col>
    <Col className="borderedCol">Fifti</Col>
    <Col className="borderedCol">Fifty</Col>
    <Col className="borderedCol">Cinquenta</Col>
  </Row>
  <Row className="borderedRow1">
    <Col className="borderedCol">60</Col>
    <Col className="borderedCol">Siksti</Col>
    <Col className="borderedCol">Sixty</Col>
    <Col className="borderedCol">Sessenta</Col>
  </Row>
  <Row className="borderedRow">
    <Col className="borderedCol">70</Col>
    <Col className="borderedCol">Seventi</Col>
    <Col className="borderedCol">Seventy</Col>
    <Col className="borderedCol">Setenta</Col>
  </Row>
  <Row className="borderedRow1">
    <Col className="borderedCol">80</Col>
    <Col className="borderedCol">Eiti</Col>
    <Col className="borderedCol">Eighty</Col>
    <Col className="borderedCol">Oitenta</Col>
  </Row>
  <Row className="borderedRow">
    <Col className="borderedCol">90</Col>
    <Col className="borderedCol">Nainti</Col>
    <Col className="borderedCol">Ninety</Col>
    <Col className="borderedCol">Noventa</Col>
  </Row>
  <Row className="borderedRow1">
    <Col className="borderedCol">100</Col>
    <Col className="borderedCol">Uan Handred</Col>
    <Col className="borderedCol">One Hundred</Col>
    <Col className="borderedCol">Cem</Col>
  </Row>
  <Row className="borderedRow">
    <Col className="borderedCol">1,000</Col>
    <Col className="borderedCol">A/Uan Tausand</Col>
    <Col className="borderedCol">A/One Thousand</Col>
    <Col className="borderedCol">1.000 A / Mil</Col>
  </Row>
  <Row className="borderedRow1">
    <Col className="borderedCol">10,000</Col>
    <Col className="borderedCol">Ten Tausand</Col>
    <Col className="borderedCol">Ten Thousand</Col>
    <Col className="borderedCol">10.000 Dez Mil</Col>
  </Row>
  <Row className="borderedRow">
    <Col className="borderedCol">100,000</Col>
    <Col className="borderedCol">A/Uan Handred Tausand</Col>
    <Col className="borderedCol">A/One Hundred Thousand</Col>
    <Col className="borderedCol">100.000 A / Cem Mil</Col>
  </Row>
  <Row className="borderedRow1">
    <Col className="borderedCol">1,000,000</Col>
    <Col className="borderedCol">A/Uan Milion</Col>
    <Col className="borderedCol">A/One Million</Col>
    <Col className="borderedCol">1.000.000 A / Um Milhão</Col>
  </Row>
  <Row className="borderedRow">
    <Col className="borderedCol">1,000,000,000</Col>
    <Col className="borderedCol">A/Uan Bilion</Col>
    <Col className="borderedCol">A/One Billion</Col>
    <Col className="borderedCol">1.000.000.000 Um Bilhão</Col>
  </Row>

    </Container>



<Footer />
</>
    );
}
