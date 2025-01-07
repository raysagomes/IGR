import React from "react";
import Header from '../../components/header';
import HeaderMenuTexto from '../../components/header-menu-texto';
import Footer from "../../components/footer";
import Logo from "../../components/logo";
import RightNavBar from "../../components/right-navbar";
import { Container, Col, Row, Accordion} from "react-bootstrap";
import { Helmet } from 'react-helmet-async';


export default function Texto4() {
    return(
<>
<Helmet>
        <title>Texto 4</title>
      </Helmet>
<Header />
<Logo />
<HeaderMenuTexto />

<Container>
  <Row>
    <Col className="coluna-texto1">
      <h2 className="h1-Texto-Inicial">The Camping Trip</h2>
      <h4 className="h5-Textos">
        <p>It was a beautiful weekend when Millie and her friends decided to go camping. They set up their tents by the lake, surrounded by trees and the sounds of nature. The air was fresh, and the sky was clear. They spent the afternoon hiking, exploring the woods, and enjoying each other's company.</p>

        <p>As the night came, they gathered around the campfire, roasting marshmallows and telling stories. They were all excited about the adventure, but little did they know that something unexpected was about to happen.</p>

        <p>While they were getting ready to sleep inside their tents, they noticed a large shadow moving near one of the tents. To their shock, it was an alligator! The group froze in fear, unsure of what to do. But just then, a man from Florida appeared, running towards them with confidence. Without hesitation, he rushed toward the alligator and, in an incredible display of bravery, fought the creature off. With a few well-placed moves, he managed to defeat the alligator, sending it fleeing into the woods.</p>

        <p>Relieved and still in awe of what they had just witnessed, the group thanked the man for his bravery. After the excitement died down, they finally settled back into their tents, feeling safe once again. Despite the terrifying encounter, they all fell asleep, knowing it had been a camping trip they would never forget.</p>
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
            <h2>A Viagem de Acampamento</h2>
            <br />
            <p>Foi um fim de semana bonito quando Millie e seus amigos decidiram ir acampar. Eles montaram suas barracas perto do lago, cercados por árvores e pelo som da natureza. O ar estava fresco e o céu estava limpo. Passaram a tarde fazendo trilhas, explorando a floresta e aproveitando a companhia uns dos outros.</p>

            <p>Quando a noite chegou, eles se reuniram ao redor da fogueira, assando marshmallows e contando histórias. Todos estavam animados com a aventura, mas mal sabiam eles que algo inesperado estava prestes a acontecer.</p>

            <p>Enquanto se preparavam para dormir nas barracas, notaram uma grande sombra se movendo perto de uma das barracas. Para seu choque, era um jacaré! O grupo ficou paralisado de medo, sem saber o que fazer. Mas, naquele momento, apareceu um homem da Flórida, correndo na direção deles com confiança. Sem hesitar, ele correu em direção ao jacaré e, em uma incrível demonstração de coragem, conseguiu afugentar o animal. Com alguns movimentos certeiros, ele conseguiu derrotar o jacaré, fazendo-o fugir para a floresta.</p>

            <p>Aliviados e ainda impressionados com o que acabaram de testemunhar, o grupo agradeceu ao homem pela sua bravura. Depois que a empolgação passou, todos se acomodaram de volta nas suas barracas, sentindo-se seguros novamente. Apesar do susto, todos adormeceram, sabendo que aquela tinha sido uma viagem de acampamento que jamais esqueceriam.</p>
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
          <Accordion.Header>1. What did Millie and her friends do on the camping trip?</Accordion.Header>
          <Accordion.Body>
            <h5>O que Millie e seus amigos fizeram na viagem de acampamento?</h5>
            They set up their tents near a lake and explored the forest. <br />
            <i>Eles montaram suas barracas perto de um lago e exploraram a floresta.</i>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
          <Accordion.Header>2. What did Millie and her friends do in the evening around the campfire?</Accordion.Header>
          <Accordion.Body>
            <h5>O que Millie e seus amigos fizeram à noite ao redor da fogueira?</h5>
            They roasted marshmallows and told stories. <br />
            <i>Eles assaram marshmallows e contaram histórias.</i>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header>3. What unexpected event happened during the camping trip?</Accordion.Header>
          <Accordion.Body>
            <h5>Que evento inesperado aconteceu durante a viagem de acampamento?</h5>
            A crocodile appeared near their tent. <br />
            <i>Um jacaré apareceu perto da barraca deles.</i>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="3">
          <Accordion.Header>4. How did the man from Florida handle the crocodile?</Accordion.Header>
          <Accordion.Body>
            <h5>Como o homem da Flórida lidou com o jacaré?</h5>
            He fought the crocodile and managed to drive it away. <br />
            <i>Ele lutou com o jacaré e conseguiu espantá-lo.</i>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="4">
          <Accordion.Header>5. How did Millie and her friends feel after the crocodile incident?</Accordion.Header>
          <Accordion.Body>
            <h5>Como Millie e seus amigos se sentiram após o incidente com o jacaré?</h5>
            They felt relieved and grateful for the man’s bravery. <br />
            <i>Eles se sentiram aliviados e gratos pela coragem do homem.</i>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="5">
          <Accordion.Header>6. What did Millie and her friends do after the crocodile incident?</Accordion.Header>
          <Accordion.Body>
            <h5>O que Millie e seus amigos fizeram após o incidente com o jacaré?</h5>
            They went back to their tents and went to sleep peacefully. <br />
            <i>Eles voltaram para suas barracas e dormiram tranquilamente.</i>
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
