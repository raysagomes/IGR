import React from "react";
import Header from '../../components/header';
import HeaderMenuTexto from '../../components/header-menu-texto';
import Footer from "../../components/footer";
import Logo from "../../components/logo";
import RightNavBar from "../../components/right-navbar";
import { Container, Col, Row, Accordion} from "react-bootstrap";
import { Helmet } from 'react-helmet-async';


export default function Texto7() {
    return(
<>
<Helmet>
        <title>Texto 7</title>
      </Helmet>
<Header />
<Logo />
<HeaderMenuTexto />

<Container>
  <Row>
    <Col className="coluna-texto1">
      <h2 className="h1-Texto-Inicial">Tom Visits the Countryside</h2>
      <h4 className="h5-Textos">
  <p>Tom was thrilled to visit the countryside for the first time. He imagined vast fields of green with cows grazing gracefully under the clear blue sky. When he arrived, he found a curious sight—a group of cows crowding around a scarecrow, as if they were attending a meeting. The cows seemed completely uninterested in the lush grass and utterly focused on the scarecrow. Tom burst out laughing, wondering if they mistook it for their leader.</p>
  
  <p>Later, he strolled to the pond, expecting to find elegant ducks gliding peacefully on the water. Instead, he saw a duck trying to steal bread from a picnic basket. The other ducks stood nearby, cheering it on with loud quacks. Tom couldn’t believe the level of mischief and watched the hilarious scene unfold with tears of laughter in his eyes.</p>
  
  <p>Despite the unexpected moments, Tom had a memorable day, discovering that even the quiet countryside could be full of surprises and comedy. He returned home with funny stories to tell and a newfound appreciation for rural life.</p>
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
        <Accordion.Header>
  <h2>Tradução do texto</h2>
</Accordion.Header>
<Accordion.Body>
  <h2>Uma Viagem ao Campo</h2>
  <br />
  <p>Tom estava animado para visitar o campo pela primeira vez. Ele imaginava vastos campos verdes com vacas pastando graciosamente sob o céu azul. Quando chegou, encontrou uma visão curiosa: um grupo de vacas reunidas ao redor de um espantalho, como se estivessem participando de uma reunião. As vacas pareciam completamente desinteressadas na grama verde e focadas no espantalho. Tom caiu na gargalhada, imaginando se elas o confundiram com seu líder.</p>
  
  <p>Depois, ele caminhou até o lago, esperando encontrar patos elegantes deslizando pacificamente pela água. Em vez disso, viu um pato tentando roubar pão de uma cesta de piquenique. Os outros patos estavam por perto, incentivando-o com grasnados altos. Tom não acreditava no nível de travessura e assistiu à cena hilária com lágrimas de tanto rir.</p>
  
  <p>Apesar dos momentos inesperados, Tom teve um dia memorável, descobrindo que até o tranquilo campo podia ser cheio de surpresas e comédia. Ele voltou para casa com histórias engraçadas para contar e uma nova apreciação pela vida no campo.</p>
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
          <Accordion.Header>1. What did Tom expect to see in the countryside?</Accordion.Header>
          <Accordion.Body>
            <h5>O que Tom esperava ver no campo?</h5>
            Tom expected to see vast green fields with cows grazing gracefully. <br />
            <i>Tom esperava ver vastos campos verdes com vacas pastando graciosamente.</i>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
          <Accordion.Header>2. What did Tom find instead of peaceful cows?</Accordion.Header>
          <Accordion.Body>
            <h5>O que Tom encontrou em vez de vacas tranquilas?</h5>
            Tom found cows gathered around a scarecrow in a strange scene. <br />
            <i>Tom encontrou vacas reunidas em torno de um espantalho em uma cena estranha.</i>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header>3. What was unusual about the ducks in the lake?</Accordion.Header>
          <Accordion.Body>
            <h5>O que foi incomum nos patos no lago?</h5>
            The ducks were chasing a remote-controlled boat and making loud noises. <br />
            <i>Os patos estavam perseguindo um barco de controle remoto e fazendo barulhos altos.</i>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="3">
          <Accordion.Header>4. Why did Tom find the trip amusing?</Accordion.Header>
          <Accordion.Body>
            <h5>Por que Tom achou a viagem divertida?</h5>
            Tom laughed at the strange behavior of the cows and ducks. <br />
            <i>Tom riu do comportamento estranho das vacas e dos patos.</i>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="4">
          <Accordion.Header>5. What did Tom learn from his countryside visit?</Accordion.Header>
          <Accordion.Body>
            <h5>O que Tom aprendeu com sua visita ao campo?</h5>
            Tom realized that nature can be both unpredictable and entertaining. <br />
            <i>Tom percebeu que a natureza pode ser imprevisível e divertida.</i>
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
