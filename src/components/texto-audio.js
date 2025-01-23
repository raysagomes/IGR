import React from "react";
import '../style.css';
import { Container, Col, Row} from "react-bootstrap";
import Nav from 'react-bootstrap/Nav';
import RightNavBar from "./right-navbar";


export default function TextoAudio() {
    return(


<Container>
      <Row>
        <Col>
        <h4 className="h4-Texto-audio no-background">Audio Player</h4>
        <p> Abaixo, ao clicar no play, você pode escutar o texto sendo tocado, e na barra você pode selecionar a velocidade que você quer escutar. </p>
        <p>Obs: Para escutar com a nova velocidade escolhida, clique no botão de ⏹️ e depois no de play novamente.</p>
</Col>
      </Row>
       
    </Container>


    );
}

