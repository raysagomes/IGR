import React from "react";
import Header from '../../components/header';
import HeaderMenuTexto from '../../components/headers/header-menu-texto'
import Footer from "../../components/footer";
import Logo from "../../components/logo";
import { Helmet } from 'react-helmet-async';


export default function Texto11() {
    return(
<>
<Helmet>
        <title>Texto 11</title>
      </Helmet>
<Header />
<Logo />
<HeaderMenuTexto />



<Footer />
</>
    );
}
