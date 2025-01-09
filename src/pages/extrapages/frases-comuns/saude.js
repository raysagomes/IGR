import React from "react";
import Header from '../../../components/header';
import HeaderMenuTexto from '../../../components/header-menu-texto';
import Footer from "../../../components/footer";
import Logo from "../../../components/logo";
import { Container, Card, Col, Row, Accordion, Button} from "react-bootstrap";
import { Helmet } from 'react-helmet-async';
import RightNavBar from "../../../components/right-navbar";

export default function DesejarSaude() {
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
        <h2 className="h1-Texto-Inicial"> Frases Comuns</h2> 
        <h4 className="h5-Textos">
      <p> Nesta página, você encontrará uma variedade de frases úteis em inglês, organizadas por categorias como saudações, perguntas, expressões de cortesia e muito mais. Elas foram selecionadas para ajudar em diferentes situações do dia a dia e tornar sua comunicação mais prática e natural. Explore as categorias e descubra as frases que melhor atendem às suas necessidades!</p>    

    </h4>
</Col>
      </Row>
    </Container>

    
        <Container md="auto" xs lg="7" className="div-accordion-ativididade justify-content-center"> 
            <Row> 
         <Col>        
         <Card className="Card-extras">
      <Card.Body>
        <Card.Title>Frases de Agradecimento</Card.Title>
        <Card.Text>
        Formas simples e educadas de expressar gratidão em inglês, adequadas para diversas ocasiões.        </Card.Text>
      </Card.Body>
    </Card>
        </Col>
        </Row>
        </Container>


        
<Footer />
</div>
</>

    );
}