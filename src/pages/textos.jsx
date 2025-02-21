import Header from '../components/header'
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../components/logo';
import HeaderMenuTexto from '../components/headers/header-menu-texto'
import Footer from '../components/footer';
import LinksTextos from '../components/listas/links-textos';
import { Helmet } from 'react-helmet-async';

import '../style.css';

function Textos() {
  return (
   <div>
    <Helmet>
        <title>Textos</title>
      </Helmet> 
   <Header />
   <Logo />
   <HeaderMenuTexto />
   <LinksTextos />
   <Footer />
   </div>
  );
}

export default Textos;
