import React from "react";
import Header from '../../../components/header';
import HeaderMenuTexto from '../../../components/header-menu-texto';
import Footer from "../../../components/footer";
import Logo from "../../../components/logo";
import { Container, Card, Col, Row, Accordion, Button} from "react-bootstrap";
import { Helmet } from 'react-helmet-async';
import RightNavBar from "../../../components/right-navbar";


export default function Despedidas() {
    return (
<>
<div>
<Helmet>
    <title>Frases para Despedidas</title>
  </Helmet> 
<Header />
<Logo />
<HeaderMenuTexto />


<Container>
      <Row>
        <Col className="coluna-texto1">
        <h2 className="h1-Texto-Inicial"> Frases Comuns de se Despedir</h2> 
        <h4 className="h5-Textos">
      <p>  Formas simples e educadas de se despedir em inglês, adequadas para diversas ocasiões. </p>    

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

 <p>"Bye!" <strong><i>(Tchau!)</i></strong></p> 
 <p>"See you!" <strong><i>(Até mais!)</i></strong></p> 
 <p>"Catch you later!" <strong><i>(Te vejo depois!)</i></strong></p>
  <p>"Take care!" <strong><i>(Se cuida!)</i></strong></p> 
  <p>"See ya!" <strong><i>(Até mais!)</i></strong></p> 
  <p>"Talk to you soon!" <strong><i>(Falo com você em breve!)</i></strong></p>
   <p>"Later!" <strong><i>(Até mais tarde!)</i></strong></p> 
  <p>"Have a good one!" <strong><i>(Tenha um bom dia!)</i></strong></p> <br />

     <h3 className="frases-comuns-h3"> <p> <strong> Formal: </strong> </p> </h3>
     <br />
     <p>"Goodbye!" <strong><i>(Adeus!)</i></strong></p>
      <p>"It was nice meeting you." <strong><i>(Foi um prazer conhecê-lo.)</i></strong></p>
       <p>"Take care of yourself." <strong><i>(Cuide de si mesmo.)</i></strong></p>
        <p>"I hope to see you again soon." <strong><i>(Espero vê-lo novamente em breve.)</i></strong></p>
         <p>"Farewell." <strong><i>(Adeus.)</i></strong></p>
          <p>"Safe travels!" <strong><i>(Boa viagem!)</i></strong></p>
          <p>"Until next time." <strong><i>(Até a próxima.)</i></strong></p> 
     <p>"I look forward to our next meeting." <strong><i>(Espero por nosso próximo encontro.)</i></strong></p>

    </h4>
</Col>
      </Row>
    </Container>

        
<Footer />
</div>
</>

    );
}