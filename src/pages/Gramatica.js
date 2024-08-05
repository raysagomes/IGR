import Header from '../components/header'
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../components/logo';
import HeaderMenuGramatica from '../components/header-menu-gramatica';
import Footer from '../components/footer';
import TextoInicial from '../components/texto-inicial';
import ListaGramatica from '../components/lista-gramatica';

import '../style.css';

function Gramatica() {
  return (
   <div> 
   <Header />
   <Logo />
   <HeaderMenuGramatica />
   <ListaGramatica />
   <Footer />
   </div>
  );
}

export default Gramatica;
