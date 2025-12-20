import Header from "../../components/header";
import Footer from "../../components/footer";
import { Helmet } from 'react-helmet-async';
import Logo from '../../components/logo';
import HeaderMenuGramatica from '../../components/headers/header-menu-gramatica';
import { Container, Col, Row, Accordion} from "react-bootstrap";
import Card from 'react-bootstrap/Card';

export default function Gramatica29() {
    return(
<>
<Helmet>
        <title>Wish e If Only</title>
      </Helmet>
<Header />
<Logo />
<HeaderMenuGramatica />

<Container>
  <Row>
    <Col className="coluna-texto1">
      <h2 className="h1-Texto-Inicial">Wish e If Only</h2>

      <h4 className="h5-Textos">
        <h3>Wish and If Only</h3>
        
        <h5><i>Wish e If Only em Inglês</i></h5>
        <p>"Wish" and "if only" are used to express regrets about the present, past, or desires for the future. They indicate that reality is different from what we want.</p>
        <h5><i>"Wish" e "if only" são usados para expressar arrependimentos sobre o presente, passado ou desejos para o futuro. Eles indicam que a realidade é diferente do que queremos.</i></h5>
        <br />

        <h5><i>Uses of Wish:</i></h5>
        <ul>
          <li><strong>Present regrets:</strong> wish + past simple <em>"I wish I had more time."</em> (Eu queria ter mais tempo.)</li>
          <li><strong>Past regrets:</strong> wish + past perfect <em>"I wish I had studied harder."</em> (Eu queria ter estudado mais.)</li>
          <li><strong>Future desires:</strong> wish + would <em>"I wish it would stop raining."</em> (Eu queria que parasse de chover.)</li>
          <li><strong>Complaints:</strong> wish + would <em>"I wish you would listen to me."</em> (Eu queria que você me ouvisse.)</li>
        </ul>

        <br />
        <h5><i>If Only:</i></h5>
        <ul>
          <li>Same patterns as "wish" but more emphatic</li>
          <li><em>"If only I were taller!"</em> (Se eu fosse mais alto!)</li>
          <li><em>"If only I had known!"</em> (Se eu soubesse!)</li>
        </ul>

        <br />
        <h5><i>Examples:</i></h5>
        <ul>
          <li><em>"I wish I spoke French."</em> – Eu queria falar francês. (mas não falo)</li>
          <li><em>"She wishes she had gone to the party."</em> – Ela queria ter ido à festa. (mas não foi)</li>
          <li><em>"If only it would stop raining!"</em> – Se ao menos parasse de chover!</li>
          <li><em>"I wish you wouldn't smoke."</em> – Eu queria que você não fumasse.</li>
        </ul>

        <br />
        <h3><i>Summary:</i></h3>
        <ul>
          <li><em>Present regrets:</em> wish + past simple</li>
          <li><em>Past regrets:</em> wish + past perfect</li>
          <li><em>Future desires/complaints:</em> wish + would</li>
          <li><em>If only:</em> Same patterns, more emphatic</li>
        </ul>
      </h4>
    </Col>
  </Row>
</Container>

<Card className="card-obs">
  <Card.Body>
    <h3>Observações Gramaticais</h3>
    <br />
    
    <h5>1. "Were" com Todos os Sujeitos:</h5>
    <p>Com "wish" sobre o presente, use "were" para todos os sujeitos com o verbo "to be".</p>
    <br />
    <p>Exemplo: <em>"I wish I were rich" (não "was")</em></p>
    <br />
    
    <h5>2. "Wish" + "Would":</h5>
    <p>Use "wish + would" para reclamações ou desejos sobre ações de outras pessoas.</p>
    <br />
    <p>Exemplo: <em>"I wish you would help me" (reclamação/pedido)</em></p>
    <br />
    
    <h5>3. Não Use "Would" com o Mesmo Sujeito:</h5>
    <p>Não use "would" quando o sujeito de "wish" é o mesmo da ação desejada.</p>
    <br />
    <p>Exemplo: <em>"I wish I had money" (não "I wish I would have money")</em></p>

    <h3>Resumo:</h3>
    <ul>
      <li>Expressa situações contrárias à realidade</li>
      <li>Tempos verbais "voltam" um tempo</li>
      <li>"Were" para todos os sujeitos no presente</li>
      <li>"If only" é mais enfático que "wish"</li>
    </ul>
  </Card.Body>
</Card>

<Container className="questions">
  <Row>
    <Col>
      <h1 className="h1-questions">Questions</h1>
      <Accordion className="no-border-accordion">
        <Accordion.Item eventKey="0">
          <Accordion.Header>1. Complete com a forma correta: "I wish I ____ (be) taller."</Accordion.Header>
          <Accordion.Body>
            "I wish I were taller." (Para arrependimentos sobre o presente, use past simple; "were" para todos os sujeitos)
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>2. Complete com a forma correta: "She wishes she ____ (study) harder for the exam."</Accordion.Header>
          <Accordion.Body>
            "She wishes she had studied harder for the exam." (Para arrependimentos sobre o passado, use past perfect)
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>3. Complete com a forma correta: "I wish it ____ (stop) raining."</Accordion.Header>
          <Accordion.Body>
            "I wish it would stop raining." (Para desejos sobre o futuro ou reclamações, use "would")
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>4. Complete com a forma correta: "If only I ____ (have) more money!"</Accordion.Header>
          <Accordion.Body>
            "If only I had more money!" ("If only" segue as mesmas regras de "wish"; presente = past simple)
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>5. Complete com a forma correta: "I wish you ____ (not make) so much noise."</Accordion.Header>
          <Accordion.Body>
            "I wish you wouldn't make so much noise." (Reclamação sobre ação de outra pessoa = "would")
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="5">
          <Accordion.Header>6. Complete com a forma correta: "He wishes he ____ (go) to university."</Accordion.Header>
          <Accordion.Body>
            "He wishes he had gone to university." (Arrependimento sobre o passado = past perfect)
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="6">
          <Accordion.Header>7. Complete com a forma correta: "If only she ____ (call) me yesterday!"</Accordion.Header>
          <Accordion.Body>
            "If only she had called me yesterday!" (Arrependimento sobre o passado = past perfect)
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="7">
          <Accordion.Header>8. Complete com a forma correta: "I wish I ____ (can) speak Chinese."</Accordion.Header>
          <Accordion.Body>
            "I wish I could speak Chinese." (Habilidade no presente: "can" vira "could")
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="8">
          <Accordion.Header>9. Complete com a forma correta: "She wishes the weather ____ (be) better tomorrow."</Accordion.Header>
          <Accordion.Body>
            "She wishes the weather would be better tomorrow." (Desejo sobre o futuro = "would")
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="9">
          <Accordion.Header>10. Complete com a forma correta: "If only I ____ (know) the answer!"</Accordion.Header>
          <Accordion.Body>
            "If only I knew the answer!" (Situação presente contrária à realidade = past simple)
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