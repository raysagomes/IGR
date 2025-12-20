import Header from "../../components/header";
import Footer from "../../components/footer";
import { Helmet } from 'react-helmet-async';
import HeaderMenuGramatica from '../../components/headers/header-menu-gramatica';
import Logo from '../../components/logo';
import { Container, Col, Row, Accordion} from "react-bootstrap";
import Card from 'react-bootstrap/Card';


export default function Gramatica2() {
    return(
<>
<Helmet>
        <title>Substantivo e pronomes</title>
      </Helmet> 
<Header />
<Logo />
<HeaderMenuGramatica />
<Container>
      <Row>
        <Col className="coluna-texto1">
        <h2 className="h1-Texto-Inicial"> Substantivo e pronomes </h2> 
        <h4 className="h5-Textos">
        <p>Substantives are words that represent people, places, objects, or ideas.</p>
<h5><i>Substantivos são palavras que representam pessoas, lugares, objetos ou ideias.</i></h5>
<br />
<p><h3>Examples</h3></p>
<h5><i>Exemplos</i></h5>
<br />
<p>People: Maria, teacher, child</p>
<h5><i>Pessoas: Maria, professor, criança</i></h5>

<p>Places: school, city, beach</p>
<h5><i>Lugares: escola, cidade, praia</i></h5>

<p>Objects: book, chair, cellphone</p>
<h5><i>Objetos: livro, cadeira, celular</i></h5>

<p>Ideas: love, courage, freedom</p>
<h5><i>Ideias: amor, coragem, liberdade</i></h5>

<p>How to use: Substantives usually appear as the main subject in a sentence. For example:</p>
<h5><i>Como usar: Substantivos geralmente aparecem como o assunto principal em uma frase. Por exemplo:</i></h5>
<p>"Maria is studying." – Here, Maria is the substantive, as she is the person we are talking about.</p>
<h5><i>"A Maria está estudando." – Aqui, Maria é o substantivo, pois é a pessoa de quem estamos falando.</i></h5>
<br />

<p><h3>Pronouns</h3></p>
<p>Definition: Pronouns are words that replace substantives to avoid repetition and make speech or writing more fluid.</p>
<h5><i>Definição: Pronomes são palavras que substituem os substantivos para evitar repetição e tornar a fala ou escrita mais fluida.</i></h5>
<br />

<p><h3>Common types of personal pronouns:</h3></p>
<p>I – To talk about oneself.</p>
<h5><i>Eu – Para falar de si mesmo.</i></h5>

<p>You – To talk directly to another person.</p>
<h5><i>Você – Para falar diretamente com outra pessoa.</i></h5>

<p>He/She – To talk about a third person.</p>
<h5><i>Ele/Ela – Para falar sobre uma terceira pessoa.</i></h5>

<p>We – To talk about you and others.</p>
<h5><i>Nós – Para falar sobre você e mais pessoas.</i></h5>

<p>You/They – To talk about more than one person.</p>
<h5><i>Vocês/Eles/Elas – Para falar sobre mais de uma pessoa.</i></h5>
<br />

<p><h3>How to use:</h3></p>
<p>Instead of repeating someone's name or a thing, we use a pronoun.</p>
<h5><i>Como usar: Em vez de repetir o nome de alguém ou de algo, usamos um pronome.</i></h5>
<p>Example:</p>
<h5><i>Exemplo:</i></h5>
<p>"Maria went to the park. She likes to walk there."</p>
<h5><i>"Maria foi ao parque. Ela gosta de caminhar lá."</i></h5>
<p>Here, we use "she" to avoid repeating "Maria".</p>
<h5><i>Aqui, usamos "ela" para evitar repetir "Maria".</i></h5>

<br />
</h4>
</Col>
    </Row>
    </Container>
    
    <Container className="questions">
        <Row> 
<Col> 
        <h1 className="h1-questions"> Questions </h1>
        <Accordion className="no-border-accordion"> 
        <Accordion.Item eventKey="0">
  <Accordion.Header>1. Identifique a quem o pronome "he" se refere na frase: "John went to the store. He bought some milk."</Accordion.Header>
  <Accordion.Body>
    O pronome "he" se refere a John, que é a pessoa mencionada anteriormente na frase.
  </Accordion.Body>
</Accordion.Item>
<Accordion.Item eventKey="1">
  <Accordion.Header>2. Complete a frase com o pronome correto: "Maria and Ana are friends. _______ like to dance."</Accordion.Header>
  <Accordion.Body>
    "They like to dance." (Aqui, "Maria and Ana" é substituído por "They".)
  </Accordion.Body>
</Accordion.Item>
<Accordion.Item eventKey="2">
  <Accordion.Header>3. Complete a frase com o pronome correto: "Carlos is going to the gym. ____ wants to get fit."</Accordion.Header>
  <Accordion.Body>
    "He wants to get fit." (O pronome correto aqui é "He", já que "Carlos" é uma pessoa do gênero masculino.)
  </Accordion.Body>
</Accordion.Item>
<Accordion.Item eventKey="3">
  <Accordion.Header>4. Identifique a quem o pronome "she" se refere na frase: "Sofia is my sister. She is very smart."</Accordion.Header>
  <Accordion.Body>
    O pronome "she" se refere a Sofia, que é a pessoa mencionada anteriormente na frase.
  </Accordion.Body>
</Accordion.Item>
<Accordion.Item eventKey="4">
  <Accordion.Header>5. Troque o nome por um pronome correto: "The book is on the table. The book is very interesting."</Accordion.Header>
  <Accordion.Body>
    "It is very interesting." (O pronome correto é "It", já que "the book" é uma coisa.)
  </Accordion.Body>
</Accordion.Item>
<Accordion.Item eventKey="5">
  <Accordion.Header>6. Identifique a quem o pronome "they" se refere na frase: "James and Mary are my cousins. They live in New York."</Accordion.Header>
  <Accordion.Body>
    O pronome "they" se refere a James and Mary, que são as pessoas mencionadas na frase.
  </Accordion.Body>
</Accordion.Item>
<Accordion.Item eventKey="6">
  <Accordion.Header>7. Complete a frase com o pronome correto: "Paul and I are going to the movies. ____ are excited."</Accordion.Header>
  <Accordion.Body>
    "We are excited." (O pronome correto é "We", já que "Paul and I" se refere a mais de uma pessoa.)
  </Accordion.Body>
</Accordion.Item>
<Accordion.Item eventKey="7">
  <Accordion.Header>8. Identifique a quem o pronome "it" se refere na frase: "The cake is delicious. It is made with chocolate."</Accordion.Header>
  <Accordion.Body>
    O pronome "it" se refere ao cake, que é a coisa mencionada.
  </Accordion.Body>
</Accordion.Item>
<Accordion.Item eventKey="8">
  <Accordion.Header>9. Substitua o nome por um pronome correto: "The teacher is talking. The teacher is explaining the lesson."</Accordion.Header>
  <Accordion.Body>
    "She is explaining the lesson." (O pronome "She" substitui "The teacher".)
  </Accordion.Body>
</Accordion.Item>
<Accordion.Item eventKey="9">
  <Accordion.Header>10. Identifique a quem o pronome "we" se refere na frase: "My friends and I are going to the concert. We love music."</Accordion.Header>
  <Accordion.Body>
    O pronome "we" se refere a My friends and I, que é o grupo de pessoas mencionado.
  </Accordion.Body>
</Accordion.Item>

    </Accordion>
    </Col>
        </Row>
     </Container>

     <Container >  
     <br />
     <h4 className="h5-Textos">
     <h3>  <p>Direct Object Pronouns – To replace the object of the sentence.</p></h3>
<h5><i>Pronomes de Objeto Direto – Para substituir o objeto da frase.</i></h5>
<br />

<p>Me – Replaces the object of the sentence for the speaker.</p>
<h5><i>Me – Substitui o objeto da frase para o falante.</i></h5>
<br />

<p>You – Replaces the object of the sentence for the person being spoken to.</p>
<h5><i>Você – Substitui o objeto da frase para a pessoa com quem se fala.</i></h5>
<br />

<p>Him/Her – Replaces the object of the sentence for a male/female third person.</p>
<h5><i>O/ A – Substitui o objeto da frase para uma terceira pessoa masculina/feminina.</i></h5>
<br />

<p>Us – Replaces the object of the sentence when talking about the speaker and others.</p>
<h5><i>Nos – Substitui o objeto da frase quando se fala sobre o falante e outros.</i></h5>
<br />

<p>Them – Replaces the object of the sentence for a group of people or things.</p>
<h5><i>Os/As – Substitui o objeto da frase para um grupo de pessoas ou coisas.</i></h5>
<br />
<br />

<Container className="questions">
        <Row> 
<Col> 
        <h1 className="h1-questions"> Questions </h1>
        <Accordion className="no-border-accordion">
  <Accordion.Item eventKey="0">
    <Accordion.Header>1. Complete a frase com o pronome correto: "John called _______ to help with the project."</Accordion.Header>
    <Accordion.Body>
      "John called me to help with the project." (O pronome correto é "me", pois o falante está sendo chamado.)
      <br />
      <br />
      <i><h5>John me chamou para ajudar no projeto.</h5></i>
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header>2. Complete a frase com o pronome correto: "I saw Sarah at the park. I waved at _______."</Accordion.Header>
    <Accordion.Body>
      "I waved at her." (O pronome correto é "her", pois se refere a Sarah, uma pessoa feminina.)
      <br />
      <br />
      <i><h5>Eu vi Sara no parque. Eu acenei para ela.</h5></i>
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="2">
    <Accordion.Header>3. Complete a frase com o pronome correto: "Paul invited _______ to his birthday party."</Accordion.Header>
    <Accordion.Body>
      "Paul invited us to his birthday party." (O pronome correto é "us", pois se refere ao falante e a outras pessoas.)
      <br />
      <br />
      <i><h5>Paul nos convidou para a festa de aniversário.</h5></i>
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="3">
    <Accordion.Header>4. Complete a frase com o pronome correto: "Maria loves the book. She reads _______ every day."</Accordion.Header>
    <Accordion.Body>
      "She reads it every day." (O pronome correto é "it", pois se refere ao livro, uma coisa.)
      <br />
      <br />
      <i><h5>Maria ama o livro. Ela lê isso todos os dias.</h5></i>
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="4">
    <Accordion.Header>5. Complete a frase com o pronome correto: "Tom saw Rachel at the café. He greeted _______ with a smile."</Accordion.Header>
    <Accordion.Body>
      "He greeted her with a smile." (O pronome correto é "her", pois se refere a Rachel, uma pessoa feminina.)
      <br />
      <br />
      <i><h5>Tom viu Rachel no Café. Ele cumprimentou ela com um sorriso.</h5></i>
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="5">
    <Accordion.Header>6. Complete a frase com o pronome correto: "The teacher called on David and Peter. She asked _______ to answer the question."</Accordion.Header>
    <Accordion.Body>
      "She asked them to answer the question." (O pronome correto é "them", pois se refere a David e Peter, mais de uma pessoa.)
      <br />
      <br />
      <i><h5> A professora chamou David e Peter. Ela pediu para eles responderem à pergunta.</h5></i>
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="6">
    <Accordion.Header>7. Complete a frase com o pronome correto: "I called Sarah. I left a message for _______."</Accordion.Header>
    <Accordion.Body>
      "I left a message for her." (O pronome correto é "her", pois se refere a Sarah, uma pessoa feminina.)
      <br />
      <br />
      <i><h5>Eu liguei para Sarah e deixei uma mensagem para ela.</h5></i>
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="7">
    <Accordion.Header>8. Complete a frase com o pronome correto: "My parents invited me to dinner. I was really excited to join _______."</Accordion.Header>
    <Accordion.Body>
      "I was really excited to join them." (O pronome correto é "them", pois se refere aos pais, um grupo de pessoas.)
      <br />
      <br />
      <i><h5>Meus pais me chamaram para jantar. Eu estava muito animado para me juntar a eles.</h5></i>
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="8">
    <Accordion.Header>9. Complete a frase com o pronome correto: "She helped _______ with the homework."</Accordion.Header>
    <Accordion.Body>
      "She helped me with the homework." (O pronome correto é "me", pois o falante está recebendo ajuda.)
      <br />
      <br />
      <i><h5>Ela me ajudou com a lição de casa.</h5></i>
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="9">
    <Accordion.Header>10. Complete a frase com o pronome correto: "You invited me to the party. I had a great time with _______."</Accordion.Header>
    <Accordion.Body>
      "I had a great time with you." (O pronome correto é "you", pois se refere à pessoa que convidou.)
      <br />
      <br />
      <i><h5>Você me convidou para a festa. Eu me diverti muito com você.</h5></i>
    </Accordion.Body>
  </Accordion.Item>
</Accordion>


    </Col>
        </Row>
     </Container>

<h3> <p>Indirect Object Pronouns – To indicate to whom or for whom an action is done.</p> </h3> 
<h5><i>Pronomes de Objeto Indireto – Para indicar a quem ou para quem uma ação é feita.</i></h5>
<br />

<p>Me – Replaces the indirect object for the speaker.</p>
<h5><i>Me – Substitui o objeto indireto para o falante.</i></h5>
<br />

<p>You – Replaces the indirect object for the person being spoken to.</p>
<h5><i>Te – Substitui o objeto indireto para a pessoa com quem se fala.</i></h5>
<br />

<p>Him/Her – Replaces the indirect object for a male/female third person.</p>
<h5><i>Lhe – Substitui o objeto indireto para uma terceira pessoa masculina/feminina.</i></h5>
<br />

<p>Us – Replaces the indirect object when talking about the speaker and others.</p>
<h5><i>Nos – Substitui o objeto indireto quando se fala sobre o falante e outros.</i></h5>
<br />

<p>Them – Replaces the indirect object for a group of people or things.</p>
<h5><i>Lhes – Substitui o objeto indireto para um grupo de pessoas ou coisas.</i></h5>
<br />
<br />


<Container className="questions">
        <Row> 
<Col> 
        <h1 className="h1-questions"> Questions </h1>
<Accordion className="no-border-accordion">
<Accordion.Item eventKey="0">
  <Accordion.Header>1. Complete a frase com o pronome correto: "She gave _______ a gift."</Accordion.Header>
  <Accordion.Body>
    "She gave me a gift." (O pronome correto é "me", pois o falante está recebendo o presente.)
    <br />
    <br />
    <i><h5>Ela me deu um presente.</h5></i>
  </Accordion.Body>
</Accordion.Item>
<Accordion.Item eventKey="1">
  <Accordion.Header>2. Complete a frase com o pronome correto: "He told _______ a secret."</Accordion.Header>
  <Accordion.Body>
    "He told you a secret." (O pronome correto é "you", pois a pessoa a quem ele contou é a pessoa com quem se fala.)
    <br />
    <br />
    <i><h5>Ele contou um segredo para você.</h5></i>
  </Accordion.Body>
</Accordion.Item>
<Accordion.Item eventKey="2">
  <Accordion.Header>3. Complete a frase com o pronome correto: "Paul sent _______ an invitation."</Accordion.Header>
  <Accordion.Body>
    "Paul sent him an invitation." (O pronome correto é "him", pois se refere a um terceiro masculino.)
    <br />
    <br />
    <i><h5>Paul enviou a ele um convite.</h5></i>
  </Accordion.Body>
</Accordion.Item>
<Accordion.Item eventKey="3">
  <Accordion.Header>4. Complete a frase com o pronome correto: "Maria gave _______ some advice."</Accordion.Header>
  <Accordion.Body>
    "Maria gave us some advice." (O pronome correto é "us", pois se refere ao falante e a outras pessoas.)
    <br />
    <br />
    <i><h5>Maria nos deu alguns conselhos.</h5></i>
  </Accordion.Body>
</Accordion.Item>
<Accordion.Item eventKey="4">
  <Accordion.Header>5. Complete a frase com o pronome correto: "The teacher explained the lesson to _______."</Accordion.Header>
  <Accordion.Body>
    "The teacher explained the lesson to them." (O pronome correto é "them", pois se refere a um grupo de pessoas.)
    <br />
    <br />
    <i><h5>A professora explicou a lição para eles.</h5></i>
  </Accordion.Body>
</Accordion.Item>

</Accordion>
</Col>
        </Row>
     </Container>

<h3><p>Possessive Pronouns – To show ownership or possession.</p></h3>
<h5><i>Pronomes Possessivos – Para mostrar posse ou propriedade.</i></h5>
<br />

<p>Mine – Refers to something that belongs to the speaker.</p>
<h5><i>Meu/Minha – Refere-se a algo que pertence ao falante.</i></h5>
<br />

<p>Yours – Refers to something that belongs to the person being spoken to.</p>
<h5><i>Teu/Tua – Refere-se a algo que pertence à pessoa com quem se fala.</i></h5>
<br />

<p>His/Hers/Her – Refers to something that belongs to a male/female third person.</p>
<h5><i>Dele/Dela – Refere-se a algo que pertence a uma terceira pessoa masculina/feminina.</i></h5>
<br />

<p>Ours – Refers to something that belongs to the speaker and others.</p>
<h5><i>Nossos/Nossas – Refere-se a algo que pertence ao falante e outros.</i></h5>
<br />

<p>Theirs – Refers to something that belongs to a group of people or things.</p>
<h5><i>Deles/Delas – Refere-se a algo que pertence a um grupo de pessoas ou coisas.</i></h5>
<br />
<br />

<Card className="card-obs">
  
      <Card.Body><h3>Diferença entre "Their" e "Theirs":</h3>
<h5>"Their" é um pronome possessivo que sempre vem antes de um substantivo, para indicar que algo pertence a "eles/elas".</h5>
<br />
<p>Exemplo: <em>"This is their house."</em> (Esta é a casa deles/delas). <br /> Aqui, "their" é usado antes de "house" para mostrar que a casa pertence a eles ou a elas.</p>

<h5>"Theirs" é um pronome possessivo que substitui o substantivo e é usado quando já sabemos qual é o objeto possuído. Ele indica que algo pertence a "eles/elas", mas não precisa ser seguido por um substantivo.</h5>
<br />
<p>Exemplo: <em>"This house is theirs."</em> (Esta casa é deles/delas). <br /> Aqui, "theirs" substitui "house" e indica que a casa pertence a eles/delas, sem a necessidade de repetir a palavra "house".</p>

<h3>Diferença entre "Her" e "Hers":</h3>
<h5>"Her" é um pronome possessivo que vem antes de um substantivo, para mostrar que algo pertence a uma pessoa do gênero feminino.</h5>
<br />
<p>Exemplo: <em>"This is her book."</em> (Este é o livro dela). <br /> "Her" vem antes de "book", indicando que o livro pertence a uma mulher.</p>

<h5>"Hers" é um pronome possessivo que substitui o substantivo e é usado para indicar que algo pertence a uma mulher, sem precisar repetir o objeto possuído.</h5>
<br />
<p>Exemplo: <em>"This book is hers."</em> (Este livro é dela). <br /> Aqui, "hers" substitui "book" e indica que o livro pertence a uma mulher, sem a necessidade de repetir a palavra "book".</p>

<h3>Diferença entre "Your" e "Yours":</h3>
<h5>"Your" é um pronome possessivo que vem antes de um substantivo, para mostrar que algo pertence à pessoa com quem se fala (você ou vocês).</h5>
<br />
<p>Exemplo: <em>"This is your car."</em> (Este é o seu carro). <br /> "Your" vem antes de "car", indicando que o carro pertence à pessoa com quem se fala.</p>

<h5>"Yours" é um pronome possessivo que substitui o substantivo e é usado para indicar que algo pertence à pessoa com quem se fala, sem precisar repetir o objeto possuído.</h5>
<br />
<p>Exemplo: <em>"This car is yours."</em> (Este carro é seu). <br /> Aqui, "yours" substitui "car" e indica que o carro pertence à pessoa com quem se fala, sem a necessidade de repetir a palavra "car".</p>

<h3>Resumo das Diferenças:</h3>
<h5>"Their", "Her" e "Your": Usados antes de um substantivo para indicar posse.</h5>
<br />
<h5>"Theirs", "Hers" e "Yours": Usados para substituir o substantivo e indicar posse, sem precisar repetir o objeto possuído.</h5>

</Card.Body>
    </Card>

    <br />
    <br />
<Container className="questions">
        <Row> 
<Col> 
        <h1 className="h1-questions"> Questions </h1>
<Accordion className="no-border-accordion">
<Accordion.Item eventKey="0">
  <Accordion.Header>1. Complete a frase com o pronome correto: "This book is _______." (meu)</Accordion.Header>
  <Accordion.Body>
    "This book is mine." (O pronome correto é "mine", pois o livro pertence ao falante.)
    <br />
    <br />
    <i><h5>Este livro é meu.</h5></i>
  </Accordion.Body>
</Accordion.Item>
<Accordion.Item eventKey="1">
  <Accordion.Header>2. Complete a frase com o pronome correto: "That pencil is _______." (teu)</Accordion.Header>
  <Accordion.Body>
    "That pencil is yours." (O pronome correto é "yours", pois o lápis pertence à pessoa com quem se fala.)
    <br />
    <br />
    <i><h5>Aquele lápis é teu.</h5></i>
  </Accordion.Body>
</Accordion.Item>
<Accordion.Item eventKey="2">
  <Accordion.Header>3. Complete a frase com o pronome correto: "The car is _______." (dela)</Accordion.Header>
  <Accordion.Body>
    "The car is hers." (O pronome correto é "hers", pois o carro pertence a uma terceira pessoa feminina.)
    <br />
    <br />
    <i><h5>O carro é dela.</h5></i>
  </Accordion.Body>
</Accordion.Item>
<Accordion.Item eventKey="3">
  <Accordion.Header>4. Complete a frase com o pronome correto: "The house is _______." (nossa)</Accordion.Header>
  <Accordion.Body>
    "The house is ours." (O pronome correto é "ours", pois a casa pertence ao falante e a outras pessoas.)
    <br />
    <br />
    <i><h5>A casa é nossa.</h5></i>
  </Accordion.Body>
</Accordion.Item>
<Accordion.Item eventKey="4">
  <Accordion.Header>5. Complete a frase com o pronome correto: "These toys are _______." (deles)</Accordion.Header>
  <Accordion.Body>
    "These toys are theirs." (O pronome correto é "theirs", pois os brinquedos pertencem a um grupo de pessoas ou coisas.)
    <br />
    <br />
    <i><h5>Esses brinquedos são deles.</h5></i>
  </Accordion.Body>
</Accordion.Item>


</Accordion>
</Col>
        </Row>
     </Container>
</h4>

     </Container>

<Footer />
</>
    );
}
