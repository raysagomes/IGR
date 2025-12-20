import Header from "../../components/header";
import Footer from "../../components/footer";
import { Helmet } from 'react-helmet-async';
import HeaderMenuTexto from "../../components/headers/header-menu-texto";
import Logo from '../../components/logo';
import { Container, Col, Row} from "react-bootstrap";
import ExplicacaoConversa from "../../components/obs-conversacao";
import AudioPlayer from '../../components/audio-player';

export default function Conversacao25() {
    return(
<>
<div>
<Helmet>
    <title>Amanda e o Pet Shop</title>
  </Helmet> 
<Header />
<Logo />
<HeaderMenuTexto />

<Container>
  <Row>
    <Col className="coluna-texto1">
      <br /> 
      <ExplicacaoConversa />

      <h4 className="h5-conversa"><i><strong>Amanda e o Pet Shop</strong></i>
      <br /> 
      <br /> 

<p><strong>Amanda:</strong> Hi, I need some food for my cat.</p>  
<p><strong>Amanda:</strong> Oi, preciso de comida para meu gato.</p>
<AudioPlayer text="Hi, I need some food for my cat." voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
<br />

<p><strong>Pet Store Employee:</strong> What kind of cat do you have?</p>  
<p><strong>Funcionário da Pet Shop:</strong> Que tipo de gato você tem?</p>
<AudioPlayer text="What kind of cat do you have?" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
<br />

<p><strong>Amanda:</strong> She's a Persian cat, about 3 years old.</p>  
<p><strong>Amanda:</strong> Ela é uma gata persa, cerca de 3 anos.</p>
<AudioPlayer text="She's a Persian cat, about 3 years old." voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
<br />

<p><strong>Pet Store Employee:</strong> We have premium food that's perfect for Persian cats.</p>  
<p><strong>Funcionário da Pet Shop:</strong> Temos ração premium que é perfeita para gatos persas.</p>
<AudioPlayer text="We have premium food that's perfect for Persian cats." voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
<br />

<p><strong>Amanda:</strong> That sounds great! What size bags do you have?</p>  
<p><strong>Amanda:</strong> Parece ótimo! Que tamanhos de saco vocês têm?</p>
<AudioPlayer text="That sounds great! What size bags do you have?" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
<br />

<p><strong>Pet Store Employee:</strong> We have 5-pound and 15-pound bags.</p>  
<p><strong>Funcionário da Pet Shop:</strong> Temos sacos de 5 libras e 15 libras.</p>
<AudioPlayer text="We have 5-pound and 15-pound bags." voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
<br />

<p><strong>Amanda:</strong> I'll take the 15-pound bag, please.</p>  
<p><strong>Amanda:</strong> Vou levar o saco de 15 libras, por favor.</p>
<AudioPlayer text="I'll take the 15-pound bag, please." voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
<br />

<p><strong>Pet Store Employee:</strong> Perfect! That'll be $45. Your cat will love it!</p>  
<p><strong>Funcionário da Pet Shop:</strong> Perfeito! Serão $45. Sua gata vai adorar!</p>
<AudioPlayer text="Perfect! That'll be $45. Your cat will love it!" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
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