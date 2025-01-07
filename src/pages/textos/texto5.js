import React from "react";
import Header from '../../components/header';
import HeaderMenuTexto from '../../components/header-menu-texto';
import Footer from "../../components/footer";
import Logo from "../../components/logo";
import RightNavBar from "../../components/right-navbar";
import { Container, Col, Row, Accordion} from "react-bootstrap";
import { Helmet } from 'react-helmet-async';


export default function Texto5() {
    return(
<>
<Helmet>
        <title>Texto 5</title>
      </Helmet>
<Header />
<Logo />
<HeaderMenuTexto />
<Container>
  <Row>
    <Col className="coluna-texto1">
      <h2 className="h1-Texto-Inicial">A Rainy Day at Home</h2>
      <h4 className="h5-Textos">
        <p>On a rainy afternoon, Thay was at home, enjoying the perfect weather to stay cozy in her room. She loved these days when the sound of rain made her feel peaceful. For Thay, there was nothing better than ordering pizza and watching her favorite movies: *Twilight*, *Harry Potter*, and *Corpse Bride*.</p>
        
        <p>She ordered a four-cheese pizza, her favorite, and while waiting for it to arrive, she snuggled in her blanket, getting ready for a movie marathon. When the pizza finally came, Thay was already excited. After eating, she grabbed her chocolate almond ice cream and hid under the blanket to enjoy the movies in total comfort.</p>
        
        <p>The afternoon flew by, and Thay felt completely relaxed, with no worries at all. As night fell, she was happy and satisfied, knowing it had been the perfect day.</p>
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
            <h2>Um Dia Chuvoso em Casa</h2>
            <br />
            <p>Na tarde chuvosa, Thay estava em casa, aproveitando o clima perfeito para ficar confortável no seu quarto. Ela adorava esses dias, quando o som da chuva a fazia sentir-se tranquila. Para Thay, não havia nada melhor do que pedir uma pizza e assistir seus filmes favoritos: *Crepúsculo*, *Harry Potter* e *A Noiva Cadáver*.</p>
            
            <p>Ela pediu uma pizza de quatro queijos, sua favorita, e enquanto esperava pela entrega, se encolheu no cobertor, se preparando para um maratona de filmes. Quando a pizza finalmente chegou, Thay estava animada. Depois de comer, ela pegou seu sorvete de amêndoas com chocolate e se escondeu debaixo do cobertor para curtir os filmes com total conforto.</p>
            
            <p>A tarde passou voando e Thay se sentiu completamente relaxada, sem nenhuma preocupação. Quando a noite chegou, ela estava feliz e satisfeita, sabendo que aquele tinha sido o dia perfeito.</p>
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
          <Accordion.Header>1. What did Thay do on the rainy day?</Accordion.Header>
          <Accordion.Body>
            <h5>O que Thay fez no dia chuvoso?</h5>
            Thay stayed at home and enjoyed the rainy weather. <br />
            <i>Thay ficou em casa e aproveitou o clima chuvoso.</i>
          </Accordion.Body>
        </Accordion.Item>
        
        <Accordion.Item eventKey="1">
          <Accordion.Header>2. What did Thay do while watching her favorite movies?</Accordion.Header>
          <Accordion.Body>
            <h5>O que Thay fez enquanto assistia aos seus filmes favoritos?</h5>
            She ordered pizza and had some ice cream under the blanket. <br />
            <i>Ela pediu pizza e tomou sorvete embaixo do lençol.</i>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header>3. What movies did Thay watch on the rainy day?</Accordion.Header>
          <Accordion.Body>
            <h5>Quais filmes Thay assistiu no dia chuvoso?</h5>
            She watched *Twilight*, *Harry Potter*, and *Corpse Bride*. <br />
            <i>Ela assistiu *Crepúsculo*, *Harry Potter* e *A Noiva Cadáver*.</i>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="3">
          <Accordion.Header>4. What did Thay eat while watching the movies?</Accordion.Header>
          <Accordion.Body>
            <h5>O que Thay comeu enquanto assistia aos filmes?</h5>
            Thay ate pizza and ice cream. <br />
            <i>Thay comeu pizza e sorvete.</i>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="4">
          <Accordion.Header>5. How did Thay feel during the rainy day?</Accordion.Header>
          <Accordion.Body>
            <h5>Como Thay se sentiu durante o dia chuvoso?</h5>
            She felt relaxed and cozy while watching her favorite movies and enjoying the rain. <br />
            <i>Ela se sentiu relaxada e confortável enquanto assistia aos seus filmes favoritos e aproveitava a chuva.</i>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="5">
          <Accordion.Header>6. What was Thay's favorite thing to do on rainy days?</Accordion.Header>
          <Accordion.Body>
            <h5>Qual era a coisa favorita de Thay para fazer nos dias chuvosos?</h5>
            Thay loved to stay at home, eat pizza, watch movies, and stay warm under a blanket. <br />
            <i>Thay adorava ficar em casa, comer pizza, assistir filmes e ficar aquecida embaixo de um lençol.</i>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="6">
          <Accordion.Header>7. What kind of pizza did Thay order?</Accordion.Header>
          <Accordion.Body>
            <h5>Que tipo de pizza Thay pediu?</h5>
            She ordered a four-cheese pizza. <br />
            <i>Ela pediu uma pizza de quatro queijos.</i>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="7">
          <Accordion.Header>8. How did Thay end the day?</Accordion.Header>
          <Accordion.Body>
            <h5>Como Thay terminou o dia?</h5>
            She ended the day feeling happy and content, knowing it was the perfect rainy day. <br />
            <i>Ela terminou o dia se sentindo feliz e satisfeita, sabendo que foi o dia chuvoso perfeito.</i>
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
