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

  const text = "The Camping Trip. It was a beautiful weekend when Millie and her friends decided to go camping. They set up their tents by the lake, surrounded by trees and the sounds of nature. The air was fresh, and the sky was clear. They spent the afternoon hiking, exploring the woods, and enjoying each other's company. As the night came, they gathered around the campfire, roasting marshmallows and telling stories. They were all excited about the adventure, but little did they know that something unexpected was about to happen. While they were getting ready to sleep inside their tents, they noticed a large shadow moving near one of the tents. To their shock, it was an alligator! The group froze in fear, unsure of what to do. But just then, a man from Florida appeared, running towards them with confidence. Without hesitation, he rushed toward the alligator and, in an incredible display of bravery, fought the creature off. With a few well-placed moves, he managed to defeat the alligator, sending it fleeing into the woods. Relieved and still in awe of what they had just witnessed, the group thanked the man for his bravery. After the excitement died down, they finally settled back into their tents, feeling safe once again. Despite the terrifying encounter, they all fell asleep, knowing it had been a camping trip they would never forget.";

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


export default function Texto4() {
    return(
<>
<Helmet>
        <title>Texto 4</title>
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
            <h2>The Camping Trip</h2>
            <br />
            <p>It was a beautiful weekend when Millie and her friends decided to go camping. They set up their tents by the lake, surrounded by trees and the sounds of nature. The air was fresh, and the sky was clear. They spent the afternoon hiking, exploring the woods, and enjoying each other's company.</p>

<p>As the night came, they gathered around the campfire, roasting marshmallows and telling stories. They were all excited about the adventure, but little did they know that something unexpected was about to happen.</p>

<p>While they were getting ready to sleep inside their tents, they noticed a large shadow moving near one of the tents. To their shock, it was an alligator! The group froze in fear, unsure of what to do. But just then, a man from Florida appeared, running towards them with confidence. Without hesitation, he rushed toward the alligator and, in an incredible display of bravery, fought the creature off. With a few well-placed moves, he managed to defeat the alligator, sending it fleeing into the woods.</p>

<p>Relieved and still in awe of what they had just witnessed, the group thanked the man for his bravery. After the excitement died down, they finally settled back into their tents, feeling safe once again. Despite the terrifying encounter, they all fell asleep, knowing it had been a camping trip they would never forget.</p>

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
          <Accordion.Header>1. What did Millie and her friends do on the camping trip?</Accordion.Header>
          <Accordion.Body>
            <h5>O que Millie e seus amigos fizeram na viagem de acampamento?</h5>
            They set up their tents near a lake and explored the forest. <br />
            <i>Eles montaram suas barracas perto de um lago e exploraram a floresta.</i>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
          <Accordion.Header>2. What did Millie and her friends do in the evening around the campfire?</Accordion.Header>
          <Accordion.Body>
            <h5>O que Millie e seus amigos fizeram à noite ao redor da fogueira?</h5>
            They roasted marshmallows and told stories. <br />
            <i>Eles assaram marshmallows e contaram histórias.</i>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header>3. What unexpected event happened during the camping trip?</Accordion.Header>
          <Accordion.Body>
            <h5>Que evento inesperado aconteceu durante a viagem de acampamento?</h5>
            A crocodile appeared near their tent. <br />
            <i>Um jacaré apareceu perto da barraca deles.</i>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="3">
          <Accordion.Header>4. How did the man from Florida handle the crocodile?</Accordion.Header>
          <Accordion.Body>
            <h5>Como o homem da Flórida lidou com o jacaré?</h5>
            He fought the crocodile and managed to drive it away. <br />
            <i>Ele lutou com o jacaré e conseguiu espantá-lo.</i>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="4">
          <Accordion.Header>5. How did Millie and her friends feel after the crocodile incident?</Accordion.Header>
          <Accordion.Body>
            <h5>Como Millie e seus amigos se sentiram após o incidente com o jacaré?</h5>
            They felt relieved and grateful for the man’s bravery. <br />
            <i>Eles se sentiram aliviados e gratos pela coragem do homem.</i>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="5">
          <Accordion.Header>6. What did Millie and her friends do after the crocodile incident?</Accordion.Header>
          <Accordion.Body>
            <h5>O que Millie e seus amigos fizeram após o incidente com o jacaré?</h5>
            They went back to their tents and went to sleep peacefully. <br />
            <i>Eles voltaram para suas barracas e dormiram tranquilamente.</i>
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
