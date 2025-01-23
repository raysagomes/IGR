import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import { Helmet } from 'react-helmet-async';
import HeaderMenuTexto from "../../components/header-menu-texto";
import Logo from '../../components/logo';
import { Container, Col, Row, Accordion} from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import ExplicacaoConversa from "../../components/obs-conversacao";

export default function Conversacao7() {
    return(
<>
<div>
<Helmet>
    <title>Viktor e o Mercado</title>
  </Helmet> 
<Header />
<Logo />
<HeaderMenuTexto />
<Container>
  <Row>
    <Col className="coluna-texto1">
      <br /> 
      <ExplicacaoConversa />

      <h4 className="h5-conversa"><i><strong>Viktor e o Mercado</strong></i>
      <br /> 
      <br /> 

      <p><strong>Viktor:</strong> Excuse me, where can I find the bread?</p>  
      <p><strong>Viktor:</strong> Com licença, onde posso encontrar o pão?</p>
      <br /> 

      <p><strong>Store Clerk:</strong> The bread is in the bakery section, right next to the fruits.</p>  
      <p><strong>Atendente:</strong> O pão está na seção de padaria, ao lado das frutas.</p>
      <br /> 

      <p><strong>Viktor:</strong> Thanks! Do you also have gluten-free options?</p>  
      <p><strong>Viktor:</strong> Obrigado! Vocês também têm opções sem glúten?</p>
      <br /> 

      <p><strong>Store Clerk:</strong> Yes, we have a selection in the back of the bakery section.</p>  
      <p><strong>Atendente:</strong> Sim, temos uma seleção na parte de trás da seção de padaria.</p>
      <br /> 

      <p><strong>Viktor:</strong> Great! I’ll check it out. Thanks for your help.</p>  
      <p><strong>Viktor:</strong> Ótimo! Vou dar uma olhada. Obrigado pela ajuda.</p>
      <br /> 

      <p><strong>Store Clerk:</strong> You’re welcome! Let me know if you need anything else.</p>  
      <p><strong>Atendente:</strong> De nada! Me avise se precisar de mais alguma coisa.</p>
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
