import React from "react";
import Header from '../../../components/header';
import HeaderMenuTexto from '../../../components/headers/header-menu-texto';
import Footer from "../../../components/footer";
import Logo from "../../../components/logo";
import { Container,  Col, Row,} from "react-bootstrap";
import { Helmet } from 'react-helmet-async';
import RightNavBar from "../../../components/right-navbar";


export default function PedirDesculpas() {
    return (
<>
<div>
<Helmet>
    <title>Frases para Pedir Desculpas</title>
  </Helmet> 
<Header />
<Logo />
<HeaderMenuTexto />

<Container>
      <Row>
        <Col className="coluna-texto1">
        <h2 className="h1-Texto-Inicial"> Frases para Pedir Desculpas</h2> 
        <h4 className="h5-Textos">
      <p>  Aprenda a pedir desculpas de forma educada e natural.</p>    

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

 <p>"Sorry!" <strong><i>(Desculpa!)</i></strong></p> 
 <p>"My bad!" <strong><i>(Foi mal!)</i></strong></p> 
 <p>"Oops, my mistake!" <strong><i>(Ops, meu erro!)</i></strong></p> 
 <p>"I didn’t mean to!" <strong><i>(Eu não quis fazer isso!)</i></strong></p> 
 <p>"I messed up." <strong><i>(Eu errei.)</i></strong></p> 
 <p>"Please forgive me!" <strong><i>(Por favor, me perdoe!)</i></strong></p> 
 <p>"I wasn’t thinking." <strong><i>(Eu não estava pensando.)</i></strong></p>
  <p>"Totally my fault!" <strong><i>(Totalmente minha culpa!)</i></strong></p> <br />

     <h3 className="frases-comuns-h3"> <p> <strong> Formal: </strong> </p> </h3>
     <br />
    <p>"I sincerely apologize." <strong><i>(Eu peço desculpas sinceramente.)</i></strong></p> 
    <p>"Please accept my apologies." <strong><i>(Por favor, aceite minhas desculpas.)</i></strong></p> 
    <p>"I deeply regret my actions." <strong><i>(Eu lamento profundamente minhas ações.)</i></strong></p> 
    <p>"I am terribly sorry for the inconvenience." <strong><i>(Sinto muitíssimo pelo inconveniente.)</i></strong></p> 
    <p>"I owe you an apology." <strong><i>(Eu devo a você um pedido de desculpas.)</i></strong></p> 
    <p>"I take full responsibility for this." <strong><i>(Eu assumo total responsabilidade por isso.)</i></strong></p> 
    <p>"I apologize for any misunderstanding." <strong><i>(Peço desculpas por qualquer mal-entendido.)</i></strong></p>
     <p>"Please forgive me for my oversight." <strong><i>(Por favor, me perdoe pela minha falha.)</i></strong></p>
     
    </h4>
</Col>
      </Row>
    </Container>


        
<Footer />
</div>
</>

    );
}