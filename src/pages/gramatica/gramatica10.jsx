import Header from "../../components/header";
import Footer from "../../components/footer";
import { Helmet } from 'react-helmet-async';
import Logo from '../../components/logo';
import HeaderMenuGramatica from '../../components/headers/header-menu-gramatica';
import { Container, Col, Row, Accordion} from "react-bootstrap";
import Card from 'react-bootstrap/Card';



export default function Gramatica10() {
    return(
<>
<Helmet>
        <title>Adjetivos e Advérbios</title>
      </Helmet>
<Header />
<Logo />
<HeaderMenuGramatica />

<Container>
  <Row>
    <Col className="coluna-texto1">
      <h2 className="h1-Texto-Inicial">Adjectives and Adverbs</h2>
      <h5><i>Adjetivos e Advérbios</i></h5>
      <br />

      <h4 className="h5-Textos">
        <h3>Understanding Adjectives and Adverbs</h3>
        <h5><i>Entendendo os Adjetivos e Advérbios</i></h5>
        <br />

        <p>
          No inglês, os adjetivos são usados para descrever ou modificar substantivos, enquanto os advérbios são usados para descrever ou modificar verbos, adjetivos ou outros advérbios.
        </p>
        <h5><i>Estrutura e Uso</i></h5>

        <br />
        <ul>
          <li><strong>Adjetivos:</strong> Usados para descrever pessoas, lugares, coisas ou ideias.
            <br />
            Exemplo: <em>"She is a talented singer."</em> (Ela é uma cantora talentosa.)
          </li>
          <br />

          <li><strong>Advérbios:</strong> Usados para descrever ou modificar verbos, adjetivos ou outros advérbios.
            <br />
            Exemplo: <em>"He runs quickly."</em> (Ele corre rapidamente.)
          </li>
          <br />

          <li><strong>Comparativo de Adjetivos:</strong> Usado para comparar duas coisas ou pessoas.
            <br />
            Exemplo: <em>"John is taller than Mike."</em> (John é mais alto que Mike.)
          </li>
          <br />

          <li><strong>Superlativo de Adjetivos:</strong> Usado para mostrar o mais alto grau de uma qualidade.
            <br />
            Exemplo: <em>"She is the smartest student in the class."</em> (Ela é a aluna mais inteligente da classe.)
          </li>
        </ul>

        <br />
        <h5><i>Como formar os adjetivos e advérbios:</i></h5>
        <p>
          A formação depende do tipo de adjetivo ou advérbio:
        </p>
        <ul>
          <li><strong>Adjetivos:</strong>
            <br />
            - Adjetivos podem ter sufixos como <em>-ful</em>, <em>-less</em>, <em>-ous</em>, etc.
            <br />
            Exemplo: <em>beautiful (bonito), careless (descuidado), dangerous (perigoso).</em>
          </li>
          <br />

          <li><strong>Advérbios:</strong>
            <br />
            - Muitos advérbios são formados a partir de adjetivos, adicionando <em>-ly</em> ao final.
            <br />
            Exemplo: <em>quickly (rapidamente), happily (felizmente), softly (suavemente).</em>
          </li>
          <br />
          
          <li><strong>Comparativo de Advérbios:</strong>
            <br />
            - Advérbios também podem ter uma forma comparativa, normalmente adicionando <em>more</em> ou <em>less</em>.
            <br />
            Exemplo: <em>"She sings more beautifully than anyone else."</em> (Ela canta mais lindamente do que qualquer outra pessoa.)
          </li>
        </ul>

        <p>
          Atenção: Alguns advérbios não seguem a regra de adicionar <em>-ly</em>, como "fast" e "hard".
          <br />
          Exemplo: <em>"He runs fast."</em> (Ele corre rápido.)
        </p>

        <br />
        <h5><i>Exemplos de uso:</i></h5>
        <ul>
          <li><em>"She is a very smart student."</em> – Ela é uma estudante muito inteligente. (Adjetivo)</li>
          <li><em>"He speaks English fluently."</em> – Ele fala inglês fluentemente. (Advérbio)</li>
          <li><em>"The book is more interesting than the movie."</em> – O livro é mais interessante que o filme. (Comparativo de Adjetivo)</li>
          <li><em>"She runs faster than anyone else."</em> – Ela corre mais rápido do que qualquer outra pessoa. (Comparativo de Advérbio)</li>
        </ul>

        <br />
        <h3><i>Summary:</i></h3>
        <h5><i>Resumo:</i></h5>
        <ul>
          <li><em>Adjetivos:</em> Usados para descrever substantivos (Ex: "She is beautiful.").</li>
          <li><em>Advérbios:</em> Usados para modificar verbos, adjetivos ou outros advérbios (Ex: "He runs quickly.").</li>
          <li><em>Comparativo de Adjetivos:</em> Para comparar duas coisas (Ex: "John is taller.").</li>
          <li><em>Superlativo de Adjetivos:</em> Para indicar o maior grau (Ex: "She is the smartest.").</li>
        </ul>
      </h4>
    </Col>
  </Row>
</Container>

<Card className="card-obs">
  <Card.Body>
    <h3>Observações Gramaticais</h3>
    <br />

    <h5>1. Diferença entre Adjetivos e Advérbios:</h5>
    <p>Adjetivos são usados para descrever ou qualificar substantivos, enquanto advérbios são usados para modificar verbos, adjetivos ou outros advérbios.</p>
    <br />
    <p><strong>Adjetivos</strong> modificam substantivos para descrever suas qualidades ou características.</p>
    <br />
    <p>Exemplo: <em>"She is a kind person."</em> (Ela é uma pessoa gentil).</p>
    <br />
    <p><strong>Advérbios</strong> modificam verbos, adjetivos ou outros advérbios para indicar como, quando, onde ou em que medida algo ocorre.</p>
    <br />
    <p>Exemplo: <em>"She speaks English fluently."</em> (Ela fala inglês fluentemente).</p>
    <br />

    <h5>2. Adjetivos de Cores:</h5>
    <p>Os adjetivos de cores são usados para descrever a cor dos substantivos.</p>
    <br />
    <p>Exemplo: <em>"The sky is blue."</em> (O céu é azul).</p>
    <br />

    <h5>3. Formação de Advérbios:</h5>
    <p>Advérbios geralmente são formados adicionando o sufixo <em>-ly</em> ao adjetivo.</p>
    <br />
    <p>Exemplo: <em>"quick" (rápido) → "quickly" (rapidamente).</em></p>
    <br />
    <p>No entanto, há exceções, como advérbios que não seguem esse padrão.</p>
    <br />
    <p>Exemplo: <em>"good" (bom) → "well" (bem).</em></p>
    <br />

    <h5>4. Graduação de Adjetivos e Advérbios:</h5>
    <p>Adjetivos e advérbios podem ser usados em graus comparativo e superlativo para mostrar uma intensidade maior ou menor.</p>
    <br />
    <p><strong>Comparativo:</strong> Usado para comparar duas coisas.</p>
    <br />
    <p>Exemplo: <em>"She is taller than him."</em> (Ela é mais alta que ele).</p>
    <br />
    <p><strong>Superlativo:</strong> Usado para expressar a maior ou menor intensidade em comparação com um grupo.</p>
    <br />
    <p>Exemplo: <em>"This is the best movie I have seen."</em> (Este é o melhor filme que eu vi).</p>
    <br />
    <p><strong>Uso de "than":</strong> Em comparações, usamos "than" para conectar os elementos que estamos comparando. Normalmente, "than" é usado para comparar qualidades de adjetivos ou a intensidade de advérbios.</p>
    <br />
    <p>Exemplo com adjetivo: <em>"She is more intelligent than her brother."</em> (Ela é mais inteligente que o irmão).</p>
    <br />
    <p>Exemplo com advérbio: <em>"He runs faster than me."</em> (Ele corre mais rápido que eu).</p>
    <br />

    <h5>5. Adjetivos e Advérbios Irregulares:</h5>
    <p>Alguns adjetivos e advérbios têm formas irregulares no comparativo e superlativo.</p>
    <br />
    <p>Exemplo: <em>"good" → "better" (comparativo), "best" (superlativo).</em></p>
    <br />
    <p>Exemplo: <em>"bad" → "worse" (comparativo), "worst" (superlativo).</em></p>
    <br />

    <h3>Resumo:</h3>
    <ul>
      <li>Adjetivos descrevem substantivos, advérbios modificam verbos, adjetivos ou outros advérbios.</li>
      <li>Advérbios podem ser formados com o sufixo <em>-ly</em>, mas há exceções.</li>
      <li>Adjetivos e advérbios podem ser usados nos graus comparativo e superlativo.</li>
      <li>Alguns adjetivos e advérbios têm formas irregulares no comparativo e superlativo.</li>
      <li>Usamos "than" para fazer comparações entre dois elementos.</li>
    </ul>
  </Card.Body>
</Card>

 
<Container className="questions"> 
  <Row>
    <Col>
      <h1 className="h1-questions">Questions</h1>
      <Accordion className="no-border-accordion">
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            1. Complete a frase com o adjetivo correto: 
            "She is ____ (kind) than her sister."
          </Accordion.Header>
          <Accordion.Body>
            "She is kinder than her sister." (Usamos o comparativo de adjetivos para fazer comparações entre duas pessoas ou coisas.)
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            2. Complete a frase com o advérbio correto: 
            "He runs ____ (quick)."
          </Accordion.Header>
          <Accordion.Body>
            "He runs quickly." (Usamos o advérbio "quickly" para modificar o verbo "runs" e indicar a forma como ele corre.)
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            3. Complete a frase com o superlativo de adjetivo: 
            "This is the ____ (good) movie I've ever seen."
          </Accordion.Header>
          <Accordion.Body>
            "This is the best movie I've ever seen." (Usamos o superlativo de adjetivos para indicar que algo é o mais ou menos em comparação com outros.)
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>
            4. Complete a frase com o advérbio correto: 
            "She sings ____ (beautiful)."
          </Accordion.Header>
          <Accordion.Body>
            "She sings beautifully." (Usamos o advérbio "beautifully" para descrever como ela canta.)
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>
            5. Complete a frase com o adjetivo correto: 
            "This cake is ____ (delicious) than the last one."
          </Accordion.Header>
          <Accordion.Body>
            "This cake is more delicious than the last one." (Usamos o comparativo de adjetivos para comparar dois itens, como neste caso os bolos.)
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="5">
          <Accordion.Header>
            6. Complete a frase com o advérbio correto: 
            "He speaks ____ (loud)."
          </Accordion.Header>
          <Accordion.Body>
            "He speaks loudly." (Usamos o advérbio "loudly" para modificar o verbo "speaks" e descrever como ele fala.)
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="6">
          <Accordion.Header>
            7. Complete a frase com o superlativo de adjetivo: 
            "This is the ____ (bad) exam I've ever taken."
          </Accordion.Header>
          <Accordion.Body>
            "This is the worst exam I've ever taken." (Usamos o superlativo de adjetivos para indicar que algo é o mais ou menos em comparação com outros.)
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="7">
          <Accordion.Header>
            8. Complete a frase com o advérbio correto: 
            "They play soccer ____ (good)."
          </Accordion.Header>
          <Accordion.Body>
            "They play soccer well." (Usamos o advérbio "well" para modificar o verbo "play" e indicar a habilidade com que jogam.)
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="8">
          <Accordion.Header>
            9. Complete a frase com o adjetivo correto: 
            "This book is the ____ (interesting) of all."
          </Accordion.Header>
          <Accordion.Body>
            "This book is the most interesting of all." (Usamos o superlativo de adjetivos para comparar algo dentro de um grupo de itens.)
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
