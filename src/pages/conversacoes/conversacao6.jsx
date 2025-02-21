import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import { Helmet } from 'react-helmet-async';
import HeaderMenuTexto from "../../components/headers/header-menu-texto";
import Logo from '../../components/logo';
import { Container, Col, Row} from "react-bootstrap";
import ExplicacaoConversa from "../../components/obs-conversacao";
import AudioPlayer from '../../components/audio-player';

export default function Conversacao6() {
    return(
<>
<div>
<Helmet>
    <title>Juliana e o Transporte Público</title>
  </Helmet> 
<Header />
<Logo />
<HeaderMenuTexto />
<Container>
  <Row>
    <Col className="coluna-texto1">
      <br /> 
      <ExplicacaoConversa />

      <h4 className="h5-conversa"><i><strong>Juliana e o Transporte Público</strong></i>
      <br /> 
      <br /> 

      <p><strong>Juliana:</strong> Excuse me, which bus goes to the museum?</p>
<p><strong>Juliana:</strong> Com licença, qual ônibus vai para o museu?</p>
<AudioPlayer text="Excuse me, which bus goes to the museum?" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
<br />

<p><strong>Passenger:</strong> Bus number 10 goes straight there.</p>
<p><strong>Passageiro:</strong> O ônibus número 10 vai direto até lá.</p>
<AudioPlayer text="Bus number 10 goes straight there." voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
<br />

<p><strong>Juliana:</strong> Thank you! Where do I catch the bus?</p>
<p><strong>Juliana:</strong> Obrigada! Onde eu pego o ônibus?</p>
<AudioPlayer text="Thank you! Where do I catch the bus?" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
<br />

<p><strong>Passenger:</strong> You can catch it at the next stop, just down the street.</p>
<p><strong>Passageiro:</strong> Você pode pegá-lo na próxima parada, logo ali na rua.</p>
<AudioPlayer text="You can catch it at the next stop, just down the street." voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
<br />

<p><strong>Juliana:</strong> Great! How long does it take to get there?</p>
<p><strong>Juliana:</strong> Ótimo! Quanto tempo leva para chegar lá?</p>
<AudioPlayer text="Great! How long does it take to get there?" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
<br />

<p><strong>Passenger:</strong> It takes about 20 minutes by bus.</p>
<p><strong>Passageiro:</strong> Leva cerca de 20 minutos de ônibus.</p>
<AudioPlayer text="It takes about 20 minutes by bus." voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
<br />

<p><strong>Juliana:</strong> Perfect! Thanks for your help!</p>
<p><strong>Juliana:</strong> Perfeito! Obrigada pela ajuda!</p>
<AudioPlayer text="Perfect! Thanks for your help!" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
<br />

<p><strong>Passenger:</strong> You’re welcome! Have a nice trip!</p>
<p><strong>Passageiro:</strong> De nada! Tenha uma boa viagem!</p>
<AudioPlayer text="You’re welcome! Have a nice trip!" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
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
