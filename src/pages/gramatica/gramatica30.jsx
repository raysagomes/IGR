import Header from "../../components/header";
import Footer from "../../components/footer";
import { Helmet } from 'react-helmet-async';
import Logo from '../../components/logo';
import HeaderMenuGramatica from '../../components/headers/header-menu-gramatica';
import { Container, Col, Row, Accordion} from "react-bootstrap";
import Card from 'react-bootstrap/Card';

export default function Gramatica30() {
    return(
<>
<Helmet>
        <title>So e Such</title>
      </Helmet>
<Header />
<Logo />
<HeaderMenuGramatica />

<Container>
  <Row>
    <Col className="coluna-texto1">
      <h2 className="h1-Texto-Inicial">So e Such</h2>

      <h4 className="h5-Textos">
        <h3>So and Such</h3>
        
        <h5><i>So e Such em Inglês</i></h5>
        <p>"So" and "such" are used for emphasis to mean "very" or "extremely". They have different grammatical patterns and are often followed by "that" clauses to show result.</p>
        <h5><i>"So" e "such" são usados para dar ênfase, significando "muito" ou "extremamente". Eles têm padrões gramaticais diferentes e são frequentemente seguidos por cláusulas com "that" para mostrar resultado.</i></h5>
        <br />

        <h5><i>Patterns with "So":</i></h5>
        <ul>
          <li><strong>So + adjective:</strong> <em>"She is so beautiful."</em> (Ela é tão bonita.)</li>
          <li><strong>So + adverb:</strong> <em>"He runs so fast."</em> (Ele corre tão rápido.)</li>
          <li><strong>So + much/many + noun:</strong> <em>"There are so many people here."</em> (Há tantas pessoas aqui.)</li>
          <li><strong>So + adjective + that:</strong> <em>"It was so cold that we stayed inside."</em> (Estava tão frio que ficamos dentro de casa.)</li>
        </ul>

        <br />
        <h5><i>Patterns with "Such":</i></h5>
        <ul>
          <li><strong>Such + (adjective) + noun:</strong> <em>"It's such a beautiful day."</em> (É um dia tão bonito.)</li>
          <li><strong>Such + adjective + plural/uncountable noun:</strong> <em>"They are such nice people."</em> (Eles são pessoas tão legais.)</li>
          <li><strong>Such + noun + that:</strong> <em>"It was such a surprise that I cried."</em> (Foi uma surpresa tão grande que eu chorei.)</li>
        </ul>

        <br />
        <h5><i>Examples:</i></h5>
        <ul>
          <li><em>"The movie was so boring that I fell asleep."</em> – O filme estava tão chato que eu adormeci.</li>
          <li><em>"She has such a lovely voice."</em> – Ela tem uma voz tão linda.</li>
          <li><em>"There was so much traffic that we were late."</em> – Havia tanto trânsito que nos atrasamos.</li>
          <li><em>"It was such bad weather that the game was cancelled."</em> – O tempo estava tão ruim que o jogo foi cancelado.</li>
        </ul>

        <br />
        <h3><i>Summary:</i></h3>
        <ul>
          <li><em>So:</em> + adjective/adverb/much/many</li>
          <li><em>Such:</em> + (adjective) + noun</li>
          <li>Both can be followed by "that" clauses</li>
          <li>Used for emphasis and showing results</li>
        </ul>
      </h4>
    </Col>
  </Row>
</Container>

<Card className="card-obs">
  <Card.Body>
    <h3>Observações Gramaticais</h3>
    <br />
    
    <h5>1. "So" vs "Such" com Substantivos:</h5>
    <p>Use "so" com "much/many + substantivo". Use "such" diretamente com substantivos.</p>
    <br />
    <p>Exemplo: <em>"So much money" vs "Such money" (incorreto)</em></p>
    <br />
    
    <h5>2. Artigos com "Such":</h5>
    <p>Com substantivos contáveis no singular, use "such a/an".</p>
    <br />
    <p>Exemplo: <em>"Such a beautiful day" (não "such beautiful day")</em></p>
    <br />
    
    <h5>3. Resultado com "That":</h5>
    <p>Ambos podem ser seguidos de "that" para mostrar consequência.</p>
    <br />
    <p>Exemplo: <em>"So tired that..." / "Such a long day that..."</em></p>

    <h3>Resumo:</h3>
    <ul>
      <li>"So" = adjetivos, advérbios, much/many</li>
      <li>"Such" = substantivos (com ou sem adjetivos)</li>
      <li>Ambos podem usar "that" para resultado</li>
      <li>"Such a/an" com contáveis singulares</li>
    </ul>
  </Card.Body>
</Card>

<Container className="questions">
  <Row>
    <Col>
      <h1 className="h1-questions">Questions</h1>
      <Accordion className="no-border-accordion">
        <Accordion.Item eventKey="0">
          <Accordion.Header>1. Complete com "so" ou "such": "The weather is ____ nice today."</Accordion.Header>
          <Accordion.Body>
            "The weather is so nice today." (Use "so" com adjetivos)
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>2. Complete com "so" ou "such": "It was ____ a difficult exam."</Accordion.Header>
          <Accordion.Body>
            "It was such a difficult exam." (Use "such" com substantivos contáveis singulares)
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>3. Complete com "so" ou "such": "There were ____ many people at the concert."</Accordion.Header>
          <Accordion.Body>
            "There were so many people at the concert." (Use "so" com "many")
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>4. Complete com "so" ou "such": "They are ____ kind people."</Accordion.Header>
          <Accordion.Body>
            "They are such kind people." (Use "such" com substantivos plurais)
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>5. Complete com "so" ou "such": "The music was ____ loud that I couldn't sleep."</Accordion.Header>
          <Accordion.Body>
            "The music was so loud that I couldn't sleep." (Use "so" com adjetivos + "that")
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="5">
          <Accordion.Header>6. Complete com "so" ou "such": "It was ____ a surprise that I started crying."</Accordion.Header>
          <Accordion.Body>
            "It was such a surprise that I started crying." (Use "such" com substantivos + "that")
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="6">
          <Accordion.Header>7. Complete com "so" ou "such": "She speaks ____ quickly."</Accordion.Header>
          <Accordion.Body>
            "She speaks so quickly." (Use "so" com advérbios)
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="7">
          <Accordion.Header>8. Complete com "so" ou "such": "There was ____ much noise outside."</Accordion.Header>
          <Accordion.Body>
            "There was so much noise outside." (Use "so" com "much")
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="8">
          <Accordion.Header>9. Complete com "so" ou "such": "It's ____ beautiful weather."</Accordion.Header>
          <Accordion.Body>
            "It's such beautiful weather." (Use "such" com substantivos incontáveis)
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="9">
          <Accordion.Header>10. Complete com "so" ou "such": "The book was ____ interesting that I read it in one day."</Accordion.Header>
          <Accordion.Body>
            "The book was so interesting that I read it in one day." (Use "so" com adjetivos + "that")
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