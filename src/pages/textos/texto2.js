import React from "react";
import Header from '../../components/header';
import HeaderMenuTexto from '../../components/header-menu-texto';
import Footer from "../../components/footer";
import Logo from "../../components/logo";
import RightNavBar from "../../components/right-navbar";
import { Container, Col, Row, Accordion} from "react-bootstrap";
import { Helmet } from 'react-helmet-async';


export default function Texto2() {
    return(
<>
<Helmet>
        <title>Texto2</title>
      </Helmet>
<Header />
<Logo />
<HeaderMenuTexto />

<Container>
      <Row>
        <Col className="coluna-texto1">
        <h2 className="h1-Texto-Inicial"> The Joy of Baking </h2> 
        <h4 className="h5-Textos">
      <p> Sophie found joy in baking. It started as a way to relax after a stressful day at work, but it quickly became a beloved hobby.</p>
     <p>She loved experimenting with different recipes, from classic chocolate chip cookies to elaborate cakes and pastries. The process of measuring, mixing, and decorating brought her immense satisfaction.
        </p>
        <p> Sophie's kitchen was always filled with the delicious aroma of freshly baked goods, and she took pleasure in sharing her creations with friends and family. Baking became her way of spreading happiness and love.
        </p>

    </h4>
</Col>

<Col className="extra-pagina-de-textos d-flex flex-column align-items-end">
    <RightNavBar />
    </Col>
      </Row>
    </Container>
    <Container md="auto" xs lg="7" className="div-accordion-ativididade justify-content-center"> 
        <Row> 
     <Col>        
    <Accordion  className="justify-content-center" >
      <Accordion.Item eventKey="0" className="Accordion">
        <Accordion.Header className="accordion-header"><h2>Tradução do texto</h2></Accordion.Header>
        <Accordion.Body>
            <h2>A felicidade de Assar</h2>
            <br />
        <p>
          Sophie encontrou alegria em cozinhar. Começou como uma forma de relaxar após um dia estressante de trabalho, mas rapidamente se tornou um hobby querido. Ela adorava experimentar receitas diferentes, desde os clássicos biscoitos de chocolate até bolos e doces elaborados.
        </p>
     <p>  
     O processo de medir, misturar e decorar trouxe-lhe imensa satisfação. A cozinha de Sophie estava sempre repleta do delicioso aroma dos produtos acabados de fazer e ela tinha prazer em partilhar as suas criações com amigos e familiares. Cozinhar tornou-se sua forma de espalhar felicidade e amor.
     </p> 
   
      </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </Col>
    </Row>
    </Container>
    
<Container className="questions">
        <Row> 
<Col> 
        <h1 className="h1-questions"> Questions </h1>
        <Accordion className="no-border-accordion"> 
      <Accordion.Item eventKey="0">
        <Accordion.Header>1. How did Sophie discover her joy in baking?</Accordion.Header>
        <Accordion.Body>
        Sophie discovered her joy in baking as a way to relax after a stressful day at work.        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>2. What kinds of recipes does Sophie enjoy experimenting with?      </Accordion.Header>
        <Accordion.Body>
        Sophie enjoys experimenting with recipes for classic chocolate chip cookies, elaborate cakes, and pastries.        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>3. What part of the baking process does Sophie enjoy the most?
        </Accordion.Header>
        <Accordion.Body>
        Sophie enjoys the process of measuring, mixing, and decorating the most.
        </Accordion.Body>        
              </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>4. How does Sophie's kitchen usually smell?
        </Accordion.Header>
        <Accordion.Body>
        Sophie's kitchen usually smells like freshly baked goods.
        </Accordion.Body>
            </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>5. How does Sophie share her baking creations?
        </Accordion.Header>
        <Accordion.Body>
        Sophie shares her baking creations with friends and family.
        </Accordion.Body>
      </Accordion.Item>

    </Accordion>

</Col>
        </Row>
     </Container>
<Footer />
</>
    );
}
