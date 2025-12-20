import Header from "../../components/header";
import Footer from "../../components/footer";
import { Helmet } from 'react-helmet-async';
import HeaderMenuTexto from "../../components/headers/header-menu-texto";
import Logo from '../../components/logo';
import { Container, Col, Row} from "react-bootstrap";
import ExplicacaoConversa from "../../components/obs-conversacao";
import AudioPlayer from '../../components/audio-player';

export default function Conversacao29() {
    return(
<>
<div>
<Helmet>
    <title>Jessica e o Supermercado</title>
  </Helmet> 
<Header />
<Logo />
<HeaderMenuTexto />

<Container>
  <Row>
    <Col className="coluna-texto1">
      <br /> 
      <ExplicacaoConversa />

      <h4 className="h5-conversa"><i><strong>Jessica e o Supermercado</strong></i>
      <br /> 
      <br /> 

<p><strong>Jessica:</strong> Excuse me, where can I find the dairy products?</p>  
<p><strong>Jessica:</strong> Com licença, onde posso encontrar os laticínios?</p>
<AudioPlayer text="Excuse me, where can I find the dairy products?" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
<br />

<p><strong>Store Employee:</strong> They're in aisle 3, at the back of the store.</p>  
<p><strong>Funcionário da Loja:</strong> Estão no corredor 3, no fundo da loja.</p>
<AudioPlayer text="They're in aisle 3, at the back of the store." voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
<br />

<p><strong>Jessica:</strong> Thank you! Do you have organic milk?</p>  
<p><strong>Jessica:</strong> Obrigada! Vocês têm leite orgânico?</p>
<AudioPlayer text="Thank you! Do you have organic milk?" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
<br />

<p><strong>Store Employee:</strong> Yes, we have several brands of organic milk.</p>  
<p><strong>Funcionário da Loja:</strong> Sim, temos várias marcas de leite orgânico.</p>
<AudioPlayer text="Yes, we have several brands of organic milk." voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
<br />

<p><strong>Jessica:</strong> Perfect! Where is the checkout?</p>  
<p><strong>Jessica:</strong> Perfeito! Onde fica o caixa?</p>
<AudioPlayer text="Perfect! Where is the checkout?" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
<br />

<p><strong>Store Employee:</strong> The checkout counters are at the front of the store.</p>  
<p><strong>Funcionário da Loja:</strong> Os caixas ficam na frente da loja.</p>
<AudioPlayer text="The checkout counters are at the front of the store." voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
<br />

<p><strong>Jessica:</strong> Great! Do you accept credit cards?</p>  
<p><strong>Jessica:</strong> Ótimo! Vocês aceitam cartão de crédito?</p>
<AudioPlayer text="Great! Do you accept credit cards?" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
<br />

<p><strong>Store Employee:</strong> Yes, we accept all major credit cards.</p>  
<p><strong>Funcionário da Loja:</strong> Sim, aceitamos todos os principais cartões de crédito.</p>
<AudioPlayer text="Yes, we accept all major credit cards." voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
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