import Header from "../../components/header";
import Footer from "../../components/footer";
import { Helmet } from 'react-helmet-async';
import Logo from '../../components/logo';
import HeaderMenuGramatica from '../../components/headers/header-menu-gramatica';
import { Container, Col, Row, Accordion} from "react-bootstrap";
import Card from 'react-bootstrap/Card';

export default function Gramatica22() {
    return(
<>
<Helmet>
        <title>Question Tags</title>
      </Helmet>
<Header />
<Logo />
<HeaderMenuGramatica />

<Container>
  <Row>
    <Col className="coluna-texto1">
      <h2 className="h1-Texto-Inicial">Question Tags</h2>

      <h4 className="h5-Textos">
        <h3>Question Tags in English</h3>
        
        <h5><i>Question Tags em Inglês</i></h5>
        <p>Question tags are short questions added to the end of statements to confirm information or ask for agreement. They follow specific patterns based on the main statement.</p>
        <h5><i>Question tags são perguntas curtas adicionadas ao final de afirmações para confirmar informações ou pedir concordância. Elas seguem padrões específicos baseados na afirmação principal.</i></h5>
        <br />

        <h5><i>Basic Rules:</i></h5>
        <ul>
          <li><strong>Positive statement → Negative tag:</strong> "You are happy, aren't you?" (Você está feliz, não está?)</li>
          <li><strong>Negative statement → Positive tag:</strong> "You aren't happy, are you?" (Você não está feliz, está?)</li>
        </ul>

        <br />
        <h5><i>Common Question Tags:</i></h5>
        <ul>
          <li><strong>With "be":</strong> "She is a teacher, isn't she?" / "They aren't here, are they?"</li>
          <li><strong>With "have":</strong> "You have a car, don't you?" / "He hasn't arrived, has he?"</li>
          <li><strong>With "will":</strong> "It will rain, won't it?" / "She won't come, will she?"</li>
          <li><strong>With "can":</strong> "You can swim, can't you?" / "He can't drive, can he?"</li>
          <li><strong>Present simple:</strong> "You like coffee, don't you?" / "She doesn't work here, does she?"</li>
          <li><strong>Past simple:</strong> "You went there, didn't you?" / "He didn't call, did he?"</li>
        </ul>

        <br />
        <h5><i>Examples:</i></h5>
        <ul>
          <li><em>"It's a beautiful day, isn't it?"</em> – É um dia lindo, não é?</li>
          <li><em>"You don't speak French, do you?"</em> – Você não fala francês, fala?</li>
          <li><em>"They will help us, won't they?"</em> – Eles vão nos ajudar, não vão?</li>
          <li><em>"She hasn't finished yet, has she?"</em> – Ela ainda não terminou, terminou?</li>
        </ul>

        <br />
        <h3><i>Summary:</i></h3>
        <ul>
          <li><em>Question Tags:</em> Short questions to confirm or seek agreement</li>
          <li>Positive statement → negative tag</li>
          <li>Negative statement → positive tag</li>
          <li>Use the same auxiliary verb as in the main statement</li>
        </ul>
      </h4>
    </Col>
  </Row>
</Container>

<Card className="card-obs">
  <Card.Body>
    <h3>Observações Gramaticais</h3>
    <br />
    
    <h5>1. Pronomes nas Question Tags:</h5>
    <p>Use sempre pronomes nas question tags, mesmo que o sujeito seja um nome próprio.</p>
    <br />
    <p>Exemplo: <em>"John is coming, isn't he?"</em> (não "isn't John?")</p>
    <br />
    
    <h5>2. Casos Especiais:</h5>
    <p>Com "I am", a question tag é "aren't I?" (não "am I not?")</p>
    <br />
    <p>Exemplo: <em>"I am right, aren't I?"</em></p>
    <br />
    
    <h5>3. Imperatives:</h5>
    <p>Com imperativos, use "will you?" ou "won't you?"</p>
    <br />
    <p>Exemplo: <em>"Close the door, will you?"</em></p>
    <br />
    
    <h5>4. "Let's":</h5>
    <p>Com "Let's", use "shall we?"</p>
    <br />
    <p>Exemplo: <em>"Let's go, shall we?"</em></p>

    <h3>Resumo:</h3>
    <ul>
      <li>Afirmativa → tag negativa</li>
      <li>Negativa → tag positiva</li>
      <li>Use o mesmo auxiliar da frase principal</li>
      <li>Sempre use pronomes nas tags</li>
    </ul>
  </Card.Body>
</Card>

<Container className="questions">
  <Row>
    <Col>
      <h1 className="h1-questions">Questions</h1>
      <Accordion className="no-border-accordion">
        <Accordion.Item eventKey="0">
          <Accordion.Header>1. Complete com a question tag correta: "You are a student, ____?"</Accordion.Header>
          <Accordion.Body>
            "You are a student, aren't you?" (Afirmativa com "are" → tag negativa "aren't you?")
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>2. Complete com a question tag correta: "She doesn't like pizza, ____?"</Accordion.Header>
          <Accordion.Body>
            "She doesn't like pizza, does she?" (Negativa com "doesn't" → tag positiva "does she?")
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>3. Complete com a question tag correta: "They will come tomorrow, ____?"</Accordion.Header>
          <Accordion.Body>
            "They will come tomorrow, won't they?" (Afirmativa com "will" → tag negativa "won't they?")
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>4. Complete com a question tag correta: "You can't swim, ____?"</Accordion.Header>
          <Accordion.Body>
            "You can't swim, can you?" (Negativa com "can't" → tag positiva "can you?")
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>5. Complete com a question tag correta: "He has finished his work, ____?"</Accordion.Header>
          <Accordion.Body>
            "He has finished his work, hasn't he?" (Afirmativa com "has" → tag negativa "hasn't he?")
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="5">
          <Accordion.Header>6. Complete com a question tag correta: "We went to the cinema yesterday, ____?"</Accordion.Header>
          <Accordion.Body>
            "We went to the cinema yesterday, didn't we?" (Afirmativa no passado → tag negativa "didn't we?")
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="6">
          <Accordion.Header>7. Complete com a question tag correta: "I am late, ____?"</Accordion.Header>
          <Accordion.Body>
            "I am late, aren't I?" (Caso especial: com "I am", use "aren't I?")
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="7">
          <Accordion.Header>8. Complete com a question tag correta: "Let's have dinner, ____?"</Accordion.Header>
          <Accordion.Body>
            "Let's have dinner, shall we?" (Com "Let's", sempre use "shall we?")
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="8">
          <Accordion.Header>9. Complete com a question tag correta: "Close the window, ____?"</Accordion.Header>
          <Accordion.Body>
            "Close the window, will you?" (Com imperativos, use "will you?")
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="9">
          <Accordion.Header>10. Complete com a question tag correta: "Mary isn't coming, ____?"</Accordion.Header>
          <Accordion.Body>
            "Mary isn't coming, is she?" (Negativa com "isn't" → tag positiva "is she?")
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