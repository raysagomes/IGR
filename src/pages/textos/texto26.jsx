import React, { useState, useEffect } from "react";
import Header from '../../components/header';
import HeaderMenuTexto from '../../components/headers/header-menu-texto'
import Footer from "../../components/footer";
import Logo from "../../components/logo";
import RightNavBar from "../../components/right-navbar";
import { Container, Col, Row, Accordion } from "react-bootstrap";
import { Helmet } from 'react-helmet-async';
import TextoAudio from "../../components/texto-audio";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faStop } from '@fortawesome/free-solid-svg-icons';


const AudioComponent = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedVoice, setSelectedVoice] = useState(null);
  const [rate, setRate] = useState(1); 

  const text = "The Vintage Bookstore Discovery. Elena had walked past the small bookstore on Maple Street hundreds of times, but she had never actually gone inside. The faded sign read 'Thompson's Books - Est. 1952,' and the dusty windows made it difficult to see what was inside. One rainy Saturday afternoon, with nothing else to do, Elena finally decided to push open the heavy wooden door. The moment she stepped inside, she was transported to another world. The smell of old paper and leather bindings filled the air, and towering bookshelves stretched from floor to ceiling. Books were everywhere - stacked on tables, piled on the floor, and crammed into every available space. An elderly man with wire-rimmed glasses looked up from behind the counter and smiled warmly. 'Welcome to my little sanctuary,' he said. 'I'm Mr. Thompson. Feel free to explore.' Elena wandered through the narrow aisles, discovering rare first editions, out-of-print novels, and books in languages she couldn't even identify. In one corner, she found a cozy reading nook with a worn leather armchair and a small lamp. Mr. Thompson noticed her interest and explained that many customers spent hours there, reading and discovering new authors. As Elena browsed, she found a beautiful leather-bound journal that caught her eye. Mr. Thompson told her it had belonged to a local writer who used to visit the store regularly. 'She always said that books choose their readers,' he explained with a twinkle in his eye. Elena bought the journal and promised to return soon. Walking home in the rain, she realized she had found much more than just a bookstore - she had discovered a hidden treasure in her own neighborhood.";

  useEffect(() => {
    const loadVoices = () => {
      const availableVoices = window.speechSynthesis.getVoices();
      let specificVoice = availableVoices.find(
        voice => voice.name === "Microsoft Jenny Online (Natural) - English (United States)"
      );
      if (!specificVoice) {
        specificVoice = availableVoices.find(
          voice =>
            voice.name.toLowerCase().includes("english") &&
            voice.name.toLowerCase().includes("united states")
        );
      }
      if (!specificVoice) {
        specificVoice = availableVoices.find(
          voice => voice.name.toLowerCase().includes("english")
        );
      }
      if (!specificVoice) {
        specificVoice = availableVoices[0];
      }
      setSelectedVoice(specificVoice);
    };
    loadVoices();
    window.speechSynthesis.onvoiceschanged = loadVoices;
  }, []);

  const startAudio = () => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.voice = selectedVoice; 
    utterance.rate = rate; 
    window.speechSynthesis.speak(utterance);
    setIsPlaying(true);
  };

  const stopAudio = () => {
    window.speechSynthesis.cancel(); 
    setIsPlaying(false); 
  };

  return (
    <div>
    <TextoAudio />
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <button onClick={isPlaying ? stopAudio : startAudio}>
        <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} /> 
        </button>
        <button onClick={stopAudio}>
        <FontAwesomeIcon icon={faStop} /> 
        </button>
        <input
          id="rate"
          type="range"
          min="0.1"
          max="10"
          step="0.1"
          value={rate}
          onChange={(e) => setRate(parseFloat(e.target.value))}
          style={{ margin: '0 10px' }} 
        />
      </div>
      <div>
        <label htmlFor="rate">Rate: {rate.toFixed(1)}</label>
      </div>
    </div>
  );
};


