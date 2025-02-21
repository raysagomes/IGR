import React from "react";
import Header from '../../components/header';
import HeaderMenuTexto from "../../components/headers/header-menu-texto";
import Footer from "../../components/footer";
import Logo from "../../components/logo";
import { Container, Card, Col, Row} from "react-bootstrap";
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';


export default function FrasesComuns() {
    return (
<>
<div>
<Helmet>
    <title>Frases Comuns</title>
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

    <Container  className="div-extras justify-content-center align-items-center flex-column mb-4"> 
            <Row> 
         <Col>        
         <Link to="agradecimentos" className="text-decoration-none texto-link">

         <Card className="Card-extras">
      <Card.Body>
        <Card.Title>Frases de Agradecimento     </Card.Title>
        <Card.Text>
        Formas simples e educadas de expressar gratidão em inglês, adequadas para diversas ocasiões.        </Card.Text>
      </Card.Body>
    </Card>
    </Link>

        </Col>
        </Row>
        </Container>


        <Container className="div-extras justify-content-center align-items-center flex-column mb-4"> 
            <Row> 
         <Col>        
         <Link to="concordar" className="text-decoration-none texto-link">

         <Card className="Card-extras mb-3">
      <Card.Body>
        <Card.Title>Frases para Concordar e Discordar   </Card.Title>
        <Card.Text>
        Aprenda a expressar concordância ou discordância de forma educada e natural.      </Card.Text>
      </Card.Body>
    </Card>
    </Link>

        </Col>
        </Row>
        </Container>

        <Container className="div-extras justify-content-center align-items-center flex-column mb-4"> 
            <Row> 
         <Col>        
         <Link to="despedidas" className="text-decoration-none texto-link">

         <Card className="Card-extras">
      <Card.Body>
        <Card.Title>Frases de Despedidas    </Card.Title>
        <Card.Text>
        Formas simples e educadas de expressar gratidão em inglês, adequadas para diversas ocasiões.        </Card.Text>
      </Card.Body>
    </Card>
    </Link>

        </Col>
        </Row>

        </Container>


        <Container className="div-extras justify-content-center align-items-center flex-column mb-4"> 
            <Row> 
         <Col>      
         <Link to="saude" className="text-decoration-none texto-link">
  
         <Card className="Card-extras">
      <Card.Body>
        <Card.Title>Frases para Desejar Saúde   </Card.Title>
        <Card.Text>
        Formas simples e educadas de expressar gratidão em inglês, adequadas para diversas ocasiões.        </Card.Text>
      </Card.Body>
    </Card>
    </Link>

        </Col>
        </Row>

        </Container>


        <Container className="div-extras justify-content-center align-items-center flex-column mb-4"> 
            <Row> 
         <Col>       
         <Link to="ajuda" className="text-decoration-none texto-link">
 
         <Card className="Card-extras">
      <Card.Body>
        <Card.Title>Frases para Oferecer Ajuda        </Card.Title>
        <Card.Text>
        Formas simples e educadas de expressar gratidão em inglês, adequadas para diversas ocasiões.        </Card.Text>
      </Card.Body>
    </Card>
    </Link>

        </Col>
        </Row>

        </Container>


        <Container className="div-extras justify-content-center align-items-center flex-column mb-4"> 
            <Row> 
         <Col>
         <Link to="desculpa" className="text-decoration-none texto-link">
  
         <Card className="Card-extras">
      <Card.Body>
        <Card.Title>   Pedindo Desculpas</Card.Title>
        <Card.Text>
        Formas simples e educadas de expressar gratidão em inglês, adequadas para diversas ocasiões.        </Card.Text>
      </Card.Body>
    </Card>
    </Link>

        </Col>
        </Row>

        </Container>


        <Container className="div-extras justify-content-center align-items-center flex-column mb-4"> 
            <Row> 
         <Col>        
         <Link to="informacao" className="text-decoration-none texto-link">

         <Card className="Card-extras">
      <Card.Body>
        <Card.Title>Pedindo Informações        </Card.Title>
        <Card.Text>
        Formas simples e educadas de expressar gratidão em inglês, adequadas para diversas ocasiões.        </Card.Text>
      </Card.Body>
    </Card>
    </Link>

        </Col>
        </Row>

        </Container>

        <Container className="div-extras justify-content-center align-items-center flex-column mb-4"> 
            <Row> 
         <Col>     
         <Link to="saudacao" className="text-decoration-none texto-link">
   
         <Card className="Card-extras">
      <Card.Body>
        <Card.Title>Saudações       </Card.Title>
        <Card.Text>
        Formas simples e educadas de expressar gratidão em inglês, adequadas para diversas ocasiões.        </Card.Text>
      </Card.Body>
    </Card>
    </Link>

        </Col>
        </Row>

        </Container>   


<Footer />
</div>
</>

    );
}