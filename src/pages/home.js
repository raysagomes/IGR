import Header from '../components/header'
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../components/logo';
import HeaderMenuHome from '../components/header-menu-home';
import Footer from '../components/footer';
import TextoInicial from '../components/texto-inicial';


import '../style.css';

function Home() {
  return (
   <div> 
   <Header />
   <Logo />
   <HeaderMenuHome />
   <TextoInicial />
   <Footer />
   </div>
  );
}

export default Home;
