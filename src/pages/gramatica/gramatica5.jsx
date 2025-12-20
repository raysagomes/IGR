import Header from "../../components/header";
import Footer from "../../components/footer";
import { Helmet } from 'react-helmet-async';
import HeaderMenuGramatica from '../../components/headers/header-menu-gramatica';
import Logo from '../../components/logo';
import { Container, Col, Row, Accordion} from "react-bootstrap";
import Card from 'react-bootstrap/Card';

export default function Gramatica5() {
    return(
<>
<Helmet>
        <title>Verbo no Passado Simples</title>
      </Helmet>
<Header />
<Logo />
<HeaderMenuGramatica />
<Container>
  <Row>
    <Col className="coluna-texto1">
      <h2 className="h1-Texto-Inicial">Verbo no Passado Simples</h2>

      <h4 className="h5-Textos">
        <h3>Uso do Passado Simples</h3>
        
        <h5><i>Estrutura e Uso do Passado Simples</i></h5>
        <p>
          O passado simples é usado para descrever ações concluídas em um momento específico do passado. É um dos tempos verbais mais comuns para narrar eventos, descrever rotinas passadas e falar sobre experiências que já terminaram.
        </p>

        <br />
        <ul>
          <li><strong>Forma Afirmativa:</strong> Sujeito + verbo no passado
            <br />
            Exemplo: <em>"I visited my friend yesterday."</em> (Eu visitei meu amigo ontem.)
          </li>
          <br />

          <li><strong>Forma Negativa:</strong> Sujeito + did not (ou didn't) + verbo (forma básica)
            <br />
            Exemplo: <em>"She didn't go to the party."</em> (Ela não foi à festa.)
          </li>
          <br />

          <li><strong>Forma Interrogativa:</strong> Did + sujeito + verbo (forma básica)?
            <br />
            Exemplo: <em>"Did they watch the movie?"</em> (Eles assistiram ao filme?)
          </li>
        </ul>

        <br />
        <h5><i>Como formar o Passado Simples:</i></h5>
        <p>
          Para verbos regulares, basta acrescentar "-ed" ao final do verbo na forma base. Por exemplo:
        </p>
        <ul>
          <li><em>to walk</em> (andar) → <em>walked</em></li>
          <li><em>to play</em> (jogar) → <em>played</em></li>
          <li><em>to start</em> (começar) → <em>started</em></li>
        </ul>
        <p>
          Atenção: Existem muitos verbos irregulares no inglês que têm formas de passado específicas e não seguem a regra do "-ed". Por exemplo:
        </p>
        <ul>
          <li><em>to go</em> (ir) → <em>went</em></li>
          <li><em>to have</em> (ter) → <em>had</em></li>
          <li><em>to see</em> (ver) → <em>saw</em></li>
        </ul>

        <br />
        <h5><i>Exemplos de uso:</i></h5>
        <ul>
          <li><em>"I finished my homework last night."</em> – Eu terminei minha lição de casa na noite passada.</li>
          <li><em>"They traveled to Spain last summer."</em> – Eles viajaram para a Espanha no último verão.</li>
          <li><em>"We watched a great movie on Saturday."</em> – Nós assistimos a um ótimo filme no sábado.</li>
          <li><em>"He didn't call me yesterday."</em> – Ele não me ligou ontem.</li>
          <li><em>"Did you enjoy the concert?"</em> – Você gostou do show?</li>
        </ul>

        <br />
        <h3><i>Resumo:</i></h3>
        <ul>
          <li><em>Passado Simples:</em> Usado para ações concluídas em um tempo específico no passado. (Ex: "I visited my friend yesterday.")</li>
          <li><em>Formação:</em> Verbos regulares acrescentam "-ed"; verbos irregulares têm formas específicas.</li>
        </ul>
      </h4>
    </Col>
  </Row>
</Container>



<Card className="card-obs">
  <Card.Body>
    <h3>Observações Gramaticais</h3>
    <br />

    <h5>1. Verbos Regulares no Passado:</h5>
    <p>Para formar o passado simples de verbos regulares em inglês, geralmente adicionamos "-ed" ao final do verbo.</p>
    <br />
    <p>Exemplo: <em>"I talked to him."</em> (Eu falei com ele).</p>
    <br />

    <h5>Exceções:</h5>
    <ul>
      <li>Se o verbo termina em "e", adiciona-se apenas "-d".</li>
      <br />
      <li>Exemplo: <em>"He lived in Spain."</em> (Ele morou na Espanha).</li>
      <li>Exemplo: <em>"She danced gracefully."</em> (Ela dançou graciosamente).</li>
    </ul>
    <br />

    <h5>2. Verbos terminados em "y":</h5>
    <p>Se o verbo termina em "y" e é precedido por uma consoante, troca-se o "y" por "ied".</p>
    <br />
    <p>Exemplo: <em>"He studied all night."</em> (Ele estudou a noite toda).</p>
    <br />
    <p>Exemplo: <em>"She tried her best."</em> (Ela fez o melhor que pôde).</p>
    <br />

    <p>Se o verbo termina em "y" e é precedido por uma vogal, basta adicionar "-ed".</p>
    <br />
    <p>Exemplo: <em>"They played outside."</em> (Eles brincaram lá fora).</p>
    <br />
    <p>Exemplo: <em>"She enjoyed the trip."</em> (Ela aproveitou a viagem).</p>
    <br />

    <h5>3. Verbos curtos com uma única vogal e uma consoante final:</h5>
    <p>Para verbos curtos que terminam em uma única consoante precedida por uma única vogal, dobra-se a consoante final antes de adicionar "-ed".</p>
    <br />
    <p>Exemplo: <em>"He stopped suddenly."</em> (Ele parou de repente).</p>
    <br />
    <p>Exemplo: <em>"She planned the trip."</em> (Ela planejou a viagem).</p>
    <br />

    <h5>4. Verbos terminados em "c":</h5>
    <p>Para verbos terminados em "c", adiciona-se "k" antes de "-ed".</p>
    <br />
    <p>Exemplo: <em>"He panicked at the sight."</em> (Ele entrou em pânico ao ver).</p>
    <br />
    <p>Exemplo: <em>"They picnicked by the lake."</em> (Eles fizeram um piquenique perto do lago).</p>
    <br />

    <h3>Resumo:</h3>
    <ul>
      <li>Adicione "-ed" ao verbo para formar o passado regular.</li>
      <li>Para verbos que terminam em "e", basta adicionar "-d".</li>
      <li>Se o verbo termina em "y" após uma consoante, substitua "y" por "ied".</li>
      <li>Se o verbo termina em "y" após uma vogal, basta adicionar "-ed".</li>
      <li>Para verbos curtos com uma vogal e consoante final, dobre a consoante antes de "-ed".</li>
      <li>Para verbos terminados em "c", adicione "k" antes de "-ed".</li>
    </ul>
  </Card.Body>
</Card>
<Container className="questions">
  <Row>
    <Col>
      <h1 className="h1-questions">Questions</h1>
      <Accordion className="no-border-accordion">
        <Accordion.Item eventKey="0">
          <Accordion.Header>1. Complete a frase com o verbo correto no passado simples: "She ____ (live) in London last year."</Accordion.Header>
          <Accordion.Body>
            "She lived in London last year." (Para verbos regulares, adicionamos "-ed" para formar o passado simples.)
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>2. Complete a frase com o verbo correto no passado simples: "They ____ (study) hard for the exam."</Accordion.Header>
          <Accordion.Body>
            "They studied hard for the exam." (Verbos regulares terminados em "y", após uma consoante, trocam o "y" por "ied" no passado.)
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>3. Complete a frase com o verbo correto no passado simples: "He ____ (try) to fix the car yesterday."</Accordion.Header>
          <Accordion.Body>
            "He tried to fix the car yesterday." (Para verbos terminados em "y", trocamos "y" por "ied" no passado.)
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>4. Complete a frase com o verbo correto no passado simples: "I ____ (play) tennis last weekend."</Accordion.Header>
          <Accordion.Body>
            "I played tennis last weekend." (Adicionamos "-ed" ao verbo "play" para formar o passado simples.)
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>5. Complete a frase com o verbo correto no passado simples: "She ____ (go) to the party last night."</Accordion.Header>
          <Accordion.Body>
            "She went to the party last night." (O verbo "go" tem uma forma irregular no passado: "went".)
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="5">
          <Accordion.Header>6. Complete a frase com o verbo correto no passado simples: "We ____ (have) a great time at the concert."</Accordion.Header>
          <Accordion.Body>
            "We had a great time at the concert." (O verbo "have" tem uma forma irregular no passado: "had".)
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="6">
          <Accordion.Header>7. Complete a frase com o verbo correto no passado simples: "They ____ (watch) a movie yesterday."</Accordion.Header>
          <Accordion.Body>
            "They watched a movie yesterday." (O verbo "watch" é regular e forma o passado com "-ed".)
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="7">
          <Accordion.Header>8. Complete a frase com o verbo correto no passado simples: "She ____ (buy) a new book last week."</Accordion.Header>
          <Accordion.Body>
            "She bought a new book last week." (O verbo "buy" tem uma forma irregular no passado: "bought".)
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="8">
          <Accordion.Header>9. Complete a frase com o verbo correto no passado simples: "We ____ (clean) the house on Saturday."</Accordion.Header>
          <Accordion.Body>
            "We cleaned the house on Saturday." (O verbo "clean" é regular e adiciona "-ed" para formar o passado.)
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="9">
          <Accordion.Header>10. Complete a frase com o verbo correto no passado simples: "He ____ (take) a photo during the trip."</Accordion.Header>
          <Accordion.Body>
            "He took a photo during the trip." (O verbo "take" tem uma forma irregular no passado: "took".)
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
