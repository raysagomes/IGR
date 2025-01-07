import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import { Helmet } from 'react-helmet-async';
import Logo from '../../components/logo';
import HeaderMenuGramatica from '../../components/header-menu-gramatica';
import { Container, Col, Row, Accordion} from "react-bootstrap";
import Card from 'react-bootstrap/Card';

export default function Gramatica8() {
    return(
<>
<Helmet>
        <title>Formas Comparativas e Superlativas</title>
      </Helmet>
<Header />
<Logo />
<HeaderMenuGramatica />

<Container>
  <Row>
    <Col className="coluna-texto1">
      <h2 className="h1-Texto-Inicial">Formas Comparativas e Superlativas</h2>

      <h4 className="h5-Textos">
        <h3>Comparando Substantivos</h3>
        
        <h5><i>Estrutura e Uso de Comparativos e Superlativos</i></h5>
        <p>
          No inglês, usamos formas comparativas e superlativas para expressar diferenças entre coisas ou pessoas. Os comparativos mostram como algo é "mais" ou "menos" em relação a outra coisa, enquanto os superlativos destacam o grau mais alto ou extremo de uma qualidade.
        </p>

        <br />
        <ul>
          <li><strong>Forma Comparativa:</strong> Usada para comparar dois elementos. 
            <br />
            Exemplo: <em>"This book is <strong>better</strong> than that one."</em> (Este livro é melhor do que aquele.)
          </li>
          <br />

          <li><strong>Forma Superlativa:</strong> Usada para indicar o grau mais alto entre três ou mais elementos. 
            <br />
            Exemplo: <em>"She is <strong>the smartest</strong> student in the class."</em> (Ela é a aluna mais inteligente da classe.)
          </li>
        </ul>

        <br />
        <h5><i>Como formar comparativos e superlativos:</i></h5>
        <p>
          A formação depende do número de sílabas do adjetivo:
        </p>
        <ul>
          <li><strong>Adjetivos curtos (1 sílaba):</strong> 
            <br />
            - Adicione "<em>-er</em>" para o comparativo e "<em>-est</em>" para o superlativo.
            <br />
            Exemplo: <em>small → smaller → smallest</em> (pequeno → menor → o menor)
          </li>
          <br />

          <li><strong>Adjetivos longos (2 sílabas ou mais):</strong>
            <br />
            - Use "<em>more</em>" para o comparativo e "<em>most</em>" para o superlativo.
            <br />
            Exemplo: <em>beautiful → more beautiful → most beautiful</em> (bonito → mais bonito → o mais bonito)
          </li>
        </ul>

        <p>
          Atenção: Existem adjetivos irregulares com formas comparativas e superlativas únicas, como:
        </p>
        <ul>
          <li><em>good → better → best</em> (bom → melhor → o melhor)</li>
          <li><em>bad → worse → worst</em> (ruim → pior → o pior)</li>
          <li><em>far → farther → farthest</em> (longe → mais longe → o mais longe)</li>
        </ul>

        <br />
        <h5><i>Exemplos de uso:</i></h5>
        <ul>
          <li><em>"This car is faster than that one."</em> – Este carro é mais rápido do que aquele.</li>
          <li><em>"That is the most expensive item in the store."</em> – Esse é o item mais caro da loja.</li>
          <li><em>"She is more talented than her sister."</em> – Ela é mais talentosa do que a irmã.</li>
          <li><em>"This movie is better than the last one."</em> – Este filme é melhor do que o último.</li>
          <li><em>"This is the worst day of my life."</em> – Este é o pior dia da minha vida.</li>
        </ul>

        <br />
        <h3><i>Resumo:</i></h3>
        <ul>
          <li><em>Comparativos:</em> Usados para comparar dois elementos (Ex: "This book is better than that one.").</li>
          <li><em>Superlativos:</em> Indicam o grau mais alto entre três ou mais elementos (Ex: "She is the smartest student in the class.").</li>
        </ul>
      </h4>
    </Col>
  </Row>
</Container>

<Card className="card-obs">
  <Card.Body>
    <h3>Observações Gramaticais</h3>
    <br />

    <h5>1. Comparativos com "mais" e "menos":</h5>
    <p>Os comparativos são usados para comparar duas coisas, pessoas ou ideias, indicando superioridade, inferioridade ou igualdade.</p>
    <br />
    <p><strong>Exemplo de superioridade:</strong> "This book is more interesting than the other one."  
    (Este livro é mais interessante do que o outro).</p>
    <br />
    <p><strong>Exemplo de inferioridade:</strong> "This house is less expensive than that one."  
    (Esta casa é menos cara do que aquela).</p>
    <br />

    <h5>2. Igualdade com "as...as":</h5>
    <p>Para expressar igualdade, usamos a estrutura "as + adjetivo + as".</p>
    <br />
    <p>Exemplo: <em>"She is as tall as her brother."</em> (Ela é tão alta quanto o irmão).</p>
    <br />
    <p><strong>Nota:</strong> Em frases negativas, "as...as" pode ser substituído por "not as...as" ou "not so...as".</p>
    <br />
    <p>Exemplo: <em>"This movie is not as good as the last one."</em> (Este filme não é tão bom quanto o último).</p>
    <br />

    <h5>3. Superlativos para expressar o grau máximo:</h5>
    <p>Os superlativos são usados para descrever algo como sendo o mais ou o menos dentro de um grupo ou categoria.</p>
    <br />
    <p>Exemplo de superioridade: <em>"He is the best player on the team."</em>  
    (Ele é o melhor jogador do time).</p>
    <br />
    <p>Exemplo de inferioridade: <em>"This is the least expensive option."</em>  
    (Esta é a opção menos cara).</p>
    <br />

    <h5>4. Regras de formação de comparativos e superlativos:</h5>
    <ul>
      <li>Para adjetivos curtos, adiciona-se "-er" para comparativos e "-est" para superlativos.  
      Exemplo: "tall" → "taller" (mais alto) → "tallest" (o mais alto).</li>
      <br />
      <li>Para adjetivos longos, usa-se "more" para comparativos e "most" para superlativos.  
      Exemplo: "beautiful" → "more beautiful" (mais bonito) → "most beautiful" (o mais bonito).</li>
      <br />
      <li>Alguns adjetivos têm formas irregulares.  
      Exemplo: "good" → "better" (melhor) → "best" (o melhor).</li>
    </ul>
    <br />

    <h5>5. Expressões comuns:</h5>
    <p>É comum usar palavras como "far" e "much" para intensificar os comparativos.</p>
    <br />
    <p>Exemplo: <em>"This car is much faster than mine."</em>  
    (Este carro é muito mais rápido que o meu).</p>
    <br />

    <h3>Resumo:</h3>
    <ul>
      <li>Comparativos são usados para comparar duas coisas.</li>
      <li>Superlativos expressam o grau máximo ou mínimo dentro de um grupo.</li>
      <li>Adjetivos curtos usam "-er" e "-est"; adjetivos longos usam "more" e "most".</li>
      <li>Adjetivos irregulares têm formas próprias, como "good → better → best".</li>
      <li>Expressões como "far" ou "much" intensificam os comparativos.</li>
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
            1. Complete a frase usando o comparativo ou superlativo de "tall": 
            "John is ____ (tall) than Mike."
          </Accordion.Header>
          <Accordion.Body>
            "John is taller than Mike." (Usamos o comparativo "taller" porque estamos comparando duas pessoas.)
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            2. Complete a frase usando o comparativo ou superlativo de "intelligent": 
            "Mary is the ____ (intelligent) student in the class."
          </Accordion.Header>
          <Accordion.Body>
            "Mary is the most intelligent student in the class." 
            (Usamos o superlativo "most intelligent" porque estamos indicando o nível mais alto de inteligência dentro do grupo.)
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            3. Complete a frase usando o comparativo ou superlativo de "fast": 
            "This car is ____ (fast) than that one."
          </Accordion.Header>
          <Accordion.Body>
            "This car is faster than that one." (Usamos o comparativo "faster" para comparar dois carros.)
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>
            4. Complete a frase usando o comparativo ou superlativo de "good": 
            "She is the ____ (good) singer in the competition."
          </Accordion.Header>
          <Accordion.Body>
            "She is the best singer in the competition." 
            (Usamos o superlativo irregular "best" para indicar o mais alto nível de qualidade.)
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>
            5. Complete a frase usando o comparativo ou superlativo de "bad": 
            "This test was ____ (bad) than the last one."
          </Accordion.Header>
          <Accordion.Body>
            "This test was worse than the last one." 
            (Usamos o comparativo irregular "worse" para indicar que algo é menos favorável.)
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="5">
          <Accordion.Header>
            6. Complete a frase usando o comparativo ou superlativo de "beautiful": 
            "That is the ____ (beautiful) painting in the gallery."
          </Accordion.Header>
          <Accordion.Body>
            "That is the most beautiful painting in the gallery." 
            (Usamos o superlativo "most beautiful" porque estamos indicando a maior qualidade estética entre as opções.)
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="6">
          <Accordion.Header>
            7. Complete a frase usando o comparativo ou superlativo de "old": 
            "This house is ____ (old) than ours."
          </Accordion.Header>
          <Accordion.Body>
            "This house is older than ours." 
            (Usamos o comparativo "older" para comparar duas casas.)
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="7">
          <Accordion.Header>
            8. Complete a frase usando o comparativo ou superlativo de "small": 
            "This room is the ____ (small) in the house."
          </Accordion.Header>
          <Accordion.Body>
            "This room is the smallest in the house." 
            (Usamos o superlativo "smallest" porque estamos falando da menor entre todas as opções.)
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="8">
          <Accordion.Header>
            9. Complete a frase usando o comparativo ou superlativo de "far": 
            "He lives ____ (far) than his brother."
          </Accordion.Header>
          <Accordion.Body>
            "He lives farther than his brother." 
            (Usamos o comparativo "farther" para indicar maior distância entre duas localizações.)
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
