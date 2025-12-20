import Header from '../../../components/header';
import HeaderMenuTexto from '../../../components/headers/header-menu-texto';
import Footer from "../../../components/footer";
import Logo from "../../../components/logo";
import { Container, Col, Row} from "react-bootstrap";
import { Helmet } from 'react-helmet-async';
import RightNavBar from "../../../components/right-navbar";

export default function OferecerAjuda() {
    return (
<>
<div>
<Helmet>
    <title>Frases para Oferecer Ajuda</title>
  </Helmet> 
<Header />
<Logo />
<HeaderMenuTexto />

<Container>
      <Row>
        <Col className="coluna-texto1">
        <h2 className="h1-Texto-Inicial"> Frases para Oferecer Ajuda</h2> 
        <h4 className="h5-Textos">
      <p>  Aprenda a oferecer ajuda de forma educada e natural.</p>    

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

 <p>"Need a hand?" <strong><i>(Precisa de uma ajuda?)</i></strong></p>
  <p>"Can I help?" <strong><i>(Posso ajudar?)</i></strong></p>
   <p>"Want me to do anything?" <strong><i>(Quer que eu faça algo?)</i></strong></p>
    <p>"I got you!" <strong><i>(Deixa comigo!)</i></strong></p>
     <p>"Let me know if you need anything!" <strong><i>(Me avise se precisar de algo!)</i></strong></p> 
     <p>"How can I help?" <strong><i>(Como posso ajudar?)</i></strong></p> 
     <p>"Need some support?" <strong><i>(Precisa de algum suporte?)</i></strong></p> 
     <p>"Do you want me to pitch in?" <strong><i>(Quer que eu entre nessa?)</i></strong></p> <br />

     <h3 className="frases-comuns-h3"> <p> <strong> Formal: </strong> </p> </h3>
     <br />
     <p>"How may I assist you?" <strong><i>(Como posso assisti-lo?)</i></strong></p> 
     <p>"Is there anything I can do to help?" <strong><i>(Há algo que eu possa fazer para ajudar?)</i></strong></p> 
     <p>"Would you like some assistance?" <strong><i>(Você gostaria de alguma assistência?)</i></strong></p> 
     <p>"Please let me know how I can be of help." <strong><i>(Por favor, me avise como posso ser útil.)</i></strong></p>
      <p>"I would be happy to assist you with this." <strong><i>(Ficarei feliz em ajudá-lo com isso.)</i></strong></p> 
      <p>"If you need any support, do not hesitate to ask." <strong><i>(Se precisar de algum suporte, não hesite em pedir.)</i></strong></p>
       <p>"Allow me to help you with that." <strong><i>(Permita-me ajudá-lo com isso.)</i></strong></p>
     <p>"I’m here to offer any assistance you need." <strong><i>(Estou aqui para oferecer qualquer assistência que você precise.)</i></strong></p>

    </h4>
</Col>
      </Row>
    </Container>
        
<Footer />
</div>
</>

    );
}