import Header from "../../components/header";
import Footer from "../../components/footer";
import { Helmet } from 'react-helmet-async';
import HeaderMenuGramatica from '../../components/headers/header-menu-gramatica';
import Logo from '../../components/logo';
import { Container, Col, Row, Accordion} from "react-bootstrap";

export default function Gramatica13() {
    return(
<>
<Helmet>
        <title>Prepositions</title>
      </Helmet>
<Header />
<Logo />
<HeaderMenuGramatica />
<Container>
  <Row>
    <Col className="coluna-texto1">
      <h2 className="h1-Texto-Inicial">Prepositions</h2>
      <h4 className="h5-Textos">
        <h3>What are Prepositions?</h3>
        <h5><i>O que são Preposições?</i></h5>
        <p>Prepositions are words that show the relationship between a noun or pronoun and other words in a sentence. They indicate location, time, direction, or manner.</p>
        <h5><i>Preposições são palavras que mostram a relação entre um substantivo ou pronome e outras palavras na frase. Elas indicam localização, tempo, direção ou modo.</i></h5>
        <br />
        
        <h5><i>Common Prepositions of Place:</i></h5>
        <ul>
          <li><strong>In:</strong> inside something <em>"The book is in the bag."</em> (O livro está na bolsa.)</li>
          <li><strong>On:</strong> on top of something <em>"The cup is on the table."</em> (A xícara está na mesa.)</li>
          <li><strong>At:</strong> specific location <em>"I'm at school."</em> (Estou na escola.)</li>
          <li><strong>Under:</strong> below something <em>"The cat is under the bed."</em> (O gato está embaixo da cama.)</li>
          <li><strong>Between:</strong> in the middle of two things <em>"The park is between the school and the hospital."</em> (O parque fica entre a escola e o hospital.)</li>
        </ul>
        <br />
        
        <h5><i>Common Prepositions of Time:</i></h5>
        <ul>
          <li><strong>At:</strong> specific time <em>"At 3 o'clock"</em> (Às 3 horas)</li>
          <li><strong>On:</strong> days and dates <em>"On Monday"</em> (Na segunda-feira)</li>
          <li><strong>In:</strong> months, years, seasons <em>"In January"</em> (Em janeiro)</li>
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
          <Accordion.Header>1. Complete with the correct preposition: "The keys are ____ the drawer."</Accordion.Header>
          <Accordion.Body>
            "The keys are in the drawer." (In é usado para indicar que algo está dentro de algo.)
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>2. Complete with the correct preposition: "I have a meeting ____ 2 PM."</Accordion.Header>
          <Accordion.Body>
            "I have a meeting at 2 PM." (At é usado para horários específicos.)
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>3. Complete with the correct preposition: "My birthday is ____ December."</Accordion.Header>
          <Accordion.Body>
            "My birthday is in December." (In é usado para meses.)
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