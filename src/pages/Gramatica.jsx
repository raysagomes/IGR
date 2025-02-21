import Header from '../components/header'
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../components/logo';
import HeaderMenuTexto from '../components/headers/header-menu-texto';
import Footer from '../components/footer';
import ListaGramatica from '../components/listas/lista-gramatica';
import { Helmet } from 'react-helmet-async';

import '../style.css';

function Gramatica() {
  return (
   <div> 
    <Helmet>
        <title>Gramática</title>
      </Helmet>
   <Header />
   <Logo />
   <HeaderMenuTexto />
   <ListaGramatica />
   <Footer />
   </div>
  );
}

export default Gramatica;
