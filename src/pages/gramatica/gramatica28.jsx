import Header from "../../components/header";
import Footer from "../../components/footer";
import { Helmet } from 'react-helmet-async';
import Logo from '../../components/logo';
import HeaderMenuGramatica from '../../components/headers/header-menu-gramatica';
import { Container, Col, Row, Accordion} from "react-bootstrap";
import Card from 'react-bootstrap/Card';

export default function Gramatica28() {
    return(
<>
<Helmet>
        <title>Infinitivo e Gerúndio</title>
      </Helmet>
<Header />
<Logo />
<HeaderMenuGramatica />

<Container>
  <Row>
    <Col className="coluna-texto1">
      <h2 className="h1-Texto-Inicial">Infinitivo e Gerúndio</h2>

      <h4 className="h5-Textos">
        <h3>Infinitive and Gerund</h3>
        
        <h5><i>Infinitivo e Gerúndio em Inglês</i></h5>
        <p>The infinitive (to + verb) and gerund (verb + -ing) are non-finite verb forms that can function as nouns, adjectives, or adverbs in sentences.</p>
        <h5><i>O infinitivo (to + verbo) e o gerúndio (verbo + -ing) são formas verbais não finitas que podem funcionar como substantivos, adjetivos ou advérbios nas frases.</i></h5>
        <br />

        <h5><i>Common Uses:</i></h5>
        <ul>
          <li><strong>After certain verbs:</strong> want, need, decide (infinitive) / enjoy, finish, avoid (gerund)</li>
          <li><strong>As subjects:</strong> <em>"To learn English is important" / "Learning English is important"</em></li>
          <li><strong>After prepositions:</strong> Always gerund <em>"I'm interested in learning Spanish."</em></li>
          <li><strong>After adjectives:</strong> Usually infinitive <em>"It's easy to understand."</em></li>
        </ul>

        <br />
        <h5><i>Verbs + Infinitive:</i></h5>
        <ul>
          <li>want, need, decide, plan, hope, expect, promise, refuse</li>
          <li><em>"I want to travel."</em> / <em>"She decided to study abroad."</em></li>
        </ul>

        <br />
        <h5><i>Verbs + Gerund:</i></h5>
        <ul>
          <li>enjoy, finish, avoid, suggest, mind, practice, consider</li>
          <li><em>"I enjoy reading."</em> / <em>"She finished working."</em></li>
        </ul>

        <br />
        <h5><i>Examples:</i></h5>
        <ul>
          <li><em>"I love to dance."</em> / <em>"I love dancing."</em> – Eu amo dançar.</li>
          <li><em>"She stopped to rest."</em> (parou para descansar) vs <em>"She stopped resting."</em> (parou de descansar)</li>
          <li><em>"Swimming is good exercise."</em> – Nadar é um bom exercício.</li>
          <li><em>"It's important to be on time."</em> – É importante chegar na hora.</li>
        </ul>

        <br />
        <h3><i>Summary:</i></h3>
        <ul>
          <li><em>Infinitive:</em> to + base verb</li>
          <li><em>Gerund:</em> verb + -ing</li>
          <li>Different verbs require different forms</li>
          <li>After prepositions, always use gerund</li>
        </ul>
      </h4>
    </Col>
  </Row>
</Container>

<Card className="card-obs">
  <Card.Body>
    <h3>Observações Gramaticais</h3>
    <br />
    
    <h5>1. Verbos que Mudam de Significado:</h5>
    <p>Alguns verbos têm significados diferentes com infinitivo ou gerúndio.</p>
    <br />
    <p>Exemplo: <em>"I stopped to smoke" (parei para fumar) vs "I stopped smoking" (parei de fumar)</em></p>
    <br />
    
    <h5>2. Após Preposições:</h5>
    <p>Sempre use gerúndio após preposições.</p>
    <br />
    <p>Exemplo: <em>"I'm good at playing tennis" (não "to play")</em></p>
    <br />
    
    <h5>3. Como Sujeito:</h5>
    <p>Tanto infinitivo quanto gerúndio podem ser sujeitos, mas gerúndio é mais comum.</p>
    <br />
    <p>Exemplo: <em>"Swimming is fun" (mais comum que "To swim is fun")</em></p>

    <h3>Resumo:</h3>
    <ul>
      <li>Diferentes verbos exigem diferentes formas</li>
      <li>Após preposições = sempre gerúndio</li>
      <li>Alguns verbos mudam significado</li>
      <li>Gerúndio mais comum como sujeito</li>
    </ul>
  </Card.Body>
</Card>

<Container className="questions">
  <Row>
    <Col>
      <h1 className="h1-questions">Questions</h1>
      <Accordion className="no-border-accordion">
        <Accordion.Item eventKey="0">
          <Accordion.Header>1. Complete com infinitivo ou gerúndio: "I want ____ (learn) Spanish."</Accordion.Header>
          <Accordion.Body>
            "I want to learn Spanish." (O verbo "want" é seguido de infinitivo)
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>2. Complete com infinitivo ou gerúndio: "She enjoys ____ (read) books."</Accordion.Header>
          <Accordion.Body>
            "She enjoys reading books." (O verbo "enjoy" é seguido de gerúndio)
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>3. Complete com infinitivo ou gerúndio: "I'm interested in ____ (study) medicine."</Accordion.Header>
          <Accordion.Body>
            "I'm interested in studying medicine." (Após preposições, sempre gerúndio)
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>4. Complete com infinitivo ou gerúndio: "It's easy ____ (understand) this lesson."</Accordion.Header>
          <Accordion.Body>
            "It's easy to understand this lesson." (Após adjetivos, geralmente infinitivo)
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>5. Complete com infinitivo ou gerúndio: "He finished ____ (work) at 6 PM."</Accordion.Header>
          <Accordion.Body>
            "He finished working at 6 PM." (O verbo "finish" é seguido de gerúndio)
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="5">
          <Accordion.Header>6. Complete com infinitivo ou gerúndio: "____ (swim) is good exercise."</Accordion.Header>
          <Accordion.Body>
            "Swimming is good exercise." (Como sujeito, gerúndio é mais comum)
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="6">
          <Accordion.Header>7. Complete com infinitivo ou gerúndio: "I decided ____ (go) home early."</Accordion.Header>
          <Accordion.Body>
            "I decided to go home early." (O verbo "decide" é seguido de infinitivo)
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="7">
          <Accordion.Header>8. Complete com infinitivo ou gerúndio: "She avoided ____ (talk) about the problem."</Accordion.Header>
          <Accordion.Body>
            "She avoided talking about the problem." (O verbo "avoid" é seguido de gerúndio)
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="8">
          <Accordion.Header>9. Complete com infinitivo ou gerúndio: "I'm looking forward to ____ (see) you."</Accordion.Header>
          <Accordion.Body>
            "I'm looking forward to seeing you." ("To" aqui é preposição, então use gerúndio)
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="9">
          <Accordion.Header>10. Complete com infinitivo ou gerúndio: "She promised ____ (call) me later."</Accordion.Header>
          <Accordion.Body>
            "She promised to call me later." (O verbo "promise" é seguido de infinitivo)
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