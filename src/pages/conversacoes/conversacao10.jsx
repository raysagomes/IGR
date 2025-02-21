import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import { Helmet } from 'react-helmet-async';
import HeaderMenuTexto from "../../components/headers/header-menu-texto";
import Logo from '../../components/logo';
import { Container, Col, Row} from "react-bootstrap";
import ExplicacaoConversa from "../../components/obs-conversacao";
import AudioPlayer from '../../components/audio-player';

export default function Conversacao10() {
    return(
<>
<div>
<Helmet>
    <title>Clara e a Cafeteria</title>
  </Helmet> 
<Header />
<Logo />
<HeaderMenuTexto />
<Container>
  <Row>
    <Col className="coluna-texto1">
      <br /> 
      <ExplicacaoConversa />

      <h4 className="h5-conversa"><i><strong>Clara e a Cafeteria</strong></i>
      <br /> 
      <br /> 

      <p><strong>Clara:</strong> Hi, I’d like a coffee, please.</p>  
<p><strong>Clara:</strong> Oi, eu gostaria de um café, por favor.</p>
<AudioPlayer text="Hi, I’d like a coffee, please." voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
<br />

<p><strong>Barista:</strong> Sure! What kind of coffee would you like?</p>  
<p><strong>Barista:</strong> Claro! Que tipo de café você gostaria?</p>
<AudioPlayer text="Sure! What kind of coffee would you like?" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
<br />

<p><strong>Clara:</strong> I’ll have a cappuccino with extra foam.</p>  
<p><strong>Clara:</strong> Eu quero um cappuccino com espuma extra.</p>
<AudioPlayer text="I’ll have a cappuccino with extra foam." voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
<br />

<p><strong>Barista:</strong> Would you like any sugar or milk with that?</p>  
<p><strong>Barista:</strong> Você gostaria de açúcar ou leite com isso?</p>
<AudioPlayer text="Would you like any sugar or milk with that?" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
<br />

<p><strong>Clara:</strong> No, just the cappuccino is fine.</p>  
<p><strong>Clara:</strong> Não, só o cappuccino está bom.</p>
<AudioPlayer text="No, just the cappuccino is fine." voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
<br />

<p><strong>Barista:</strong> Okay, your cappuccino will be ready in a minute.</p>  
<p><strong>Barista:</strong> Ok, seu cappuccino ficará pronto em um minuto.</p>
<AudioPlayer text="Okay, your cappuccino will be ready in a minute." voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
<br />

<p><strong>Clara:</strong> Thank you! I’ll have a seat while I wait.</p>  
<p><strong>Clara:</strong> Obrigada! Eu vou me sentar enquanto espero.</p>
<AudioPlayer text="Thank you! I’ll have a seat while I wait." voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
<br />

<p><strong>Barista:</strong> You’re welcome! Enjoy your coffee.</p>  
<p><strong>Barista:</strong> De nada! Aproveite seu café.</p>
<AudioPlayer text="You’re welcome! Enjoy your coffee." voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
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
