import React from "react";
import Header from '../../../components/header';
import HeaderMenuTexto from '../../../components/headers/header-menu-texto';
import Footer from "../../../components/footer";
import Logo from "../../../components/logo";
import { Container, Col, Row} from "react-bootstrap";
import { Helmet } from 'react-helmet-async';
import RightNavBar from "../../../components/right-navbar";

export default function DesejarSaude() {
    return (
<>
<div>
<Helmet>
    <title>Frases para Desejar Saúde</title>
  </Helmet> 
<Header />
<Logo />
<HeaderMenuTexto />


<Container>
      <Row>
        <Col className="coluna-texto1">
        <h2 className="h1-Texto-Inicial"> Frases Comuns para Desejar Saúde</h2> 
        <h4 className="h5-Textos">
      <p>  Formas simples e educadas para desejar saúde em inglês, adequadas para diversas ocasiões. </p>    

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
     <h3 className="frases-comuns-h3"> <p> <strong> Informal: </strong> </p> </h3>
 <br />

 <p>"Take care!" <strong><i>(Se cuida!)</i></strong></p>
  <p>"Get well soon!" <strong><i>(Melhore logo!)</i></strong></p> 
  <p>"Feel better!" <strong><i>(Se sinta melhor!)</i></strong></p> 
  <p>"Hang in there!" <strong><i>(Aguente firme!)</i></strong></p> 
  <p>"Rest up and recover!" <strong><i>(Descanse e se recupere!)</i></strong></p>
   <p>"Hope you’re back on your feet soon!" <strong><i>(Espero que você esteja de pé em breve!)</i></strong></p>
    <p>"Take it easy!" <strong><i>(Vá com calma!)</i></strong></p> 
    <p>"Sending you good vibes!" <strong><i>(Enviando boas energias para você!)</i></strong></p> <br />

     <h3 className="frases-comuns-h3"> <p> <strong> Formal: </strong> </p> </h3>
     <br />
   <p>"Wishing you a speedy recovery." <strong><i>(Desejando uma recuperação rápida.)</i></strong></p>
    <p>"Please take care of yourself." <strong><i>(Por favor, cuide de si mesmo.)</i></strong></p> 
    <p>"I hope you regain your health soon." <strong><i>(Espero que você recupere sua saúde em breve.)</i></strong></p> 
    <p>"You are in my thoughts and prayers." <strong><i>(Você está em meus pensamentos e orações.)</i></strong></p> 
    <p>"Best wishes for a full recovery." <strong><i>(Melhores votos de uma recuperação completa.)</i></strong></p> 
    <p>"May you be blessed with good health soon." <strong><i>(Que você seja abençoado com boa saúde em breve.)</i></strong></p>
     <p>"I hope you feel much better very soon." <strong><i>(Espero que você se sinta muito melhor em breve.)</i></strong></p>
    <p>"Wishing you strength and wellness during this time." <strong><i>(Desejando força e bem-estar durante este período.)</i></strong></p>

    </h4>
</Col>
      </Row>
    </Container>


        
<Footer />
</div>
</>

    );
}