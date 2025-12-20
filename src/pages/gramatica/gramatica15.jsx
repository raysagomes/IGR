import Header from "../../components/header";
import Footer from "../../components/footer";
import { Helmet } from 'react-helmet-async';
import HeaderMenuGramatica from '../../components/headers/header-menu-gramatica';
import Logo from '../../components/logo';
import { Container, Col, Row, Accordion} from "react-bootstrap";

export default function Gramatica15() {
    return(
<>
<Helmet>
        <title>Conjunctions</title>
      </Helmet>
<Header />
<Logo />
<HeaderMenuGramatica />
<Container>
  <Row>
    <Col className="coluna-texto1">
      <h2 className="h1-Texto-Inicial">Conjunctions</h2>
      <h4 className="h5-Textos">
        <h3>What are Conjunctions?</h3>
        <h5><i>O que são Conjunções?</i></h5>
        <p>Conjunctions are words that connect words, phrases, or sentences. They help make our speech and writing flow better.</p>
        <h5><i>Conjunções são palavras que conectam palavras, frases ou sentenças. Elas ajudam a tornar nossa fala e escrita mais fluidas.</i></h5>
        <br />
        
        <h5><i>Common Conjunctions:</i></h5>
        <ul>
          <li><strong>And:</strong> adds information <em>"I like coffee and tea."</em> (Eu gosto de café e chá.)</li>
          <li><strong>But:</strong> shows contrast <em>"I'm tired but happy."</em> (Estou cansado mas feliz.)</li>
          <li><strong>Or:</strong> shows choice <em>"Do you want coffee or tea?"</em> (Você quer café ou chá?)</li>
          <li><strong>So:</strong> shows result <em>"It was raining, so I stayed home."</em> (Estava chovendo, então fiquei em casa.)</li>
          <li><strong>Because:</strong> shows reason <em>"I'm happy because it's sunny."</em> (Estou feliz porque está ensolarado.)</li>
        </ul>
      </h4>
    </Col>
  </Row>
</Container>

<Container className="questions">
  <Row>
    <Col>
      <h1 className="h1-questions">Questions</h1>
      <Accordion className="no-border-accordion">
        <Accordion.Item eventKey="0">
          <Accordion.Header>1. Complete with the correct conjunction: "I wanted to go out, ____ it was raining."</Accordion.Header>
          <Accordion.Body>
            "I wanted to go out, but it was raining." (But é usado para mostrar contraste.)
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>2. Complete with the correct conjunction: "She studied hard ____ she passed the exam."</Accordion.Header>
          <Accordion.Body>
            "She studied hard so she passed the exam." (So é usado para mostrar resultado.)
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