import Header from '../components/header'
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../components/logo';
import HeaderMenuTexto from '../components/header-menu-texto';
import Footer from '../components/footer';
import LinksTextos from '../components/links-textos';

import '../style.css';
import RightNavBar from '../components/right-navbar';

function Textos() {
  return (
   <div> 
   <Header />
   <Logo />
   <HeaderMenuTexto />
   <LinksTextos />
   <Footer />
   </div>
  );
}

export default Textos;
