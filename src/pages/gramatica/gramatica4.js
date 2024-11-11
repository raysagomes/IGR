import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import { Helmet } from 'react-helmet-async';
import HeaderMenuGramatica from '../../components/header-menu-gramatica';
import Logo from '../../components/logo';
import { Container, Col, Row, Accordion} from "react-bootstrap";
import Card from 'react-bootstrap/Card';

export default function Gramatica4() {
    return(
<>
<Helmet>
        <title>Verbos no Presente Simples</title>
      </Helmet>
<Header />
<Logo />
<HeaderMenuGramatica />
<Container>
  <Row>
    <Col className="coluna-texto1">
      <h2 className="h1-Texto-Inicial">Verbos no Presente Simples</h2>
      <h4 className="h5-Textos">
        <h3>Structure of the Present Simple Tense</h3>
        
        <h5><i>Estrutura do Presente Simples</i></h5>
        <p>The present simple is used to talk about routine actions, facts, and things that are always true. The structure is very simple:</p>
        <h5><i>A estrutura do presente simples é usada para falar sobre ações rotineiras, fatos e coisas que são sempre verdadeiras. A estrutura é bem simples:</i></h5>
        <br />
        <ul>
          <li><strong>Affirmative:</strong> Subject + verb (base form) <em>Ex: "I work every day."</em> (Eu trabalho todos os dias.)
          <br />
          Afirmativa: Sujeito + verbo (forma básica)</li>
          <br />
          <li><strong>Negative:</strong> Subject + do/does + not + verb (base form) <em>Ex: "She doesn't like coffee."</em> (Ela não gosta de café.)
          <br />
          Negativa: Sujeito + do/does + not + verbo (forma básica)</li>
          <br />

          <li><strong>Question:</strong> Do/does + subject + verb (base form)? <em>Ex: "Do they speak English?"</em> (Eles falam inglês?)
          <br />
          Pergunta: Do/does + sujeito + verb (forma básica)</li>
          <br />

        </ul>

        <br />
        <h5><i>Exemplos:</i></h5>
        <ul>
          <li><em>"I wake up early every morning."</em> – Eu acordo cedo todas as manhãs.</li>
          <li><em>"She plays the piano every day."</em> – Ela toca piano todos os dias.</li>
          <li><em>"We work from Monday to Friday."</em> – Nós trabalhamos de segunda a sexta-feira.</li>
          <li><em>"They don't go to the gym on weekends."</em> – Eles não vão à academia nos finais de semana.</li>
          <li><em>"Do you eat vegetables?"</em> – Você come vegetais?</li>
        </ul>
        <br />

        <h3><i>Summary:</i></h3>
        <ul>
          <li><em>Present Simple</em>: Used for routines, facts, and truths. (Presente Simples: Usado para rotinas, fatos e verdades.)</li>
        </ul>

        
      </h4>
    </Col>
  </Row>
</Container>

<Col className="coluna-vocab-to-be">
      <h2 className="h1-Texto-Inicial">Verbo to be</h2>
      <h4 className="h5-Textos">
      <h5><i>Estrutura do Presente Simples do Verbo "To Be"</i></h5>
<p>The verb "to be" is used to describe the state or condition of someone or something. The structure in the present simple is very simple:</p>

<h5><i>A estrutura do verbo "to be" no presente simples é usada para descrever o estado ou condição de alguém ou algo. A estrutura é bem simples:</i></h5>
<br />

<ul>
  <li><strong>Affirmative:</strong> Subject + verb "to be" (am, is, are) <em>Ex: "I am happy."</em> (Eu estou feliz.)</li>
  <br />
  <li><strong>Negative:</strong> Subject + verb "to be" (am, is, are) + not <em>Ex: "She is not (isn't) here."</em> (Ela não está aqui.)</li>
  <br />
  <li><strong>Question:</strong> Verb "to be" (am, is, are) + subject <em>Ex: "Are they ready?"</em> (Eles estão prontos?)</li>
  <br />
</ul>

        </h4>
    </Col>

    <Container className="colunasVocabulario">

<Row className="borderedRow1">
  <Col className="borderedCol header-col">Pronome</Col> 
  <Col className="borderedCol header-col">Verbo</Col> 
  <Col className="borderedCol header-col">Verbo no negativo (contraído e normal)</Col>  
</Row>

<Row className="borderedRow">
  <Col className="borderedCol">I</Col> 
  <Col className="borderedCol">am</Col> 
  <Col className="borderedCol">am not / I'm not</Col> 
</Row>

<Row className="borderedRow">
  <Col className="borderedCol">He</Col> 
  <Col className="borderedCol">is</Col> 
  <Col className="borderedCol">is not / isn't</Col> 
</Row>

<Row className="borderedRow">
  <Col className="borderedCol">She</Col> 
  <Col className="borderedCol">is</Col> 
  <Col className="borderedCol">is not / isn't</Col> 
</Row>

<Row className="borderedRow">
  <Col className="borderedCol">It</Col> 
  <Col className="borderedCol">is</Col> 
  <Col className="borderedCol">is not / isn't</Col> 
</Row>

<Row className="borderedRow">
  <Col className="borderedCol">We</Col> 
  <Col className="borderedCol">are</Col> 
  <Col className="borderedCol">are not / aren't</Col> 
</Row>

<Row className="borderedRow">
  <Col className="borderedCol">You</Col> 
  <Col className="borderedCol">are</Col> 
  <Col className="borderedCol">are not / aren't</Col> 
</Row>

<Row className="borderedRow">
  <Col className="borderedCol">They</Col> 
  <Col className="borderedCol">are</Col> 
  <Col className="borderedCol">are not / aren't</Col> 
</Row>

</Container>


<Card className="card-obs">
  <Card.Body>
    <h3>Observações Gramaticais</h3>
    <br />
    
    <h5>1. Mudança dos verbos na 3ª pessoa do singular:</h5>
    <p>Nos verbos no presente, na terceira pessoa do singular (he, she, it), o verbo geralmente recebe um "s" ou "es" no final.</p>
    <br />
    <p>Exemplo: <em>"She works every day."</em> (Ela trabalha todos os dias).</p>
    <br />
    <h5>Exceções:</h5>
    <ul>
      <li>Se o verbo termina em "o", "ch", "sh", "ss", "x", ou "z", adiciona-se "es".</li>
      <br />
      <li>Exemplo: <em>"He goes to school."</em> (Ele vai para a escola). </li>
      <li>Exemplo: <em>"She watches TV."</em> (Ela assiste TV).</li>
    </ul>
    <br />
    
    <h5>2. Verbos terminados em "y":</h5>
    <p>Se o verbo termina em "y" e tem uma consoante antes do "y", a letra "y" é trocada por "ies".</p>
    <br />
    <p>Exemplo: <em>"He studies hard."</em> (Ele estuda muito).</p>
    <br />
    <p>Exemplo: <em>"She flies to Paris."</em> (Ela voa para Paris).</p>
    <br />
    
    <h5>3. Uso de "do" e "does" na pergunta:</h5>
    <p>Quando fazemos perguntas no presente, usamos "do" (para I, you, we, they) ou "does" (para he, she, it).</p>
    <br />
    <p>Exemplo: <em>"Does she like ice cream?"</em> (Ela gosta de sorvete?).</p>
    <br />
    <p>Exemplo: <em>"Do they work here?"</em> (Eles trabalham aqui?).</p>
    <br />
    <h5>Observação:</h5>
    <p>Quando usamos "do" ou "does" para formar uma pergunta, o verbo não precisa receber a alteração do "s" ou "es", pois "do" ou "does" já exerce a função de auxiliar.</p>
    <br />

    <h5>4. Uso de "have" e "has" na afirmativa:</h5>
    <p>Para a terceira pessoa do singular (he, she, it), usamos "has". Para as outras pessoas, usamos "have".</p>
    <br />
    <p>Exemplo: <em>"He has a dog."</em> (Ele tem um cachorro).</p>
    <br />
    <p>Exemplo: <em>"I have a book."</em> (Eu tenho um livro).</p>
    <br />

    <h3>Resumo:</h3>
    <ul>
      <li>Verbos na 3ª pessoa do singular geralmente recebem "s" ou "es".</li>
      <li>Se o verbo termina em "y", troque o "y" por "ies".</li>
      <li>"Do" e "does" são usados para perguntas no presente, mas o verbo não muda quando usá-los.</li>
      <li>Usamos "have" para I, you, we, they e "has" para he, she, it.</li>
    </ul>
  </Card.Body>
</Card>


<br />
<br />
<br />
<Container className="questions">
  <Row>
    <Col>
      <h1 className="h1-questions">Questions</h1>
      <Accordion className="no-border-accordion">
        <Accordion.Item eventKey="0">
          <Accordion.Header>1. Complete a frase com o verbo correto no presente simples: "She ____ to school every day."</Accordion.Header>
          <Accordion.Body>
            "She goes to school every day." (O verbo "go" no presente simples é conjugado como "goes" quando o sujeito é he, she ou it.)
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>2. Complete a frase com o verbo correto no presente simples: "They ____ lunch at 12 PM."</Accordion.Header>
          <Accordion.Body>
            "They have lunch at 12 PM." (O verbo "have" é usado para indicar refeições no presente simples.)
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>3. Complete a frase com o verbo correto no presente simples: "I ____ like coffee."</Accordion.Header>
          <Accordion.Body>
            "I don't like coffee." (Em frases negativas no presente simples, usamos "do not" ou "don't" para todos os sujeitos, exceto para he, she e it.)
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>4. Complete a frase com o verbo correto no presente simples: "We ____ to the gym every week."</Accordion.Header>
          <Accordion.Body>
            "We go to the gym every week." (O verbo "go" é usado no presente simples para indicar a ação de ir a algum lugar.)
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>5. Complete a frase com o verbo correto no presente simples: "He ____ in New York."</Accordion.Header>
          <Accordion.Body>
            "He lives in New York." (O verbo "live" é conjugado como "lives" para he, she e it no presente simples.)
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="5">
          <Accordion.Header>6. Complete a frase com o verbo correto no presente simples: "I ____ play tennis on weekends."</Accordion.Header>
          <Accordion.Body>
            "I play tennis on weekends." (O verbo "play" no presente simples não muda com o sujeito "I".)
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="6">
          <Accordion.Header>7. Complete a frase com o verbo correto no presente simples: "They ____ speak three languages."</Accordion.Header>
          <Accordion.Body>
            "They speak three languages." (O verbo "speak" no presente simples não muda para o sujeito "they".)
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="7">
          <Accordion.Header>8. Complete a frase com o verbo correto no presente simples: "She ____ at 7 AM every day."</Accordion.Header>
          <Accordion.Body>
            "She wakes up at 7 AM every day." (O verbo "wake up" é conjugado como "wakes up" para he, she e it.)
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="8">
          <Accordion.Header>9. Complete a frase com o verbo correto no presente simples: "We ____ home at 6 PM."</Accordion.Header>
          <Accordion.Body>
            "We arrive home at 6 PM." (O verbo "arrive" não muda com o sujeito "we" no presente simples.)
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="9">
          <Accordion.Header>10. Complete a frase com o verbo correto no presente simples: "He ____ breakfast at 8 AM every day."</Accordion.Header>
          <Accordion.Body>
            "He has breakfast at 8 AM every day." (O verbo "have" é usado para se referir a refeições no presente simples.)
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="10">
          <Accordion.Header>11. Complete a frase com o verbo correto no presente simples: "I ____ a student."</Accordion.Header>
          <Accordion.Body>
            "I am a student." (O verbo "to be" no presente simples é "am" quando o sujeito é "I".)
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="11">
          <Accordion.Header>12. Complete a frase com o verbo correto no presente simples: "She ____ a doctor."</Accordion.Header>
          <Accordion.Body>
            "She is a doctor." (O verbo "to be" no presente simples é "is" quando o sujeito é "he", "she" ou "it".)
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="12">
          <Accordion.Header>13. Complete a frase com o verbo correto no presente simples: "We ____ happy to be here."</Accordion.Header>
          <Accordion.Body>
            "We are happy to be here." (O verbo "to be" no presente simples é "are" quando o sujeito é "we", "you" ou "they".)
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="13">
          <Accordion.Header>14. Complete a frase com o verbo correto no presente simples: "It ____ cold outside."</Accordion.Header>
          <Accordion.Body>
            "It is cold outside." (O verbo "to be" no presente simples é "is" para o sujeito "it".)
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="14">
          <Accordion.Header>15. Complete a frase com o verbo correto no presente simples: "They ____ friends."</Accordion.Header>
          <Accordion.Body>
            "They are friends." (O verbo "to be" no presente simples é "are" quando o sujeito é "they".)
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
