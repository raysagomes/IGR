import React from "react";
import Header from '../../../components/header';
import HeaderMenuTexto from '../../../components/headers/header-menu-texto';
import Footer from "../../../components/footer";
import Logo from "../../../components/logo";
import { Container, Col, Row} from "react-bootstrap";
import { Helmet } from 'react-helmet-async';
import RightNavBar from "../../../components/right-navbar";

export default function Saudacoes() {
    return (
<>
<div>
<Helmet>
    <title>Frases para Saudações</title>
  </Helmet> 
<Header />
<Logo />
<HeaderMenuTexto />


<Container>
      <Row>
        <Col className="coluna-texto1">
        <h2 className="h1-Texto-Inicial"> Frases para Saudações</h2> 
        <h4 className="h5-Textos">
      <p>  Aprenda frases de saudação de forma educada e natural.</p>    

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
        <br />

     <h4 className="frases-comuns-h3"> <p> <strong> Informal: </strong> </p> </h4>
 <br />
 <p>"Hi!" <strong><i>(Oi!)</i></strong></p>
  <p>"Hello!" <strong><i>(Olá!)</i></strong></p> 
  <p>"Hey there!" <strong><i>(E aí!)</i></strong></p>
   <p>"What’s up?" <strong><i>(Tudo bem?)</i></strong></p>
    <p>"How’s it going?" <strong><i>(Como vai?)</i></strong></p> 
    <p>"Good to see you!" <strong><i>(Bom te ver!)</i></strong></p>
     <p>"Hey, how are things?" <strong><i>(Oi, como estão as coisas?)</i></strong></p>
      <p>"Yo!" <strong><i>(E aí!)</i></strong></p> <br />

     <h3 className="frases-comuns-h3"> <p> <strong> Formal: </strong> </p> </h3>
     <br />
     <p>"Good morning!" <strong><i>(Bom dia!)</i></strong></p> <p>"Good afternoon!" <strong><i>(Boa tarde!)</i></strong></p> <p>"Good evening!" <strong><i>(Boa noite!)</i></strong></p> <p>"It’s a pleasure to meet you." <strong><i>(É um prazer conhecê-lo.)</i></strong></p> <p>"How do you do?" <strong><i>(Como vai?)</i></strong></p> <p>"I hope you’re doing well." <strong><i>(Espero que você esteja bem.)</i></strong></p> <p>"Nice to meet you." <strong><i>(Prazer em conhecê-lo.)</i></strong></p> <p>"I’m pleased to see you." <strong><i>(Fico feliz em vê-lo.)</i></strong></p>
     
     </h4>
</Col>
      </Row>
    </Container>
        
<Footer />
</div>
</>

    );
}