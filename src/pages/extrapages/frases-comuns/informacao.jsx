import Header from '../../../components/header';
import HeaderMenuTexto from '../../../components/headers/header-menu-texto';
import Footer from "../../../components/footer";
import Logo from "../../../components/logo";
import { Container,  Col, Row} from "react-bootstrap";
import { Helmet } from 'react-helmet-async';
import RightNavBar from "../../../components/right-navbar";

export default function PedirInformacao() {
    return (
<>
<div>
<Helmet>
    <title>Frases para Pedir Informação</title>
  </Helmet> 
<Header />
<Logo />
<HeaderMenuTexto />

<Container>
      <Row>
        <Col className="coluna-texto1">
        <h2 className="h1-Texto-Inicial"> Frases para Pedir Informação</h2> 
        <h4 className="h5-Textos">
      <p>  Aprenda a pedir informações de forma educada e natural.</p>    

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
 <p>"What’s going on?" <strong><i>(O que está acontecendo?)</i></strong></p> 
 <p>"Can you tell me more?" <strong><i>(Você pode me contar mais?)</i></strong></p>
  <p>"What’s the deal with that?" <strong><i>(Qual é a situação disso?)</i></strong></p>
   <p>"Got any updates?" <strong><i>(Tem alguma novidade?)</i></strong></p>
    <p>"Where’s that?" <strong><i>(Onde é isso?)</i></strong></p> 
    <p>"Who’s in charge?" <strong><i>(Quem está no comando?)</i></strong></p> 
    <p>"Do you know what’s happening?" <strong><i>(Você sabe o que está acontecendo?)</i></strong></p> 
    <p>"Can you fill me in?" <strong><i>(Pode me atualizar?)</i></strong></p> 
    <br />

     <h3 className="frases-comuns-h3"> <p> <strong> Formal: </strong> </p> </h3>
     <br />
     <p>"Could you provide me with more information?" <strong><i>(Você poderia me fornecer mais informações?)</i></strong></p> 
     <p>"I would like to inquire about this matter." <strong><i>(Gostaria de me informar sobre este assunto.)</i></strong></p> 
     <p>"May I ask for further details?" <strong><i>(Posso pedir mais detalhes?)</i></strong></p> 
     <p>"Would you mind clarifying this for me?" <strong><i>(Você se importaria de esclarecer isso para mim?)</i></strong></p>
      <p>"Can you assist me in understanding this better?" <strong><i>(Você pode me ajudar a entender isso melhor?)</i></strong></p>
     <p>"Do you happen to know where I could find this information?" <strong><i>(Por acaso, você sabe onde posso encontrar essas informações?)</i></strong></p>
      <p>"I am looking for details regarding this situation." <strong><i>(Estou buscando detalhes sobre essa situação.)</i></strong></p>
       <p>"Could you kindly explain how this works?" <strong><i>(Você poderia gentilmente explicar como isso funciona?)</i></strong></p>
    </h4>
</Col>
      </Row>
    </Container>
        
<Footer />
</div>
</>

    );
}