import Header from "../../components/header";
import Footer from "../../components/footer";
import ExplicacaoConversa from "../../components/obs-conversacao";
import { Helmet } from 'react-helmet-async';
import HeaderMenuTexto from "../../components/headers/header-menu-texto";
import Logo from '../../components/logo';
import { Container, Col, Row} from "react-bootstrap";
import AudioPlayer from '../../components/audio-player';

export default function Conversacao1() {
    return(
<>
<div>
<Helmet>
    <title>Julie Encontra um Estrangeiro</title>
  </Helmet> 
<Header />
<Logo />
<HeaderMenuTexto />

<Container>
      <Row>
        <Col className="coluna-texto1">
        <br /> 
        <ExplicacaoConversa />
        <h4 className="h5-conversa"><i><strong>Julie Encontra um Estrangeiro</strong></i>
        <br /> 
        <br /> 

        
        <p><strong>Julie:</strong> Hello!</p>
              <p><strong>Julie:</strong> Olá!</p>
              <AudioPlayer text="Hello!" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />

              <br />

              <p><strong>Foreigner:</strong> Hi! How are you?</p>
              <p><strong>Estrangeiro:</strong> Oi! Como você está?</p>
              <AudioPlayer text="Hi! How are you?" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />

              <br />

              <p><strong>Julie:</strong> I'm good, thank you. And you?</p>
              <p><strong>Julie:</strong> Estou bem, obrigado. E você?</p>
              <AudioPlayer text="I'm good, thank you. And you?" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />

              <br />

              <p><strong>Foreigner:</strong> I'm doing well. What’s your name?</p>
              <p><strong>Estrangeiro:</strong> Estou bem. Qual é o seu nome?</p>
              <AudioPlayer text="I'm doing well. What’s your name?" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
              <br />

              <p><strong>Julie:</strong> My name is Julie. What’s yours?</p>
              <p><strong>Julie:</strong> Meu nome é Julie. E o seu?</p>
              <AudioPlayer text="My name is Julie. What’s yours?" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />

              <br />

              <p><strong>Foreigner:</strong> I’m Alex. Nice to meet you, Julie.</p>
              <p><strong>Estrangeiro:</strong> Eu sou Alex. Prazer em te conhecer, Julie.</p>
              <AudioPlayer text="I’m Alex. Nice to meet you, Julie." voiceName="Microsoft Jenny Online (Natural) - English (United States)" />

              <br />

              <p><strong>Julie:</strong> Nice to meet you too, Alex. Where are you from?</p>
              <p><strong>Julie:</strong> Prazer em te conhecer também, Alex. De onde você é?</p>
              <AudioPlayer text="Nice to meet you too, Alex. Where are you from?" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />

              <br />

              <p><strong>Foreigner:</strong> I’m from Canada. And you?</p>
              <p><strong>Estrangeiro:</strong> Eu sou do Canadá. E você?</p>
              <AudioPlayer text="I’m from Canada. And you?" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />

              <br />

              <p><strong>Julie:</strong> I’m from Brazil. What brings you here?</p>
              <p><strong>Julie:</strong> Eu sou do Brasil. O que te traz aqui?</p>
              <AudioPlayer text="I’m from Brazil. What brings you here?" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />

              <br />

              <p><strong>Foreigner:</strong> I’m here on vacation, exploring the city.</p>
              <p><strong>Estrangeiro:</strong> Estou aqui de férias, explorando a cidade.</p>
              <AudioPlayer text="I’m here on vacation, exploring the city." voiceName="Microsoft Jenny Online (Natural) - English (United States)" />

              <br />

              <p><strong>Julie:</strong> That’s great! Have you visited any places yet?</p>
              <p><strong>Julie:</strong> Que ótimo! Você já visitou algum lugar?</p>
              <AudioPlayer text="That’s great! Have you visited any places yet?" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />

              <br />

                <p><strong>Foreigner:</strong> Yes, I went to the beach yesterday. It was beautiful!</p>
              <p><strong>Estrangeiro:</strong> Sim, fui à praia ontem. Foi lindo!</p>
              <AudioPlayer text="Yes, I went to the beach yesterday. It was beautiful!" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />

              <br />
</h4>
</Col>
    </Row>
    </Container>


<Footer />
</div>
</>

    );
}
