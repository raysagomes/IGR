import React, { useState, useEffect } from "react";
import Header from '../../components/header';
import HeaderMenuTexto from '../../components/header-menu-texto';
import Footer from "../../components/footer";
import Logo from "../../components/logo";
import RightNavBar from "../../components/right-navbar";
import { Container, Col, Row, Accordion} from "react-bootstrap";
import { Helmet } from 'react-helmet-async';
import TextoAudio from "../../components/texto-audio";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faStop } from '@fortawesome/free-solid-svg-icons';



const AudioComponent = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedVoice, setSelectedVoice] = useState(null);
  const [rate, setRate] = useState(1); 

  const text = "The Joy of Baking. Sophie found joy in baking. It started as a way to relax after a stressful day at work, but it quickly became a beloved hobby.She loved experimenting with different recipes, from classic chocolate chip cookies to elaborate cakes and pastries. The process of measuring, mixing, and decorating brought her immense satisfaction. Sophie's kitchen was always filled with the delicious aroma of freshly baked goods, and she took pleasure in sharing her creations with friends and family. Baking became her way of spreading happiness and love.";

  useEffect(() => {
    const loadVoices = () => {
      const availableVoices = window.speechSynthesis.getVoices();
      console.log("Available voices:");
      availableVoices.forEach(voice => {
        console.log(`${voice.name} (${voice.lang})`);
      });

      const specificVoice = availableVoices.find(voice => voice.name === "Microsoft Jenny Online (Natural) - English (United States)");
      if (specificVoice) {
        setSelectedVoice(specificVoice);
      } else {
        console.warn("Microsoft Ana voice not found. Using the first available voice.");
        setSelectedVoice(availableVoices[0]);
      }
    };

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


export default function Texto2() {
    return(
<>
<Helmet>
        <title>Texto2</title>
      </Helmet>
<Header />
<Logo />
<HeaderMenuTexto />

<Container>
      <Row>
        <Col className="coluna-texto1">
        <AudioComponent /> 
        <h2 className="h1-Texto-Inicial"> The Joy of Baking </h2> 
        <h4 className="h5-Textos">
      <p> Sophie found joy in baking. It started as a way to relax after a stressful day at work, but it quickly became a beloved hobby.</p>
     <p>She loved experimenting with different recipes, from classic chocolate chip cookies to elaborate cakes and pastries. The process of measuring, mixing, and decorating brought her immense satisfaction.
        </p>
        <p> Sophie's kitchen was always filled with the delicious aroma of freshly baked goods, and she took pleasure in sharing her creations with friends and family. Baking became her way of spreading happiness and love.
        </p>

    </h4>
</Col>

<Col xs={12} md={3} className="extra-pagina-de-textos d-flex flex-column align-items-end">
    <RightNavBar />
    </Col>
      </Row>
    </Container>
    <Container md="auto" xs lg="7" className="div-accordion-ativididade justify-content-center"> 
        <Row> 
     <Col>        
    <Accordion  className="justify-content-center" >
      <Accordion.Item eventKey="0" className="Accordion">
        <Accordion.Header className="accordion-header"><h2>Tradução do texto</h2></Accordion.Header>
        <Accordion.Body>
            <h2>A felicidade de Cozinhar</h2>
            <br />
        <p>
          Sophie encontrou alegria em cozinhar. Começou como uma forma de relaxar após um dia estressante de trabalho, mas rapidamente se tornou um hobby querido. Ela adorava experimentar receitas diferentes, desde os clássicos biscoitos de chocolate até bolos e doces elaborados.
        </p>
     <p>  
     O processo de medir, misturar e decorar trouxe-lhe imensa satisfação. A cozinha de Sophie estava sempre repleta do delicioso aroma dos produtos acabados de fazer e ela tinha prazer em partilhar as suas criações com amigos e familiares. Cozinhar tornou-se sua forma de espalhar felicidade e amor.
     </p> 
   
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
          <Accordion.Header>1. How did Sophie discover her joy in baking?</Accordion.Header>
          <Accordion.Body>
            <h5>Como Sophie descobriu sua alegria em cozinhar?</h5>
            Sophie discovered her joy in baking as a way to relax after a stressful day at work. <br />
            <i>Sophie descobriu sua alegria em cozinhar como uma forma de relaxar após um dia estressante no trabalho.</i>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
          <Accordion.Header>2. What kinds of recipes does Sophie enjoy experimenting with?</Accordion.Header>
          <Accordion.Body>
            <h5>Com que tipos de receitas Sophie gosta de experimentar?</h5>
            Sophie enjoys experimenting with recipes for classic chocolate chip cookies, elaborate cakes, and pastries. <br />
            <i>Sophie gosta de experimentar receitas de biscoitos clássicos com gotas de chocolate, bolos elaborados e doces.</i>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header>3. What part of the baking process does Sophie enjoy the most?</Accordion.Header>
          <Accordion.Body>
            <h5>Qual parte do processo de cozinhar Sophie mais gosta?</h5>
            Sophie enjoys the process of measuring, mixing, and decorating the most. <br />
            <i>Sophie gosta mais do processo de medir, misturar e decorar.</i>
          </Accordion.Body>        
        </Accordion.Item>

        <Accordion.Item eventKey="3">
          <Accordion.Header>4. How does Sophie's kitchen usually smell?</Accordion.Header>
          <Accordion.Body>
            <h5>Como a cozinha de Sophie geralmente cheira?</h5>
            Sophie's kitchen usually smells like freshly baked goods. <br />
            <i>A cozinha de Sophie geralmente cheira a produtos recém-assados.</i>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="4">
          <Accordion.Header>5. How does Sophie share her baking creations?</Accordion.Header>
          <Accordion.Body>
            <h5>Como Sophie compartilha suas criações culinárias?</h5>
            Sophie shares her baking creations with friends and family. <br />
            <i>Sophie compartilha suas criações culinárias com amigos e familiares.</i>
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
