import Header from "../../components/header";
import Footer from "../../components/footer";
import { Helmet } from 'react-helmet-async';
import Logo from '../../components/logo';
import HeaderMenuGramatica from '../../components/headers/header-menu-gramatica';
import { Container, Col, Row, Accordion} from "react-bootstrap";
import Card from 'react-bootstrap/Card';

export default function Gramatica21() {
    return(
<>
<Helmet>
        <title>Discurso Indireto</title>
      </Helmet>
<Header />
<Logo />
<HeaderMenuGramatica />

<Container>
  <Row>
    <Col className="coluna-texto1">
      <h2 className="h1-Texto-Inicial">Discurso Indireto</h2>

      <h4 className="h5-Textos">
        <h3>Reported Speech</h3>
        
        <h5><i>Discurso Indireto em Inglês</i></h5>
        <p>Reported speech is used to tell someone what another person said without using their exact words. We usually change the tense, pronouns, and time expressions.</p>
        <h5><i>O discurso indireto é usado para contar a alguém o que outra pessoa disse sem usar suas palavras exatas. Geralmente mudamos o tempo verbal, pronomes e expressões de tempo.</i></h5>
        <br />

        <h5><i>Basic Structure:</i></h5>
        <ul>
          <li><strong>Direct Speech:</strong> "I am happy," she said. (Ela disse: "Eu estou feliz.")</li>
          <li><strong>Reported Speech:</strong> She said (that) she was happy. (Ela disse que estava feliz.)</li>
        </ul>

        <br />
        <h5><i>Tense Changes:</i></h5>
        <ul>
          <li><strong>Present Simple → Past Simple:</strong> "I work" → He said he worked</li>
          <li><strong>Present Continuous → Past Continuous:</strong> "I am working" → He said he was working</li>
          <li><strong>Past Simple → Past Perfect:</strong> "I worked" → He said he had worked</li>
          <li><strong>Will → Would:</strong> "I will go" → He said he would go</li>
          <li><strong>Can → Could:</strong> "I can swim" → He said he could swim</li>
        </ul>

        <br />
        <h5><i>Time and Place Changes:</i></h5>
        <ul>
          <li>Today → that day</li>
          <li>Yesterday → the day before</li>
          <li>Tomorrow → the next day</li>
          <li>Here → there</li>
          <li>This → that</li>
        </ul>

        <br />
        <h5><i>Examples:</i></h5>
        <ul>
          <li><em>"I love pizza," he said.</em> → He said he loved pizza.</li>
          <li><em>"We are leaving tomorrow," they said.</em> → They said they were leaving the next day.</li>
          <li><em>"I have finished my work," she said.</em> → She said she had finished her work.</li>
        </ul>

        <br />
        <h3><i>Summary:</i></h3>
        <ul>
          <li><em>Reported Speech:</em> Reports what someone said without direct quotes</li>
          <li>Tenses usually move one step back in time</li>
          <li>Pronouns and time expressions change accordingly</li>
        </ul>
      </h4>
    </Col>
  </Row>
</Container>

<Card className="card-obs">
  <Card.Body>
    <h3>Observações Gramaticais</h3>
    <br />
    
    <h5>1. Reporting Verbs:</h5>
    <p>Além de "said", podemos usar outros verbos como "told", "explained", "mentioned", "claimed".</p>
    <br />
    <p>Exemplo: <em>She told me she was tired.</em> (Note: "told" precisa de objeto)</p>
    <br />
    
    <h5>2. Questions in Reported Speech:</h5>
    <p>Para perguntas, use "asked" e mude a ordem das palavras para afirmativa.</p>
    <br />
    <p>Exemplo: <em>"Where do you live?" → He asked where I lived.</em></p>
    <br />
    
    <h5>3. Commands in Reported Speech:</h5>
    <p>Para comandos, use "told/asked + object + to + infinitive".</p>
    <br />
    <p>Exemplo: <em>"Close the door!" → He told me to close the door.</em></p>

    <h3>Resumo:</h3>
    <ul>
      <li>Tempos verbais "voltam" um tempo</li>
      <li>Pronomes e expressões de tempo mudam</li>
      <li>Perguntas e comandos têm estruturas especiais</li>
      <li>Use verbos apropriados para reportar</li>
    </ul>
  </Card.Body>
</Card>

<Container className="questions">
  <Row>
    <Col>
      <h1 className="h1-questions">Questions</h1>
      <Accordion className="no-border-accordion">
        <Accordion.Item eventKey="0">
          <Accordion.Header>1. Transforme para discurso indireto: "I am tired," she said.</Accordion.Header>
          <Accordion.Body>
            She said (that) she was tired. (Present continuous → past continuous, "I" → "she")
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>2. Transforme para discurso indireto: "We will arrive tomorrow," they said.</Accordion.Header>
          <Accordion.Body>
            They said (that) they would arrive the next day. ("will" → "would", "tomorrow" → "the next day")
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>3. Transforme para discurso indireto: "I have finished my homework," he said.</Accordion.Header>
          <Accordion.Body>
            He said (that) he had finished his homework. (Present perfect → past perfect)
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>4. Transforme para discurso indireto: "Where do you live?" she asked.</Accordion.Header>
          <Accordion.Body>
            She asked where I lived. (Pergunta: use "asked" e ordem afirmativa, present → past)
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>5. Transforme para discurso indireto: "Close the window!" the teacher said.</Accordion.Header>
          <Accordion.Body>
            The teacher told us to close the window. (Comando: told + object + to + infinitive)
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="5">
          <Accordion.Header>6. Transforme para discurso indireto: "I can't swim," he said.</Accordion.Header>
          <Accordion.Body>
            He said (that) he couldn't swim. ("can't" → "couldn't")
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="6">
          <Accordion.Header>7. Transforme para discurso indireto: "We went to the cinema yesterday," they said.</Accordion.Header>
          <Accordion.Body>
            They said (that) they had gone to the cinema the day before. (Past simple → past perfect, "yesterday" → "the day before")
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="7">
          <Accordion.Header>8. Transforme para discurso indireto: "Are you coming to the party?" she asked.</Accordion.Header>
          <Accordion.Body>
            She asked if/whether I was coming to the party. (Yes/no question: use "if" or "whether")
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="8">
          <Accordion.Header>9. Transforme para discurso indireto: "Don't be late!" my mother said.</Accordion.Header>
          <Accordion.Body>
            My mother told me not to be late. (Comando negativo: told + object + not to + infinitive)
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="9">
          <Accordion.Header>10. Transforme para discurso indireto: "I am reading this book," she said.</Accordion.Header>
          <Accordion.Body>
            She said (that) she was reading that book. (Present continuous → past continuous, "this" → "that")
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