export default function Texto26() {
  return (
    <>
      <Helmet>
        <title>Texto26</title>
      </Helmet>
      <Header />
      <Logo />
      <HeaderMenuTexto />
      <Container>
        <Row>
          <Col className="coluna-texto1">
            <AudioComponent />
            <h2 className="h1-Texto-Inicial">The Vintage Bookstore Discovery</h2>
            <h4 className="h5-Textos">
              <p>Elena had walked past the small bookstore on Maple Street hundreds of times, but she had never actually gone inside. The faded sign read 'Thompson's Books - Est. 1952,' and the dusty windows made it difficult to see what was inside. One rainy Saturday afternoon, with nothing else to do, Elena finally decided to push open the heavy wooden door.</p>
              <p>The moment she stepped inside, she was transported to another world. The smell of old paper and leather bindings filled the air, and towering bookshelves stretched from floor to ceiling. Books were everywhere - stacked on tables, piled on the floor, and crammed into every available space.</p>
              <p>An elderly man with wire-rimmed glasses looked up from behind the counter and smiled warmly. 'Welcome to my little sanctuary,' he said. 'I'm Mr. Thompson. Feel free to explore.' Elena wandered through the narrow aisles, discovering rare first editions, out-of-print novels, and books in languages she couldn't even identify.</p>
              <p>In one corner, she found a cozy reading nook with a worn leather armchair and a small lamp. Mr. Thompson noticed her interest and explained that many customers spent hours there, reading and discovering new authors. As Elena browsed, she found a beautiful leather-bound journal that caught her eye.</p>
              <p>Mr. Thompson told her it had belonged to a local writer who used to visit the store regularly. 'She always said that books choose their readers,' he explained with a twinkle in his eye. Elena bought the journal and promised to return soon. Walking home in the rain, she realized she had found much more than just a bookstore - she had discovered a hidden treasure in her own neighborhood.</p>
            </h4>
          </Col>
          <Col xs={12} md={3} className="extra-pagina-de-textos d-flex flex-column align-items-end ">
            <RightNavBar />
          </Col>
        </Row>
      </Container>

      <Container md="auto" xs lg="7" className="div-accordion-ativididade justify-content-center"> 
        <Row> 
          <Col>        
            <Accordion className="justify-content-center">
              <Accordion.Item eventKey="0" className="Accordion">
                <Accordion.Header className="accordion-header"><h2>Tradução do texto</h2></Accordion.Header>
                <Accordion.Body>
                  <h2>A Descoberta da Livraria Vintage</h2>
                  <br />
                  <p>Elena havia passado pela pequena livraria na Rua Maple centenas de vezes, mas nunca havia realmente entrado. A placa desbotada dizia 'Livros Thompson - Est. 1952', e as janelas empoeiradas tornavam difícil ver o que havia dentro. Em uma tarde chuvosa de sábado, sem nada mais para fazer, Elena finalmente decidiu empurrar a pesada porta de madeira.</p>
                  <p>No momento em que entrou, foi transportada para outro mundo. O cheiro de papel velho e encadernações de couro encheu o ar, e estantes altíssimas se estendiam do chão ao teto. Livros estavam por toda parte - empilhados em mesas, amontoados no chão e espremidos em cada espaço disponível.</p>
                  <p>Um homem idoso com óculos de armação de arame olhou para cima de trás do balcão e sorriu calorosamente. 'Bem-vinda ao meu pequeno santuário', disse ele. 'Sou Sr. Thompson. Sinta-se à vontade para explorar.' Elena vagou pelos corredores estreitos, descobrindo primeiras edições raras, romances fora de catálogo e livros em idiomas que nem conseguia identificar.</p>
                  <p>Em um canto, encontrou um cantinho aconchegante de leitura com uma poltrona de couro gasta e uma pequena lâmpada. Sr. Thompson notou seu interesse e explicou que muitos clientes passavam horas ali, lendo e descobrindo novos autores. Enquanto Elena navegava, encontrou um belo diário encadernado em couro que chamou sua atenção.</p>
                  <p>Sr. Thompson disse que havia pertencido a uma escritora local que costumava visitar a loja regularmente. 'Ela sempre dizia que os livros escolhem seus leitores', explicou com um brilho no olho. Elena comprou o diário e prometeu voltar em breve. Caminhando para casa na chuva, percebeu que havia encontrado muito mais do que apenas uma livraria - havia descoberto um tesouro escondido em seu próprio bairro.</p>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
      </Container>

      <Container className="questions">
        <Row> 
          <Col> 
            <h1 className="h1-questions">Questions</h1>
            <Accordion className="no-border-accordion"> 
              <Accordion.Item eventKey="0">
                <Accordion.Header>1. Why had Elena never entered the bookstore before?</Accordion.Header>
                <Accordion.Body>
                  <h5>Por que Elena nunca havia entrado na livraria antes?</h5>
                  The faded sign and dusty windows made it difficult to see what was inside. <br />
                  <i>A placa desbotada e as janelas empoeiradas tornavam difícil ver o que havia dentro.</i>
                </Accordion.Body>
              </Accordion.Item>
              
              <Accordion.Item eventKey="1">
                <Accordion.Header>2. What was Elena's first impression when she entered the bookstore?</Accordion.Header>
                <Accordion.Body>
                  <h5>Qual foi a primeira impressão de Elena quando entrou na livraria?</h5>
                  Elena felt transported to another world with the smell of old paper and towering bookshelves. <br />
                  <i>Elena se sentiu transportada para outro mundo com o cheiro de papel velho e estantes altíssimas.</i>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="2">
                <Accordion.Header>3. What did Elena find in the corner of the bookstore?</Accordion.Header>
                <Accordion.Body>
                  <h5>O que Elena encontrou no canto da livraria?</h5>
                  Elena found a cozy reading nook with a worn leather armchair and a small lamp. <br />
                  <i>Elena encontrou um cantinho aconchegante de leitura com uma poltrona de couro gasta e uma pequena lâmpada.</i>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="3">
                <Accordion.Header>4. What did Elena buy from the bookstore?</Accordion.Header>
                <Accordion.Body>
                  <h5>O que Elena comprou na livraria?</h5>
                  Elena bought a beautiful leather-bound journal that had belonged to a local writer. <br />
                  <i>Elena comprou um belo diário encadernado em couro que havia pertencido a uma escritora local.</i>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="4">
                <Accordion.Header>5. What did Elena realize about her discovery?</Accordion.Header>
                <Accordion.Body>
                  <h5>O que Elena percebeu sobre sua descoberta?</h5>
                  Elena realized she had found more than just a bookstore - she had discovered a hidden treasure in her neighborhood. <br />
                  <i>Elena percebeu que havia encontrado mais do que apenas uma livraria - havia descoberto um tesouro escondido em seu bairro.</i>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
      </Container>

      <Footer />
    </>
  );
}