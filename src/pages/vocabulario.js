import Header from '../components/header'
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../components/logo';
import HeaderMenuVocabulario from '../components/header-menu-vocabulario';
import Footer from '../components/footer';
import TextoInicial from '../components/texto-inicial';
import ListaVocabulario from '../components/list-vocab';

import '../style.css';

function Vocabulário() {
  return (
   <div> 
   <Header />
   <Logo />
   <HeaderMenuVocabulario />
   <ListaVocabulario />
   <Footer />
   </div>
  );
}

export default Vocabulário;
