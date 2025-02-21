import Header from '../components/header'
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../components/logo';
import HeaderMenuTexto from '../components/headers/header-menu-texto'
import Footer from '../components/footer';
import ListaConversacoes from '../components/listas/lista-conversacoes';
import { Helmet } from 'react-helmet-async';


import '../style.css';

function Conversações() {
  return (
   <div> 
    <Helmet>
        <title>Conversações</title>
      </Helmet>
   <Header />
   <Logo />
   <HeaderMenuTexto />
    <ListaConversacoes />
   <Footer />
   </div>
  );
}

export default Conversações;
