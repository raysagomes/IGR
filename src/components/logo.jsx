import React from "react";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import LogoSite from '../images/logosite.png'

function Logo() {
    return(
<Container className="no-background">
<Row>
    <Col className="d-flex justify-content-center ">
    <Image className="logo" src={LogoSite} style={{ width: '200px', height: '210px' }}/>
    </Col>
    </Row>
    </Container>
    );
}

export default Logo;
 
