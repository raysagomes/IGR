import React from "react";
import Header from '../../components/header';
import HeaderMenuTexto from '../../components/header-menu-texto';
import Footer from "../../components/footer";
import Logo from "../../components/logo";
import RightNavBar from "../../components/right-navbar";
import { Container, Col, Row, Accordion} from "react-bootstrap";
import { Helmet } from 'react-helmet-async';


export default function Texto1() {
    return(
<>
<Helmet>
        <title>Texto1</title>
      </Helmet>
<Header />
<Logo />
<HeaderMenuTexto />

<Container>
      <Row>
        <Col className="coluna-texto1">
        <h2 className="h1-Texto-Inicial"> Luciana's dog, Max </h2> 
        <h4 className="h5-Textos">
      <p> Luciana has a lovable dog named Max, who is a mixed breed with a lot of personality. Max has a shiny black coat with patches of white on his chest and paws. He’s about three years old and has boundless energy. Every morning, Luciana takes Max to the local park where he loves to chase after his favorite red ball. Max is very friendly and enjoys meeting new people and other dogs. He has a playful habit of running in circles when he gets excited, which always makes Luciana laugh.</p>
     <p>At home, Max is a loyal companion. He follows Luciana from room to room and always lies at her feet while she reads or works. He’s especially fond of snuggling on the couch in the evenings. Max has a few tricks up his sleeve; he can sit, stay, and even do a little dance on his hind legs. Luciana makes sure Max gets plenty of exercise and loves to take him on long walks through the neighborhood. Despite his energetic nature, Max is also a calm and gentle dog who is very good with children.
        </p>
        <p> Luciana often shares stories about Max's antics with her friends, and everyone who meets him is charmed by his friendly demeanor and playful spirit. Max truly brings joy and companionship to Luciana's life.
        </p>

    </h4>
</Col>

<Col className="extra-pagina-de-textos d-flex flex-column align-items-end">
    <RightNavBar />
    </Col>
      </Row>
    </Container>
    <Container md="auto" xs lg="7" className="div-accordion-ativididade justify-content-center"> 
        <Row> 
     <Col>        
    <Accordion  className="justify-content-center" >
      <Accordion.Item eventKey="0" className="Accordion">
        <Accordion.Header className="accordion-header"><h2>Tradução do texto</h2></Accordion.Header>
        <Accordion.Body>
            <h2>Cachorro da Luciana, Max </h2>
            <br />
        <p> Luciana tem um cachorro adorável chamado Max, que é mestiço e tem muita personalidade. Max tem um casaco preto brilhante com manchas brancas no peito e nas patas. Ele tem cerca de três anos e uma energia ilimitada. Todas as manhãs, Luciana leva Max ao parque local, onde ele adora correr atrás de sua bola vermelha favorita. Max é muito amigável e gosta de conhecer novas pessoas e outros cães. Ele tem o hábito brincalhão de correr em círculos quando está animado, o que sempre faz Luciana rir.
        </p>
     <p>   Em casa, Max é um companheiro leal. Ele acompanha Luciana de cômodo em cômodo e sempre fica aos pés dela enquanto ela lê ou trabalha. Ele gosta especialmente de se aconchegar no sofá à noite. Max tem alguns truques na manga; ele pode sentar, ficar e até dançar um pouco nas patas traseiras. Luciana cuida para que Max faça bastante exercício e adora levá-lo para longas caminhadas pelo bairro. Apesar de sua natureza enérgica, Max também é um cão calmo e gentil, muito bom com crianças.
    </p> 
    <p>  Luciana costuma compartilhar histórias sobre as travessuras de Max com seus amigos, e todos que o conhecem ficam encantados com seu comportamento amigável e espírito brincalhão. Max realmente traz alegria e companheirismo para a vida de Luciana.
    </p> 
      </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </Col>
    </Row>
    </Container>
    
<Container className="questions">
        <Row> 
<Col> 
        <h1 className="h1-questions"> Questions </h1>
        <Accordion className="no-border-accordion"> 
      <Accordion.Item eventKey="0">
        <Accordion.Header>1. What is the name of Luciana's dog?</Accordion.Header>
        <Accordion.Body>
        The name of Luciana's dog is Max.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>2. How would you describe Max's appearance?        </Accordion.Header>
        <Accordion.Body>
        Max has a shiny black coat with patches of white on his chest and paws. He is a mixed breed.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>3. What is Max's favorite activity at the park?
        </Accordion.Header>
        <Accordion.Body>
        Max's favorite activity at the park is chasing after his favorite red ball.        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>4. How does Max behave at home?
        </Accordion.Header>
        <Accordion.Body>
        At home, Max is a loyal companion who follows Luciana from room to room and lies at her feet while she reads or works. He enjoys snuggling on the couch in the evenings.
        </Accordion.Body>
            </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>5. What tricks can Max do?
        </Accordion.Header>
        <Accordion.Body>
        Max can sit, stay, and do a little dance on his hind legs.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="5">
        <Accordion.Header>6. How does Luciana ensure Max gets enough exercise?
        </Accordion.Header>
        <Accordion.Body>
        Luciana ensures Max gets enough exercise by taking him on long walks through the neighborhood and playing with him at the park.          </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="6">
        <Accordion.Header>7.How does Max interact with other people and dogs?
        </Accordion.Header>
        <Accordion.Body>
        Max is very friendly and enjoys meeting new people and other dogs. He has a playful spirit and is often described as charming by those who meet him.    
        </Accordion.Body>
        </Accordion.Item>

    </Accordion>

</Col>
        </Row>
     </Container>
<Footer />
</>
    );
}
