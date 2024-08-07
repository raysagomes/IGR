import React from "react";

import Header from "../components/header";
import { Helmet} from "react-helmet-async";
import Logo from "../components/logo";
import Footer from "../components/footer";
import HeaderMenuTexto from "../components/header-menu-texto";

export default function ExpressoesPopulares() {
    return (
<>
<div>
<Helmet>
    <title>Expressões Populares</title>
  </Helmet> 
<Header />
<Logo />
<HeaderMenuTexto />
<Footer />
</div>
</>

    );
}