import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import { Helmet } from 'react-helmet-async';
import HeaderMenuTexto from "../../components/header-menu-texto";
import Logo from '../../components/logo';
import { Container, Col, Row, Accordion} from "react-bootstrap";
import Card from 'react-bootstrap/Card';

export default function Conversacao8() {
    return(
<>
<div>
<Helmet>
    <title>Mia e a Biblioteca</title>
  </Helmet> 
<Header />
<Logo />
<HeaderMenuTexto />

<Container>
  <Row>
    <Col className="coluna-texto1">
      <br /> 
      <h4 className="h5-conversa"><i><strong>Mia e a Biblioteca</strong></i>
      <br /> 
      <br /> 

      <p><strong>Mia:</strong> Hi, I’m looking for a book on history.</p>  
      <p><strong>Mia:</strong> Oi, estou procurando um livro sobre história.</p>
      <br /> 

      <p><strong>Librarian:</strong> Sure! The history section is on the second floor.</p>  
      <p><strong>Bibliotecária:</strong> Claro! A seção de história fica no segundo andar.</p>
      <br /> 

      <p><strong>Mia:</strong> Thank you! Is there a specific author you recommend?</p>  
      <p><strong>Mia:</strong> Obrigada! Tem algum autor específico que você recomenda?</p>
      <br /> 

      <p><strong>Librarian:</strong> I’d suggest books by David McKee or Doris Kearns Goodwin.</p>  
      <p><strong>Bibliotecária:</strong> Eu sugeriria livros de David McKee ou Doris Kearns Goodwin.</p>
      <br /> 

      <p><strong>Mia:</strong> Great, I’ll look for them. How long can I keep the book?</p>  
      <p><strong>Mia:</strong> Ótimo, vou procurá-los. Quanto tempo posso ficar com o livro?</p>
      <br /> 

      <p><strong>Librarian:</strong> You can keep it for two weeks, with the option to extend.</p>  
      <p><strong>Bibliotecária:</strong> Você pode ficar com ele por duas semanas, com a opção de prorrogar.</p>
      <br /> 

      <p><strong>Mia:</strong> Perfect! Thanks for your help!</p>  
      <p><strong>Mia:</strong> Perfeito! Obrigada pela ajuda!</p>
      <br /> 

      <p><strong>Librarian:</strong> You’re welcome! Enjoy your reading!</p>  
      <p><strong>Bibliotecária:</strong> De nada! Aproveite sua leitura!</p>
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
