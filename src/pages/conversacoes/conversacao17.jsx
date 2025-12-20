import Header from "../../components/header";
import Footer from "../../components/footer";
import { Helmet } from 'react-helmet-async';
import HeaderMenuTexto from "../../components/headers/header-menu-texto";
import Logo from '../../components/logo';
import { Container, Col, Row} from "react-bootstrap";
import ExplicacaoConversa from "../../components/obs-conversacao";
import AudioPlayer from '../../components/audio-player';

export default function Conversacao17() {
    return(
<>
<div>
<Helmet>
    <title>Lisa e o Salão de Beleza</title>
  </Helmet> 
<Header />
<Logo />
<HeaderMenuTexto />

<Container>
  <Row>
    <Col className="coluna-texto1">
      <br /> 
      <ExplicacaoConversa />

      <h4 className="h5-conversa"><i><strong>Lisa e o Salão de Beleza</strong></i>
      <br /> 
      <br /> 

<p><strong>Lisa:</strong> Hi, I'd like to make an appointment for a haircut.</p>  
<p><strong>Lisa:</strong> Oi, gostaria de marcar um horário para cortar o cabelo.</p>
<AudioPlayer text="Hi, I'd like to make an appointment for a haircut." voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
<br />

<p><strong>Receptionist:</strong> Of course! When would you like to come in?</p>  
<p><strong>Recepcionista:</strong> Claro! Quando você gostaria de vir?</p>
<AudioPlayer text="Of course! When would you like to come in?" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
<br />

<p><strong>Lisa:</strong> Is tomorrow afternoon available?</p>  
<p><strong>Lisa:</strong> Amanhã à tarde está disponível?</p>
<AudioPlayer text="Is tomorrow afternoon available?" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
<br />

<p><strong>Receptionist:</strong> Yes, we have an opening at 2 PM. Would that work?</p>  
<p><strong>Recepcionista:</strong> Sim, temos uma vaga às 14h. Funcionaria para você?</p>
<AudioPlayer text="Yes, we have an opening at 2 PM. Would that work?" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
<br />

<p><strong>Lisa:</strong> Perfect! I also need a hair wash.</p>  
<p><strong>Lisa:</strong> Perfeito! Também preciso lavar o cabelo.</p>
<AudioPlayer text="Perfect! I also need a hair wash." voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
<br />

<p><strong>Receptionist:</strong> No problem. That's included with the haircut.</p>  
<p><strong>Recepcionista:</strong> Sem problema. Isso está incluído no corte.</p>
<AudioPlayer text="No problem. That's included with the haircut." voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
<br />

<p><strong>Lisa:</strong> Great! What's your name so I can ask for you?</p>  
<p><strong>Lisa:</strong> Ótimo! Qual é seu nome para eu poder pedir por você?</p>
<AudioPlayer text="Great! What's your name so I can ask for you?" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
<br />

<p><strong>Receptionist:</strong> I'm Maria. See you tomorrow at 2 PM!</p>  
<p><strong>Recepcionista:</strong> Sou Maria. Te vejo amanhã às 14h!</p>
<AudioPlayer text="I'm Maria. See you tomorrow at 2 PM!" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
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