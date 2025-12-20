import Header from "../../components/header";
import Footer from "../../components/footer";
import { Helmet } from 'react-helmet-async';
import HeaderMenuTexto from "../../components/headers/header-menu-texto";
import Logo from '../../components/logo';
import { Container, Col, Row} from "react-bootstrap";
import ExplicacaoConversa from "../../components/obs-conversacao";
import AudioPlayer from '../../components/audio-player';

export default function Conversacao20() {
    return(
<>
<div>
<Helmet>
    <title>Kevin e a Livraria</title>
  </Helmet> 
<Header />
<Logo />
<HeaderMenuTexto />

<Container>
  <Row>
    <Col className="coluna-texto1">
      <br /> 
      <ExplicacaoConversa />

      <h4 className="h5-conversa"><i><strong>Kevin e a Livraria</strong></i>
      <br /> 
      <br /> 

<p><strong>Kevin:</strong> Excuse me, do you have any books about cooking?</p>  
<p><strong>Kevin:</strong> Com licença, vocês têm livros sobre culinária?</p>
<AudioPlayer text="Excuse me, do you have any books about cooking?" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
<br />

<p><strong>Bookstore Clerk:</strong> Yes, the cooking section is on the second floor.</p>  
<p><strong>Funcionário da Livraria:</strong> Sim, a seção de culinária fica no segundo andar.</p>
<AudioPlayer text="Yes, the cooking section is on the second floor." voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
<br />

<p><strong>Kevin:</strong> Great! Do you have any beginner cookbooks?</p>  
<p><strong>Kevin:</strong> Ótimo! Vocês têm livros de culinária para iniciantes?</p>
<AudioPlayer text="Great! Do you have any beginner cookbooks?" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
<br />

<p><strong>Bookstore Clerk:</strong> Absolutely! We have a whole section for beginners.</p>  
<p><strong>Funcionário da Livraria:</strong> Com certeza! Temos uma seção inteira para iniciantes.</p>
<AudioPlayer text="Absolutely! We have a whole section for beginners." voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
<br />

<p><strong>Kevin:</strong> Perfect! Can you show me where it is?</p>  
<p><strong>Kevin:</strong> Perfeito! Pode me mostrar onde fica?</p>
<AudioPlayer text="Perfect! Can you show me where it is?" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
<br />

<p><strong>Bookstore Clerk:</strong> Of course! Follow me, I'll take you there.</p>  
<p><strong>Funcionário da Livraria:</strong> Claro! Me siga, vou te levar lá.</p>
<AudioPlayer text="Of course! Follow me, I'll take you there." voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
<br />

<p><strong>Kevin:</strong> Thank you so much for your help!</p>  
<p><strong>Kevin:</strong> Muito obrigado pela sua ajuda!</p>
<AudioPlayer text="Thank you so much for your help!" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
<br />

<p><strong>Bookstore Clerk:</strong> You're welcome! Let me know if you need anything else.</p>  
<p><strong>Funcionário da Livraria:</strong> De nada! Me avise se precisar de mais alguma coisa.</p>
<AudioPlayer text="You're welcome! Let me know if you need anything else." voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
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