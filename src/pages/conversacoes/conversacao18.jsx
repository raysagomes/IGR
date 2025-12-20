import Header from "../../components/header";
import Footer from "../../components/footer";
import { Helmet } from 'react-helmet-async';
import HeaderMenuTexto from "../../components/headers/header-menu-texto";
import Logo from '../../components/logo';
import { Container, Col, Row} from "react-bootstrap";
import ExplicacaoConversa from "../../components/obs-conversacao";
import AudioPlayer from '../../components/audio-player';

export default function Conversacao18() {
    return(
<>
<div>
<Helmet>
    <title>Tom e a Academia</title>
  </Helmet> 
<Header />
<Logo />
<HeaderMenuTexto />

<Container>
  <Row>
    <Col className="coluna-texto1">
      <br /> 
      <ExplicacaoConversa />

      <h4 className="h5-conversa"><i><strong>Tom e a Academia</strong></i>
      <br /> 
      <br /> 

<p><strong>Tom:</strong> Hello, I'm interested in joining the gym.</p>  
<p><strong>Tom:</strong> Olá, estou interessado em me inscrever na academia.</p>
<AudioPlayer text="Hello, I'm interested in joining the gym." voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
<br />

<p><strong>Gym Staff:</strong> Great! What type of membership are you looking for?</p>  
<p><strong>Funcionário da Academia:</strong> Ótimo! Que tipo de plano você está procurando?</p>
<AudioPlayer text="Great! What type of membership are you looking for?" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
<br />

<p><strong>Tom:</strong> I'd like a monthly membership with access to all equipment.</p>  
<p><strong>Tom:</strong> Gostaria de um plano mensal com acesso a todos os equipamentos.</p>
<AudioPlayer text="I'd like a monthly membership with access to all equipment." voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
<br />

<p><strong>Gym Staff:</strong> Perfect! That's $50 per month. Would you like a tour first?</p>  
<p><strong>Funcionário da Academia:</strong> Perfeito! São $50 por mês. Gostaria de fazer um tour primeiro?</p>
<AudioPlayer text="Perfect! That's $50 per month. Would you like a tour first?" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
<br />

<p><strong>Tom:</strong> Yes, I'd love to see the facilities.</p>  
<p><strong>Tom:</strong> Sim, adoraria ver as instalações.</p>
<AudioPlayer text="Yes, I'd love to see the facilities." voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
<br />

<p><strong>Gym Staff:</strong> Follow me! We have cardio machines, weights, and a pool.</p>  
<p><strong>Funcionário da Academia:</strong> Me siga! Temos aparelhos de cardio, pesos e uma piscina.</p>
<AudioPlayer text="Follow me! We have cardio machines, weights, and a pool." voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
<br />

<p><strong>Tom:</strong> This looks perfect! When can I start?</p>  
<p><strong>Tom:</strong> Parece perfeito! Quando posso começar?</p>
<AudioPlayer text="This looks perfect! When can I start?" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
<br />

<p><strong>Gym Staff:</strong> You can start today if you sign up now!</p>  
<p><strong>Funcionário da Academia:</strong> Você pode começar hoje se se inscrever agora!</p>
<AudioPlayer text="You can start today if you sign up now!" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
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