import Header from "../../components/header";
import Footer from "../../components/footer";
import { Helmet } from 'react-helmet-async';
import Logo from '../../components/logo';
import HeaderMenuGramatica from '../../components/headers/header-menu-gramatica';
import { Container, Col, Row, Accordion} from "react-bootstrap";
import Card from 'react-bootstrap/Card';

export default function Gramatica20() {
    return(
<>
<Helmet>
        <title>Voz Passiva</title>
      </Helmet>
<Header />
<Logo />
<HeaderMenuGramatica />

<Container>
  <Row>
    <Col className="coluna-texto1">
      <h2 className="h1-Texto-Inicial">Voz Passiva</h2>

      <h4 className="h5-Textos">
        <h3>Passive Voice</h3>
        
        <h5><i>Voz Passiva em Inglês</i></h5>
        <p>The passive voice is used when we want to emphasize the action or the object receiving the action, rather than who performs the action. It's formed with the verb "to be" + past participle.</p>
        <h5><i>A voz passiva é usada quando queremos enfatizar a ação ou o objeto que recebe a ação, em vez de quem executa a ação. É formada com o verbo "to be" + particípio passado.</i></h5>
        <br />

        <h5><i>Formation:</i></h5>
        <ul>
          <li><strong>Active:</strong> Subject + verb + object <em>"John writes letters."</em> (John escreve cartas.)</li>
          <li><strong>Passive:</strong> Object + be + past participle (+ by + subject) <em>"Letters are written by John."</em> (Cartas são escritas por John.)</li>
        </ul>

        <br />
        <h5><i>Passive Voice in Different Tenses:</i></h5>
        <ul>
          <li><strong>Present Simple:</strong> am/is/are + past participle <em>"The house is cleaned every day."</em></li>
          <li><strong>Past Simple:</strong> was/were + past participle <em>"The book was written in 1995."</em></li>
          <li><strong>Present Perfect:</strong> has/have been + past participle <em>"The work has been completed."</em></li>
          <li><strong>Future:</strong> will be + past participle <em>"The meeting will be held tomorrow."</em></li>
        </ul>

        <br />
        <h5><i>Examples:</i></h5>
        <ul>
          <li><em>"The cake was made by my mother."</em> – O bolo foi feito pela minha mãe.</li>
          <li><em>"English is spoken all over the world."</em> – Inglês é falado no mundo todo.</li>
          <li><em>"The project will be finished next week."</em> – O projeto será terminado na próxima semana.</li>
          <li><em>"The car has been repaired."</em> – O carro foi consertado.</li>
        </ul>

        <br />
        <h3><i>Summary:</i></h3>
        <ul>
          <li><em>Passive Voice:</em> Emphasizes the action or receiver, not the doer</li>
          <li>Structure: be + past participle</li>
          <li>The agent (doer) can be omitted or mentioned with "by"</li>
        </ul>
      </h4>
    </Col>
  </Row>
</Container>

<Card className="card-obs">
  <Card.Body>
    <h3>Observações Gramaticais</h3>
    <br />
    
    <h5>1. Quando Usar a Voz Passiva:</h5>
    <p>Use quando o agente (quem faz a ação) é desconhecido, óbvio, ou não importante.</p>
    <br />
    <p>Exemplo: <em>"The window was broken."</em> (Não sabemos quem quebrou)</p>
    <br />
    
    <h5>2. Omitindo o Agente:</h5>
    <p>Frequentemente omitimos "by + agent" quando não é relevante ou é óbvio.</p>
    <br />
    <p>Exemplo: <em>"Rice is grown in Asia."</em> (Por agricultores - óbvio)</p>
    <br />
    
    <h5>3. Verbos que Não Usam Passiva:</h5>
    <p>Verbos intransitivos (que não têm objeto direto) não podem ser usados na voz passiva.</p>
    <br />
    <p>Exemplo: "sleep", "arrive", "happen" não têm forma passiva.</p>

    <h3>Resumo:</h3>
    <ul>
      <li>Estrutura: be + past participle</li>
      <li>Enfatiza a ação, não quem a faz</li>
      <li>O agente pode ser omitido</li>
      <li>Muda conforme o tempo verbal</li>
    </ul>
  </Card.Body>
</Card>

<Container className="questions">
  <Row>
    <Col>
      <h1 className="h1-questions">Questions</h1>
      <Accordion className="no-border-accordion">
        <Accordion.Item eventKey="0">
          <Accordion.Header>1. Transforme para voz passiva: "The teacher explains the lesson."</Accordion.Header>
          <Accordion.Body>
            "The lesson is explained by the teacher." (Present simple passive: is/are + past participle.)
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>2. Transforme para voz passiva: "Shakespeare wrote Hamlet."</Accordion.Header>
          <Accordion.Body>
            "Hamlet was written by Shakespeare." (Past simple passive: was/were + past participle.)
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>3. Transforme para voz passiva: "They will build a new school."</Accordion.Header>
          <Accordion.Body>
            "A new school will be built." (Future passive: will be + past participle. Agente omitido.)
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>4. Complete com a forma passiva correta: "The house ____ (paint) last month."</Accordion.Header>
          <Accordion.Body>
            "The house was painted last month." (Past simple passive com "was" para singular.)
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>5. Complete com a forma passiva correta: "English ____ (speak) in many countries."</Accordion.Header>
          <Accordion.Body>
            "English is spoken in many countries." (Present simple passive para fatos gerais.)
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="5">
          <Accordion.Header>6. Transforme para voz passiva: "The company has hired new employees."</Accordion.Header>
          <Accordion.Body>
            "New employees have been hired by the company." (Present perfect passive: have/has been + past participle.)
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="6">
          <Accordion.Header>7. Complete com a forma passiva correta: "The letters ____ (deliver) every morning."</Accordion.Header>
          <Accordion.Body>
            "The letters are delivered every morning." (Present simple passive para ações habituais.)
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="7">
          <Accordion.Header>8. Transforme para voz passiva: "Someone stole my bike."</Accordion.Header>
          <Accordion.Body>
            "My bike was stolen." (Past simple passive. Agente desconhecido, então omitimos "by someone".)
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="8">
          <Accordion.Header>9. Complete com a forma passiva correta: "The problem ____ (solve) by the team."</Accordion.Header>
          <Accordion.Body>
            "The problem was solved by the team." (Past simple passive com agente mencionado.)
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="9">
          <Accordion.Header>10. Transforme para voz passiva: "They are building a new bridge."</Accordion.Header>
          <Accordion.Body>
            "A new bridge is being built." (Present continuous passive: is/are being + past participle.)
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