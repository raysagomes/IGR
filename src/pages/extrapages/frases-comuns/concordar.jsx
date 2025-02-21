import React from "react";
import Header from '../../../components/header';
import HeaderMenuTexto from '../../../components/headers/header-menu-texto';
import Footer from "../../../components/footer";
import Logo from "../../../components/logo";
import { Container, Col, Row} from "react-bootstrap";
import { Helmet } from 'react-helmet-async';
import RightNavBar from "../../../components/right-navbar";

export default function FrasesConcordar() {
    return (
<>
<div>
<Helmet>
    <title>Frases para Concordar e Discordar</title>
  </Helmet> 
<Header />
<Logo />
<HeaderMenuTexto />


<Container>
      <Row>
        <Col className="coluna-texto1">
        <h2 className="h1-Texto-Inicial"> Frases para Concordar e Discordar</h2> 
        <h4 className="h5-Textos">
      <p>  Aprenda a expressar concordância ou discordância de forma educada e natural.</p>    

    </h4>
</Col>
<Col xs={12} md={3} className="extra-pagina-de-textos d-flex flex-column align-items-end margin-20-fim">
    <RightNavBar />
    </Col>
      </Row>
    </Container>

        
<Container>
      <Row>
        <Col className="coluna-texto1">
        <h4 className="h5-Textos">
        <h3 className="frases-comuns-h3"> <p> <strong> Concordar </strong> </p> </h3>
        <br />

     <h4 className="frases-comuns-h3"> <p> <strong> Informal: </strong> </p> </h4>
 <br />

 <p>"I agree." <strong><i>(Eu concordo.)</i></strong></p> 
 <p>"Exactly!" <strong><i>(Exatamente!)</i></strong></p>
  <p>"Absolutely!" <strong><i>(Com certeza!)</i></strong></p>
   <p>"You're right." <strong><i>(Você está certo.)</i></strong></p> 
   <p>"That's true." <strong><i>(Isso é verdade.)</i></strong></p> 
   <p>"I couldn't agree more." <strong><i>(Eu não poderia concordar mais.)</i></strong></p>
    <p>"You're absolutely right." <strong><i>(Você está absolutamente certo.)</i></strong></p>
    <p>"I'm with you on that." <strong><i>(Estou com você nisso.)</i></strong></p>
    <br />

     <h3 className="frases-comuns-h3"> <p> <strong> Formal: </strong> </p> </h3>
     <br />
     <p>"I completely agree." <strong><i>(Eu concordo completamente.)</i></strong></p>
      <p>"You're absolutely correct." <strong><i>(Você está absolutamente correto.)</i></strong></p> 
      <p>"I share the same opinion." <strong><i>(Eu compartilho da mesma opinião.)</i></strong></p>
       <p>"I couldn't have said it better." <strong><i>(Eu não poderia ter dito melhor.)</i></strong></p>
        <p>"That's a valid point." <strong><i>(Isso é um ponto válido.)</i></strong></p> 
        <p>"I agree wholeheartedly." <strong><i>(Eu concordo de todo o coração.)</i></strong></p>

    </h4>
</Col>
      </Row>
    </Container>

        
<Footer />
</div>
</>

    );
}