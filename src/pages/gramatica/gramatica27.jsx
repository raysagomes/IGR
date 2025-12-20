import Header from "../../components/header";
import Footer from "../../components/footer";
import { Helmet } from 'react-helmet-async';
import Logo from '../../components/logo';
import HeaderMenuGramatica from '../../components/headers/header-menu-gramatica';
import { Container, Col, Row, Accordion} from "react-bootstrap";
import Card from 'react-bootstrap/Card';

export default function Gramatica27() {
    return(
<>
<Helmet>
        <title>Conectores</title>
      </Helmet>
<Header />
<Logo />
<HeaderMenuGramatica />

<Container>
  <Row>
    <Col className="coluna-texto1">
      <h2 className="h1-Texto-Inicial">Conectores</h2>

      <h4 className="h5-Textos">
        <h3>Connectors in English</h3>
        
        <h5><i>Conectores em Inglês</i></h5>
        <p>Connectors are words or phrases that link ideas, sentences, or paragraphs together. They help create logical relationships between different parts of a text.</p>
        <h5><i>Os conectores são palavras ou frases que ligam ideias, frases ou parágrafos. Eles ajudam a criar relações lógicas entre diferentes partes de um texto.</i></h5>
        <br />

        <h5><i>Types of Connectors:</i></h5>
        <ul>
          <li><strong>Addition:</strong> and, also, furthermore, moreover <em>"I like coffee and tea."</em></li>
          <li><strong>Contrast:</strong> but, however, although, despite <em>"It's cold, but sunny."</em></li>
          <li><strong>Cause/Effect:</strong> because, so, therefore, as a result <em>"It's raining, so I'll stay home."</em></li>
          <li><strong>Time:</strong> when, while, after, before, then <em>"After dinner, we watched TV."</em></li>
          <li><strong>Example:</strong> for example, such as, for instance <em>"Fruits, such as apples and oranges."</em></li>
          <li><strong>Conclusion:</strong> in conclusion, finally, to sum up <em>"Finally, we reached our destination."</em></li>
        </ul>

        <br />
        <h5><i>Examples:</i></h5>
        <ul>
          <li><em>"I studied hard, therefore I passed the exam."</em> – Eu estudei muito, portanto passei no exame.</li>
          <li><em>"Although it was raining, we went for a walk."</em> – Embora estivesse chovendo, fomos caminhar.</li>
          <li><em>"First, we visited the museum. Then, we had lunch."</em> – Primeiro, visitamos o museu. Depois, almoçamos.</li>
          <li><em>"She speaks many languages, for example, English and French."</em> – Ela fala muitas línguas, por exemplo, inglês e francês.</li>
        </ul>

        <br />
        <h3><i>Summary:</i></h3>
        <ul>
          <li><em>Connectors:</em> Link ideas and create logical relationships</li>
          <li>Different types serve different purposes</li>
          <li>Essential for clear and coherent communication</li>
          <li>Help organize thoughts and improve flow</li>
        </ul>
      </h4>
    </Col>
  </Row>
</Container>

<Card className="card-obs">
  <Card.Body>
    <h3>Observações Gramaticais</h3>
    <br />
    
    <h5>1. Posição dos Conectores:</h5>
    <p>Alguns conectores vêm no início da frase, outros no meio, e alguns podem aparecer em ambas as posições.</p>
    <br />
    <p>Exemplo: <em>"However, it was fun" ou "It was fun, however"</em></p>
    <br />
    
    <h5>2. Pontuação:</h5>
    <p>Use vírgula após conectores no início da frase e antes de conectores no meio.</p>
    <br />
    <p>Exemplo: <em>"Therefore, we left early" / "We left early, therefore"</em></p>
    <br />
    
    <h5>3. Registro Formal vs Informal:</h5>
    <p>Alguns conectores são mais formais (furthermore, moreover) outros mais informais (and, but, so).</p>
    <br />
    <p>Exemplo: Formal: "Furthermore" / Informal: "And also"</p>

    <h3>Resumo:</h3>
    <ul>
      <li>Ligam ideias e criam fluxo lógico</li>
      <li>Diferentes tipos para diferentes propósitos</li>
      <li>Atenção à pontuação e posição</li>
      <li>Considere o registro (formal/informal)</li>
    </ul>
  </Card.Body>
</Card>

<Container className="questions">
  <Row>
    <Col>
      <h1 className="h1-questions">Questions</h1>
      <Accordion className="no-border-accordion">
        <Accordion.Item eventKey="0">
          <Accordion.Header>1. Complete com o conector apropriado: "I wanted to go out, ____ it was raining."</Accordion.Header>
          <Accordion.Body>
            "I wanted to go out, but it was raining." (Use "but" para contraste)
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>2. Complete com o conector apropriado: "She studied hard, ____ she passed the exam."</Accordion.Header>
          <Accordion.Body>
            "She studied hard, so she passed the exam." (Use "so" para resultado)
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>3. Complete com o conector apropriado: "____ it was late, we decided to continue working."</Accordion.Header>
          <Accordion.Body>
            "Although it was late, we decided to continue working." (Use "although" para contraste)
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>4. Complete com o conector apropriado: "I like many sports, ____ ____, tennis and swimming."</Accordion.Header>
          <Accordion.Body>
            "I like many sports, for example, tennis and swimming." (Use "for example" para dar exemplos)
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>5. Complete com o conector apropriado: "First, we had breakfast. ____, we went to work."</Accordion.Header>
          <Accordion.Body>
            "First, we had breakfast. Then, we went to work." (Use "then" para sequência temporal)
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="5">
          <Accordion.Header>6. Complete com o conector apropriado: "He didn't study, ____ he failed the test."</Accordion.Header>
          <Accordion.Body>
            "He didn't study, therefore he failed the test." (Use "therefore" para consequência)
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="6">
          <Accordion.Header>7. Complete com o conector apropriado: "She speaks English well. ____, she speaks French fluently."</Accordion.Header>
          <Accordion.Body>
            "She speaks English well. Moreover, she speaks French fluently." (Use "moreover" para adicionar informação)
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="7">
          <Accordion.Header>8. Complete com o conector apropriado: "____ I was tired, I couldn't sleep."</Accordion.Header>
          <Accordion.Body>
            "Although I was tired, I couldn't sleep." (Use "although" para situação inesperada)
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="8">
          <Accordion.Header>9. Complete com o conector apropriado: "It was raining ____ we stayed inside."</Accordion.Header>
          <Accordion.Body>
            "It was raining so we stayed inside." (Use "so" para mostrar resultado)
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="9">
          <Accordion.Header>10. Complete com o conector apropriado: "____ ____, I would like to thank everyone for coming."</Accordion.Header>
          <Accordion.Body>
            "In conclusion, I would like to thank everyone for coming." (Use "in conclusion" para finalizar)
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