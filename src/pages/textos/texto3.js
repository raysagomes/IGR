import React from "react";
import Header from '../../components/header';
import HeaderMenuTexto from '../../components/header-menu-texto';
import Footer from "../../components/footer";
import Logo from "../../components/logo";
import RightNavBar from "../../components/right-navbar";
import { Container, Col, Row, Accordion} from "react-bootstrap";
import { Helmet } from 'react-helmet-async';


export default function Texto3() {
    return(
<>
<Helmet>
        <title>Texto 3</title>
      </Helmet>
<Header />
<Logo />
<HeaderMenuTexto />

<Container>
  <Row>
    <Col className="coluna-texto1">
      <h2 className="h1-Texto-Inicial">A Day at the Beach</h2>
      <h4 className="h5-Textos">
      <p>Last Saturday, Emma and her friends decided to go to the beach. They woke up early in the morning, packed their bags with swimsuits, towels, and snacks, and drove to the coast. The weather was perfect – warm and sunny with a light breeze. When they arrived, they found a nice spot near the water and set up their towels and umbrellas.</p>
        
        <p>Emma loves the ocean, so she ran straight to the water. The waves were gentle, and she spent hours swimming and floating on the surface. Her friends played beach volleyball nearby, laughing and cheering each other on. After swimming, Emma joined them, and they had a lot of fun.</p>
        
        <p>Around noon, they all got hungry and decided to have a picnic. They had brought sandwiches, fresh fruit, and cold drinks. While they ate, they talked about their plans for the rest of the summer and shared stories from their recent travels.</p>
        
        <p>As the sun began to set, they packed up and took a last look at the beautiful view of the ocean. Tired but happy, they returned home, already planning their next adventure.</p>
      </h4>
    </Col>

  
<Col xs={12} md={3} className="extra-pagina-de-textos d-flex flex-column align-items-end">
    <RightNavBar />
    </Col>
    </Row>
</Container>

<Container md="auto" xs lg="7" className="div-accordion-ativididade justify-content-center">
  <Row>
    <Col>
      <Accordion className="justify-content-center">
        <Accordion.Item eventKey="0" className="Accordion">
          <Accordion.Header className="accordion-header">
            <h2>Tradução do texto</h2>
          </Accordion.Header>
          <Accordion.Body>
            <h2>Um Dia na Praia</h2>
            <br />
            <p>No sábado passado, Emma e seus amigos decidiram ir à praia. Eles acordaram cedo, prepararam suas bolsas com trajes de banho, toalhas e lanches, e dirigiram até a costa. O clima estava perfeito – quente, ensolarado e com uma brisa leve. Ao chegar, encontraram um lugar agradável perto da água e montaram suas toalhas e guarda-sóis.</p>
            
            <p>Emma adora o oceano, então correu direto para a água. As ondas estavam calmas, e ela passou horas nadando e flutuando na superfície. Seus amigos jogavam vôlei de praia por perto, rindo e torcendo uns pelos outros. Após nadar, Emma se juntou a eles, e todos se divertiram bastante juntos.</p>
            
            <p>Por volta do meio-dia, todos ficaram com fome e decidiram fazer um piquenique. Eles trouxeram sanduíches, frutas frescas e bebidas geladas. Enquanto comiam, conversaram sobre os planos para o resto do verão e compartilharam histórias de suas viagens recentes.</p>
            
            <p>Quando o sol começou a se pôr, arrumaram tudo e deram uma última olhada na bela vista do oceano. Cansados, mas felizes, voltaram para casa, já planejando sua próxima aventura.</p>
         </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Col>
  </Row>
</Container>

<Container className="questions">
  <Row> 
    <Col> 
      <h1 className="h1-questions">Questions</h1>
      <Accordion className="no-border-accordion"> 

        <Accordion.Item eventKey="0">
          <Accordion.Header>1. Where did Emma and her friends go last Saturday?</Accordion.Header>
          <Accordion.Body>
            <h5>Para onde Emma e seus amigos foram no último sábado?</h5>
            Emma and her friends went to the beach last Saturday. <br />
            <i>Emma e seus amigos foram à praia no último sábado.</i>
          </Accordion.Body>
        </Accordion.Item>
        
        <Accordion.Item eventKey="1">
          <Accordion.Header>2. What did they bring with them to the beach?</Accordion.Header>
          <Accordion.Body>
            <h5>O que eles trouxeram para a praia?</h5>
            They brought swimsuits, towels, and snacks to the beach. <br />
            <i>Eles trouxeram trajes de banho, toalhas e lanches para a praia.</i>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header>3. How was the weather at the beach?</Accordion.Header>
          <Accordion.Body>
            <h5>Como estava o tempo na praia?</h5>
            The weather was warm and sunny with a light breeze. <br />
            <i>O tempo estava quente e ensolarado, com uma brisa leve.</i>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="3">
          <Accordion.Header>4. What did Emma do when they arrived at the beach?</Accordion.Header>
          <Accordion.Body>
            <h5>O que Emma fez quando chegaram à praia?</h5>
            Emma ran straight to the water and spent hours swimming and floating. <br />
            <i>Emma correu direto para a água e passou horas nadando e flutuando.</i>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="4">
          <Accordion.Header>5. What activity did Emma’s friends do while she was swimming?</Accordion.Header>
          <Accordion.Body>
            <h5>Que atividade os amigos de Emma fizeram enquanto ela nadava?</h5>
            Emma's friends played beach volleyball nearby. <br />
            <i>Os amigos de Emma jogaram vôlei de praia por perto.</i>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="5">
          <Accordion.Header>6. What did they eat for their picnic?</Accordion.Header>
          <Accordion.Body>
            <h5>O que eles comeram no piquenique?</h5>
            They ate sandwiches, fresh fruit, and cold drinks for their picnic. <br />
            <i>Eles comeram sanduíches, frutas frescas e bebidas geladas no piquenique.</i>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="6">
          <Accordion.Header>7. What did they do as the sun began to set?</Accordion.Header>
          <Accordion.Body>
            <h5>O que eles fizeram quando o sol começou a se pôr?</h5>
            They packed up and took a last look at the beautiful view of the ocean. <br />
            <i>Eles arrumaram tudo e deram uma última olhada na bela vista do oceano.</i>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="7">
          <Accordion.Header>8. How did they feel at the end of the day?</Accordion.Header>
          <Accordion.Body>
            <h5>Como eles se sentiram no final do dia?</h5>
            They felt tired but happy at the end of the day. <br />
            <i>Eles se sentiram cansados, mas felizes no final do dia.</i>
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
