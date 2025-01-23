import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import ExplicacaoConversa from "../../components/obs-conversacao";
import { Helmet } from 'react-helmet-async';
import HeaderMenuTexto from "../../components/header-menu-texto";
import Logo from '../../components/logo';
import { Container, Col, Row, Accordion} from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import AudioPlayer from '../../components/audio-player';


export default function Conversacao2() {
    return(
<>
<div>
<Helmet>
    <title>Monica e o Caminho para o Museu</title>
  </Helmet> 
<Header />
<Logo />
<HeaderMenuTexto />

<Container>
  <Row>
    <Col className="coluna-texto1">
      <br /> 
              <ExplicacaoConversa />
      
      <h4 className="h5-conversa"><i><strong>Monica e o Caminho para o Museu</strong></i>
      <br /> 
      <br /> 

      <p><strong>Monica:</strong> Hi, do you know the way to the museum?</p>  
<p><strong>Monica:</strong> Oi, você sabe o caminho para o museu?</p>
<AudioPlayer text="Hi, do you know the way to the museum?" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />

<br />

<p><strong>Stranger:</strong> Yes, it’s just down the street. Turn left at the traffic lights.</p>  
<p><strong>Estranho:</strong> Sim, é só seguir essa rua. Vire à esquerda no semáforo.</p>
<AudioPlayer text="Yes, it’s just down the street. Turn left at the traffic lights." voiceName="Microsoft Jenny Online (Natural) - English (United States)" />

<br />

<p><strong>Monica:</strong> Thank you! How far is it from here?</p>  
<p><strong>Monica:</strong> Obrigada! Quão longe é daqui?</p>
<AudioPlayer text="Thank you! How far is it from here?" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />

<br />

<p><strong>Stranger:</strong> It’s about 10 minutes on foot.</p>  
<p><strong>Estranho:</strong> São cerca de 10 minutos a pé.</p>
<AudioPlayer text="It’s about 10 minutes on foot." voiceName="Microsoft Jenny Online (Natural) - English (United States)" />

<br />

<p><strong>Monica:</strong> Great! Is there anything interesting nearby?</p>  
<p><strong>Monica:</strong> Que ótimo! Tem algo interessante por aqui perto?</p>
<AudioPlayer text="Great! Is there anything interesting nearby?" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />

<br />

<p><strong>Stranger:</strong> Yes, there’s a park and a café just a block away from here.</p>  
<p><strong>Estranho:</strong> Sim, tem um parque e um café a uma quadra daqui.</p>
<AudioPlayer text="Yes, there’s a park and a café just a block away from here." voiceName="Microsoft Jenny Online (Natural) - English (United States)" />

<br />

<p><strong>Monica:</strong> I’ll check them out later. Thanks for your help!</p>  
<p><strong>Monica:</strong> Vou dar uma olhada depois. Obrigada pela ajuda!</p>
<AudioPlayer text="I’ll check them out later. Thanks for your help!" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />

<br />

<p><strong>Stranger:</strong> You’re welcome! Enjoy your visit!</p>  
<p><strong>Estranho:</strong> De nada! Aproveite sua visita!</p>
<AudioPlayer text="You’re welcome! Enjoy your visit!" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />

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
