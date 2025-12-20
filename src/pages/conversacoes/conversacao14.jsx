import Header from "../../components/header";
import Footer from "../../components/footer";
import { Helmet } from 'react-helmet-async';
import HeaderMenuTexto from "../../components/headers/header-menu-texto";
import Logo from '../../components/logo';
import { Container, Col, Row} from "react-bootstrap";
import ExplicacaoConversa from "../../components/obs-conversacao";
import AudioPlayer from '../../components/audio-player';

export default function Conversacao14() {
    return(
<>
<div>
<Helmet>
    <title>Lucas e a Loja de Roupas</title>
  </Helmet> 
<Header />
<Logo />
<HeaderMenuTexto />

<Container>
  <Row>
    <Col className="coluna-texto1">
      <br /> 
      <ExplicacaoConversa />

      <h4 className="h5-conversa"><i><strong>Lucas e a Loja de Roupas</strong></i>
      <br /> 
      <br /> 

<p><strong>Lucas:</strong> Excuse me, I'm looking for a blue shirt.</p>  
<p><strong>Lucas:</strong> Com licença, estou procurando uma camisa azul.</p>
<AudioPlayer text="Excuse me, I'm looking for a blue shirt." voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
<br />

<p><strong>Sales Assistant:</strong> What size do you need?</p>  
<p><strong>Vendedora:</strong> Que tamanho você precisa?</p>
<AudioPlayer text="What size do you need?" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
<br />

<p><strong>Lucas:</strong> I wear a medium. Do you have any in stock?</p>  
<p><strong>Lucas:</strong> Eu uso tamanho médio. Vocês têm alguma em estoque?</p>
<AudioPlayer text="I wear a medium. Do you have any in stock?" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
<br />

<p><strong>Sales Assistant:</strong> Yes, we have several styles. Follow me, please.</p>  
<p><strong>Vendedora:</strong> Sim, temos vários estilos. Me siga, por favor.</p>
<AudioPlayer text="Yes, we have several styles. Follow me, please." voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
<br />

<p><strong>Lucas:</strong> This one looks nice. Can I try it on?</p>  
<p><strong>Lucas:</strong> Esta aqui parece boa. Posso experimentar?</p>
<AudioPlayer text="This one looks nice. Can I try it on?" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
<br />

<p><strong>Sales Assistant:</strong> Of course! The fitting room is over there.</p>  
<p><strong>Vendedora:</strong> Claro! O provador fica ali.</p>
<AudioPlayer text="Of course! The fitting room is over there." voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
<br />

<p><strong>Lucas:</strong> Perfect fit! I'll take it. How much is it?</p>  
<p><strong>Lucas:</strong> Caimento perfeito! Vou levar. Quanto custa?</p>
<AudioPlayer text="Perfect fit! I'll take it. How much is it?" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
<br />

<p><strong>Sales Assistant:</strong> It's $35. Will you pay cash or card?</p>  
<p><strong>Vendedora:</strong> São $35. Vai pagar em dinheiro ou cartão?</p>
<AudioPlayer text="It's $35. Will you pay cash or card?" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
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