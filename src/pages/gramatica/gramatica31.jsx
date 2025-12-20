import Header from "../../components/header";
import Footer from "../../components/footer";
import { Helmet } from 'react-helmet-async';
import Logo from '../../components/logo';
import HeaderMenuGramatica from '../../components/headers/header-menu-gramatica';
import { Container, Col, Row, Accordion} from "react-bootstrap";
import Card from 'react-bootstrap/Card';

export default function Gramatica31() {
    return(
<>
<Helmet>
        <title>Either, Neither, Both</title>
      </Helmet>
<Header />
<Logo />
<HeaderMenuGramatica />

<Container>
  <Row>
    <Col className="coluna-texto1">
      <h2 className="h1-Texto-Inicial">Either, Neither, Both</h2>

      <h4 className="h5-Textos">
        <h3>Either, Neither, Both</h3>
        
        <h5><i>Either, Neither, Both em Inglês</i></h5>
        <p>These words are used to talk about two people, things, or options. They help us express choices, similarities, and differences between two items.</p>
        <h5><i>Essas palavras são usadas para falar sobre duas pessoas, coisas ou opções. Elas nos ajudam a expressar escolhas, semelhanças e diferenças entre dois itens.</i></h5>
        <br />

        <h5><i>Uses:</i></h5>
        <ul>
          <li><strong>Both:</strong> Two things together <em>"Both students passed the exam."</em> (Ambos os estudantes passaram no exame.)</li>
          <li><strong>Either:</strong> One or the other <em>"You can choose either option."</em> (Você pode escolher qualquer uma das opções.)</li>
          <li><strong>Neither:</strong> Not one, not the other <em>"Neither answer is correct."</em> (Nenhuma das respostas está correta.)</li>
        </ul>

        <br />
        <h5><i>Patterns:</i></h5>
        <ul>
          <li><strong>Both...and:</strong> <em>"She speaks both English and French."</em></li>
          <li><strong>Either...or:</strong> <em>"We can go either today or tomorrow."</em></li>
          <li><strong>Neither...nor:</strong> <em>"He likes neither coffee nor tea."</em></li>
        </ul>

        <br />
        <h5><i>As Pronouns:</i></h5>
        <ul>
          <li><em>"Both of them are teachers."</em> – Ambos são professores.</li>
          <li><em>"Either of you can help me."</em> – Qualquer um de vocês pode me ajudar.</li>
          <li><em>"Neither of us knows the answer."</em> – Nenhum de nós sabe a resposta.</li>
        </ul>

        <br />
        <h5><i>Examples:</i></h5>
        <ul>
          <li><em>"Both my parents work in education."</em> – Ambos os meus pais trabalham na educação.</li>
          <li><em>"You can take either the bus or the train."</em> – Você pode pegar ou o ônibus ou o trem.</li>
          <li><em>"Neither solution worked."</em> – Nenhuma das soluções funcionou.</li>
          <li><em>"I like both chocolate and vanilla ice cream."</em> – Eu gosto tanto de sorvete de chocolate quanto de baunilha.</li>
        </ul>

        <br />
        <h3><i>Summary:</i></h3>
        <ul>
          <li><em>Both:</em> Two things together (positive)</li>
          <li><em>Either:</em> One of two options</li>
          <li><em>Neither:</em> Not one, not the other (negative)</li>
          <li>Can be used as determiners or pronouns</li>
        </ul>
      </h4>
    </Col>
  </Row>
</Container>

<Card className="card-obs">
  <Card.Body>
    <h3>Observações Gramaticais</h3>
    <br />
    
    <h5>1. Concordância Verbal:</h5>
    <p>"Both" usa verbo plural. "Either" e "neither" usam verbo singular.</p>
    <br />
    <p>Exemplo: <em>"Both are good" / "Either is fine" / "Neither is correct"</em></p>
    <br />
    
    <h5>2. "Neither...nor" é Negativo:</h5>
    <p>Com "neither...nor", não use outra negativa na frase.</p>
    <br />
    <p>Exemplo: <em>"Neither John nor Mary came" (não "didn't come")</em></p>
    <br />
    
    <h5>3. Posição de "Both":</h5>
    <p>"Both" pode vir antes do substantivo ou após o verbo "to be".</p>
    <br />
    <p>Exemplo: <em>"Both books are good" = "The books are both good"</em></p>

    <h3>Resumo:</h3>
    <ul>
      <li>"Both" = verbo plural</li>
      <li>"Either/Neither" = verbo singular</li>
      <li>"Neither...nor" já é negativo</li>
      <li>Podem ser determinantes ou pronomes</li>
    </ul>
  </Card.Body>
</Card>

<Container className="questions">
  <Row>
    <Col>
      <h1 className="h1-questions">Questions</h1>
      <Accordion className="no-border-accordion">
        <Accordion.Item eventKey="0">
          <Accordion.Header>1. Complete com "both", "either" ou "neither": "____ of my sisters live in London."</Accordion.Header>
          <Accordion.Body>
            "Both of my sisters live in London." (Use "both" quando se refere às duas pessoas)
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>2. Complete com "both", "either" ou "neither": "You can choose ____ the red shirt or the blue one."</Accordion.Header>
          <Accordion.Body>
            "You can choose either the red shirt or the blue one." (Use "either...or" para escolha entre duas opções)
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>3. Complete com "both", "either" ou "neither": "____ of the answers is correct."</Accordion.Header>
          <Accordion.Body>
            "Neither of the answers is correct." (Use "neither" quando nenhuma das duas opções é verdadeira)
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>4. Complete com "both", "either" ou "neither": "She speaks ____ English and Spanish fluently."</Accordion.Header>
          <Accordion.Body>
            "She speaks both English and Spanish fluently." (Use "both...and" para incluir as duas coisas)
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>5. Complete com "both", "either" ou "neither": "I don't like ____ coffee ____ tea."</Accordion.Header>
          <Accordion.Body>
            "I don't like either coffee or tea." (Use "either...or" em frases negativas, ou "neither...nor" sem negativa)
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="5">
          <Accordion.Header>6. Complete com "both", "either" ou "neither": "____ restaurants serve excellent food."</Accordion.Header>
          <Accordion.Body>
            "Both restaurants serve excellent food." (Use "both" quando se refere aos dois restaurantes)
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="6">
          <Accordion.Header>7. Complete com "both", "either" ou "neither": "You can sit in ____ chair. They're both comfortable."</Accordion.Header>
          <Accordion.Body>
            "You can sit in either chair. They're both comfortable." (Use "either" para qualquer uma das duas opções)
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="7">
          <Accordion.Header>8. Complete com "both", "either" ou "neither": "____ John ____ Mary came to the party."</Accordion.Header>
          <Accordion.Body>
            "Neither John nor Mary came to the party." (Use "neither...nor" quando nenhum dos dois fez a ação)
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="8">
          <Accordion.Header>9. Complete com "both", "either" ou "neither": "____ movies were boring."</Accordion.Header>
          <Accordion.Body>
            "Both movies were boring." (Use "both" quando se refere aos dois filmes)
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="9">
          <Accordion.Header>10. Complete com "both", "either" ou "neither": "I can meet you ____ Monday or Tuesday."</Accordion.Header>
          <Accordion.Body>
            "I can meet you either Monday or Tuesday." (Use "either...or" para escolha entre duas opções)
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