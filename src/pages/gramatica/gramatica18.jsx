import Header from "../../components/header";
import Footer from "../../components/footer";
import { Helmet } from 'react-helmet-async';
import Logo from '../../components/logo';
import HeaderMenuGramatica from '../../components/headers/header-menu-gramatica';
import { Container, Col, Row, Accordion} from "react-bootstrap";
import Card from 'react-bootstrap/Card';

export default function Gramatica18() {
    return(
<>
<Helmet>
        <title>Preposições de Tempo</title>
      </Helmet>
<Header />
<Logo />
<HeaderMenuGramatica />

<Container>
  <Row>
    <Col className="coluna-texto1">
      <h2 className="h1-Texto-Inicial">Preposições de Tempo</h2>

      <h4 className="h5-Textos">
        <h3>Prepositions of Time</h3>
        
        <h5><i>Preposições de Tempo em Inglês</i></h5>
        <p>Prepositions of time are used to indicate when something happens. They help us express specific times, periods, and durations.</p>
        <h5><i>As preposições de tempo são usadas para indicar quando algo acontece. Elas nos ajudam a expressar horários específicos, períodos e durações.</i></h5>
        <br />

        <h5><i>Common Prepositions of Time:</i></h5>
        <ul>
          <li><strong>At:</strong> Specific times <em>"At 3 o'clock, at noon, at midnight"</em> (Às 3 horas, ao meio-dia, à meia-noite)</li>
          <li><strong>On:</strong> Days and dates <em>"On Monday, on January 15th"</em> (Na segunda-feira, no dia 15 de janeiro)</li>
          <li><strong>In:</strong> Months, years, seasons <em>"In March, in 2023, in summer"</em> (Em março, em 2023, no verão)</li>
          <li><strong>During:</strong> Throughout a period <em>"During the meeting"</em> (Durante a reunião)</li>
          <li><strong>For:</strong> Duration <em>"For two hours"</em> (Por duas horas)</li>
          <li><strong>Since:</strong> Starting point <em>"Since yesterday"</em> (Desde ontem)</li>
          <li><strong>Until/Till:</strong> End point <em>"Until 5 PM"</em> (Até às 17h)</li>
        </ul>

        <br />
        <h5><i>Examples:</i></h5>
        <ul>
          <li><em>"The meeting is at 2 PM."</em> – A reunião é às 14h.</li>
          <li><em>"We have class on Fridays."</em> – Nós temos aula às sextas-feiras.</li>
          <li><em>"She was born in December."</em> – Ela nasceu em dezembro.</li>
          <li><em>"I studied for three hours."</em> – Eu estudei por três horas.</li>
        </ul>

        <br />
        <h3><i>Summary:</i></h3>
        <ul>
          <li><em>At:</em> Specific times and moments</li>
          <li><em>On:</em> Days and dates</li>
          <li><em>In:</em> Months, years, seasons, and longer periods</li>
          <li><em>For/Since/During:</em> Duration and time periods</li>
        </ul>
      </h4>
    </Col>
  </Row>
</Container>

<Card className="card-obs">
  <Card.Body>
    <h3>Observações Gramaticais</h3>
    <br />
    
    <h5>1. Regra "At, On, In":</h5>
    <p>Use "at" para horários específicos, "on" para dias, e "in" para períodos mais longos.</p>
    <br />
    <p>Exemplo: <em>"At 8 AM, on Sunday, in January"</em></p>
    <br />
    
    <h5>2. Diferença entre "For" e "Since":</h5>
    <p>"For" indica duração, "since" indica ponto de partida no tempo.</p>
    <br />
    <p>Exemplo: <em>"I've lived here for 5 years / since 2018."</em></p>
    <br />
    
    <h5>3. Expressões Especiais:</h5>
    <p>Algumas expressões não usam preposições: "yesterday", "today", "tomorrow", "last week", "next month".</p>
    <br />
    <p>Exemplo: <em>"I saw him yesterday."</em> (Não "in yesterday")</p>

    <h3>Resumo:</h3>
    <ul>
      <li>"At" = horários específicos</li>
      <li>"On" = dias e datas</li>
      <li>"In" = meses, anos, estações</li>
      <li>"For" = duração, "Since" = ponto de partida</li>
    </ul>
  </Card.Body>
</Card>

<Container className="questions">
  <Row>
    <Col>
      <h1 className="h1-questions">Questions</h1>
      <Accordion className="no-border-accordion">
        <Accordion.Item eventKey="0">
          <Accordion.Header>1. Complete com a preposição correta: "The party starts ____ 7 PM."</Accordion.Header>
          <Accordion.Body>
            "The party starts at 7 PM." (Usamos "at" para horários específicos.)
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>2. Complete com a preposição correta: "We have a meeting ____ Monday."</Accordion.Header>
          <Accordion.Body>
            "We have a meeting on Monday." (Usamos "on" para dias da semana.)
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>3. Complete com a preposição correta: "She was born ____ 1995."</Accordion.Header>
          <Accordion.Body>
            "She was born in 1995." (Usamos "in" para anos.)
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>4. Complete com a preposição correta: "I waited ____ two hours."</Accordion.Header>
          <Accordion.Body>
            "I waited for two hours." (Usamos "for" para indicar duração.)
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>5. Complete com a preposição correta: "He has lived here ____ 2010."</Accordion.Header>
          <Accordion.Body>
            "He has lived here since 2010." (Usamos "since" para indicar ponto de partida no tempo.)
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="5">
          <Accordion.Header>6. Complete com a preposição correta: "The flowers bloom ____ spring."</Accordion.Header>
          <Accordion.Body>
            "The flowers bloom in spring." (Usamos "in" para estações do ano.)
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="6">
          <Accordion.Header>7. Complete com a preposição correta: "We stayed quiet ____ the movie."</Accordion.Header>
          <Accordion.Body>
            "We stayed quiet during the movie." (Usamos "during" para indicar "ao longo de" um período.)
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="7">
          <Accordion.Header>8. Complete com a preposição correta: "The store is open ____ 9 AM ____ 6 PM."</Accordion.Header>
          <Accordion.Body>
            "The store is open from 9 AM until 6 PM." (Usamos "from...until" para indicar período de tempo.)
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="8">
          <Accordion.Header>9. Complete com a preposição correta: "My birthday is ____ December 25th."</Accordion.Header>
          <Accordion.Body>
            "My birthday is on December 25th." (Usamos "on" para datas específicas.)
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="9">
          <Accordion.Header>10. Complete com a preposição correta: "We'll finish the project ____ next Friday."</Accordion.Header>
          <Accordion.Body>
            "We'll finish the project by next Friday." (Usamos "by" para indicar prazo limite.)
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