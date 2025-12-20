import Header from "../../components/header";
import Footer from "../../components/footer";
import { Helmet } from 'react-helmet-async';
import HeaderMenuTexto from "../../components/headers/header-menu-texto";
import Logo from '../../components/logo';
import { Container, Col, Row} from "react-bootstrap";
import ExplicacaoConversa from "../../components/obs-conversacao";
import AudioPlayer from '../../components/audio-player';

export default function Conversacao30() {
    return(
<>
<div>
<Helmet>
    <title>Alex e a Pizzaria</title>
  </Helmet> 
<Header />
<Logo />
<HeaderMenuTexto />

<Container>
  <Row>
    <Col className="coluna-texto1">
      <br /> 
      <ExplicacaoConversa />

      <h4 className="h5-conversa"><i><strong>Alex e a Pizzaria</strong></i>
      <br /> 
      <br /> 

<p><strong>Alex:</strong> Hi, I'd like to order a pizza for delivery.</p>  
<p><strong>Alex:</strong> Oi, gostaria de pedir uma pizza para entrega.</p>
<AudioPlayer text="Hi, I'd like to order a pizza for delivery." voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
<br />

<p><strong>Pizza Shop Employee:</strong> Sure! What size would you like?</p>  
<p><strong>Funcionário da Pizzaria:</strong> Claro! Que tamanho você gostaria?</p>
<AudioPlayer text="Sure! What size would you like?" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
<br />

<p><strong>Alex:</strong> I'll take a large pizza with pepperoni and mushrooms.</p>  
<p><strong>Alex:</strong> Vou querer uma pizza grande com pepperoni e cogumelos.</p>
<AudioPlayer text="I'll take a large pizza with pepperoni and mushrooms." voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
<br />

<p><strong>Pizza Shop Employee:</strong> Perfect! What's your address?</p>  
<p><strong>Funcionário da Pizzaria:</strong> Perfeito! Qual é seu endereço?</p>
<AudioPlayer text="Perfect! What's your address?" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
<br />

<p><strong>Alex:</strong> It's 123 Oak Street, apartment 4B.</p>  
<p><strong>Alex:</strong> É Rua Oak 123, apartamento 4B.</p>
<AudioPlayer text="It's 123 Oak Street, apartment 4B." voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
<br />

<p><strong>Pizza Shop Employee:</strong> Got it! How long will delivery take?</p>  
<p><strong>Funcionário da Pizzaria:</strong> Entendi! Quanto tempo a entrega vai demorar?</p>
<AudioPlayer text="Got it! How long will delivery take?" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
<br />

<p><strong>Alex:</strong> About 30 to 45 minutes. The total is $18.50.</p>  
<p><strong>Alex:</strong> Cerca de 30 a 45 minutos. O total é $18,50.</p>
<AudioPlayer text="About 30 to 45 minutes. The total is $18.50." voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
<br />

<p><strong>Pizza Shop Employee:</strong> Perfect! Your pizza will be there soon!</p>  
<p><strong>Funcionário da Pizzaria:</strong> Perfeito! Sua pizza chegará em breve!</p>
<AudioPlayer text="Perfect! Your pizza will be there soon!" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
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