import React from "react";
import Header from '../../../components/header';
import HeaderMenuTexto from '../../../components/header-menu-texto';
import Footer from "../../../components/footer";
import Logo from "../../../components/logo";
import { Container, Card, Col, Row, Accordion, Button} from "react-bootstrap";
import { Helmet } from 'react-helmet-async';
import RightNavBar from "../../../components/right-navbar";

export default function Agradecimento() {
    return (
<>
<div>
<Helmet>
    <title> Agradecimento</title>
  </Helmet> 
<Header />
<Logo />
<HeaderMenuTexto />


<Container>
      <Row>
        <Col className="coluna-texto1">
        <h2 className="h1-Texto-Inicial"> Frases Comuns de Agradecimento</h2> 
        <h4 className="h5-Textos">
      <p>  Formas simples e educadas de expressar gratidão em inglês, adequadas para diversas ocasiões. </p>    

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

<p>"Thanks so much!" <strong><i>(Muito obrigado!)</i></strong></p>  
<p>"Appreciate it!" <strong><i>(Valeu!)</i></strong></p>  
<p>"You're the best!" <strong><i>(Você é o melhor!)</i></strong></p>  
<p>"Big thanks!" <strong><i>(Grandes agradecimentos!)</i></strong></p>  
<p>"Thanks a ton!" <strong><i>(Obrigado de montão!)</i></strong></p>  
<p>"You're a lifesaver!" <strong><i>(Você salvou minha vida!)</i></strong></p>  
<p>"Much obliged!" <strong><i>(Muito grato!)</i></strong></p>  
<br />

     <h3 className="frases-comuns-h3"> <p> <strong> Formal: </strong> </p> </h3>
     <br />

<p>"Thank you kindly." <strong><i>(Agradeço gentilmente.)</i></strong></p>  
<p>"I am deeply grateful." <strong><i>(Sou profundamente grato.)</i></strong></p>  
<p>"I am truly thankful for your support." <strong><i>(Sou realmente grato pelo seu apoio.)</i></strong></p>  
<p>"I greatly appreciate your efforts." <strong><i>(Agradeço imensamente seus esforços.)</i></strong></p>  
<p>"Thank you for your kind assistance." <strong><i>(Obrigado por sua gentil assistência.)</i></strong></p>  
<p>"It means a lot to me." <strong><i>(Significa muito para mim.)</i></strong></p>  
<p>"I am indebted to you." <strong><i>(Estou em dívida com você.)</i></strong></p>  
<p>"I extend my heartfelt thanks." <strong><i>(Envio meus mais sinceros agradecimentos.)</i></strong></p>  


    </h4>
</Col>
      </Row>
    </Container>

<Footer />
</div>
</>

    );
}