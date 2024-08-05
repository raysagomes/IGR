import Header from '../components/header'
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../components/logo';
import HeaderMenuGramatica from '../components/header-menu-conversacoes';
import Footer from '../components/footer';
import TextoInicial from '../components/texto-inicial';
import ListaConversacoes from '../components/lista-conversacoes';

import '../style.css';

function Conversações() {
  return (
   <div> 
   <Header />
   <Logo />
   <HeaderMenuGramatica />
    <ListaConversacoes />
   <Footer />
   </div>
  );
}

export default Conversações;
