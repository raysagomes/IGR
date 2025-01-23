import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import { Helmet } from 'react-helmet-async';
import HeaderMenuTexto from "../../components/header-menu-texto";
import Logo from '../../components/logo';
import { Container, Col, Row, Accordion} from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import ExplicacaoConversa from "../../components/obs-conversacao";

export default function Conversacao9() {
    return(
<>
<div>
<Helmet>
    <title>Daniel e o Aeroporto</title>
  </Helmet> 
<Header />
<Logo />
<HeaderMenuTexto />

<Container>
  <Row>
    <Col className="coluna-texto1">
      <br /> 
      <ExplicacaoConversa />

      <h4 className="h5-conversa"><i><strong>Daniel e o Aeroporto</strong></i>
      <br /> 
      <br /> 

      <p><strong>Daniel:</strong> Excuse me, where is the check-in counter for Flight 345?</p>  
      <p><strong>Daniel:</strong> Com licença, onde fica o balcão de check-in para o voo 345?</p>
      <br /> 

      <p><strong>Airport Attendant:</strong> It’s over there, near Gate 12.</p>  
      <p><strong>Atendente do Aeroporto:</strong> Fica ali, perto do portão 12.</p>
      <br /> 

      <p><strong>Daniel:</strong> Thank you! Do I need to show any documents?</p>  
      <p><strong>Daniel:</strong> Obrigado! Eu preciso mostrar algum documento?</p>
      <br /> 

      <p><strong>Airport Attendant:</strong> Yes, please show your passport and ticket.</p>  
      <p><strong>Atendente do Aeroporto:</strong> Sim, por favor, mostre seu passaporte e bilhete.</p>
      <br /> 

      <p><strong>Daniel:</strong> Alright! Is there a lounge for first-class passengers?</p>  
      <p><strong>Daniel:</strong> Tudo bem! Tem um lounge para passageiros de primeira classe?</p>
      <br /> 

      <p><strong>Airport Attendant:</strong> Yes, the lounge is just next to Gate 14.</p>  
      <p><strong>Atendente do Aeroporto:</strong> Sim, o lounge fica logo ao lado do portão 14.</p>
      <br /> 

      <p><strong>Daniel:</strong> Thank you! I’ll head there after check-in.</p>  
      <p><strong>Daniel:</strong> Obrigado! Vou lá depois do check-in.</p>
      <br /> 

      <p><strong>Airport Attendant:</strong> Have a pleasant flight!</p>  
      <p><strong>Atendente do Aeroporto:</strong> Tenha um bom voo!</p>
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
