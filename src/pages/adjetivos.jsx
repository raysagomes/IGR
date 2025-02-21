import Header from '../components/header'
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../components/logo';
import HeaderMenuTexto from '../components/headers/header-menu-texto'
import Footer from '../components/footer';
import ListaVocabularioAdjetivo from '../components/listas/list-vocab-adjetivo';
import { Helmet } from 'react-helmet-async';


export default function Adjetivos() {
  
  return (
   <div> 
    <Helmet>
        <title>Adjetivo</title>
      </Helmet>
   <Header />
   <Logo />
   <HeaderMenuTexto />
   <ListaVocabularioAdjetivo />
   <Footer />
   </div>
  );
}

