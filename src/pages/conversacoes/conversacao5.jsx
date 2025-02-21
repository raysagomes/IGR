import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import { Helmet } from 'react-helmet-async';
import HeaderMenuTexto from "../../components/headers/header-menu-texto";
import Logo from '../../components/logo';
import { Container, Col, Row} from "react-bootstrap";
import AudioPlayer from '../../components/audio-player';
import ExplicacaoConversa from "../../components/obs-conversacao";

export default function Conversacao5() {
    return(
<>
<div>
<Helmet>
    <title>Michelle e o Cinema</title>
  </Helmet> 
<Header />
<Logo />
<HeaderMenuTexto />

<Container>
  <Row>
    <Col className="coluna-texto1">
      <br /> 
      <ExplicacaoConversa />

      <h4 className="h5-conversa"><i><strong>Michelle e o Cinema</strong></i>
      <br /> 
      <br /> 
      <p><strong>Michelle:</strong> Hi, what time does the movie start?</p>
<p><strong>Michelle:</strong> Oi, que horas começa o filme?</p>
<AudioPlayer text="Hi, what time does the movie start?" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
<br />

<p><strong>Clerk:</strong> The movie starts at 7:30 PM.</p>
<p><strong>Atendente:</strong> O filme começa às 19h30.</p>
<AudioPlayer text="The movie starts at 7:30 PM." voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
<br />

<p><strong>Michelle:</strong> Great! Can I get two tickets for that movie?</p>
<p><strong>Michelle:</strong> Ótimo! Posso pegar dois ingressos para esse filme?</p>
<AudioPlayer text="Great! Can I get two tickets for that movie?" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
<br />

<p><strong>Clerk:</strong> Sure, here are your tickets. Enjoy the movie!</p>
<p><strong>Atendente:</strong> Claro, aqui estão seus ingressos. Aproveite o filme!</p>
<AudioPlayer text="Sure, here are your tickets. Enjoy the movie!" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
<br />

<p><strong>Michelle:</strong> Thank you! I’m really excited to see it.</p>
<p><strong>Michelle:</strong> Obrigada! Estou bem empolgada para ver esse filme.</p>
<AudioPlayer text="Thank you! I’m really excited to see it." voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
<br />

<p><strong>Clerk:</strong> You’re welcome. Have a good time!</p>
<p><strong>Atendente:</strong> De nada. Divirta-se!</p>
<AudioPlayer text="You’re welcome. Have a good time!" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
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
