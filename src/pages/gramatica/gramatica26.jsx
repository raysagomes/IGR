import Header from "../../components/header";
import Footer from "../../components/footer";
import { Helmet } from 'react-helmet-async';
import Logo from '../../components/logo';
import HeaderMenuGramatica from '../../components/headers/header-menu-gramatica';
import { Container, Col, Row, Accordion} from "react-bootstrap";
import Card from 'react-bootstrap/Card';

export default function Gramatica26() {
    return(
<>
<Helmet>
        <title>Quantifiers</title>
      </Helmet>
<Header />
<Logo />
<HeaderMenuGramatica />

<Container>
  <Row>
    <Col className="coluna-texto1">
      <h2 className="h1-Texto-Inicial">Quantifiers</h2>

      <h4 className="h5-Textos">
        <h3>Quantifiers in English</h3>
        
        <h5><i>Quantificadores em Inglês</i></h5>
        <p>Quantifiers are words that indicate the amount or quantity of something. They are used with countable and uncountable nouns to express how much or how many.</p>
        <h5><i>Os quantificadores são palavras que indicam a quantidade de algo. Eles são usados com substantivos contáveis e incontáveis para expressar quanto ou quantos.</i></h5>
        <br />

        <h5><i>Common Quantifiers:</i></h5>
        <ul>
          <li><strong>Much:</strong> With uncountable nouns <em>"How much water do you need?"</em></li>
          <li><strong>Many:</strong> With countable nouns <em>"How many books do you have?"</em></li>
          <li><strong>Some:</strong> Positive sentences <em>"I have some money."</em></li>
          <li><strong>Any:</strong> Negative/questions <em>"Do you have any questions?"</em></li>
          <li><strong>A lot of/Lots of:</strong> Large quantities <em>"There are a lot of people here."</em></li>
          <li><strong>A few:</strong> Small number (countable) <em>"I have a few friends."</em></li>
          <li><strong>A little:</strong> Small amount (uncountable) <em>"Add a little salt."</em></li>
        </ul>

        <br />
        <h5><i>Examples:</i></h5>
        <ul>
          <li><em>"There isn't much time left."</em> – Não sobrou muito tempo.</li>
          <li><em>"She has many hobbies."</em> – Ela tem muitos hobbies.</li>
          <li><em>"Would you like some coffee?"</em> – Você gostaria de um pouco de café?</li>
          <li><em>"I don't have any money."</em> – Eu não tenho dinheiro nenhum.</li>
        </ul>

        <br />
        <h3><i>Summary:</i></h3>
        <ul>
          <li><em>Much/Many:</em> Questions and negatives</li>
          <li><em>Some:</em> Positive sentences and offers</li>
          <li><em>Any:</em> Negatives and questions</li>
          <li><em>A lot of:</em> Large quantities (both countable/uncountable)</li>
        </ul>
      </h4>
    </Col>
  </Row>
</Container>

<Card className="card-obs">
  <Card.Body>
    <h3>Observações Gramaticais</h3>
    <br />
    
    <h5>1. Countable vs Uncountable:</h5>
    <p>Use "many" com substantivos contáveis e "much" com incontáveis.</p>
    <br />
    <p>Exemplo: <em>"Many cars" vs "Much traffic"</em></p>
    <br />
    
    <h5>2. "Some" em Perguntas:</h5>
    <p>Use "some" em perguntas quando espera resposta positiva ou faz ofertas.</p>
    <br />
    <p>Exemplo: <em>"Would you like some tea?" (oferta)</em></p>
    <br />
    
    <h5>3. "Few" vs "A few":</h5>
    <p>"Few" = quase nenhum (negativo). "A few" = alguns (positivo).</p>
    <br />
    <p>Exemplo: <em>"Few people came" vs "A few people came"</em></p>

    <h3>Resumo:</h3>
    <ul>
      <li>Much = incontáveis, Many = contáveis</li>
      <li>Some = afirmativas, Any = negativas/perguntas</li>
      <li>A lot of = grandes quantidades</li>
      <li>A few/A little = pequenas quantidades</li>
    </ul>
  </Card.Body>
</Card>

<Container className="questions">
  <Row>
    <Col>
      <h1 className="h1-questions">Questions</h1>
      <Accordion className="no-border-accordion">
        <Accordion.Item eventKey="0">
          <Accordion.Header>1. Complete com "much" ou "many": "How ____ students are in your class?"</Accordion.Header>
          <Accordion.Body>
            "How many students are in your class?" (Use "many" com substantivos contáveis)
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>2. Complete com "some" ou "any": "Do you have ____ questions about the lesson?"</Accordion.Header>
          <Accordion.Body>
            "Do you have any questions about the lesson?" (Use "any" em perguntas)
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>3. Complete com "much" ou "many": "There isn't ____ sugar left."</Accordion.Header>
          <Accordion.Body>
            "There isn't much sugar left." (Use "much" com substantivos incontáveis)
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>4. Complete com "some" ou "any": "I bought ____ fruits at the market."</Accordion.Header>
          <Accordion.Body>
            "I bought some fruits at the market." (Use "some" em frases afirmativas)
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>5. Complete com "a few" ou "a little": "Could you add ____ more salt to the soup?"</Accordion.Header>
          <Accordion.Body>
            "Could you add a little more salt to the soup?" (Use "a little" com incontáveis)
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="5">
          <Accordion.Header>6. Complete com "much" ou "many": "She doesn't have ____ friends in this city."</Accordion.Header>
          <Accordion.Body>
            "She doesn't have many friends in this city." (Use "many" com contáveis em negativas)
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="6">
          <Accordion.Header>7. Complete com "some" ou "any": "Would you like ____ coffee?"</Accordion.Header>
          <Accordion.Body>
            "Would you like some coffee?" (Use "some" em ofertas, mesmo em perguntas)
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="7">
          <Accordion.Header>8. Complete com "a few" ou "a little": "I need ____ more minutes to finish."</Accordion.Header>
          <Accordion.Body>
            "I need a few more minutes to finish." (Use "a few" com contáveis)
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="8">
          <Accordion.Header>9. Complete com "much" ou "many": "How ____ money do you need?"</Accordion.Header>
          <Accordion.Body>
            "How much money do you need?" (Use "much" com incontáveis)
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="9">
          <Accordion.Header>10. Complete com "some" ou "any": "There aren't ____ good restaurants in this area."</Accordion.Header>
          <Accordion.Body>
            "There aren't any good restaurants in this area." (Use "any" em frases negativas)
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