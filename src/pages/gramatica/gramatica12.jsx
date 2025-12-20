import Header from "../../components/header";
import Footer from "../../components/footer";
import { Helmet } from 'react-helmet-async';
import HeaderMenuGramatica from '../../components/headers/header-menu-gramatica';
import Logo from '../../components/logo';
import { Container, Col, Row, Accordion} from "react-bootstrap";

export default function Gramatica12() {
    return(
<>
<Helmet>
        <title>Modal Verbs</title>
      </Helmet>
<Header />
<Logo />
<HeaderMenuGramatica />
<Container>
  <Row>
    <Col className="coluna-texto1">
      <h2 className="h1-Texto-Inicial">Modal Verbs</h2>
      <h4 className="h5-Textos">
        <h3>What are Modal Verbs?</h3>
        <h5><i>O que são Verbos Modais?</i></h5>
        <p>Modal verbs are auxiliary verbs that express ability, possibility, permission, or obligation. They are used with other verbs to change their meaning.</p>
        <h5><i>Verbos modais são verbos auxiliares que expressam habilidade, possibilidade, permissão ou obrigação. Eles são usados com outros verbos para mudar seu significado.</i></h5>
        <br />
        
        <h5><i>Common Modal Verbs:</i></h5>
        <ul>
          <li><strong>Can:</strong> ability or possibility <em>"I can swim."</em> (Eu sei nadar.)</li>
          <li><strong>Could:</strong> past ability or polite request <em>"Could you help me?"</em> (Você poderia me ajudar?)</li>
          <li><strong>May:</strong> permission or possibility <em>"May I come in?"</em> (Posso entrar?)</li>
          <li><strong>Might:</strong> possibility <em>"It might rain."</em> (Pode chover.)</li>
          <li><strong>Must:</strong> obligation <em>"You must study."</em> (Você deve estudar.)</li>
          <li><strong>Should:</strong> advice <em>"You should rest."</em> (Você deveria descansar.)</li>
          <li><strong>Will:</strong> future <em>"I will help you."</em> (Eu vou te ajudar.)</li>
          <li><strong>Would:</strong> polite request or conditional <em>"Would you like coffee?"</em> (Você gostaria de café?)</li>
        </ul>
        <br />
        
        <h3><i>Structure:</i></h3>
        <ul>
          <li><em>Affirmative:</em> Subject + modal verb + base verb</li>
          <li><em>Negative:</em> Subject + modal verb + not + base verb</li>
          <li><em>Question:</em> Modal verb + subject + base verb?</li>
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
          <Accordion.Header>1. Complete with the correct modal verb: "I ____ speak three languages."</Accordion.Header>
          <Accordion.Body>
            "I can speak three languages." (Can é usado para expressar habilidade.)
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>2. Complete with the correct modal verb: "You ____ study harder for the exam."</Accordion.Header>
          <Accordion.Body>
            "You should study harder for the exam." (Should é usado para dar conselhos.)
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>3. Complete with the correct modal verb: "____ I use your phone?"</Accordion.Header>
          <Accordion.Body>
            "May I use your phone?" (May é usado para pedir permissão formalmente.)
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