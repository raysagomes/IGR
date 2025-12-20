import Header from "../../components/header";
import Footer from "../../components/footer";
import { Helmet } from 'react-helmet-async';
import HeaderMenuGramatica from '../../components/headers/header-menu-gramatica';
import Logo from '../../components/logo';
import { Container, Col, Row, Accordion} from "react-bootstrap";

export default function Gramatica14() {
    return(
<>
<Helmet>
        <title>Question Words</title>
      </Helmet>
<Header />
<Logo />
<HeaderMenuGramatica />
<Container>
  <Row>
    <Col className="coluna-texto1">
      <h2 className="h1-Texto-Inicial">Question Words</h2>
      <h4 className="h5-Textos">
        <h3>What are Question Words?</h3>
        <h5><i>O que são Palavras Interrogativas?</i></h5>
        <p>Question words are used to ask for specific information. They help us get details about people, places, time, reasons, and more.</p>
        <h5><i>Palavras interrogativas são usadas para pedir informações específicas. Elas nos ajudam a obter detalhes sobre pessoas, lugares, tempo, razões e muito mais.</i></h5>
        <br />
        
        <h5><i>Common Question Words:</i></h5>
        <ul>
          <li><strong>What:</strong> asks for information <em>"What is your name?"</em> (Qual é o seu nome?)</li>
          <li><strong>Who:</strong> asks about people <em>"Who is that person?"</em> (Quem é essa pessoa?)</li>
          <li><strong>Where:</strong> asks about places <em>"Where do you live?"</em> (Onde você mora?)</li>
          <li><strong>When:</strong> asks about time <em>"When is the meeting?"</em> (Quando é a reunião?)</li>
          <li><strong>Why:</strong> asks for reasons <em>"Why are you late?"</em> (Por que você está atrasado?)</li>
          <li><strong>How:</strong> asks about manner or method <em>"How do you cook this?"</em> (Como você cozinha isso?)</li>
          <li><strong>Which:</strong> asks for choice <em>"Which color do you prefer?"</em> (Qual cor você prefere?)</li>
        </ul>
        <br />
        
        <h3><i>Structure:</i></h3>
        <p>Question word + auxiliary verb + subject + main verb?</p>
        <h5><i>Palavra interrogativa + verbo auxiliar + sujeito + verbo principal?</i></h5>
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
          <Accordion.Header>1. Complete with the correct question word: "____ is your favorite color?"</Accordion.Header>
          <Accordion.Body>
            "What is your favorite color?" (What é usado para perguntar sobre coisas ou informações.)
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>2. Complete with the correct question word: "____ do you go to work?"</Accordion.Header>
          <Accordion.Body>
            "How do you go to work?" (How é usado para perguntar sobre o modo ou método.)
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>3. Complete with the correct question word: "____ is coming to the party?"</Accordion.Header>
          <Accordion.Body>
            "Who is coming to the party?" (Who é usado para perguntar sobre pessoas.)
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