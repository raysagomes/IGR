import Header from "../../components/header";
import Footer from "../../components/footer";
import { Helmet } from 'react-helmet-async';
import HeaderMenuTexto from "../../components/headers/header-menu-texto";
import Logo from '../../components/logo';
import { Container, Col, Row} from "react-bootstrap";
import ExplicacaoConversa from "../../components/obs-conversacao";
import AudioPlayer from '../../components/audio-player';

export default function Conversacao12() {
    return(
<>
<div>
<Helmet>
    <title>Robert e o Banco</title>
  </Helmet> 
<Header />
<Logo />
<HeaderMenuTexto />

<Container>
  <Row>
    <Col className="coluna-texto1">
      <br /> 
      <ExplicacaoConversa />

      <h4 className="h5-conversa"><i><strong>Robert e o Banco</strong></i>
      <br /> 
      <br /> 

<p><strong>Robert:</strong> Good morning, I'd like to open a new account.</p>  
<p><strong>Robert:</strong> Bom dia, eu gostaria de abrir uma nova conta.</p>
<AudioPlayer text="Good morning, I'd like to open a new account." voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
<br />

<p><strong>Bank Teller:</strong> Good morning! What type of account are you interested in?</p>  
<p><strong>Caixa do Banco:</strong> Bom dia! Que tipo de conta você tem interesse?</p>
<AudioPlayer text="Good morning! What type of account are you interested in?" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
<br />

<p><strong>Robert:</strong> I need a checking account for my daily expenses.</p>  
<p><strong>Robert:</strong> Preciso de uma conta corrente para minhas despesas diárias.</p>
<AudioPlayer text="I need a checking account for my daily expenses." voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
<br />

<p><strong>Bank Teller:</strong> Perfect. I'll need to see your ID and proof of address.</p>  
<p><strong>Caixa do Banco:</strong> Perfeito. Vou precisar ver sua identidade e comprovante de endereço.</p>
<AudioPlayer text="Perfect. I'll need to see your ID and proof of address." voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
<br />

<p><strong>Robert:</strong> Here are my documents. Is there a monthly fee?</p>  
<p><strong>Robert:</strong> Aqui estão meus documentos. Há uma taxa mensal?</p>
<AudioPlayer text="Here are my documents. Is there a monthly fee?" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
<br />

<p><strong>Bank Teller:</strong> Yes, there's a $10 monthly maintenance fee.</p>  
<p><strong>Caixa do Banco:</strong> Sim, há uma taxa de manutenção mensal de $10.</p>
<AudioPlayer text="Yes, there's a $10 monthly maintenance fee." voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
<br />

<p><strong>Robert:</strong> That sounds reasonable. Let's proceed.</p>  
<p><strong>Robert:</strong> Parece razoável. Vamos prosseguir.</p>
<AudioPlayer text="That sounds reasonable. Let's proceed." voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
<br />

<p><strong>Bank Teller:</strong> Great! Please fill out this form and sign here.</p>  
<p><strong>Caixa do Banco:</strong> Ótimo! Por favor, preencha este formulário e assine aqui.</p>
<AudioPlayer text="Great! Please fill out this form and sign here." voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
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