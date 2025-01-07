import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import { Helmet } from 'react-helmet-async';
import HeaderMenuTexto from "../../components/header-menu-texto";
import Logo from '../../components/logo';
import { Container, Col, Row, Accordion} from "react-bootstrap";
import Card from 'react-bootstrap/Card';

export default function Conversacao1() {
    return(
<>
<div>
<Helmet>
    <title>Expressões Populares</title>
  </Helmet> 
<Header />
<Logo />
<HeaderMenuTexto />

<Container>
      <Row>
        <Col className="coluna-texto1">
        <br /> 
        <h4 className="h5-conversa"><i><strong>Julie Encontra um Estrangeiro</strong></i>
        <br /> 
        <br /> 

<p><strong>Julie:</strong> Hello!</p>  
<p><strong>Julie:</strong> Olá!</p>
<br /> 

<p><strong>Foreigner:</strong> Hi! How are you?</p>  
<p><strong>Estrangeiro:</strong> Oi! Como você está?</p>
<br /> 

<p><strong>Julie:</strong> I'm good, thank you. And you?</p>  
<p><strong>Julie:</strong> Estou bem, obrigado. E você?</p>
<br /> 

<p><strong>Foreigner:</strong> I'm doing well. What’s your name?</p>  
<p><strong>Estrangeiro:</strong> Estou bem. Qual é o seu nome?</p>
<br /> 

<p><strong>Julie:</strong> My name is Julie. What’s yours?</p>  
<p><strong>Julie:</strong> Meu nome é Julie. E o seu?</p>
<br /> 

<p><strong>Foreigner:</strong> I’m Alex. Nice to meet you, Julie.</p>  
<p><strong>Estrangeiro:</strong> Eu sou Alex. Prazer em te conhecer, Julie.</p>
<br /> 

<p><strong>Julie:</strong> Nice to meet you too, Alex. Where are you from?</p>  
<p><strong>Julie:</strong> Prazer em te conhecer também, Alex. De onde você é?</p>
<br /> 

<p><strong>Foreigner:</strong> I’m from Canada. And you?</p>  
<p><strong>Estrangeiro:</strong> Eu sou do Canadá. E você?</p>
<br /> 

<p><strong>Julie:</strong> I’m from Brazil. What brings you here?</p>  
<p><strong>Julie:</strong> Eu sou do Brasil. O que te traz aqui?</p>
<br /> 

<p><strong>Foreigner:</strong> I’m here on vacation, exploring the city.</p>  
<p><strong>Estrangeiro:</strong> Estou aqui de férias, explorando a cidade.</p>
<br /> 

<p><strong>Julie:</strong> That’s great! Have you visited any places yet?</p>  
<p><strong>Julie:</strong> Que ótimo! Você já visitou algum lugar?</p>
<br /> 

<p><strong>Foreigner:</strong> Yes, I went to the beach yesterday. It was beautiful!</p>  
<p><strong>Estrangeiro:</strong> Sim, fui à praia ontem. Foi lindo!</p>
<br /> 

</h4>
</Col>
    </Row>
    </Container>


<Footer />
</div>
</>

    );
}
