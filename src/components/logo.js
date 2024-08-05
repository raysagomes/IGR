import React from "react";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Mario from '../images/mario.png';


function Logo() {
    return(
<Container>
<Row>
    <Col className="d-flex justify-content-center">
    <Image src={Mario} roundedCircle style={{ width: '171px', height: '180px' }}/>
    </Col>
    </Row>
    </Container>
    );
}

export default Logo;
 
