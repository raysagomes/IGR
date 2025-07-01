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

  const text = "The Great Gatsby is a classic novel written by F. Scott Fitzgerald, first published in 1925. Set during the Roaring Twenties, the story follows the life of the mysterious millionaire, Jay Gatsby, and his obsession with the beautiful Daisy Buchanan. The novel explores themes of wealth, social class, and the American Dream. Gatsby throws extravagant parties in an attempt to win back Daisy, but despite his wealth, he is never able to recapture the past. As the story unfolds, we learn about the complex relationships between the characters and the tragic consequences of Gatsby's pursuit of an unattainable dream.";

    useEffect(() => {
      const loadVoices = () => {
        const availableVoices = window.speechSynthesis.getVoices();
        console.log("Available voices:");
        availableVoices.forEach(voice => {
          console.log(`${voice.name} (${voice.lang})`);
        });
    
        let specificVoice = availableVoices.find(
          voice => voice.name === "Microsoft Jenny Online (Natural) - English (United States)"
        );
    
        if (!specificVoice) {
          console.warn("Microsoft Jenny voice not found. Searching for fallback English (United States) voice...");
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
  
      window.speechSynthesis.onvoiceschanged = loadVoices;
      loadVoices();
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


export default function Texto10() {
  return (
    <>
      <Helmet>
        <title>Texto10</title>
      </Helmet>
      <Header />
      <Logo />
      <HeaderMenuTexto />

      <Container>
        <Row>
          <Col className="coluna-texto1">
            <AudioComponent /> 
            <h2 className="h1-Texto-Inicial">The Great Gatsby</h2> 
            <h4 className="h5-Textos">
              <p>The Great Gatsby is a classic novel written by F. Scott Fitzgerald, first published in 1925. Set during the Roaring Twenties, the story follows the life of the mysterious millionaire, Jay Gatsby, and his obsession with the beautiful Daisy Buchanan. The novel explores themes of wealth, social class, and the American Dream. Gatsby throws extravagant parties in an attempt to win back Daisy, but despite his wealth, he is never able to recapture the past. As the story unfolds, we learn about the complex relationships between the characters and the tragic consequences of Gatsby's pursuit of an unattainable dream.</p>
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
    <Accordion  className="justify-content-center" >
      <Accordion.Item eventKey="0" className="Accordion">
      <Accordion.Header className="accordion-header"><h2>Translation of the Text</h2></Accordion.Header>
                <Accordion.Body>
                  <h2>O Grande Gatsby</h2>
                  <br />
                  <p>O Grande Gatsby é um romance clássico escrito por F. Scott Fitzgerald, publicado pela primeira vez em 1925. Ambientada durante os anos loucos da década de 1920, a história segue a vida do misterioso milionário Jay Gatsby e sua obsessão pela bela Daisy Buchanan. O romance explora temas como riqueza, classe social e o Sonho Americano. Gatsby realiza festas extravagantes na tentativa de reconquistar Daisy, mas apesar de sua riqueza, ele nunca consegue recuperar o passado. À medida que a história se desenrola, aprendemos sobre os relacionamentos complexos entre os personagens e as trágicas consequências da busca de Gatsby por um sonho inatingível.</p>
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
                <Accordion.Header>1. What is the main theme of "The Great Gatsby"?</Accordion.Header>
                <Accordion.Body>
                  <h5>Qual é o tema principal de "O Grande Gatsby"?</h5>
                  The main theme is the pursuit of the American Dream and the consequences of seeking wealth and status. <br />
                  <i>O tema principal é a busca pelo Sonho Americano e as consequências de buscar riqueza e status.</i>
                </Accordion.Body>
              </Accordion.Item>
              
              <Accordion.Item eventKey="1">
                <Accordion.Header>2. Who is Jay Gatsby in the novel?</Accordion.Header>
                <Accordion.Body>
                  <h5>Quem é Jay Gatsby no romance?</h5>
                  Jay Gatsby is a mysterious millionaire who is obsessed with Daisy Buchanan, a woman he loves from his past. <br />
                  <i>Jay Gatsby é um misterioso milionário obcecado por Daisy Buchanan, uma mulher que ele ama do seu passado.</i>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="2">
                <Accordion.Header>3. What does Gatsby do to try to win back Daisy?</Accordion.Header>
                <Accordion.Body>
                  <h5>O que Gatsby faz para tentar reconquistar Daisy?</h5>
                  Gatsby throws extravagant parties hoping Daisy will attend, hoping to rekindle their past love. <br />
                  <i>Gatsby faz festas extravagantes esperando que Daisy participe, na esperança de reacender seu amor do passado.</i>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="3">
                <Accordion.Header>4. What is the tragedy in Gatsby's pursuit of Daisy?</Accordion.Header>
                <Accordion.Body>
                  <h5>Qual é a tragédia na busca de Gatsby por Daisy?</h5>
                  Gatsby's tragedy is that he can never recapture the past, and his pursuit of Daisy leads to his downfall. <br />
                  <i>A tragédia de Gatsby é que ele nunca consegue recuperar o passado, e sua busca por Daisy leva à sua queda.</i>
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