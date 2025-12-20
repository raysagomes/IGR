import Header from "../../components/header";
import Footer from "../../components/footer";
import { Helmet } from 'react-helmet-async';
import HeaderMenuTexto from "../../components/headers/header-menu-texto";
import Logo from '../../components/logo';
import { Container, Col, Row} from "react-bootstrap";
import ExplicacaoConversa from "../../components/obs-conversacao";
import AudioPlayer from '../../components/audio-player';

export default function Conversacao24() {
    return(
<>
<div>
<Helmet>
    <title>David e a Escola de Idiomas</title>
  </Helmet> 
<Header />
<Logo />
<HeaderMenuTexto />

<Container>
  <Row>
    <Col className="coluna-texto1">
      <br /> 
      <ExplicacaoConversa />

      <h4 className="h5-conversa"><i><strong>David e a Escola de Idiomas</strong></i>
      <br /> 
      <br /> 

<p><strong>David:</strong> Hello, I'm interested in taking Spanish classes.</p>  
<p><strong>David:</strong> Olá, estou interessado em fazer aulas de espanhol.</p>
<AudioPlayer text="Hello, I'm interested in taking Spanish classes." voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
<br />

<p><strong>School Staff:</strong> Great! Are you a complete beginner?</p>  
<p><strong>Funcionário da Escola:</strong> Ótimo! Você é completamente iniciante?</p>
<AudioPlayer text="Great! Are you a complete beginner?" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
<br />

<p><strong>David:</strong> Yes, I've never studied Spanish before.</p>  
<p><strong>David:</strong> Sim, nunca estudei espanhol antes.</p>
<AudioPlayer text="Yes, I've never studied Spanish before." voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
<br />

<p><strong>School Staff:</strong> Perfect! We have beginner classes starting next Monday.</p>  
<p><strong>Funcionário da Escola:</strong> Perfeito! Temos aulas para iniciantes começando na próxima segunda.</p>
<AudioPlayer text="Perfect! We have beginner classes starting next Monday." voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
<br />

<p><strong>David:</strong> What time are the classes?</p>  
<p><strong>David:</strong> Que horas são as aulas?</p>
<AudioPlayer text="What time are the classes?" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
<br />

<p><strong>School Staff:</strong> We have morning classes at 9 AM and evening classes at 7 PM.</p>  
<p><strong>Funcionário da Escola:</strong> Temos aulas matinais às 9h e aulas noturnas às 19h.</p>
<AudioPlayer text="We have morning classes at 9 AM and evening classes at 7 PM." voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
<br />

<p><strong>David:</strong> I'll take the evening classes. How much does it cost?</p>  
<p><strong>David:</strong> Vou fazer as aulas noturnas. Quanto custa?</p>
<AudioPlayer text="I'll take the evening classes. How much does it cost?" voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
<br />

<p><strong>School Staff:</strong> It's $200 for a 4-week course.</p>  
<p><strong>Funcionário da Escola:</strong> São $200 por um curso de 4 semanas.</p>
<AudioPlayer text="It's $200 for a 4-week course." voiceName="Microsoft Jenny Online (Natural) - English (United States)" />
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