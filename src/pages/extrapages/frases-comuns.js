import React from "react";

import Header from "../../components/header";
import { Helmet} from "react-helmet-async";
import Logo from "../../components/logo";
import Footer from "../../components/footer";
import HeaderMenuTexto from "../../components/header-menu-texto";

export default function FrasesComuns() {
    return (
<>
<div>
<Helmet>
    <title>Frases comuns</title>
  </Helmet> 
<Header />
<Logo />
<HeaderMenuTexto />
<p>EM BREVE </p>
<Footer />
</div>
</>

    );
}