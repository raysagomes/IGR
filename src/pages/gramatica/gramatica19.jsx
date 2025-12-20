import Header from "../../components/header";
import Footer from "../../components/footer";
import { Helmet } from 'react-helmet-async';
import Logo from '../../components/logo';
import HeaderMenuGramatica from '../../components/headers/header-menu-gramatica';
import { Container, Col, Row, Accordion} from "react-bootstrap";
import Card from 'react-bootstrap/Card';

export default function Gramatica19() {
    return(
<>
<Helmet>
        <title>Condicionais</title>
      </Helmet>
<Header />
<Logo />
<HeaderMenuGramatica />

<Container>
  <Row>
    <Col className="coluna-texto1">
      <h2 className="h1-Texto-Inicial">Condicionais</h2>

      <h4 className="h5-Textos">
        <h3>Conditional Sentences</h3>
        
        <h5><i>Frases Condicionais em Inglês</i></h5>
        <p>Conditional sentences express situations that depend on certain conditions. They show what happens or would happen if something else occurs.</p>
        <h5><i>As frases condicionais expressam situações que dependem de certas condições. Elas mostram o que acontece ou aconteceria se algo mais ocorresse.</i></h5>
        <br />

        <h5><i>Types of Conditionals:</i></h5>
        <ul>
          <li><strong>Zero Conditional:</strong> General truths <em>"If you heat water, it boils."</em> (Se você esquentar água, ela ferve.)</li>
          <li><strong>First Conditional:</strong> Real future possibilities <em>"If it rains, I will stay home."</em> (Se chover, eu ficarei em casa.)</li>
          <li><strong>Second Conditional:</strong> Unreal present situations <em>"If I were rich, I would travel the world."</em> (Se eu fosse rico, viajaria pelo mundo.)</li>
          <li><strong>Third Conditional:</strong> Unreal past situations <em>"If I had studied, I would have passed."</em> (Se eu tivesse estudado, teria passado.)</li>
        </ul>

        <br />
        <h5><i>Structure:</i></h5>
        <ul>
          <li><strong>Zero:</strong> If + present simple, present simple</li>
          <li><strong>First:</strong> If + present simple, will + base verb</li>
          <li><strong>Second:</strong> If + past simple, would + base verb</li>
          <li><strong>Third:</strong> If + past perfect, would have + past participle</li>
        </ul>

        <br />
        <h5><i>Examples:</i></h5>
        <ul>
          <li><em>"If you study hard, you pass the exam."</em> – Se você estudar muito, passa na prova. (Zero)</li>
          <li><em>"If she calls, I will answer."</em> – Se ela ligar, eu atenderei. (First)</li>
          <li><em>"If I had time, I would help you."</em> – Se eu tivesse tempo, te ajudaria. (Second)</li>
          <li><em>"If we had left earlier, we wouldn't have been late."</em> – Se tivéssemos saído mais cedo, não teríamos nos atrasado. (Third)</li>
        </ul>

        <br />
        <h3><i>Summary:</i></h3>
        <ul>
          <li><em>Conditionals:</em> Express cause and effect relationships</li>
          <li>Each type has specific uses and time references</li>
          <li>The "if" clause can come first or second in the sentence</li>
        </ul>
      </h4>
    </Col>
  </Row>
</Container>

<Card className="card-obs">
  <Card.Body>
    <h3>Observações Gramaticais</h3>
    <br />
    
    <h5>1. Ordem das Cláusulas:</h5>
    <p>A cláusula com "if" pode vir no início ou no final da frase. Quando vem no início, use vírgula.</p>
    <br />
    <p>Exemplo: <em>"If it rains, I'll stay home" = "I'll stay home if it rains"</em></p>
    <br />
    
    <h5>2. "Were" no Second Conditional:</h5>
    <p>No second conditional, use "were" para todos os sujeitos com o verbo "to be".</p>
    <br />
    <p>Exemplo: <em>"If I were you, I would study more."</em></p>
    <br />
    
    <h5>3. Outras Palavras Condicionais:</h5>
    <p>Além de "if", podemos usar "unless" (a menos que), "provided that" (desde que), "as long as" (contanto que).</p>
    <br />
    <p>Exemplo: <em>"Unless you hurry, you'll be late."</em></p>

    <h3>Resumo:</h3>
    <ul>
      <li>Zero = verdades gerais</li>
      <li>First = possibilidades reais futuras</li>
      <li>Second = situações irreais presentes</li>
      <li>Third = situações irreais passadas</li>
    </ul>
  </Card.Body>
</Card>

<Container className="questions">
  <Row>
    <Col>
      <h1 className="h1-questions">Questions</h1>
      <Accordion className="no-border-accordion">
        <Accordion.Item eventKey="0">
          <Accordion.Header>1. Complete com a forma correta: "If it ____ (rain) tomorrow, we will cancel the picnic."</Accordion.Header>
          <Accordion.Body>
            "If it rains tomorrow, we will cancel the picnic." (First conditional: if + present simple, will + base verb.)
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>2. Complete com a forma correta: "If I ____ (be) you, I would apologize."</Accordion.Header>
          <Accordion.Body>
            "If I were you, I would apologize." (Second conditional: use "were" para todos os sujeitos.)
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>3. Complete com a forma correta: "If you heat ice, it ____ (melt)."</Accordion.Header>
          <Accordion.Body>
            "If you heat ice, it melts." (Zero conditional: verdades gerais usam presente simples em ambas as partes.)
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>4. Complete com a forma correta: "If she ____ (study) harder, she would have passed the exam."</Accordion.Header>
          <Accordion.Body>
            "If she had studied harder, she would have passed the exam." (Third conditional: if + past perfect, would have + past participle.)
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>5. Complete com a forma correta: "We ____ (go) to the beach if the weather is nice."</Accordion.Header>
          <Accordion.Body>
            "We will go to the beach if the weather is nice." (First conditional: will + base verb na cláusula principal.)
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="5">
          <Accordion.Header>6. Complete com a forma correta: "If I ____ (have) more money, I would buy a new car."</Accordion.Header>
          <Accordion.Body>
            "If I had more money, I would buy a new car." (Second conditional: if + past simple, would + base verb.)
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="6">
          <Accordion.Header>7. Complete com a forma correta: "If they ____ (arrive) on time, they wouldn't have missed the show."</Accordion.Header>
          <Accordion.Body>
            "If they had arrived on time, they wouldn't have missed the show." (Third conditional para situações irreais no passado.)
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="7">
          <Accordion.Header>8. Complete com a forma correta: "If you ____ (not water) plants, they die."</Accordion.Header>
          <Accordion.Body>
            "If you don't water plants, they die." (Zero conditional: verdade geral sobre plantas.)
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="8">
          <Accordion.Header>9. Complete com a forma correta: "She ____ (call) you if she needs help."</Accordion.Header>
          <Accordion.Body>
            "She will call you if she needs help." (First conditional: possibilidade real futura.)
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="9">
          <Accordion.Header>10. Complete com a forma correta: "If we ____ (leave) earlier, we would avoid traffic."</Accordion.Header>
          <Accordion.Body>
            "If we left earlier, we would avoid traffic." (Second conditional: situação hipotética presente.)
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