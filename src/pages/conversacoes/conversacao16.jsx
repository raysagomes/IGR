import Header from "../../components/header";
import Footer from "../../components/footer";
import { Helmet } from 'react-helmet-async';
import HeaderMenuTexto from "../../components/headers/header-menu-texto";
import Logo from '../../components/logo';
import { Container, Col, Row} from "react-bootstrap";
import ExplicacaoConversa from "../../components/obs-conversacao";
import AudioPlayer from '../../components/audio-player';

export default function Conversacao16() {
    return(
<>
<div>
<Helmet>
    <title>Peter e o Táxi</title>
  </Helmet> 
<Header />
<Logo />
<HeaderMenuTexto />

<Container>
  <Row>
    <Col className="coluna-texto1">
      <br /> 
      <ExplicacaoConversa />

      <h4 className="h5-conversa"><i><strong>Peter e o Táxi</strong></i>
      <br /> 
      <br /> 

<p><strong>Peter:</strong> Taxi! Are you available?</p>  
<p><strong>Peter:</strong> Táxi! Você está disponível?</p>
<AudioPlayer text="Taxi! Are you available?" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
<br />

<p><strong>Taxi Driver:</strong> Yes, hop in! Where are you going?</p>  
<p><strong>Taxista:</strong> Sim, entre! Para onde você vai?</p>
<AudioPlayer text="Yes, hop in! Where are you going?" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
<br />

<p><strong>Peter:</strong> I need to go to the downtown shopping mall.</p>  
<p><strong>Peter:</strong> Preciso ir ao shopping do centro da cidade.</p>
<AudioPlayer text="I need to go to the downtown shopping mall." voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
<br />

<p><strong>Taxi Driver:</strong> No problem. It'll take about 15 minutes.</p>  
<p><strong>Taxista:</strong> Sem problema. Vai levar cerca de 15 minutos.</p>
<AudioPlayer text="No problem. It'll take about 15 minutes." voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
<br />

<p><strong>Peter:</strong> Great! How much will it cost?</p>  
<p><strong>Peter:</strong> Ótimo! Quanto vai custar?</p>
<AudioPlayer text="Great! How much will it cost?" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
<br />

<p><strong>Taxi Driver:</strong> Around $12, depending on traffic.</p>  
<p><strong>Taxista:</strong> Cerca de $12, dependendo do trânsito.</p>
<AudioPlayer text="Around $12, depending on traffic." voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
<br />

<p><strong>Peter:</strong> That sounds fair. Please take the fastest route.</p>  
<p><strong>Peter:</strong> Parece justo. Por favor, pegue a rota mais rápida.</p>
<AudioPlayer text="That sounds fair. Please take the fastest route." voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
<br />

<p><strong>Taxi Driver:</strong> Will do! Buckle up and we'll be there soon.</p>  
<p><strong>Taxista:</strong> Pode deixar! Coloque o cinto e chegaremos logo.</p>
<AudioPlayer text="Will do! Buckle up and we'll be there soon." voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
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