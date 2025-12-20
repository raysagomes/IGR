import Header from "../../components/header";
import Footer from "../../components/footer";
import { Helmet } from 'react-helmet-async';
import HeaderMenuTexto from "../../components/headers/header-menu-texto";
import Logo from '../../components/logo';
import { Container, Col, Row} from "react-bootstrap";
import ExplicacaoConversa from "../../components/obs-conversacao";
import AudioPlayer from '../../components/audio-player';

export default function Conversacao22() {
    return(
<>
<div>
<Helmet>
    <title>Mark e a Oficina</title>
  </Helmet> 
<Header />
<Logo />
<HeaderMenuTexto />

<Container>
  <Row>
    <Col className="coluna-texto1">
      <br /> 
      <ExplicacaoConversa />

      <h4 className="h5-conversa"><i><strong>Mark e a Oficina</strong></i>
      <br /> 
      <br /> 

<p><strong>Mark:</strong> Hi, my car is making a strange noise.</p>  
<p><strong>Mark:</strong> Oi, meu carro está fazendo um barulho estranho.</p>
<AudioPlayer text="Hi, my car is making a strange noise." voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
<br />

<p><strong>Mechanic:</strong> What kind of noise is it making?</p>  
<p><strong>Mecânico:</strong> Que tipo de barulho está fazendo?</p>
<AudioPlayer text="What kind of noise is it making?" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
<br />

<p><strong>Mark:</strong> It sounds like grinding when I brake.</p>  
<p><strong>Mark:</strong> Parece um rangido quando eu freio.</p>
<AudioPlayer text="It sounds like grinding when I brake." voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
<br />

<p><strong>Mechanic:</strong> That sounds like your brake pads need replacing.</p>  
<p><strong>Mecânico:</strong> Parece que suas pastilhas de freio precisam ser trocadas.</p>
<AudioPlayer text="That sounds like your brake pads need replacing." voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
<br />

<p><strong>Mark:</strong> How much will that cost?</p>  
<p><strong>Mark:</strong> Quanto isso vai custar?</p>
<AudioPlayer text="How much will that cost?" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
<br />

<p><strong>Mechanic:</strong> Around $200 for parts and labor.</p>  
<p><strong>Mecânico:</strong> Cerca de $200 por peças e mão de obra.</p>
<AudioPlayer text="Around $200 for parts and labor." voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
<br />

<p><strong>Mark:</strong> When can you fix it?</p>  
<p><strong>Mark:</strong> Quando você pode consertar?</p>
<AudioPlayer text="When can you fix it?" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
<br />

<p><strong>Mechanic:</strong> I can have it ready by tomorrow afternoon.</p>  
<p><strong>Mecânico:</strong> Posso deixar pronto até amanhã à tarde.</p>
<AudioPlayer text="I can have it ready by tomorrow afternoon." voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
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