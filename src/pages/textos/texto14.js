import React from "react";
import Header from '../../components/header';
import HeaderMenuTexto from '../../components/header-menu-texto';
import Footer from "../../components/footer";
import Logo from "../../components/logo";
import RightNavBar from "../../components/right-navbar";
import { Container, Col, Row, Accordion} from "react-bootstrap";
import { Helmet } from 'react-helmet-async';


export default function Texto14() {
    return(
<>
<Helmet>
        <title>Texto 14</title>
      </Helmet>
<Header />
<Logo />
<HeaderMenuTexto />



<Footer />
</>
    );
}
