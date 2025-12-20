import Header from "../../components/header";
import Footer from "../../components/footer";
import { Helmet } from 'react-helmet-async';
import Logo from '../../components/logo';
import HeaderMenuGramatica from '../../components/headers/header-menu-gramatica';
import { Container, Col, Row, Accordion} from "react-bootstrap";
import Card from 'react-bootstrap/Card';

export default function Gramatica23() {
    return(
<>
<Helmet>
        <title>Phrasal Verbs</title>
      </Helmet>
<Header />
<Logo />
<HeaderMenuGramatica />

<Container>
  <Row>
    <Col className="coluna-texto1">
      <h2 className="h1-Texto-Inicial">Phrasal Verbs</h2>

      <h4 className="h5-Textos">
        <h3>Phrasal Verbs in English</h3>
        
        <h5><i>Phrasal Verbs em Inglês</i></h5>
        <p>Phrasal verbs are combinations of a verb and one or more particles (prepositions or adverbs) that create a new meaning different from the original verb.</p>
        <h5><i>Phrasal verbs são combinações de um verbo e uma ou mais partículas (preposições ou advérbios) que criam um novo significado diferente do verbo original.</i></h5>
        <br />

        <h5><i>Types of Phrasal Verbs:</i></h5>
        <ul>
          <li><strong>Separable:</strong> Object can go between verb and particle <em>"Turn off the TV" = "Turn the TV off"</em></li>
          <li><strong>Inseparable:</strong> Object must come after the particle <em>"Look after the children" (not "Look the children after")</em></li>
          <li><strong>Intransitive:</strong> No object needed <em>"Wake up!" "Sit down!"</em></li>
        </ul>

        <br />
        <h5><i>Common Phrasal Verbs:</i></h5>
        <ul>
          <li><strong>Turn on/off:</strong> Ligar/desligar <em>"Turn on the lights."</em></li>
          <li><strong>Look for:</strong> Procurar <em>"I'm looking for my keys."</em></li>
          <li><strong>Give up:</strong> Desistir <em>"Don't give up!"</em></li>
          <li><strong>Take off:</strong> Decolar/tirar <em>"The plane takes off at 6 PM."</em></li>
          <li><strong>Put on:</strong> Vestir <em>"Put on your jacket."</em></li>
          <li><strong>Get up:</strong> Levantar-se <em>"I get up at 7 AM."</em></li>
          <li><strong>Come back:</strong> Voltar <em>"Come back soon!"</em></li>
        </ul>

        <br />
        <h5><i>Examples:</i></h5>
        <ul>
          <li><em>"Please turn down the music."</em> – Por favor, abaixe a música.</li>
          <li><em>"I ran into my old friend yesterday."</em> – Eu encontrei meu velho amigo ontem.</li>
          <li><em>"She looks after her grandmother."</em> – Ela cuida da avó dela.</li>
          <li><em>"We need to figure out this problem."</em> – Precisamos resolver este problema.</li>
        </ul>

        <br />
        <h3><i>Summary:</i></h3>
        <ul>
          <li><em>Phrasal Verbs:</em> Verb + particle(s) with new meaning</li>
          <li>Can be separable, inseparable, or intransitive</li>
          <li>Very common in everyday English</li>
          <li>Must be learned as complete units</li>
        </ul>
      </h4>
    </Col>
  </Row>
</Container>

<Card className="card-obs">
  <Card.Body>
    <h3>Observações Gramaticais</h3>
    <br />
    
    <h5>1. Separable Phrasal Verbs:</h5>
    <p>Com pronomes, a separação é obrigatória. Com substantivos, é opcional.</p>
    <br />
    <p>Exemplo: <em>"Turn it off" (obrigatório) / "Turn off the TV" ou "Turn the TV off" (opcional)</em></p>
    <br />
    
    <h5>2. Múltiplos Significados:</h5>
    <p>Muitos phrasal verbs têm vários significados dependendo do contexto.</p>
    <br />
    <p>Exemplo: <em>"Take off" = decolar (avião) ou tirar (roupa)</em></p>
    <br />
    
    <h5>3. Phrasal Verbs com Três Palavras:</h5>
    <p>Alguns phrasal verbs têm duas partículas e são sempre inseparáveis.</p>
    <br />
    <p>Exemplo: <em>"I'm looking forward to the weekend."</em> (Estou ansioso pelo fim de semana)</p>

    <h3>Resumo:</h3>
    <ul>
      <li>Verbo + partícula = novo significado</li>
      <li>Separáveis vs. inseparáveis</li>
      <li>Pronomes sempre separam quando possível</li>
      <li>Muito comuns na fala cotidiana</li>
    </ul>
  </Card.Body>
</Card>

<Container className="questions">
  <Row>
    <Col>
      <h1 className="h1-questions">Questions</h1>
      <Accordion className="no-border-accordion">
        <Accordion.Item eventKey="0">
          <Accordion.Header>1. Complete com o phrasal verb correto: "Please ____ ____ the TV. It's too loud."</Accordion.Header>
          <Accordion.Body>
            "Please turn down the TV. It's too loud." ("Turn down" = diminuir o volume)
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>2. Complete com o phrasal verb correto: "I need to ____ ____ my keys. I can't find them."</Accordion.Header>
          <Accordion.Body>
            "I need to look for my keys. I can't find them." ("Look for" = procurar)
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>3. Complete com o phrasal verb correto: "What time do you ____ ____ in the morning?"</Accordion.Header>
          <Accordion.Body>
            "What time do you get up in the morning?" ("Get up" = levantar-se)
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>4. Complete com o phrasal verb correto: "Don't ____ ____! You can do it!"</Accordion.Header>
          <Accordion.Body>
            "Don't give up! You can do it!" ("Give up" = desistir)
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>5. Complete com o phrasal verb correto: "Please ____ ____ your shoes before entering."</Accordion.Header>
          <Accordion.Body>
            "Please take off your shoes before entering." ("Take off" = tirar, remover)
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="5">
          <Accordion.Header>6. Complete com o phrasal verb correto: "I ____ ____ my old teacher at the mall."</Accordion.Header>
          <Accordion.Body>
            "I ran into my old teacher at the mall." ("Run into" = encontrar por acaso)
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="6">
          <Accordion.Header>7. Complete com o phrasal verb correto: "She ____ ____ her younger brother while their parents are away."</Accordion.Header>
          <Accordion.Body>
            "She looks after her younger brother while their parents are away." ("Look after" = cuidar de)
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="7">
          <Accordion.Header>8. Complete com o phrasal verb correto: "We need to ____ ____ this problem together."</Accordion.Header>
          <Accordion.Body>
            "We need to figure out this problem together." ("Figure out" = resolver, descobrir)
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="8">
          <Accordion.Header>9. Complete com o phrasal verb correto: "Please ____ ____ the form with your personal information."</Accordion.Header>
          <Accordion.Body>
            "Please fill out the form with your personal information." ("Fill out" = preencher)
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="9">
          <Accordion.Header>10. Complete com o phrasal verb correto: "The meeting was ____ ____ until next week."</Accordion.Header>
          <Accordion.Body>
            "The meeting was put off until next week." ("Put off" = adiar)
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