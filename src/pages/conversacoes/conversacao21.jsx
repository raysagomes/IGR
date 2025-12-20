import Header from "../../components/header";
import Footer from "../../components/footer";
import { Helmet } from 'react-helmet-async';
import HeaderMenuTexto from "../../components/headers/header-menu-texto";
import Logo from '../../components/logo';
import { Container, Col, Row} from "react-bootstrap";
import ExplicacaoConversa from "../../components/obs-conversacao";
import AudioPlayer from '../../components/audio-player';

export default function Conversacao21() {
    return(
<>
<div>
<Helmet>
    <title>Sophie e o Dentista</title>
  </Helmet> 
<Header />
<Logo />
<HeaderMenuTexto />

<Container>
  <Row>
    <Col className="coluna-texto1">
      <br /> 
      <ExplicacaoConversa />

      <h4 className="h5-conversa"><i><strong>Sophie e o Dentista</strong></i>
      <br /> 
      <br /> 

<p><strong>Sophie:</strong> Good morning, I have an appointment at 10 AM.</p>  
<p><strong>Sophie:</strong> Bom dia, tenho um horário às 10h.</p>
<AudioPlayer text="Good morning, I have an appointment at 10 AM." voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
<br />

<p><strong>Receptionist:</strong> Good morning! What's your name, please?</p>  
<p><strong>Recepcionista:</strong> Bom dia! Qual é seu nome, por favor?</p>
<AudioPlayer text="Good morning! What's your name, please?" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
<br />

<p><strong>Sophie:</strong> Sophie Johnson. I'm here for a cleaning.</p>  
<p><strong>Sophie:</strong> Sophie Johnson. Estou aqui para uma limpeza.</p>
<AudioPlayer text="Sophie Johnson. I'm here for a cleaning." voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
<br />

<p><strong>Receptionist:</strong> Perfect! Please have a seat. The dentist will see you shortly.</p>  
<p><strong>Recepcionista:</strong> Perfeito! Por favor, sente-se. O dentista a verá em breve.</p>
<AudioPlayer text="Perfect! Please have a seat. The dentist will see you shortly." voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
<br />

<p><strong>Sophie:</strong> Thank you. How long will the cleaning take?</p>  
<p><strong>Sophie:</strong> Obrigada. Quanto tempo a limpeza vai demorar?</p>
<AudioPlayer text="Thank you. How long will the cleaning take?" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
<br />

<p><strong>Receptionist:</strong> Usually about 45 minutes to an hour.</p>  
<p><strong>Recepcionista:</strong> Geralmente cerca de 45 minutos a uma hora.</p>
<AudioPlayer text="Usually about 45 minutes to an hour." voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
<br />

<p><strong>Sophie:</strong> That's fine. I have time today.</p>  
<p><strong>Sophie:</strong> Tudo bem. Tenho tempo hoje.</p>
<AudioPlayer text="That's fine. I have time today." voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
<br />

<p><strong>Receptionist:</strong> Great! Dr. Smith will be with you in just a moment.</p>  
<p><strong>Recepcionista:</strong> Ótimo! Dr. Smith estará com você em um momento.</p>
<AudioPlayer text="Great! Dr. Smith will be with you in just a moment." voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
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