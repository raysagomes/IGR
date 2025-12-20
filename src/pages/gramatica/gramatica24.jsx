import Header from "../../components/header";
import Footer from "../../components/footer";
import { Helmet } from 'react-helmet-async';
import Logo from '../../components/logo';
import HeaderMenuGramatica from '../../components/headers/header-menu-gramatica';
import { Container, Col, Row, Accordion} from "react-bootstrap";
import Card from 'react-bootstrap/Card';

export default function Gramatica24() {
    return(
<>
<Helmet>
        <title>Relative Clauses</title>
      </Helmet>
<Header />
<Logo />
<HeaderMenuGramatica />

<Container>
  <Row>
    <Col className="coluna-texto1">
      <h2 className="h1-Texto-Inicial">Relative Clauses</h2>

      <h4 className="h5-Textos">
        <h3>Relative Clauses in English</h3>
        
        <h5><i>Orações Relativas em Inglês</i></h5>
        <p>Relative clauses give additional information about a noun in the main sentence. They are introduced by relative pronouns like who, which, that, whose, where, and when.</p>
        <h5><i>As orações relativas fornecem informações adicionais sobre um substantivo na frase principal. Elas são introduzidas por pronomes relativos como who, which, that, whose, where e when.</i></h5>
        <br />

        <h5><i>Relative Pronouns:</i></h5>
        <ul>
          <li><strong>Who:</strong> For people (subject/object) <em>"The man who lives next door is a doctor."</em></li>
          <li><strong>Which:</strong> For things/animals <em>"The book which I bought is interesting."</em></li>
          <li><strong>That:</strong> For people/things (informal) <em>"The car that I drive is old."</em></li>
          <li><strong>Whose:</strong> For possession <em>"The woman whose car was stolen called police."</em></li>
          <li><strong>Where:</strong> For places <em>"The school where I studied is nearby."</em></li>
          <li><strong>When:</strong> For time <em>"The day when we met was special."</em></li>
        </ul>

        <br />
        <h5><i>Types of Relative Clauses:</i></h5>
        <ul>
          <li><strong>Defining:</strong> Essential information, no commas <em>"The book that you lent me is great."</em></li>
          <li><strong>Non-defining:</strong> Extra information, with commas <em>"My brother, who lives in London, is a teacher."</em></li>
        </ul>

        <br />
        <h5><i>Examples:</i></h5>
        <ul>
          <li><em>"The woman who called you is my sister."</em> – A mulher que te ligou é minha irmã.</li>
          <li><em>"The house which we visited was beautiful."</em> – A casa que visitamos era linda.</li>
          <li><em>"This is the place where I was born."</em> – Este é o lugar onde eu nasci.</li>
          <li><em>"I remember the day when we first met."</em> – Eu me lembro do dia quando nos conhecemos.</li>
        </ul>

        <br />
        <h3><i>Summary:</i></h3>
        <ul>
          <li><em>Relative Clauses:</em> Provide additional information about nouns</li>
          <li>Use appropriate relative pronouns for people, things, places, time</li>
          <li>Defining clauses are essential; non-defining are extra information</li>
        </ul>
      </h4>
    </Col>
  </Row>
</Container>

<Card className="card-obs">
  <Card.Body>
    <h3>Observações Gramaticais</h3>
    <br />
    
    <h5>1. Omissão do Pronome Relativo:</h5>
    <p>Em orações restritivas, o pronome pode ser omitido quando é objeto.</p>
    <br />
    <p>Exemplo: <em>"The book (that/which) I read was good."</em></p>
    <br />
    
    <h5>2. Preposições com Pronomes Relativos:</h5>
    <p>A preposição pode vir no final da oração relativa (mais comum) ou antes do pronome (formal).</p>
    <br />
    <p>Exemplo: <em>"The person (who) I talked to" ou "The person to whom I talked"</em></p>
    <br />
    
    <h5>3. "That" vs "Which":</h5>
    <p>"That" é mais comum em orações restritivas; "which" em não-restritivas.</p>
    <br />
    <p>Exemplo: <em>"The car that I bought" (restritiva) vs "My car, which is red, is fast" (não-restritiva)</em></p>

    <h3>Resumo:</h3>
    <ul>
      <li>Who = pessoas, Which = coisas</li>
      <li>That = pessoas/coisas (informal)</li>
      <li>Whose = posse, Where = lugar, When = tempo</li>
      <li>Pronome pode ser omitido quando é objeto</li>
    </ul>
  </Card.Body>
</Card>

<Container className="questions">
  <Row>
    <Col>
      <h1 className="h1-questions">Questions</h1>
      <Accordion className="no-border-accordion">
        <Accordion.Item eventKey="0">
          <Accordion.Header>1. Complete com o pronome relativo correto: "The man ____ lives next door is very friendly."</Accordion.Header>
          <Accordion.Body>
            "The man who lives next door is very friendly." (Use "who" para pessoas como sujeito)
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>2. Complete com o pronome relativo correto: "The book ____ I'm reading is fascinating."</Accordion.Header>
          <Accordion.Body>
            "The book (that/which) I'm reading is fascinating." (Use "that" ou "which" para coisas; pode ser omitido)
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>3. Complete com o pronome relativo correto: "This is the restaurant ____ we had dinner last night."</Accordion.Header>
          <Accordion.Body>
            "This is the restaurant where we had dinner last night." (Use "where" para lugares)
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>4. Complete com o pronome relativo correto: "The woman ____ car was stolen reported it to police."</Accordion.Header>
          <Accordion.Body>
            "The woman whose car was stolen reported it to police." (Use "whose" para indicar posse)
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>5. Complete com o pronome relativo correto: "I remember the day ____ we first met."</Accordion.Header>
          <Accordion.Body>
            "I remember the day when we first met." (Use "when" para tempo)
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="5">
          <Accordion.Header>6. Combine as frases usando pronome relativo: "The teacher is very patient. She teaches my daughter."</Accordion.Header>
          <Accordion.Body>
            "The teacher who teaches my daughter is very patient." (Combine usando "who" para pessoas)
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="6">
          <Accordion.Header>7. Complete com o pronome relativo correto: "The movie ____ we watched last night was excellent."</Accordion.Header>
          <Accordion.Body>
            "The movie (that/which) we watched last night was excellent." (Pronome pode ser omitido quando é objeto)
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="7">
          <Accordion.Header>8. Complete com o pronome relativo correto: "The people ____ live upstairs are very noisy."</Accordion.Header>
          <Accordion.Body>
            "The people who live upstairs are very noisy." (Use "who" para pessoas como sujeito)
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="8">
          <Accordion.Header>9. Complete com o pronome relativo correto: "This is the house ____ I grew up."</Accordion.Header>
          <Accordion.Body>
            "This is the house where I grew up." (Use "where" para lugares)
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="9">
          <Accordion.Header>10. Complete com o pronome relativo correto: "The student ____ essay won the prize is very talented."</Accordion.Header>
          <Accordion.Body>
            "The student whose essay won the prize is very talented." (Use "whose" para indicar posse)
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