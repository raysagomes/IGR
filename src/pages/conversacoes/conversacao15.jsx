import Header from "../../components/header";
import Footer from "../../components/footer";
import { Helmet } from 'react-helmet-async';
import HeaderMenuTexto from "../../components/headers/header-menu-texto";
import Logo from '../../components/logo';
import { Container, Col, Row} from "react-bootstrap";
import ExplicacaoConversa from "../../components/obs-conversacao";
import AudioPlayer from '../../components/audio-player';

export default function Conversacao15() {
    return(
<>
<div>
<Helmet>
    <title>Anna e o Médico</title>
  </Helmet> 
<Header />
<Logo />
<HeaderMenuTexto />

<Container>
  <Row>
    <Col className="coluna-texto1">
      <br /> 
      <ExplicacaoConversa />

      <h4 className="h5-conversa"><i><strong>Anna e o Médico</strong></i>
      <br /> 
      <br /> 

<p><strong>Anna:</strong> Good morning, Doctor. I've been feeling sick lately.</p>  
<p><strong>Anna:</strong> Bom dia, Doutor. Tenho me sentido doente ultimamente.</p>
<AudioPlayer text="Good morning, Doctor. I've been feeling sick lately." voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
<br />

<p><strong>Doctor:</strong> Good morning, Anna. What symptoms are you experiencing?</p>  
<p><strong>Médico:</strong> Bom dia, Anna. Que sintomas você está sentindo?</p>
<AudioPlayer text="Good morning, Anna. What symptoms are you experiencing?" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
<br />

<p><strong>Anna:</strong> I have a fever and a sore throat.</p>  
<p><strong>Anna:</strong> Tenho febre e dor de garganta.</p>
<AudioPlayer text="I have a fever and a sore throat." voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
<br />

<p><strong>Doctor:</strong> How long have you had these symptoms?</p>  
<p><strong>Médico:</strong> Há quanto tempo você tem esses sintomas?</p>
<AudioPlayer text="How long have you had these symptoms?" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
<br />

<p><strong>Anna:</strong> For about three days now.</p>  
<p><strong>Anna:</strong> Por cerca de três dias agora.</p>
<AudioPlayer text="For about three days now." voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
<br />

<p><strong>Doctor:</strong> Let me examine your throat. Open your mouth, please.</p>  
<p><strong>Médico:</strong> Deixe-me examinar sua garganta. Abra a boca, por favor.</p>
<AudioPlayer text="Let me examine your throat. Open your mouth, please." voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
<br />

<p><strong>Anna:</strong> Is it serious, Doctor?</p>  
<p><strong>Anna:</strong> É sério, Doutor?</p>
<AudioPlayer text="Is it serious, Doctor?" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
<br />

<p><strong>Doctor:</strong> It's just a throat infection. I'll prescribe some antibiotics.</p>  
<p><strong>Médico:</strong> É apenas uma infecção na garganta. Vou prescrever alguns antibióticos.</p>
<AudioPlayer text="It's just a throat infection. I'll prescribe some antibiotics." voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
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