import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import { Helmet } from 'react-helmet-async';
import Logo from '../../components/logo';
import HeaderMenuGramatica from '../../components/header-menu-gramatica';
import { Container, Col, Row, Accordion} from "react-bootstrap";
import Card from 'react-bootstrap/Card';



export default function Gramatica9() {
    return(
<>
<Helmet>
        <title>Tempos Contínuos e Perfeitos</title>
      </Helmet>
<Header />
<Logo />
<HeaderMenuGramatica />

<Container>
  <Row>
    <Col className="coluna-texto1">
      <h2 className="h1-Texto-Inicial">Continuous and Perfect Tenses</h2>
      <h5><i>Tempos Contínuos e Perfeitos</i></h5>
      <br />

      <h4 className="h5-Textos">
        <h3>Understanding Continuous and Perfect Tenses</h3>
        <h5><i>Entendendo os Tempos Contínuos e Perfeitos</i></h5>
        <br />

        <p>
          No inglês, os tempos contínuos enfatizam ações em progresso, enquanto os tempos perfeitos indicam ações que foram completadas ou que têm relevância para o presente, passado ou futuro.
        </p>
        <h5><i>Estrutura e Uso</i></h5>

        <br />
        <ul>
          <li><strong>Present Continuous:</strong> Usado para ações que estão acontecendo no momento da fala. 
            <br />
            Exemplo: <em>"I am studying now."</em> (Eu estou estudando agora.)
          </li>
          <br />

          <li><strong>Past Continuous:</strong> Usado para ações que estavam em progresso em um momento específico no passado.
            <br />
            Exemplo: <em>"She was reading when I arrived."</em> (Ela estava lendo quando eu cheguei.)
          </li>
          <br />

          <li><strong>Present Perfect:</strong> Usado para ações que foram completadas recentemente ou têm relevância para o presente.
            <br />
            Exemplo: <em>"We have finished our homework."</em> (Nós terminamos nossa lição de casa.)
          </li>
        </ul>

        <br />
        <h5><i>Como formar os tempos:</i></h5>
        <p>
          A formação depende do tempo e do auxiliar:
        </p>
        <ul>
          <li><strong>Present Continuous:</strong> 
            <br />
            - Verbo "to be" no presente + verbo principal com "<em>-ing</em>".
            <br />
            Exemplo: <em>I am eating.</em> (Eu estou comendo.)
          </li>
          <br />

          <li><strong>Past Continuous:</strong>
            <br />
            - Verbo "to be" no passado + verbo principal com "<em>-ing</em>".
            <br />
            Exemplo: <em>She was cooking.</em> (Ela estava cozinhando.)
          </li>
          <br />

          <li><strong>Present Perfect:</strong>
            <br />
            - Verbo "to have" no presente + particípio passado do verbo principal.
            <br />
            Exemplo: <em>They have traveled.</em> (Eles viajaram.)
          </li>
        </ul>

        <p>
          Atenção: Algumas formas possuem usos específicos dependendo do contexto. Por exemplo, o presente perfeito contínuo enfatiza a duração de uma ação:
          <br />
          Exemplo: <em>"I have been working all day."</em> (Eu estive trabalhando o dia todo.)
        </p>

        <br />
        <h5><i>Examples of Usage:</i></h5>
        <h5><i>Exemplos de uso:</i></h5>
        <ul>
          <li><em>"She is studying for the exam."</em> – Ela está estudando para o exame. (Presente Contínuo)</li>
          <li><em>"He was running when it started to rain."</em> – Ele estava correndo quando começou a chover. (Passado Contínuo)</li>
          <li><em>"We have seen this movie before."</em> – Nós já vimos este filme antes. (Presente Perfeito)</li>
          <li><em>"They have been waiting for hours."</em> – Eles estão esperando há horas. (Presente Perfeito Contínuo)</li>
        </ul>

        <br />
        <h3><i>Summary:</i></h3>
        <h5><i>Resumo:</i></h5>
        <ul>
          <li><em>Present Continuous:</em> Ações em progresso no momento da fala (Ex: "I am working.").</li>
          <li><em>Presente Contínuo:</em> Ações em progresso no momento da fala (Ex: "I am working.").</li>

          <li><em>Past Continuous:</em> Ações em progresso em um momento específico no passado (Ex: "She was reading.").</li>
          <li><em>Passado Contínuo:</em> Ações em progresso em um momento específico no passado (Ex: "She was reading.").</li>

          <li><em>Present Perfect:</em> Ações concluídas recentemente ou com impacto no presente (Ex: "We have finished.").</li>
          <li><em>Presente Perfeito:</em> Ações concluídas recentemente ou com impacto no presente (Ex: "We have finished.").</li>
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

    <h5>1. Uso do "Present Continuous" e "Present Perfect":</h5>
    <p>O "Present Continuous" é usado para ações que estão acontecendo no momento da fala, enquanto o "Present Perfect" é usado para ações que começaram no passado e têm relevância no presente.</p>
    <br />
    <p><strong>"Present Continuous"</strong> é usado para descrever ações em progresso no momento da fala.</p>
    <br />
    <p>Exemplo: <em>"I am eating dinner."</em> (Eu estou comendo o jantar).</p>
    <br />
    <p><strong>"Present Perfect"</strong> é usado para indicar que uma ação foi completada recentemente ou que tem efeitos no presente.</p>
    <br />
    <p>Exemplo: <em>"She has finished her homework."</em> (Ela terminou a lição de casa).</p>
    <br />

    <h5>2. Diferença entre "Present Perfect" e "Present Perfect Continuous":</h5>
    <p><strong>"Present Perfect Continuous"</strong> é usado quando queremos enfatizar a duração de uma ação que começou no passado e continua no presente.</p>
    <br />
    <p>Exemplo: <em>"I have been studying for two hours."</em> (Eu estou estudando há duas horas).</p>
    <br />
    <p>O "Present Perfect" se foca na ação completada e em suas consequências no presente.</p>
    <br />
    <p>Exemplo: <em>"I have studied English for five years."</em> (Eu estudei inglês por cinco anos).</p>
    <br />

    <h5>3. Uso do "Past Continuous":</h5>
    <p><strong>"Past Continuous"</strong> é usado para ações que estavam em progresso em um momento específico do passado.</p>
    <br />
    <p>Exemplo: <em>"I was reading a book when you called."</em> (Eu estava lendo um livro quando você ligou).</p>
    <br />
    <p>Geralmente, o "Past Continuous" é usado para descrever o contexto de outra ação no passado.</p>
    <br />
    <p>Exemplo: <em>"She was watching TV when I arrived."</em> (Ela estava assistindo TV quando eu cheguei).</p>
    <br />

    <h5>4. Uso do "Present Perfect" para ações que começaram no passado:</h5>
    <p>Usamos o "Present Perfect" para indicar que uma ação começou no passado e ainda tem impacto ou relevância no presente.</p>
    <br />
    <p>Exemplo: <em>"I have lived here for five years."</em> (Eu moro aqui há cinco anos).</p>
    <br />
    <p>Não especificamos quando a ação aconteceu, mas indicamos que ela ainda é relevante.</p>
    <br />

    <h5>5. Forma contraída de "have" e "be":</h5>
    <p>Assim como em outras construções verbais, é comum usar formas contraídas de "have" e "be" em conversações informais.</p>
    <br />
    <p>Forma contraída de "have" (para "Present Perfect"): <em>"I've"</em>.</p>
    <br />
    <p>Exemplo: <em>"I've been working all day."</em> (Eu estive trabalhando o dia todo).</p>
    <br />
    <p>Forma contraída de "be" (para "Present Continuous" ou "Past Continuous"): <em>"I'm", "you're", "he's", "they're"</em>.</p>
    <br />
    <p>Exemplo: <em>"He's studying right now."</em> (Ele está estudando agora).</p>
    <br />

    <h3>Resumo:</h3>
    <ul>
      <li>Use "Present Continuous" para ações que estão acontecendo no momento.</li>
      <li>Use "Present Perfect" para ações que começaram no passado e têm relevância no presente.</li>
      <li>Use "Present Perfect Continuous" para ações que começaram no passado e estão em progresso.</li>
      <li>Use "Past Continuous" para ações que estavam em andamento em um momento específico no passado.</li>
      <li>Em conversação informal, formas contraídas de "have" e "be" são frequentemente usadas.</li>
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
            1. Complete a frase usando o "Present Continuous": 
            "I ____ (eat) lunch right now."
          </Accordion.Header>
          <Accordion.Body>
            "I am eating lunch right now." (Usamos o "Present Continuous" para ações que estão acontecendo no momento da fala.)
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            2. Complete a frase usando o "Present Perfect": 
            "She ____ (finish) her homework already."
          </Accordion.Header>
          <Accordion.Body>
            "She has finished her homework already." (Usamos o "Present Perfect" para ações que começaram no passado e têm relevância no presente.)
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            3. Complete a frase usando o "Present Perfect Continuous": 
            "I ____ (study) for two hours."
          </Accordion.Header>
          <Accordion.Body>
            "I have been studying for two hours." (Usamos o "Present Perfect Continuous" para indicar ações que começaram no passado e continuam até o presente.)
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>
            4. Complete a frase usando o "Past Continuous": 
            "She ____ (watch) TV when I arrived."
          </Accordion.Header>
          <Accordion.Body>
            "She was watching TV when I arrived." (Usamos o "Past Continuous" para ações que estavam em progresso em um momento específico no passado.)
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>
            5. Complete a frase usando o "Present Perfect": 
            "They ____ (live) in this city for five years."
          </Accordion.Header>
          <Accordion.Body>
            "They have lived in this city for five years." (Usamos o "Present Perfect" para ações que começaram no passado e continuam no presente.)
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="5">
          <Accordion.Header>
            6. Complete a frase usando o "Present Continuous": 
            "We ____ (have) dinner at the moment."
          </Accordion.Header>
          <Accordion.Body>
            "We are having dinner at the moment." (Usamos o "Present Continuous" para ações que estão acontecendo agora.)
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="6">
          <Accordion.Header>
            7. Complete a frase usando o "Past Continuous": 
            "I ____ (read) a book when you called."
          </Accordion.Header>
          <Accordion.Body>
            "I was reading a book when you called." (Usamos o "Past Continuous" para descrever uma ação que estava em andamento no passado, interrompida por outra ação.)
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="7">
          <Accordion.Header>
            8. Complete a frase usando o "Present Perfect Continuous": 
            "She ____ (work) all day."
          </Accordion.Header>
          <Accordion.Body>
            "She has been working all day." (Usamos o "Present Perfect Continuous" para mostrar a duração de uma ação que começou no passado e continua no presente.)
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="8">
          <Accordion.Header>
            9. Complete a frase usando o "Present Perfect": 
            "I ____ (see) that movie already."
          </Accordion.Header>
          <Accordion.Body>
            "I have seen that movie already." (Usamos o "Present Perfect" para falar sobre experiências de vida ou ações completadas com relevância no presente.)
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
