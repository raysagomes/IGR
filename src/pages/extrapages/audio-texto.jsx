import Header from '../../components/header';
import HeaderMenuTexto from "../../components/headers/header-menu-texto";
import Footer from "../../components/footer";
import Logo from "../../components/logo";
import RightNavBar from "../../components/right-navbar";
import { Container, Col, Row } from "react-bootstrap";
import { Helmet } from 'react-helmet-async';

import ListaAudioTexto from "../../components/listas/lista-audio-texto";

export default function AudioTexto() {
    return (
<>
<div>
<Helmet>
    <title>Textos em Áudio</title>
  </Helmet> 
<Header />
<Logo />
<HeaderMenuTexto />


<Container>
      <Row>
        <Col className="coluna-texto1">
        <h2 className="h1-Texto-Inicial"> Textos em Áudio</h2> 
        <h4 className="h5-Textos">
      <p> Nesta página, você encontrará textos em áudio com questões para treinar a sua escuta em inglês.</p>    

    </h4>
</Col>
  <Col xs={12} md={3} className="extra-pagina-de-textos d-flex flex-column align-items-end">
            <RightNavBar />
          </Col>
      </Row>
    </Container>
<ListaAudioTexto />

<Footer />
</div>
</>

    );
}