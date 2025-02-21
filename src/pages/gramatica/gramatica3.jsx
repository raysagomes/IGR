import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import { Helmet } from 'react-helmet-async';
import HeaderMenuGramatica from '../../components/headers/header-menu-gramatica';
import Logo from '../../components/logo';
import { Container, Col, Row, Accordion} from "react-bootstrap";
import Card from 'react-bootstrap/Card';


export default function Gramatica3() {
    return(
<>
<Helmet>
        <title>Artigos Definidos e Indefinidos</title>
      </Helmet> 
<Header />
<Logo />
<HeaderMenuGramatica />
<Container>
      <Row>
        <Col className="coluna-texto1">
        <h2 className="h1-Texto-Inicial"> Artigos Definidos e Indefinidos</h2> 
        <h4 className="h5-Textos">
        <h3>Use of Definite and Indefinite Articles</h3>
        <h5><i>Artigos Definidos (The)</i></h5>
<p>The definite article "the" (o, a, os, as) is used to refer to something specific or known to both the speaker and the listener. It points to a particular noun that is already identified or is unique in the context.</p>
<br />
<h5><i>O artigo definido "the" (o, a, os, as) é usado para se referir a algo específico ou conhecido tanto pelo falante quanto pelo ouvinte. Ele indica um substantivo particular que já foi identificado ou é único no contexto.</i></h5>
<br />
 <h5><i>Exemplos:</i></h5>
  <ul>
    <li><em>"The dog is in the garden."</em> – O falante e o ouvinte sabem qual cachorro está sendo referido, possivelmente porque foi mencionado antes ou é conhecido no contexto. (O cachorro está no jardim.)</li>
    <li><em>"The house is big."</em> – A casa é uma específica, que tanto o falante quanto o ouvinte conhecem ou é única no contexto. (A casa é grande.)</li>
    <li><em>"The car in the parking lot is mine."</em> – A pessoa se refere a um carro específico no estacionamento. (O carro no estacionamento é meu.)</li>
    <li><em>"The book on the table is yours."</em> – Refere-se a um livro específico, provavelmente já mencionado ou visível no contexto. (O livro na mesa é seu.)</li>
    <li><em>"The teacher gave a homework assignment."</em> – A pessoa se refere a um professor específico, provavelmente conhecido tanto pelo falante quanto pelo ouvinte. (O professor deu uma tarefa de casa.)</li>
    <li><em>"The sun is setting."</em> – Refere-se ao sol, que é único e conhecido no contexto de todos. (O sol está se pondo.)</li>
    <li><em>"The phone on the counter is mine."</em> – Refere-se a um telefone específico, que ambos sabem qual é. (O telefone na bancada é meu.)</li>
    <li><em>"The movie we watched yesterday was amazing."</em> – O filme mencionado é específico e já foi discutido. (O filme que assistimos ontem foi incrível.)</li>
  </ul>
<br />
<br />


<h5><i>Uso de Artigos Definidos e Indefinidos</i></h5>
<br />
<h5>"A" (um, uma, umas, umas) é um artigo indefinido usado antes de palavras que começam com som consonantal.</h5>
<br />
<p>Exemplo: <em>"She has a dog."</em> (Ela tem um cachorro). <br /> "A" é usado aqui antes de "dog", que começa com o som de "d", uma consoante.</p>
<br />
<p>Outros exemplos: <br />
<em>"I saw a car."</em> (Eu vi um carro). <br /> "A" é usado antes de "car", que começa com o som de "c".</p>
<br />
<p><em>"He has a book."</em> (Ele tem um livro). <br /> "A" é usado antes de "book", que começa com o som de "b".</p>
<br />
<p><em>"She bought a shirt."</em> (Ela comprou uma camisa). <br /> "A" é usado antes de "shirt", que começa com o som de "sh".</p>
<br />
<p><em>"We need a pencil."</em> (Nós precisamos de um lápis). <br /> "A" é usado antes de "pencil", que começa com o som de "p".</p>
<br />
<br />

<h5>"An" (um, uma, umas, umas)  é um artigo indefinido usado antes de palavras que começam com som de vogal.</h5>
<br />
<p>Exemplo: <em>"She has an apple."</em> (Ela tem uma maçã). <br /> "An" é usado aqui antes de "apple", que começa com o som de vogal "a".</p>
<br />
<p>Outros exemplos: <br />
<em>"I saw an elephant."</em> (Eu vi um elefante). <br /> "An" é usado antes de "elephant", que começa com o som de "e".</p>
<br />
<p><em>"She has an hour."</em> (Ela tem uma hora). <br /> "An" é usado antes de "hour", que começa com o som de vogal "a" (pois o "h" é silencioso).</p>
<br />
<p><em>"He is eating an orange."</em> (Ele está comendo uma laranja). <br /> "An" é usado antes de "orange", que começa com o som de "o".</p>
<br />
<p><em>"They live in an apartment."</em> (Eles moram em um apartamento). <br /> "An" é usado antes de "apartment", que começa com o som de "a".</p>

<br />

<h3><i>Summary:</i></h3>
<ul>
  <li><em>Definite article (The)</em>: Used when referring to something specific or already known. (Artigo definido (The): Usado para se referir a algo específico ou já conhecido.)</li>
  <h5><i>Artigo definido (The): Usado para se referir a algo específico ou já conhecido.</i></h5>
  <li><em>Indefinite articles (A, An)</em>: Used when referring to something general, unknown, or unspecified. (Artigos indefinidos (A, An): Usado para se referir a algo geral, desconhecido ou não especificado.)</li>
  <h5><i>Artigos indefinidos (A, An): Usado para se referir a algo geral, desconhecido ou não especificado.</i></h5>
</ul>

<br />
</h4>
</Col>
    </Row>
    </Container>
    <Container className="questions">
  <Row>
    <Col>
      <h1 className="h1-questions">Questions</h1>
      <Accordion className="no-border-accordion">
        <Accordion.Item eventKey="0">
          <Accordion.Header>1. Complete a frase com o artigo correto: "I saw ____ cat in the street."</Accordion.Header>
          <Accordion.Body>
            "I saw a cat in the street." (Aqui, o artigo "a" é usado porque estamos falando de qualquer gato, não um específico.)
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>2. Complete a frase com o artigo correto: "She is ____ best student in the class."</Accordion.Header>
          <Accordion.Body>
            "She is the best student in the class." (O artigo definido "the" é usado porque estamos nos referindo a uma estudante específica, a melhor da turma.)
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>3. Complete a frase com o artigo correto: "He wants to buy ____ car."</Accordion.Header>
          <Accordion.Body>
            "He wants to buy a car." (O artigo "a" é usado porque não estamos falando de um carro específico.)
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>4. Complete a frase com o artigo correto: "I have ____ idea for the project."</Accordion.Header>
          <Accordion.Body>
            "I have an idea for the project." (Usamos "an" porque "idea" começa com um som de vogal, então o artigo "an" é necessário.)
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>5. Complete a frase com o artigo correto: "____ book on the table is mine."</Accordion.Header>
          <Accordion.Body>
            "The book on the table is mine." (Aqui, usamos "the" porque estamos falando de um livro específico que é conhecido pelo ouvinte.)
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="5">
          <Accordion.Header>6. Complete a frase com o artigo correto: "____ sun rises in the east."</Accordion.Header>
          <Accordion.Body>
            "The sun rises in the east." (O artigo definido "the" é usado porque estamos falando do sol de maneira geral e única.)
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="6">
          <Accordion.Header>7. Complete a frase com o artigo correto: "I need ____ umbrella because it's raining."</Accordion.Header>
          <Accordion.Body>
            "I need an umbrella because it's raining." (Aqui, usamos "an" porque estamos falando de qualquer guarda-chuva, não um específico.)
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="7">
          <Accordion.Header>8. Complete a frase com o artigo correto: "____ dog in the park is very friendly."</Accordion.Header>
          <Accordion.Body>
            "The dog in the park is very friendly." (Usamos "the" porque estamos falando de um cachorro específico, conhecido tanto pelo falante quanto pelo ouvinte.)
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="8">
          <Accordion.Header>9. Complete a frase com o artigo correto: "____ apple a day keeps ____ doctor away."</Accordion.Header>
          <Accordion.Body>
            "An apple a day keeps the doctor away." (Usamos "an" porque "apple" começa com um som de vogal, e "the" porque estamos nos referindo ao médico em um contexto geral.)
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="9">
          <Accordion.Header>10. Complete a frase com o artigo correto: "I have ____ idea of what to do next."</Accordion.Header>
          <Accordion.Body>
            "I have an idea of what to do next." (Usamos "an" porque "idea" começa com um som de vogal.)
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Col>
  </Row>
</Container>
<Card className="card-obs">
      <Card.Body><h3>Diferença entre "A" e "An":</h3>
      <br />

      <h5>"A" é um artigo indefinido usado antes de palavras que começam com som consonantal.</h5>
<br />
<p>Exemplo: <em>"She has a dog."</em> (Ela tem um cachorro). <br /> "A" é usado aqui antes de "dog", que começa com o som de "d", uma consoante.</p>
<br />
<p>Outros exemplos: <br />
<em>"I saw a car."</em> (Eu vi um carro). <br /> "A" é usado antes de "car", que começa com o som de "c".</p>
<br />
<p><em>"He has a book."</em> (Ele tem um livro). <br /> "A" é usado antes de "book", que começa com o som de "b".</p>
<br />
<p><em>"She bought a shirt."</em> (Ela comprou uma camisa). <br /> "A" é usado antes de "shirt", que começa com o som de "sh".</p>
<br />
<p><em>"We need a pencil."</em> (Nós precisamos de um lápis). <br /> "A" é usado antes de "pencil", que começa com o som de "p".</p>
<br />

<h5>"An" é um artigo indefinido usado antes de palavras que começam com som de vogal.</h5>
<br />
<p>Exemplo: <em>"She has an apple."</em> (Ela tem uma maçã). <br /> "An" é usado aqui antes de "apple", que começa com o som de vogal "a".</p>
<br />
<p>Outros exemplos: <br />
<em>"I saw an elephant."</em> (Eu vi um elefante). <br /> "An" é usado antes de "elephant", que começa com o som de "e".</p>
<br />
<p><em>"She has an hour."</em> (Ela tem uma hora). <br /> "An" é usado antes de "hour", que começa com o som de vogal "a" (pois o "h" é silencioso).</p>
<br />
<p><em>"He is eating an orange."</em> (Ele está comendo uma laranja). <br /> "An" é usado antes de "orange", que começa com o som de "o".</p>
<br />
<p><em>"They live in an apartment."</em> (Eles moram em um apartamento). <br /> "An" é usado antes de "apartment", que começa com o som de "a".</p>
<br />

<h3>Observações sobre o uso de "A" e "An":</h3>
<br />

<h5>1. O uso de "a" ou "an" depende do som inicial da palavra, e não apenas da letra com que ela começa.</h5>
<br />
<h5>2. "A" é usado antes de palavras que começam com um som de consoante, como "a dog", "a car", "a book".</h5>
<br />
<h5>3. "An" é usado antes de palavras que começam com som de vogal, como "an apple", "an hour" (embora "hour" comece com "h", o "h" é silencioso, e a palavra começa com som de vogal). </h5>
<br />
<h5>4. Importante: o artigo "an" não é usado apenas antes de palavras que começam com a letra "a", mas antes de qualquer palavra cujo som inicial seja uma vogal (a, e, i, o, u).</h5>
<br />

<h3>Resumo das Diferenças:</h3>
<br />

<h5>"A": Usado antes de palavras que começam com som de consoante.</h5>
<br />
<h5>"An": Usado antes de palavras que começam com som de vogal.</h5>


</Card.Body>
    </Card>
    
    <br />
    <br />
     <br />
     
<Footer />
</>
    );
}
