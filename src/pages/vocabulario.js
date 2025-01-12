import Header from '../components/header'
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../components/logo';
import HeaderMenuTexto from '../components/header-menu-texto'
import Footer from '../components/footer';
import TextoInicial from '../components/texto-inicial';
import ListaVocabulario from '../components/list-vocab';
import { Helmet } from 'react-helmet-async';

import '../style.css';

function Vocabulário() {
  return (
   <div> 
    <Helmet>
        <title>Vocabulário</title>
      </Helmet>
   <Header />
   <Logo />
   <HeaderMenuTexto />
   <ListaVocabulario />
   <Footer />
   </div>
  );
}

export default Vocabulário;
