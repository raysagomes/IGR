import Header from "../../components/header";
import Footer from "../../components/footer";
import { Helmet } from 'react-helmet-async';
import HeaderMenuTexto from "../../components/headers/header-menu-texto";
import Logo from '../../components/logo';
import { Container, Col, Row} from "react-bootstrap";
import ExplicacaoConversa from "../../components/obs-conversacao";
import AudioPlayer from '../../components/audio-player';

export default function Conversacao13() {
    return(
<>
<div>
<Helmet>
    <title>Emma e o Posto de Gasolina</title>
  </Helmet> 
<Header />
<Logo />
<HeaderMenuTexto />

<Container>
  <Row>
    <Col className="coluna-texto1">
      <br /> 
      <ExplicacaoConversa />

      <h4 className="h5-conversa"><i><strong>Emma e o Posto de Gasolina</strong></i>
      <br /> 
      <br /> 

<p><strong>Emma:</strong> Hi, I need to fill up my car with gas.</p>  
<p><strong>Emma:</strong> Oi, preciso abastecer meu carro com gasolina.</p>
<AudioPlayer text="Hi, I need to fill up my car with gas." voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
<br />

<p><strong>Attendant:</strong> Sure! What type of gas would you like?</p>  
<p><strong>Frentista:</strong> Claro! Que tipo de gasolina você gostaria?</p>
<AudioPlayer text="Sure! What type of gas would you like?" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
<br />

<p><strong>Emma:</strong> Regular unleaded, please. Fill it up.</p>  
<p><strong>Emma:</strong> Comum sem chumbo, por favor. Encha o tanque.</p>
<AudioPlayer text="Regular unleaded, please. Fill it up." voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
<br />

<p><strong>Attendant:</strong> No problem. Would you like me to check your oil?</p>  
<p><strong>Frentista:</strong> Sem problema. Gostaria que eu verificasse seu óleo?</p>
<AudioPlayer text="No problem. Would you like me to check your oil?" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
<br />

<p><strong>Emma:</strong> Yes, that would be great. Thank you!</p>  
<p><strong>Emma:</strong> Sim, seria ótimo. Obrigada!</p>
<AudioPlayer text="Yes, that would be great. Thank you!" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
<br />

<p><strong>Attendant:</strong> Your oil looks fine. That'll be $45 for the gas.</p>  
<p><strong>Frentista:</strong> Seu óleo está bom. Serão $45 pela gasolina.</p>
<AudioPlayer text="Your oil looks fine. That'll be $45 for the gas." voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
<br />

<p><strong>Emma:</strong> Perfect. Here's my credit card.</p>  
<p><strong>Emma:</strong> Perfeito. Aqui está meu cartão de crédito.</p>
<AudioPlayer text="Perfect. Here's my credit card." voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
<br />

<p><strong>Attendant:</strong> Thank you! Have a safe trip!</p>  
<p><strong>Frentista:</strong> Obrigado! Tenha uma viagem segura!</p>
<AudioPlayer text="Thank you! Have a safe trip!" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
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