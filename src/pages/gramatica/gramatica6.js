import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import { Helmet } from 'react-helmet-async';
import Logo from '../../components/logo';
import HeaderMenuGramatica from '../../components/header-menu-gramatica';
import { Container, Col, Row, Accordion} from "react-bootstrap";
import Card from 'react-bootstrap/Card';


export default function Gramatica6() {
    return(
<>
<Helmet>
        <title>Futuro Simples</title>
      </Helmet>
<Header />
<Logo />
<HeaderMenuGramatica />
<Container>
  <Row>
    <Col className="coluna-texto1">
      <h2 className="h1-Texto-Inicial">Futuro Simples</h2>

      <h4 className="h5-Textos">
        <h3>Uso do Futuro Simples</h3>

        <h5><i>O Futuro Simples em Inglês</i></h5>
        <p>
          O futuro simples é usado para falar sobre ações ou eventos que irão ocorrer em um momento posterior ao presente. A estrutura básica do futuro simples é composta por: sujeito + "will" + verbo no infinitivo. 
        </p>

        <br />
        <ul>
          <li><strong>Estrutura:</strong> Sujeito + "will" + verbo (forma base)
            <em> Ex: "I will talk to her tomorrow." (Eu falarei com ela amanhã.)</em>
            <br />
            O verbo "will" é sempre utilizado para indicar o futuro, independentemente do sujeito.
          </li>
          <br />
          <li><strong>Negativas:</strong> Para formar a negativa do futuro simples, adicionamos "not" após "will" ou usamos a forma contraída "won't".
            <em> Ex: "She will not (won't) go to the party." (Ela não irá à festa.)</em>
          </li>
          <br />
          <li><strong>Interrogativas:</strong> Para fazer perguntas no futuro simples, invertemos a ordem do sujeito e "will".
            <em> Ex: "Will you come with us?" (Você virá conosco?)</em>
          </li>
        </ul>

        <br />
        <h5><i>Dicas para prática:</i></h5>
        <p>
          O futuro simples é bastante simples de formar, mas para torná-lo mais natural, é importante praticar a conjugação com diferentes sujeitos e criar perguntas e negativas. Além disso, lembre-se de que "will" não muda conforme o sujeito. 
        </p>

        <br />
        <h5><i>Exemplos:</i></h5>
        <ul>
          <li><em>"I will travel to London next year."</em> – Eu viajarei para Londres no próximo ano.</li>
          <li><em>"They will study hard for the test."</em> – Eles estudarão bastante para a prova.</li>
          <li><em>"She will call you when she arrives."</em> – Ela ligará para você quando chegar.</li>
          <li><em>"We will leave in the morning."</em> – Nós sairemos de manhã.</li>
        </ul>
        <br />

        <h3><i>Resumo:</i></h3>
        <ul>
          <li><em>Futuro Simples</em>: Usado para falar de ações que irão ocorrer no futuro. A estrutura básica é: Sujeito + "will" + verbo (forma base). (Ex: "I will talk to her tomorrow.")</li>
          <li>Formas negativas são feitas com "will not" ou "won't".</li>
          <li>Para perguntas, invertemos o sujeito e "will".</li>
        </ul>
      </h4>
    </Col>
  </Row>
</Container>
<br />


<Card className="card-obs">
  <Card.Body>
    <h3>Observações Gramaticais</h3>
    <br />

    <h5>1. Verbos no Futuro Simples:</h5>
    <p>Para formar o futuro simples em inglês, utiliza-se o modal "will" seguido do verbo base no infinitivo, sem alterações.</p>
    <br />
    <p>Exemplo: <em>"I will study for the exam."</em> (Eu estudarei para o exame).</p>
    <br />

    <h5>Exceções:</h5>
    <ul>
      <li>O "will" é sempre utilizado, independentemente do sujeito ou do verbo que segue. Não há variação de forma do verbo.</li>
      <br />
      <li>Exemplo: <em>"She will go to the party."</em> (Ela irá para a festa).</li>
      <li>Exemplo: <em>"They will help us tomorrow."</em> (Eles nos ajudarão amanhã).</li>
    </ul>
    <br />

    <h5>2. Uso de "Shall" com "I" e "We":</h5>
    <p>Embora "will" seja usado com todos os sujeitos, em inglês britânico, "shall" é mais comum com "I" e "We" para indicar o futuro.</p>
    <br />
    <p>Exemplo: <em>"I shall return soon."</em> (Eu retornarei em breve).</p>
    <br />
    <p>Exemplo: <em>"We shall go to the park."</em> (Nós iremos ao parque).</p>
    <br />
    <p>Nos Estados Unidos, "shall" é pouco usado, e "will" é a forma preferida com qualquer sujeito.</p>
    <br />

    <h5>3. Contração de "will":</h5>
    <p>Em conversação informal, é comum contrairmos "will" para "’ll".</p>
    <br />
    <p>Exemplo: <em>"I’ll call you later."</em> (Eu te ligarei mais tarde).</p>
    <br />
    <p>Exemplo: <em>"She’ll come to the meeting."</em> (Ela virá para a reunião).</p>
    <br />

    <h5>4. Perguntas e Negativas no Futuro:</h5>
    <p>Para formar perguntas no futuro simples, basta inverter a ordem do sujeito e do "will". Para negativas, usa-se "will not" ou a forma contraída "won’t".</p>
    <br />
    <p>Exemplo de pergunta: <em>"Will you help me?"</em> (Você me ajudará?).</p>
    <br />
    <p>Exemplo de negativa: <em>"I will not go to the party."</em> (Eu não irei à festa).</p>
    <br />

    <h3>Resumo:</h3>
    <ul>
      <li>Use "will" + verbo base para formar o futuro simples.</li>
      <li>Com "I" e "We", pode-se usar "shall" no lugar de "will" (principalmente no inglês britânico).</li>
      <li>Em conversação informal, "will" é frequentemente contraído para "’ll".</li>
      <li>Para perguntas, inverta a ordem do sujeito e "will".</li>
      <li>Para frases negativas, use "will not" ou "won’t".</li>
    </ul>
  </Card.Body>
</Card>

<br />
<br />

<Container className="questions">
  <Row>
    <Col>
      <h1 className="h1-questions">Questions</h1>
      <Accordion className="no-border-accordion">
        <Accordion.Item eventKey="0">
          <Accordion.Header>1. Complete a frase com o verbo correto no futuro simples: "I ____ (visit) my grandmother next week."</Accordion.Header>
          <Accordion.Body>
            "I will visit my grandmother next week." (O futuro simples é formado com "will" + verbo no infinitivo.)
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>2. Complete a frase com o verbo correto no futuro simples: "They ____ (play) soccer tomorrow."</Accordion.Header>
          <Accordion.Body>
            "They will play soccer tomorrow." (Para formar o futuro simples, usamos "will" + verbo base.)
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>3. Complete a frase com o verbo correto no futuro simples: "She ____ (call) you when she arrives."</Accordion.Header>
          <Accordion.Body>
            "She will call you when she arrives." (O verbo "will" é sempre usado para formar o futuro simples, independentemente do sujeito.)
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>4. Complete a frase com o verbo correto no futuro simples: "They ____ (travel) to Paris next summer."</Accordion.Header>
          <Accordion.Body>
            "They will travel to Paris next summer." (O futuro simples é formado pela estrutura "will" + verbo base.)
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>5. Complete a frase com o verbo correto no futuro simples: "We ____ (leave) for the airport at 8 AM."</Accordion.Header>
          <Accordion.Body>
            "We will leave for the airport at 8 AM." (A estrutura do futuro simples sempre envolve "will" + verbo no infinitivo.)
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="5">
          <Accordion.Header>6. Complete a frase com o verbo correto no futuro simples: "I ____ (send) the email tomorrow morning."</Accordion.Header>
          <Accordion.Body>
            "I will send the email tomorrow morning." (O futuro simples é sempre formado por "will" + verbo no infinitivo.)
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="6">
          <Accordion.Header>7. Transforme a frase para o futuro simples: "She visits her parents every weekend."</Accordion.Header>
          <Accordion.Body>
            "She will visit her parents next weekend." (Para formar o futuro, usamos "will" + verbo no infinitivo. "Every weekend" foi alterado para "next weekend" para indicar um futuro.)
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="7">
          <Accordion.Header>8. Transforme a frase para o futuro simples: "I read books every night."</Accordion.Header>
          <Accordion.Body>
            "I will read books every night." (Usamos "will" para formar o futuro simples, mantendo a mesma estrutura do verbo no infinitivo.)
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="8">
          <Accordion.Header>9. Transforme a frase para o futuro simples: "They travel to New York every summer."</Accordion.Header>
          <Accordion.Body>
            "They will travel to New York next summer." (Mudamos "every summer" para "next summer" para indicar uma ação futura.)
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
