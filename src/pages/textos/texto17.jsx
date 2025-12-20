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

  const text = "The Library Adventure. Sarah loved spending her weekends at the local library. It was her favorite place to escape from the busy world and dive into different stories. Every Saturday morning, she would walk the ten blocks from her house, carrying her worn-out backpack filled with books to return. The library was an old building with tall windows and wooden shelves that reached the ceiling. Mrs. Peterson, the librarian, always greeted Sarah with a warm smile and knew exactly what kind of books she enjoyed. This particular Saturday, Sarah was looking for something different. She wandered through the mystery section, then moved to science fiction, but nothing caught her attention. Finally, she discovered a small section she had never noticed before: travel memoirs. She picked up a book about a woman who had traveled alone through South America. As Sarah read the first chapter, she felt transported to the mountains of Peru and the beaches of Brazil. She spent the entire afternoon in her favorite corner by the window, completely absorbed in the adventure. When the library was about to close, Sarah reluctantly checked out the book and three others from the same section. Walking home, she realized that sometimes the best adventures begin when you step outside your comfort zone, even if it's just trying a new section in the library.";

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


export default function Texto17() {
  return (
    <>
      <Helmet>
        <title>Texto17</title>
      </Helmet>
      <Header />
      <Logo />
      <HeaderMenuTexto />
      <Container>
        <Row>
          <Col className="coluna-texto1">
            <AudioComponent />
            <h2 className="h1-Texto-Inicial">The Library Adventure</h2>
            <h4 className="h5-Textos">
              <p>Sarah loved spending her weekends at the local library. It was her favorite place to escape from the busy world and dive into different stories. Every Saturday morning, she would walk the ten blocks from her house, carrying her worn-out backpack filled with books to return.</p>
              <p>The library was an old building with tall windows and wooden shelves that reached the ceiling. Mrs. Peterson, the librarian, always greeted Sarah with a warm smile and knew exactly what kind of books she enjoyed. This particular Saturday, Sarah was looking for something different.</p>
              <p>She wandered through the mystery section, then moved to science fiction, but nothing caught her attention. Finally, she discovered a small section she had never noticed before: travel memoirs. She picked up a book about a woman who had traveled alone through South America.</p>
              <p>As Sarah read the first chapter, she felt transported to the mountains of Peru and the beaches of Brazil. She spent the entire afternoon in her favorite corner by the window, completely absorbed in the adventure. When the library was about to close, Sarah reluctantly checked out the book and three others from the same section. Walking home, she realized that sometimes the best adventures begin when you step outside your comfort zone, even if it's just trying a new section in the library.</p>
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
                  <h2>A Aventura na Biblioteca</h2>
                  <br />
                  <p>Sarah adorava passar seus fins de semana na biblioteca local. Era seu lugar favorito para escapar do mundo agitado e mergulhar em diferentes histórias. Todo sábado de manhã, ela caminhava dez quarteirões de sua casa, carregando sua mochila gasta cheia de livros para devolver.</p>
                  <p>A biblioteca era um prédio antigo com janelas altas e estantes de madeira que chegavam ao teto. Sra. Peterson, a bibliotecária, sempre cumprimentava Sarah com um sorriso caloroso e sabia exatamente que tipo de livros ela gostava. Neste sábado em particular, Sarah estava procurando algo diferente.</p>
                  <p>Ela vagou pela seção de mistério, depois se mudou para ficção científica, mas nada chamou sua atenção. Finalmente, ela descobriu uma pequena seção que nunca havia notado antes: memórias de viagem. Ela pegou um livro sobre uma mulher que havia viajado sozinha pela América do Sul.</p>
                  <p>Enquanto Sarah lia o primeiro capítulo, ela se sentiu transportada para as montanhas do Peru e as praias do Brasil. Ela passou a tarde inteira em seu canto favorito perto da janela, completamente absorta na aventura. Quando a biblioteca estava prestes a fechar, Sarah relutantemente pegou emprestado o livro e outros três da mesma seção. Caminhando para casa, ela percebeu que às vezes as melhores aventuras começam quando você sai da sua zona de conforto, mesmo que seja apenas experimentando uma nova seção na biblioteca.</p>
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
                <Accordion.Header>1. What did Sarah do every Saturday morning?</Accordion.Header>
                <Accordion.Body>
                  <h5>O que Sarah fazia toda manhã de sábado?</h5>
                  Sarah walked ten blocks to the library carrying books to return. <br />
                  <i>Sarah caminhava dez quarteirões até a biblioteca carregando livros para devolver.</i>
                </Accordion.Body>
              </Accordion.Item>
              
              <Accordion.Item eventKey="1">
                <Accordion.Header>2. How did Mrs. Peterson, the librarian, treat Sarah?</Accordion.Header>
                <Accordion.Body>
                  <h5>Como a Sra. Peterson, a bibliotecária, tratava Sarah?</h5>
                  Mrs. Peterson always greeted Sarah with a warm smile and knew what books she enjoyed. <br />
                  <i>A Sra. Peterson sempre cumprimentava Sarah com um sorriso caloroso e sabia que livros ela gostava.</i>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="2">
                <Accordion.Header>3. What new section did Sarah discover at the library?</Accordion.Header>
                <Accordion.Body>
                  <h5>Que nova seção Sarah descobriu na biblioteca?</h5>
                  Sarah discovered the travel memoirs section. <br />
                  <i>Sarah descobriu a seção de memórias de viagem.</i>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="3">
                <Accordion.Header>4. What was the book about that caught Sarah's attention?</Accordion.Header>
                <Accordion.Body>
                  <h5>Sobre o que era o livro que chamou a atenção de Sarah?</h5>
                  The book was about a woman who had traveled alone through South America. <br />
                  <i>O livro era sobre uma mulher que havia viajado sozinha pela América do Sul.</i>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="4">
                <Accordion.Header>5. What lesson did Sarah learn from her library experience?</Accordion.Header>
                <Accordion.Body>
                  <h5>Que lição Sarah aprendeu com sua experiência na biblioteca?</h5>
                  Sarah learned that the best adventures begin when you step outside your comfort zone. <br />
                  <i>Sarah aprendeu que as melhores aventuras começam quando você sai da sua zona de conforto.</i>
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