import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import { Helmet } from 'react-helmet-async';
import Logo from '../../components/logo';
import HeaderMenuGramatica from '../../components/header-menu-gramatica';
import { Container, Col, Row } from "react-bootstrap";


export default function Gramatica9() {
    return(
<>
<Helmet>
        <title>Alfabeto</title>
      </Helmet>
<Header />
<Logo />
<HeaderMenuGramatica />






<Footer />
</>
    );
}
