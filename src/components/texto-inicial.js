import React from "react";
import '../style.css';
import { Container, Col, Row} from "react-bootstrap";
import Nav from 'react-bootstrap/Nav';
import RightNavBar from "./right-navbar";


function TextoInicial() {
    return(


<Container>
      <Row>
        <Col md="auto" xs lg="7" className="coluna-texto1">
        <h1 className="h1-Texto-Inicial"> Bem-vindo(a) ao IGR!
         </h1> 
        <h3 className="h3-Texto-inicial">
        Aqui no IGR, oferecemos uma variedade de recursos para ajudar você a aprimorar suas habilidades em inglês, seja você um iniciante ou um falante avançado. Navegue por nossas seções para explorar:

Textos: Leitura e compreensão com materiais variados para todos os níveis.
Vocabulário: Expanda seu vocabulário com listas de palavras e frases úteis.
Gramática: Aprenda e pratique regras gramaticais essenciais.
Conversações: Melhore suas habilidades de fala com exemplos e práticas.
Comece agora e junte-se à nossa comunidade de aprendizes!       </h3>
</Col>

<Col className="extra-pagina-de-textos d-flex flex-column align-items-end">
    <RightNavBar />
    </Col>
      </Row>
       
    </Container>


    );
}

export default TextoInicial;
