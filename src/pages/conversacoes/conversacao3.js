import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import { Helmet } from 'react-helmet-async';
import HeaderMenuTexto from "../../components/header-menu-texto";
import Logo from '../../components/logo';
import { Container, Col, Row, Accordion} from "react-bootstrap";
import Card from 'react-bootstrap/Card';


export default function Conversacao3() {
    return(
<>
<div>
<Helmet>
    <title>Karen e o Restaurante</title>
  </Helmet> 
<Header />
<Logo />
<HeaderMenuTexto />


<Container>
  <Row>
    <Col className="coluna-texto1">
      <br /> 
      <h4 className="h5-conversa"><i><strong>Karen e o Restaurante</strong></i>
      <br /> 
      <br /> 

      <p><strong>Karen:</strong> Hi, do you have a table for two?</p>  
      <p><strong>Karen:</strong> Oi, vocês têm uma mesa para duas pessoas?</p>
      <br /> 

      <p><strong>Waiter:</strong> Yes, we do. Right this way, please.</p>  
      <p><strong>Garçom:</strong> Sim, temos. Por aqui, por favor.</p>
      <br /> 

      <p><strong>Karen:</strong> Thank you. What do you recommend on the menu?</p>  
      <p><strong>Karen:</strong> Obrigada. O que você recomenda no cardápio?</p>
      <br /> 

      <p><strong>Waiter:</strong> The pasta is really good, and our special dish is seafood.</p>  
      <p><strong>Garçom:</strong> A massa é muito boa, e o nosso prato especial é frutos do mar.</p>
      <br /> 

      <p><strong>Karen:</strong> I’ll try the pasta then.</p>  
      <p><strong>Karen:</strong> Então vou experimentar a massa.</p>
      <br /> 

      <p><strong>Waiter:</strong> Excellent choice! Would you like something to drink?</p>  
      <p><strong>Garçom:</strong> Excelente escolha! Você gostaria de algo para beber?</p>
      <br /> 

      <p><strong>Karen:</strong> Yes, I’ll have a glass of red wine, please.</p>  
      <p><strong>Karen:</strong> Sim, vou querer um copo de vinho tinto, por favor.</p>
      <br /> 

      <p><strong>Waiter:</strong> Coming right up. Enjoy your meal!</p>  
      <p><strong>Garçom:</strong> Já vou trazer. Aproveite a refeição!</p>
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
