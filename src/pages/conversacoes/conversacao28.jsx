import Header from "../../components/header";
import Footer from "../../components/footer";
import { Helmet } from 'react-helmet-async';
import HeaderMenuTexto from "../../components/headers/header-menu-texto";
import Logo from '../../components/logo';
import { Container, Col, Row} from "react-bootstrap";
import ExplicacaoConversa from "../../components/obs-conversacao";
import AudioPlayer from '../../components/audio-player';

export default function Conversacao28() {
    return(
<>
<div>
<Helmet>
    <title>Ryan e a Loja de Eletrônicos</title>
  </Helmet> 
<Header />
<Logo />
<HeaderMenuTexto />

<Container>
  <Row>
    <Col className="coluna-texto1">
      <br /> 
      <ExplicacaoConversa />

      <h4 className="h5-conversa"><i><strong>Ryan e a Loja de Eletrônicos</strong></i>
      <br /> 
      <br /> 

<p><strong>Ryan:</strong> Hi, I'm looking for a new smartphone.</p>  
<p><strong>Ryan:</strong> Oi, estou procurando um smartphone novo.</p>
<AudioPlayer text="Hi, I'm looking for a new smartphone." voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
<br />

<p><strong>Sales Person:</strong> What's your budget range?</p>  
<p><strong>Vendedor:</strong> Qual é sua faixa de orçamento?</p>
<AudioPlayer text="What's your budget range?" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
<br />

<p><strong>Ryan:</strong> I'd like to spend around $500 to $700.</p>  
<p><strong>Ryan:</strong> Gostaria de gastar entre $500 e $700.</p>
<AudioPlayer text="I'd like to spend around $500 to $700." voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
<br />

<p><strong>Sales Person:</strong> Great! Do you prefer Android or iPhone?</p>  
<p><strong>Vendedor:</strong> Ótimo! Você prefere Android ou iPhone?</p>
<AudioPlayer text="Great! Do you prefer Android or iPhone?" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
<br />

<p><strong>Ryan:</strong> I'm open to both. What do you recommend?</p>  
<p><strong>Ryan:</strong> Estou aberto a ambos. O que você recomenda?</p>
<AudioPlayer text="I'm open to both. What do you recommend?" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
<br />

<p><strong>Sales Person:</strong> This Samsung model has excellent features for your budget.</p>  
<p><strong>Vendedor:</strong> Este modelo Samsung tem excelentes recursos para seu orçamento.</p>
<AudioPlayer text="This Samsung model has excellent features for your budget." voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
<br />

<p><strong>Ryan:</strong> Can I see it? What's the camera quality like?</p>  
<p><strong>Ryan:</strong> Posso ver? Como é a qualidade da câmera?</p>
<AudioPlayer text="Can I see it? What's the camera quality like?" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
<br />

<p><strong>Sales Person:</strong> It has a 48-megapixel camera with great night mode.</p>  
<p><strong>Vendedor:</strong> Tem uma câmera de 48 megapixels com ótimo modo noturno.</p>
<AudioPlayer text="It has a 48-megapixel camera with great night mode." voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
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