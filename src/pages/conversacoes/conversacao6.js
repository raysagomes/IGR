import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import { Helmet } from 'react-helmet-async';
import HeaderMenuTexto from "../../components/header-menu-texto";
import Logo from '../../components/logo';
import { Container, Col, Row, Accordion} from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import AudioPlayer from '../../components/audio-player';

export default function Conversacao6() {
    return(
<>
<div>
<Helmet>
    <title>Juliana e o Transporte Público</title>
  </Helmet> 
<Header />
<Logo />
<HeaderMenuTexto />
<Container>
  <Row>
    <Col className="coluna-texto1">
      <br /> 
      <h4 className="h5-conversa"><i><strong>Juliana e o Transporte Público</strong></i>
      <br /> 
      <br /> 

      <p><strong>Juliana:</strong> Excuse me, which bus goes to the museum?</p>  
      <p><strong>Juliana:</strong> Com licença, qual ônibus vai para o museu?</p>
      <br /> 

      <p><strong>Passenger:</strong> Bus number 10 goes straight there.</p>  
      <p><strong>Passageiro:</strong> O ônibus número 10 vai direto até lá.</p>
      <br /> 

      <p><strong>Juliana:</strong> Thank you! Where do I catch the bus?</p>  
      <p><strong>Juliana:</strong> Obrigada! Onde eu pego o ônibus?</p>
      <br /> 

      <p><strong>Passenger:</strong> You can catch it at the next stop, just down the street.</p>  
      <p><strong>Passageiro:</strong> Você pode pegá-lo na próxima parada, logo ali na rua.</p>
      <br /> 

      <p><strong>Juliana:</strong> Great! How long does it take to get there?</p>  
      <p><strong>Juliana:</strong> Ótimo! Quanto tempo leva para chegar lá?</p>
      <br /> 

      <p><strong>Passenger:</strong> It takes about 20 minutes by bus.</p>  
      <p><strong>Passageiro:</strong> Leva cerca de 20 minutos de ônibus.</p>
      <br /> 

      <p><strong>Juliana:</strong> Perfect! Thanks for your help!</p>  
      <p><strong>Juliana:</strong> Perfeito! Obrigada pela ajuda!</p>
      <br /> 

      <p><strong>Passenger:</strong> You’re welcome! Have a nice trip!</p>  
      <p><strong>Passageiro:</strong> De nada! Tenha uma boa viagem!</p>
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
