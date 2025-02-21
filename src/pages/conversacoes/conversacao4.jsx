import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import { Helmet } from 'react-helmet-async';
import HeaderMenuTexto from "../../components/headers/header-menu-texto";
import Logo from '../../components/logo';
import { Container, Col, Row} from "react-bootstrap";
import AudioPlayer from '../../components/audio-player';
import ExplicacaoConversa from "../../components/obs-conversacao";


export default function Conversacao4() {
    return(
<>
<div>
<Helmet>
    <title>Mike e o Hotel</title>
  </Helmet> 
<Header />
<Logo />
<HeaderMenuTexto />
<Container>
  <Row>
    <Col className="coluna-texto1">
      <br /> 
      <ExplicacaoConversa />

      <h4 className="h5-conversa"><i><strong>Mike e o Hotel</strong></i>
      <br /> 
      <br /> 

      <p><strong>Mike:</strong> Hello, I have a reservation for tonight.</p>  
<p><strong>Mike:</strong> Olá, eu tenho uma reserva para hoje à noite.</p>
<AudioPlayer text="Hello, I have a reservation for tonight." voiceName="Microsoft Jenny Online (Natural) - English (United States)" />

<br />

<p><strong>Receptionist:</strong> Welcome! Can I have your name, please?</p>  
<p><strong>Recepcionista:</strong> Bem-vindo! Posso pegar seu nome, por favor?</p>
<AudioPlayer text="Welcome! Can I have your name, please?" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />

<br />

<p><strong>Mike:</strong> It’s Mike Miller. The reservation is under my name.</p>  
<p><strong>Mike:</strong> É Mike Miller. A reserva está no meu nome.</p>
<AudioPlayer text="It’s Mike Miller. The reservation is under my name." voiceName="Microsoft Jenny Online (Natural) - English (United States)" />

<br />

<p><strong>Receptionist:</strong> Thank you, Mr. Miller. Here’s your room key. It’s on the third floor.</p>  
<p><strong>Recepcionista:</strong> Obrigada, Sr. Miller. Aqui está a chave do seu quarto. Fica no terceiro andar.</p>
<AudioPlayer text="Thank you, Mr. Miller. Here’s your room key. It’s on the third floor." voiceName="Microsoft Jenny Online (Natural) - English (United States)" />

<br />

<p><strong>Mike:</strong> Thank you. Do you have breakfast available?</p>  
<p><strong>Mike:</strong> Obrigado. Vocês servem café da manhã?</p>
<AudioPlayer text="Thank you. Do you have breakfast available?" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />

<br />

<p><strong>Receptionist:</strong> Yes, we serve breakfast from 7 AM to 10 AM in the dining area.</p>  
<p><strong>Recepcionista:</strong> Sim, servimos café da manhã das 7h às 10h na área de refeições.</p>
<AudioPlayer text="Yes, we serve breakfast from 7 AM to 10 AM in the dining area." voiceName="Microsoft Jenny Online (Natural) - English (United States)" />

<br />

<p><strong>Mike:</strong> Great! I’ll be sure to come by tomorrow.</p>  
<p><strong>Mike:</strong> Ótimo! Vou passar por lá amanhã.</p>
<AudioPlayer text="Great! I’ll be sure to come by tomorrow." voiceName="Microsoft Jenny Online (Natural) - English (United States)" />

<br />

<p><strong>Receptionist:</strong> Have a pleasant stay, Mr. Miller!</p>  
<p><strong>Recepcionista:</strong> Tenha uma estadia agradável, Sr. Miller!</p>
<AudioPlayer text="Have a pleasant stay, Mr. Miller!" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />

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
