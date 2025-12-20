import Header from "../../components/header";
import Footer from "../../components/footer";
import { Helmet } from 'react-helmet-async';
import Logo from '../../components/logo';
import HeaderMenuGramatica from '../../components/headers/header-menu-gramatica';
import { Container, Col, Row, Accordion} from "react-bootstrap";
import Card from 'react-bootstrap/Card';

export default function Gramatica25() {
    return(
<>
<Helmet>
        <title>Used to</title>
      </Helmet>
<Header />
<Logo />
<HeaderMenuGramatica />

<Container>
  <Row>
    <Col className="coluna-texto1">
      <h2 className="h1-Texto-Inicial">Used to</h2>

      <h4 className="h5-Textos">
        <h3>Used to in English</h3>
        
        <h5><i>"Used to" em Inglês</i></h5>
        <p>"Used to" is used to talk about past habits, states, or situations that were true in the past but are no longer true now. It emphasizes that something was regular or continuous in the past.</p>
        <h5><i>"Used to" é usado para falar sobre hábitos, estados ou situações passadas que eram verdadeiras no passado, mas não são mais agora. Enfatiza que algo era regular ou contínuo no passado.</i></h5>
        <br />

        <h5><i>Structure:</i></h5>
        <ul>
          <li><strong>Affirmative:</strong> Subject + used to + base verb <em>"I used to play football."</em> (Eu costumava jogar futebol.)</li>
          <li><strong>Negative:</strong> Subject + didn't use to + base verb <em>"She didn't use to like coffee."</em> (Ela não costumava gostar de café.)</li>
          <li><strong>Question:</strong> Did + subject + use to + base verb? <em>"Did you use to live here?"</em> (Você costumava morar aqui?)</li>
        </ul>

        <br />
        <h5><i>Uses of "Used to":</i></h5>
        <ul>
          <li><strong>Past habits:</strong> <em>"I used to smoke, but I quit."</em> (Eu fumava, mas parei.)</li>
          <li><strong>Past states:</strong> <em>"She used to be very shy."</em> (Ela costumava ser muito tímida.)</li>
          <li><strong>Past situations:</strong> <em>"There used to be a park here."</em> (Costumava haver um parque aqui.)</li>
        </ul>

        <br />
        <h5><i>Examples:</i></h5>
        <ul>
          <li><em>"We used to go to the beach every summer."</em> – Nós costumávamos ir à praia todo verão.</li>
          <li><em>"He didn't use to wear glasses."</em> – Ele não costumava usar óculos.</li>
          <li><em>"Did they use to live in London?"</em> – Eles costumavam morar em Londres?</li>
          <li><em>"This building used to be a school."</em> – Este prédio costumava ser uma escola.</li>
        </ul>

        <br />
        <h3><i>Summary:</i></h3>
        <ul>
          <li><em>"Used to":</em> Past habits, states, or situations that are no longer true</li>
          <li>Always refers to the past</li>
          <li>Emphasizes contrast between past and present</li>
          <li>In negatives and questions, use "use to" (without 'd')</li>
        </ul>
      </h4>
    </Col>
  </Row>
</Container>

<Card className="card-obs">
  <Card.Body>
    <h3>Observações Gramaticais</h3>
    <br />
    
    <h5>1. "Used to" vs "Would":</h5>
    <p>"Used to" pode ser usado para hábitos e estados passados. "Would" só para hábitos passados.</p>
    <br />
    <p>Exemplo: <em>"I used to be tall" (estado) ✓ / "I would be tall" ✗</em></p>
    <br />
    
    <h5>2. "Used to" vs "Be used to":</h5>
    <p>"Used to" = hábito passado. "Be used to" = estar acostumado com algo.</p>
    <br />
    <p>Exemplo: <em>"I used to live here" vs "I'm used to living here"</em></p>
    <br />
    
    <h5>3. Negativa e Interrogativa:</h5>
    <p>Em negativas e perguntas, use "use to" (sem 'd') porque "did" já indica passado.</p>
    <br />
    <p>Exemplo: <em>"Did you use to play tennis?" (não "used to")</em></p>

    <h3>Resumo:</h3>
    <ul>
      <li>Hábitos e estados passados que não existem mais</li>
      <li>Sempre se refere ao passado</li>
      <li>Negativa/pergunta: "didn't use to" / "did...use to"</li>
      <li>Diferente de "be used to" (estar acostumado)</li>
    </ul>
  </Card.Body>
</Card>

<Container className="questions">
  <Row>
    <Col>
      <h1 className="h1-questions">Questions</h1>
      <Accordion className="no-border-accordion">
        <Accordion.Item eventKey="0">
          <Accordion.Header>1. Complete com "used to": "When I was young, I ____ ____ play football every day."</Accordion.Header>
          <Accordion.Body>
            "When I was young, I used to play football every day." (Hábito passado que não acontece mais)
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>2. Transforme para negativa: "She used to smoke."</Accordion.Header>
          <Accordion.Body>
            "She didn't use to smoke." (Na negativa, use "didn't use to" sem 'd')
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>3. Transforme para pergunta: "They used to live in Paris."</Accordion.Header>
          <Accordion.Body>
            "Did they use to live in Paris?" (Na pergunta, use "did...use to" sem 'd')
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>4. Complete com "used to": "There ____ ____ be a cinema here, but it closed down."</Accordion.Header>
          <Accordion.Body>
            "There used to be a cinema here, but it closed down." (Estado passado que mudou)
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>5. Complete com "used to": "He ____ ____ be very shy, but now he's confident."</Accordion.Header>
          <Accordion.Body>
            "He used to be very shy, but now he's confident." (Estado passado contrastando com o presente)
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="5">
          <Accordion.Header>6. Complete com "used to": "We ____ ____ go to that restaurant often."</Accordion.Header>
          <Accordion.Body>
            "We used to go to that restaurant often." (Hábito passado)
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="6">
          <Accordion.Header>7. Transforme para negativa: "I used to like horror movies."</Accordion.Header>
          <Accordion.Body>
            "I didn't use to like horror movies." (Negativa com "didn't use to")
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="7">
          <Accordion.Header>8. Complete com "used to": "____ you ____ ____ wear glasses when you were younger?"</Accordion.Header>
          <Accordion.Body>
            "Did you use to wear glasses when you were younger?" (Pergunta sobre hábito passado)
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="8">
          <Accordion.Header>9. Complete com "used to": "This area ____ ____ be very quiet, but now it's busy."</Accordion.Header>
          <Accordion.Body>
            "This area used to be very quiet, but now it's busy." (Estado passado contrastando com presente)
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="9">
          <Accordion.Header>10. Complete com "used to": "My grandmother ____ ____ tell me wonderful stories."</Accordion.Header>
          <Accordion.Body>
            "My grandmother used to tell me wonderful stories." (Hábito passado)
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