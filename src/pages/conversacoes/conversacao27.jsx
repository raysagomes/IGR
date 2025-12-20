import Header from "../../components/header";
import Footer from "../../components/footer";
import { Helmet } from 'react-helmet-async';
import HeaderMenuTexto from "../../components/headers/header-menu-texto";
import Logo from '../../components/logo';
import { Container, Col, Row} from "react-bootstrap";
import ExplicacaoConversa from "../../components/obs-conversacao";
import AudioPlayer from '../../components/audio-player';

export default function Conversacao27() {
    return(
<>
<div>
<Helmet>
    <title>Nicole e a Floricultura</title>
  </Helmet> 
<Header />
<Logo />
<HeaderMenuTexto />

<Container>
  <Row>
    <Col className="coluna-texto1">
      <br /> 
      <ExplicacaoConversa />

      <h4 className="h5-conversa"><i><strong>Nicole e a Floricultura</strong></i>
      <br /> 
      <br /> 

<p><strong>Nicole:</strong> Hi, I need flowers for my mother's birthday.</p>  
<p><strong>Nicole:</strong> Oi, preciso de flores para o aniversário da minha mãe.</p>
<AudioPlayer text="Hi, I need flowers for my mother's birthday." voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
<br />

<p><strong>Florist:</strong> How lovely! What's her favorite color?</p>  
<p><strong>Florista:</strong> Que lindo! Qual é a cor favorita dela?</p>
<AudioPlayer text="How lovely! What's her favorite color?" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
<br />

<p><strong>Nicole:</strong> She loves pink and white flowers.</p>  
<p><strong>Nicole:</strong> Ela adora flores rosa e brancas.</p>
<AudioPlayer text="She loves pink and white flowers." voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
<br />

<p><strong>Florist:</strong> Perfect! I have beautiful pink roses and white lilies.</p>  
<p><strong>Florista:</strong> Perfeito! Tenho lindas rosas rosa e lírios brancos.</p>
<AudioPlayer text="Perfect! I have beautiful pink roses and white lilies." voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
<br />

<p><strong>Nicole:</strong> That sounds wonderful! Can you make a bouquet?</p>  
<p><strong>Nicole:</strong> Parece maravilhoso! Você pode fazer um buquê?</p>
<AudioPlayer text="That sounds wonderful! Can you make a bouquet?" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
<br />

<p><strong>Florist:</strong> Of course! Would you like a small or large bouquet?</p>  
<p><strong>Florista:</strong> Claro! Você gostaria de um buquê pequeno ou grande?</p>
<AudioPlayer text="Of course! Would you like a small or large bouquet?" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
<br />

<p><strong>Nicole:</strong> A medium-sized bouquet would be perfect.</p>  
<p><strong>Nicole:</strong> Um buquê de tamanho médio seria perfeito.</p>
<AudioPlayer text="A medium-sized bouquet would be perfect." voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
<br />

<p><strong>Florist:</strong> Excellent! It'll be ready in 20 minutes.</p>  
<p><strong>Florista:</strong> Excelente! Estará pronto em 20 minutos.</p>
<AudioPlayer text="Excellent! It'll be ready in 20 minutes." voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
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