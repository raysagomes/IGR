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

  const text = "Tom Visits the Countryside. Tom was thrilled to visit the countryside for the first time. He imagined vast fields of green with cows grazing gracefully under the clear blue sky. When he arrived, he found a curious sight—a group of cows crowding around a scarecrow, as if they were attending a meeting. The cows seemed completely uninterested in the lush grass and utterly focused on the scarecrow. Tom burst out laughing, wondering if they mistook it for their leader. Later, he strolled to the pond, expecting to find elegant ducks gliding peacefully on the water. Instead, he saw a duck trying to steal bread from a picnic basket. The other ducks stood nearby, cheering it on with loud quacks. Tom couldn’t believe the level of mischief and watched the hilarious scene unfold with tears of laughter in his eyes. Despite the unexpected moments, Tom had a memorable day, discovering that even the quiet countryside could be full of surprises and comedy. He returned home with funny stories to tell and a newfound appreciation for rural life.";

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


export default function Texto7() {
    return(
<>
<Helmet>
        <title>Texto 7</title>
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
        <Accordion.Header>
  <h2>Transcrição do texto</h2>
</Accordion.Header>
<Accordion.Body>
  <h2>Tom Visits the Countryside</h2>
  <br />
  <p>Tom was thrilled to visit the countryside for the first time. He imagined vast fields of green with cows grazing gracefully under the clear blue sky. When he arrived, he found a curious sight—a group of cows crowding around a scarecrow, as if they were attending a meeting. The cows seemed completely uninterested in the lush grass and utterly focused on the scarecrow. Tom burst out laughing, wondering if they mistook it for their leader.</p>
  
  <p>Later, he strolled to the pond, expecting to find elegant ducks gliding peacefully on the water. Instead, he saw a duck trying to steal bread from a picnic basket. The other ducks stood nearby, cheering it on with loud quacks. Tom couldn’t believe the level of mischief and watched the hilarious scene unfold with tears of laughter in his eyes.</p>
  
  <p>Despite the unexpected moments, Tom had a memorable day, discovering that even the quiet countryside could be full of surprises and comedy. He returned home with funny stories to tell and a newfound appreciation for rural life.</p>
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
          <Accordion.Header>1. What did Tom expect to see in the countryside?</Accordion.Header>
          <Accordion.Body>
            <h5>O que Tom esperava ver no campo?</h5>
            Tom expected to see vast green fields with cows grazing gracefully. <br />
            <i>Tom esperava ver vastos campos verdes com vacas pastando graciosamente.</i>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
          <Accordion.Header>2. What did Tom find instead of peaceful cows?</Accordion.Header>
          <Accordion.Body>
            <h5>O que Tom encontrou em vez de vacas tranquilas?</h5>
            Tom found cows gathered around a scarecrow in a strange scene. <br />
            <i>Tom encontrou vacas reunidas em torno de um espantalho em uma cena estranha.</i>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header>3. What was unusual about the ducks in the lake?</Accordion.Header>
          <Accordion.Body>
            <h5>O que foi incomum nos patos no lago?</h5>
            The ducks were chasing a remote-controlled boat and making loud noises. <br />
            <i>Os patos estavam perseguindo um barco de controle remoto e fazendo barulhos altos.</i>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="3">
          <Accordion.Header>4. Why did Tom find the trip amusing?</Accordion.Header>
          <Accordion.Body>
            <h5>Por que Tom achou a viagem divertida?</h5>
            Tom laughed at the strange behavior of the cows and ducks. <br />
            <i>Tom riu do comportamento estranho das vacas e dos patos.</i>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="4">
          <Accordion.Header>5. What did Tom learn from his countryside visit?</Accordion.Header>
          <Accordion.Body>
            <h5>O que Tom aprendeu com sua visita ao campo?</h5>
            Tom realized that nature can be both unpredictable and entertaining. <br />
            <i>Tom percebeu que a natureza pode ser imprevisível e divertida.</i>
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
