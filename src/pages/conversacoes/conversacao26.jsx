import Header from "../../components/header";
import Footer from "../../components/footer";
import { Helmet } from 'react-helmet-async';
import HeaderMenuTexto from "../../components/headers/header-menu-texto";
import Logo from '../../components/logo';
import { Container, Col, Row} from "react-bootstrap";
import ExplicacaoConversa from "../../components/obs-conversacao";
import AudioPlayer from '../../components/audio-player';

export default function Conversacao26() {
    return(
<>
<div>
<Helmet>
    <title>Carlos e a Agência de Viagens</title>
  </Helmet> 
<Header />
<Logo />
<HeaderMenuTexto />

<Container>
  <Row>
    <Col className="coluna-texto1">
      <br /> 
      <ExplicacaoConversa />

      <h4 className="h5-conversa"><i><strong>Carlos e a Agência de Viagens</strong></i>
      <br /> 
      <br /> 

<p><strong>Carlos:</strong> Good afternoon, I'd like to book a trip to Paris.</p>  
<p><strong>Carlos:</strong> Boa tarde, gostaria de reservar uma viagem para Paris.</p>
<AudioPlayer text="Good afternoon, I'd like to book a trip to Paris." voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
<br />

<p><strong>Travel Agent:</strong> Wonderful! When would you like to travel?</p>  
<p><strong>Agente de Viagens:</strong> Maravilhoso! Quando você gostaria de viajar?</p>
<AudioPlayer text="Wonderful! When would you like to travel?" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
<br />

<p><strong>Carlos:</strong> I'm thinking about next month, around the 15th.</p>  
<p><strong>Carlos:</strong> Estou pensando no próximo mês, por volta do dia 15.</p>
<AudioPlayer text="I'm thinking about next month, around the 15th." voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
<br />

<p><strong>Travel Agent:</strong> How many days would you like to stay?</p>  
<p><strong>Agente de Viagens:</strong> Quantos dias você gostaria de ficar?</p>
<AudioPlayer text="How many days would you like to stay?" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
<br />

<p><strong>Carlos:</strong> About a week would be perfect.</p>  
<p><strong>Carlos:</strong> Cerca de uma semana seria perfeito.</p>
<AudioPlayer text="About a week would be perfect." voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
<br />

<p><strong>Travel Agent:</strong> Great! Do you need help with hotel reservations?</p>  
<p><strong>Agente de Viagens:</strong> Ótimo! Você precisa de ajuda com reservas de hotel?</p>
<AudioPlayer text="Great! Do you need help with hotel reservations?" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
<br />

<p><strong>Carlos:</strong> Yes, I'd like a hotel near the city center.</p>  
<p><strong>Carlos:</strong> Sim, gostaria de um hotel perto do centro da cidade.</p>
<AudioPlayer text="Yes, I'd like a hotel near the city center." voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
<br />

<p><strong>Travel Agent:</strong> Perfect! I'll find you the best options available.</p>  
<p><strong>Agente de Viagens:</strong> Perfeito! Vou encontrar as melhores opções disponíveis para você.</p>
<AudioPlayer text="Perfect! I'll find you the best options available." voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
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