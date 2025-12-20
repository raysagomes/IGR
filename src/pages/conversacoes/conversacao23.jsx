import Header from "../../components/header";
import Footer from "../../components/footer";
import { Helmet } from 'react-helmet-async';
import HeaderMenuTexto from "../../components/headers/header-menu-texto";
import Logo from '../../components/logo';
import { Container, Col, Row} from "react-bootstrap";
import ExplicacaoConversa from "../../components/obs-conversacao";
import AudioPlayer from '../../components/audio-player';

export default function Conversacao23() {
    return(
<>
<div>
<Helmet>
    <title>Julia e a Padaria</title>
  </Helmet> 
<Header />
<Logo />
<HeaderMenuTexto />

<Container>
  <Row>
    <Col className="coluna-texto1">
      <br /> 
      <ExplicacaoConversa />

      <h4 className="h5-conversa"><i><strong>Julia e a Padaria</strong></i>
      <br /> 
      <br /> 

<p><strong>Julia:</strong> Good morning! What fresh bread do you have today?</p>  
<p><strong>Julia:</strong> Bom dia! Que pães frescos vocês têm hoje?</p>
<AudioPlayer text="Good morning! What fresh bread do you have today?" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
<br />

<p><strong>Baker:</strong> We have sourdough, whole wheat, and French baguettes.</p>  
<p><strong>Padeiro:</strong> Temos pão de fermentação natural, integral e baguetes francesas.</p>
<AudioPlayer text="We have sourdough, whole wheat, and French baguettes." voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
<br />

<p><strong>Julia:</strong> I'll take one sourdough loaf, please.</p>  
<p><strong>Julia:</strong> Vou levar um pão de fermentação natural, por favor.</p>
<AudioPlayer text="I'll take one sourdough loaf, please." voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
<br />

<p><strong>Baker:</strong> Excellent choice! Would you like anything else?</p>  
<p><strong>Padeiro:</strong> Excelente escolha! Gostaria de mais alguma coisa?</p>
<AudioPlayer text="Excellent choice! Would you like anything else?" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
<br />

<p><strong>Julia:</strong> Do you have any croissants?</p>  
<p><strong>Julia:</strong> Vocês têm croissants?</p>
<AudioPlayer text="Do you have any croissants?" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
<br />

<p><strong>Baker:</strong> Yes, we have plain and chocolate croissants.</p>  
<p><strong>Padeiro:</strong> Sim, temos croissants simples e de chocolate.</p>
<AudioPlayer text="Yes, we have plain and chocolate croissants." voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
<br />

<p><strong>Julia:</strong> I'll take two chocolate croissants as well.</p>  
<p><strong>Julia:</strong> Vou levar dois croissants de chocolate também.</p>
<AudioPlayer text="I'll take two chocolate croissants as well." voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
<br />

<p><strong>Baker:</strong> Perfect! That'll be $12 total.</p>  
<p><strong>Padeiro:</strong> Perfeito! Serão $12 no total.</p>
<AudioPlayer text="Perfect! That'll be $12 total." voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
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