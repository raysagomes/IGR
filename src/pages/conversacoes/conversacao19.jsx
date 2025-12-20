import Header from "../../components/header";
import Footer from "../../components/footer";
import { Helmet } from 'react-helmet-async';
import HeaderMenuTexto from "../../components/headers/header-menu-texto";
import Logo from '../../components/logo';
import { Container, Col, Row} from "react-bootstrap";
import ExplicacaoConversa from "../../components/obs-conversacao";
import AudioPlayer from '../../components/audio-player';

export default function Conversacao19() {
    return(
<>
<div>
<Helmet>
    <title>Rachel e o Correio</title>
  </Helmet> 
<Header />
<Logo />
<HeaderMenuTexto />

<Container>
  <Row>
    <Col className="coluna-texto1">
      <br /> 
      <ExplicacaoConversa />

      <h4 className="h5-conversa"><i><strong>Rachel e o Correio</strong></i>
      <br /> 
      <br /> 

<p><strong>Rachel:</strong> Hi, I need to send this package to New York.</p>  
<p><strong>Rachel:</strong> Oi, preciso enviar este pacote para Nova York.</p>
<AudioPlayer text="Hi, I need to send this package to New York." voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
<br />

<p><strong>Postal Worker:</strong> Sure! How would you like to send it?</p>  
<p><strong>Funcionário dos Correios:</strong> Claro! Como você gostaria de enviá-lo?</p>
<AudioPlayer text="Sure! How would you like to send it?" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
<br />

<p><strong>Rachel:</strong> What are my options?</p>  
<p><strong>Rachel:</strong> Quais são minhas opções?</p>
<AudioPlayer text="What are my options?" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
<br />

<p><strong>Postal Worker:</strong> We have regular mail, priority, and express delivery.</p>  
<p><strong>Funcionário dos Correios:</strong> Temos correio normal, prioritário e entrega expressa.</p>
<AudioPlayer text="We have regular mail, priority, and express delivery." voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
<br />

<p><strong>Rachel:</strong> How long does priority mail take?</p>  
<p><strong>Rachel:</strong> Quanto tempo leva o correio prioritário?</p>
<AudioPlayer text="How long does priority mail take?" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
<br />

<p><strong>Postal Worker:</strong> Priority mail takes 2-3 business days.</p>  
<p><strong>Funcionário dos Correios:</strong> O correio prioritário leva de 2 a 3 dias úteis.</p>
<AudioPlayer text="Priority mail takes 2-3 business days." voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
<br />

<p><strong>Rachel:</strong> That's perfect. I'll go with priority mail.</p>  
<p><strong>Rachel:</strong> Perfeito. Vou com o correio prioritário.</p>
<AudioPlayer text="That's perfect. I'll go with priority mail." voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
<br />

<p><strong>Postal Worker:</strong> Great! That'll be $15.50. Here's your receipt.</p>  
<p><strong>Funcionário dos Correios:</strong> Ótimo! Serão $15,50. Aqui está seu recibo.</p>
<AudioPlayer text="Great! That'll be $15.50. Here's your receipt." voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
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