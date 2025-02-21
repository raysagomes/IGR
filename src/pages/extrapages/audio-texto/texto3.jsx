import React, { useState, useEffect } from "react";
import Header from '../../../components/header';
import HeaderMenuTexto from '../../../components/headers/header-menu-texto';
import Footer from "../../../components/footer";
import Logo from "../../../components/logo";
import RightNavBar from "../../../components/right-navbar";
import { Container, Col, Row, Accordion } from "react-bootstrap";
import { Helmet } from 'react-helmet-async';
import TextoAudio from "../../../components/texto-audio";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faStop } from '@fortawesome/free-solid-svg-icons';


const AudioComponent = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedVoice, setSelectedVoice] = useState(null);
  const [rate, setRate] = useState(1); 

  const text = "A Day at the Beach. Last Saturday, Emma and her friends decided to go to the beach. They woke up early in the morning, packed their bags with swimsuits, towels, and snacks, and drove to the coast. The weather was perfect – warm and sunny with a light breeze. When they arrived, they found a nice spot near the water and set up their towels and umbrellas. Emma loves the ocean, so she ran straight to the water. The waves were gentle, and she spent hours swimming and floating on the surface. Her friends played beach volleyball nearby, laughing and cheering each other on. After swimming, Emma joined them, and they had a lot of fun. Around noon, they all got hungry and decided to have a picnic. They had brought sandwiches, fresh fruit, and cold drinks. While they ate, they talked about their plans for the rest of the summer and shared stories from their recent travels.As the sun began to set, they packed up and took a last look at the beautiful view of the ocean. Tired but happy, they returned home, already planning their next adventure.";

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



export default function Texto3() {
    return(
<>
<Helmet>
        <title>Texto 3</title>
      </Helmet>
<Header />
<Logo />
<HeaderMenuTexto />

<Container>
  <Row>
    <Col className="coluna-texto1">
    <AudioComponent /> 

    </Col>

  
<Col xs={12} md={3} className="extra-pagina-de-textos d-flex flex-column align-items-end">
    <RightNavBar />
    </Col>
    </Row>
</Container>

<Container md="auto" xs lg="7" className="div-accordion-ativididade justify-content-center">
  <Row>
    <Col>
      <Accordion className="justify-content-center">
        <Accordion.Item eventKey="0" className="Accordion">
          <Accordion.Header className="accordion-header">
            <h2>Transcrição do texto</h2>
          </Accordion.Header>
          <Accordion.Body>
            <h2>A Day at the Beach</h2>
            <p>Last Saturday, Emma and her friends decided to go to the beach. They woke up early in the morning, packed their bags with swimsuits, towels, and snacks, and drove to the coast. The weather was perfect – warm and sunny with a light breeze. When they arrived, they found a nice spot near the water and set up their towels and umbrellas.</p>
        
        <p>Emma loves the ocean, so she ran straight to the water. The waves were gentle, and she spent hours swimming and floating on the surface. Her friends played beach volleyball nearby, laughing and cheering each other on. After swimming, Emma joined them, and they had a lot of fun.</p>
        
        <p>Around noon, they all got hungry and decided to have a picnic. They had brought sandwiches, fresh fruit, and cold drinks. While they ate, they talked about their plans for the rest of the summer and shared stories from their recent travels.</p>
        
        <p>As the sun began to set, they packed up and took a last look at the beautiful view of the ocean. Tired but happy, they returned home, already planning their next adventure.</p>
     
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
          <Accordion.Header>1. Where did Emma and her friends go last Saturday?</Accordion.Header>
          <Accordion.Body>
            <h5>Para onde Emma e seus amigos foram no último sábado?</h5>
            Emma and her friends went to the beach last Saturday. <br />
            <i>Emma e seus amigos foram à praia no último sábado.</i>
          </Accordion.Body>
        </Accordion.Item>
        
        <Accordion.Item eventKey="1">
          <Accordion.Header>2. What did they bring with them to the beach?</Accordion.Header>
          <Accordion.Body>
            <h5>O que eles trouxeram para a praia?</h5>
            They brought swimsuits, towels, and snacks to the beach. <br />
            <i>Eles trouxeram trajes de banho, toalhas e lanches para a praia.</i>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header>3. How was the weather at the beach?</Accordion.Header>
          <Accordion.Body>
            <h5>Como estava o tempo na praia?</h5>
            The weather was warm and sunny with a light breeze. <br />
            <i>O tempo estava quente e ensolarado, com uma brisa leve.</i>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="3">
          <Accordion.Header>4. What did Emma do when they arrived at the beach?</Accordion.Header>
          <Accordion.Body>
            <h5>O que Emma fez quando chegaram à praia?</h5>
            Emma ran straight to the water and spent hours swimming and floating. <br />
            <i>Emma correu direto para a água e passou horas nadando e flutuando.</i>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="4">
          <Accordion.Header>5. What activity did Emma’s friends do while she was swimming?</Accordion.Header>
          <Accordion.Body>
            <h5>Que atividade os amigos de Emma fizeram enquanto ela nadava?</h5>
            Emma's friends played beach volleyball nearby. <br />
            <i>Os amigos de Emma jogaram vôlei de praia por perto.</i>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="5">
          <Accordion.Header>6. What did they eat for their picnic?</Accordion.Header>
          <Accordion.Body>
            <h5>O que eles comeram no piquenique?</h5>
            They ate sandwiches, fresh fruit, and cold drinks for their picnic. <br />
            <i>Eles comeram sanduíches, frutas frescas e bebidas geladas no piquenique.</i>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="6">
          <Accordion.Header>7. What did they do as the sun began to set?</Accordion.Header>
          <Accordion.Body>
            <h5>O que eles fizeram quando o sol começou a se pôr?</h5>
            They packed up and took a last look at the beautiful view of the ocean. <br />
            <i>Eles arrumaram tudo e deram uma última olhada na bela vista do oceano.</i>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="7">
          <Accordion.Header>8. How did they feel at the end of the day?</Accordion.Header>
          <Accordion.Body>
            <h5>Como eles se sentiram no final do dia?</h5>
            They felt tired but happy at the end of the day. <br />
            <i>Eles se sentiram cansados, mas felizes no final do dia.</i>
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
