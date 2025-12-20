import Header from "../../components/header";
import Footer from "../../components/footer";
import { Helmet } from 'react-helmet-async';
import HeaderMenuTexto from "../../components/headers/header-menu-texto";
import Logo from '../../components/logo';
import { Container, Col, Row} from "react-bootstrap";
import ExplicacaoConversa from "../../components/obs-conversacao";
import AudioPlayer from '../../components/audio-player';

export default function Conversacao11() {
    return(
<>
<div>
<Helmet>
    <title>Sarah e a Farmácia</title>
  </Helmet> 
<Header />
<Logo />
<HeaderMenuTexto />

<Container>
  <Row>
    <Col className="coluna-texto1">
      <br /> 
      <ExplicacaoConversa />

      <h4 className="h5-conversa"><i><strong>Sarah e a Farmácia</strong></i>
      <br /> 
      <br /> 

<p><strong>Sarah:</strong> Excuse me, do you have something for a headache?</p>  
<p><strong>Sarah:</strong> Com licença, vocês têm algo para dor de cabeça?</p>
<AudioPlayer text="Excuse me, do you have something for a headache?" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
<br />

<p><strong>Pharmacist:</strong> Yes, we have aspirin and ibuprofen. Which would you prefer?</p>  
<p><strong>Farmacêutico:</strong> Sim, temos aspirina e ibuprofeno. Qual você prefere?</p>
<AudioPlayer text="Yes, we have aspirin and ibuprofen. Which would you prefer?" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
<br />

<p><strong>Sarah:</strong> I'll take the ibuprofen, please.</p>  
<p><strong>Sarah:</strong> Vou levar o ibuprofeno, por favor.</p>
<AudioPlayer text="I'll take the ibuprofen, please." voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
<br />

<p><strong>Pharmacist:</strong> Here you go. Take one tablet every six hours.</p>  
<p><strong>Farmacêutico:</strong> Aqui está. Tome um comprimido a cada seis horas.</p>
<AudioPlayer text="Here you go. Take one tablet every six hours." voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
<br />

<p><strong>Sarah:</strong> Thank you. How much does it cost?</p>  
<p><strong>Sarah:</strong> Obrigada. Quanto custa?</p>
<AudioPlayer text="Thank you. How much does it cost?" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
<br />

<p><strong>Pharmacist:</strong> It's $8.50. Will that be cash or card?</p>  
<p><strong>Farmacêutico:</strong> São $8,50. Vai ser dinheiro ou cartão?</p>
<AudioPlayer text="It's $8.50. Will that be cash or card?" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
<br />

<p><strong>Sarah:</strong> I'll pay with my card.</p>  
<p><strong>Sarah:</strong> Vou pagar com cartão.</p>
<AudioPlayer text="I'll pay with my card." voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
<br />

<p><strong>Pharmacist:</strong> Perfect. Feel better soon!</p>  
<p><strong>Farmacêutico:</strong> Perfeito. Melhore logo!</p>
<AudioPlayer text="Perfect. Feel better soon!" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
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