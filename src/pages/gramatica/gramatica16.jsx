import Header from "../../components/header";
import Footer from "../../components/footer";
import { Helmet } from 'react-helmet-async';
import Logo from '../../components/logo';
import HeaderMenuGramatica from '../../components/headers/header-menu-gramatica';
import { Container, Col, Row, Accordion} from "react-bootstrap";
import Card from 'react-bootstrap/Card';

export default function Gramatica16() {
    return(
<>
<Helmet>
        <title>Verbos Modais</title>
      </Helmet>
<Header />
<Logo />
<HeaderMenuGramatica />

<Container>
  <Row>
    <Col className="coluna-texto1">
      <h2 className="h1-Texto-Inicial">Verbos Modais</h2>

      <h4 className="h5-Textos">
        <h3>Modal Verbs in English</h3>
        
        <h5><i>Verbos Modais em Inglês</i></h5>
        <p>Modal verbs are auxiliary verbs that express ability, possibility, permission, obligation, or necessity. They are used with the base form of the main verb and do not change form according to the subject.</p>
        <h5><i>Os verbos modais são verbos auxiliares que expressam habilidade, possibilidade, permissão, obrigação ou necessidade. Eles são usados com a forma base do verbo principal e não mudam de forma de acordo com o sujeito.</i></h5>
        <br />

        <h5><i>Common Modal Verbs:</i></h5>
        <ul>
          <li><strong>Can:</strong> Ability or possibility <em>"I can swim."</em> (Eu sei nadar.)</li>
          <li><strong>Could:</strong> Past ability or polite request <em>"Could you help me?"</em> (Você poderia me ajudar?)</li>
          <li><strong>May:</strong> Permission or possibility <em>"May I come in?"</em> (Posso entrar?)</li>
          <li><strong>Might:</strong> Possibility <em>"It might rain."</em> (Pode chover.)</li>
          <li><strong>Must:</strong> Obligation or strong necessity <em>"You must study."</em> (Você deve estudar.)</li>
          <li><strong>Should:</strong> Advice or recommendation <em>"You should rest."</em> (Você deveria descansar.)</li>
          <li><strong>Would:</strong> Polite request or conditional <em>"Would you like coffee?"</em> (Você gostaria de café?)</li>
        </ul>

        <br />
        <h5><i>Examples:</i></h5>
        <ul>
          <li><em>"She can speak three languages."</em> – Ela sabe falar três idiomas.</li>
          <li><em>"We should arrive early."</em> – Nós deveríamos chegar cedo.</li>
          <li><em>"You must wear a seatbelt."</em> – Você deve usar cinto de segurança.</li>
          <li><em>"It might be cold tomorrow."</em> – Pode estar frio amanhã.</li>
        </ul>

        <br />
        <h3><i>Summary:</i></h3>
        <ul>
          <li><em>Modal Verbs:</em> Express ability, possibility, permission, obligation, or necessity.</li>
          <li>They are followed by the base form of the main verb.</li>
          <li>They do not change form according to the subject.</li>
        </ul>
      </h4>
    </Col>
  </Row>
</Container>

<Card className="card-obs">
  <Card.Body>
    <h3>Observações Gramaticais</h3>
    <br />
    
    <h5>1. Estrutura dos Verbos Modais:</h5>
    <p>Os verbos modais sempre são seguidos pelo verbo principal na forma base (infinitivo sem "to").</p>
    <br />
    <p>Exemplo: <em>"She can dance."</em> (Ela sabe dançar).</p>
    <br />
    
    <h5>2. Negativas com Verbos Modais:</h5>
    <p>Para formar negativas, adicione "not" após o verbo modal.</p>
    <br />
    <p>Exemplo: <em>"I cannot (can't) swim."</em> (Eu não sei nadar).</p>
    <br />
    
    <h5>3. Perguntas com Verbos Modais:</h5>
    <p>Para formar perguntas, coloque o verbo modal antes do sujeito.</p>
    <br />
    <p>Exemplo: <em>"Can you help me?"</em> (Você pode me ajudar?).</p>
    <br />

    <h3>Resumo:</h3>
    <ul>
      <li>Verbos modais + verbo base (sem "to")</li>
      <li>Negativa: modal + not + verbo base</li>
      <li>Pergunta: modal + sujeito + verbo base</li>
    </ul>
  </Card.Body>
</Card>

<Container className="questions">
  <Row>
    <Col>
      <h1 className="h1-questions">Questions</h1>
      <Accordion className="no-border-accordion">
        <Accordion.Item eventKey="0">
          <Accordion.Header>1. Complete a frase com o verbo modal correto: "I ____ speak English fluently."</Accordion.Header>
          <Accordion.Body>
            "I can speak English fluently." (Usamos "can" para expressar habilidade.)
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>2. Complete a frase com o verbo modal correto: "You ____ study harder for the exam."</Accordion.Header>
          <Accordion.Body>
            "You should study harder for the exam." (Usamos "should" para dar conselhos.)
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>3. Complete a frase com o verbo modal correto: "____ I borrow your pen?"</Accordion.Header>
          <Accordion.Body>
            "May I borrow your pen?" (Usamos "may" para pedir permissão educadamente.)
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>4. Complete a frase com o verbo modal correto: "It ____ rain later today."</Accordion.Header>
          <Accordion.Body>
            "It might rain later today." (Usamos "might" para expressar possibilidade.)
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>5. Complete a frase com o verbo modal correto: "Students ____ wear uniforms at this school."</Accordion.Header>
          <Accordion.Body>
            "Students must wear uniforms at this school." (Usamos "must" para expressar obrigação.)
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="5">
          <Accordion.Header>6. Transforme para negativa: "She can drive a car."</Accordion.Header>
          <Accordion.Body>
            "She cannot (can't) drive a car." (Para formar negativa com modais, adicionamos "not".)
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="6">
          <Accordion.Header>7. Transforme para pergunta: "You should call your mother."</Accordion.Header>
          <Accordion.Body>
            "Should you call your mother?" (Para formar pergunta, colocamos o modal antes do sujeito.)
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="7">
          <Accordion.Header>8. Complete a frase com o verbo modal correto: "____ you like some tea?"</Accordion.Header>
          <Accordion.Body>
            "Would you like some tea?" (Usamos "would" para ofertas educadas.)
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="8">
          <Accordion.Header>9. Complete a frase com o verbo modal correto: "When I was young, I ____ run very fast."</Accordion.Header>
          <Accordion.Body>
            "When I was young, I could run very fast." (Usamos "could" para habilidade no passado.)
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="9">
          <Accordion.Header>10. Complete a frase com o verbo modal correto: "You ____ not smoke in this building."</Accordion.Header>
          <Accordion.Body>
            "You must not smoke in this building." (Usamos "must not" para proibição.)
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