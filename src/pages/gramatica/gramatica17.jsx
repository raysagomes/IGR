import Header from "../../components/header";
import Footer from "../../components/footer";
import { Helmet } from 'react-helmet-async';
import Logo from '../../components/logo';
import HeaderMenuGramatica from '../../components/headers/header-menu-gramatica';
import { Container, Col, Row, Accordion} from "react-bootstrap";
import Card from 'react-bootstrap/Card';

export default function Gramatica17() {
    return(
<>
<Helmet>
        <title>Preposições de Lugar</title>
      </Helmet>
<Header />
<Logo />
<HeaderMenuGramatica />

<Container>
  <Row>
    <Col className="coluna-texto1">
      <h2 className="h1-Texto-Inicial">Preposições de Lugar</h2>

      <h4 className="h5-Textos">
        <h3>Prepositions of Place</h3>
        
        <h5><i>Preposições de Lugar em Inglês</i></h5>
        <p>Prepositions of place are used to indicate the location or position of something in relation to other objects. They help us describe where things are located.</p>
        <h5><i>As preposições de lugar são usadas para indicar a localização ou posição de algo em relação a outros objetos. Elas nos ajudam a descrever onde as coisas estão localizadas.</i></h5>
        <br />

        <h5><i>Common Prepositions of Place:</i></h5>
        <ul>
          <li><strong>In:</strong> Inside something <em>"The book is in the bag."</em> (O livro está na bolsa.)</li>
          <li><strong>On:</strong> On top of a surface <em>"The cup is on the table."</em> (A xícara está na mesa.)</li>
          <li><strong>At:</strong> Specific location <em>"She is at school."</em> (Ela está na escola.)</li>
          <li><strong>Under:</strong> Below something <em>"The cat is under the bed."</em> (O gato está embaixo da cama.)</li>
          <li><strong>Behind:</strong> At the back of <em>"The car is behind the house."</em> (O carro está atrás da casa.)</li>
          <li><strong>In front of:</strong> Before something <em>"The tree is in front of the building."</em> (A árvore está na frente do prédio.)</li>
          <li><strong>Between:</strong> In the middle of two things <em>"The park is between the school and the hospital."</em> (O parque está entre a escola e o hospital.)</li>
        </ul>

        <br />
        <h5><i>Examples:</i></h5>
        <ul>
          <li><em>"The keys are in my pocket."</em> – As chaves estão no meu bolso.</li>
          <li><em>"The picture is on the wall."</em> – O quadro está na parede.</li>
          <li><em>"We met at the restaurant."</em> – Nós nos encontramos no restaurante.</li>
          <li><em>"The dog is sleeping under the tree."</em> – O cachorro está dormindo embaixo da árvore.</li>
        </ul>

        <br />
        <h3><i>Summary:</i></h3>
        <ul>
          <li><em>Prepositions of Place:</em> Indicate location or position of objects.</li>
          <li>Each preposition has specific uses and contexts.</li>
          <li>They are essential for describing spatial relationships.</li>
        </ul>
      </h4>
    </Col>
  </Row>
</Container>

<Card className="card-obs">
  <Card.Body>
    <h3>Observações Gramaticais</h3>
    <br />
    
    <h5>1. Diferença entre "In", "On" e "At":</h5>
    <p>"In" é usado para espaços fechados ou dentro de algo, "On" para superfícies, e "At" para locais específicos.</p>
    <br />
    <p>Exemplo: <em>"In the room, on the desk, at the office."</em></p>
    <br />
    
    <h5>2. Preposições Compostas:</h5>
    <p>Algumas preposições são formadas por mais de uma palavra, como "in front of", "next to", "far from".</p>
    <br />
    <p>Exemplo: <em>"The bank is next to the pharmacy."</em> (O banco fica ao lado da farmácia.)</p>
    <br />
    
    <h5>3. Uso com Meios de Transporte:</h5>
    <p>Usamos "in" para carros e táxis, "on" para transporte público como ônibus e trens.</p>
    <br />
    <p>Exemplo: <em>"In the car, on the bus."</em></p>

    <h3>Resumo:</h3>
    <ul>
      <li>"In" = dentro de espaços fechados</li>
      <li>"On" = em superfícies</li>
      <li>"At" = locais específicos</li>
      <li>Algumas preposições têm mais de uma palavra</li>
    </ul>
  </Card.Body>
</Card>

<Container className="questions">
  <Row>
    <Col>
      <h1 className="h1-questions">Questions</h1>
      <Accordion className="no-border-accordion">
        <Accordion.Item eventKey="0">
          <Accordion.Header>1. Complete com a preposição correta: "The book is ____ the table."</Accordion.Header>
          <Accordion.Body>
            "The book is on the table." (Usamos "on" para objetos em superfícies.)
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>2. Complete com a preposição correta: "She lives ____ New York."</Accordion.Header>
          <Accordion.Body>
            "She lives in New York." (Usamos "in" para cidades e países.)
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>3. Complete com a preposição correta: "We will meet ____ the cinema."</Accordion.Header>
          <Accordion.Body>
            "We will meet at the cinema." (Usamos "at" para locais específicos de encontro.)
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>4. Complete com a preposição correta: "The cat is hiding ____ the sofa."</Accordion.Header>
          <Accordion.Body>
            "The cat is hiding under the sofa." (Usamos "under" para indicar posição abaixo de algo.)
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>5. Complete com a preposição correta: "The car is parked ____ the house."</Accordion.Header>
          <Accordion.Body>
            "The car is parked behind the house." (Usamos "behind" para indicar posição atrás de algo.)
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="5">
          <Accordion.Header>6. Complete com a preposição correta: "The pharmacy is ____ the bank and the school."</Accordion.Header>
          <Accordion.Body>
            "The pharmacy is between the bank and the school." (Usamos "between" para indicar posição no meio de duas coisas.)
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="6">
          <Accordion.Header>7. Complete com a preposição correta: "There's a beautiful garden ____ ____ the building."</Accordion.Header>
          <Accordion.Body>
            "There's a beautiful garden in front of the building." (Usamos "in front of" para indicar posição à frente de algo.)
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="7">
          <Accordion.Header>8. Complete com a preposição correta: "The children are playing ____ the park."</Accordion.Header>
          <Accordion.Body>
            "The children are playing in the park." (Usamos "in" para espaços abertos como parques.)
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="8">
          <Accordion.Header>9. Complete com a preposição correta: "The picture is hanging ____ the wall."</Accordion.Header>
          <Accordion.Body>
            "The picture is hanging on the wall." (Usamos "on" para objetos fixados em superfícies verticais.)
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="9">
          <Accordion.Header>10. Complete com a preposição correta: "She is waiting ____ the bus stop."</Accordion.Header>
          <Accordion.Body>
            "She is waiting at the bus stop." (Usamos "at" para pontos específicos de localização.)
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