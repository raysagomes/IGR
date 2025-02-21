import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import { Helmet } from 'react-helmet-async';
import Logo from '../../components/logo';
import HeaderMenuTexto from "../../components/headers/header-menu-texto";


export default function VerbosIrregulares() {
    return(
<>
<Helmet>
        <title>Alfabeto</title>
      </Helmet>
<Header />
<Logo />
<HeaderMenuTexto />

<Footer />
</>
    );
}
