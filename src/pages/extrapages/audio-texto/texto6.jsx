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

  const text = "A Visit to the Zoo. Silvie was excited to visit the zoo, expecting to see majestic lions roaming freely. However, when she arrived at the lion's den, she was disappointed to find a group of lethargic, plump lions who barely moved. They seemed more interested in taking a nap than showcasing their grandeur. Silvie couldn’t help but laugh at how different they were from the fierce, powerful lions she had imagined. Next, she went to see the monkeys, expecting to witness them swinging energetically from branch to branch. Instead, she found a bunch of monkeys that looked like they were wearing costumes. They moved slowly, with none of the playful energy Silvie had hoped for. It felt like a scene from a comedy, and Silvie couldn’t stop giggling at how peculiar they looked. Even though the animals were not as exciting as Silvie had anticipated, she still enjoyed her time at the zoo, laughing at the unexpected sight of the sleepy lions and the comical monkeys. It was a day full of surprises, and Silvie left the zoo with a big smile on her face, grateful for the experience.";

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


export default function Texto6() {
    return(
<>
<Helmet>
        <title>Texto 6</title>
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
            <h2>Transcrição do Texto</h2>
          </Accordion.Header>
          <Accordion.Body>
            <h2>A Visit to the Zoo</h2>
            <br />
            <p>Silvie was excited to visit the zoo, expecting to see majestic lions roaming freely. However, when she arrived at the lion's den, she was disappointed to find a group of lethargic, plump lions who barely moved. They seemed more interested in taking a nap than showcasing their grandeur. Silvie couldn’t help but laugh at how different they were from the fierce, powerful lions she had imagined.</p>
        
        <p>Next, she went to see the monkeys, expecting to witness them swinging energetically from branch to branch. Instead, she found a bunch of monkeys that looked like they were wearing costumes. They moved slowly, with none of the playful energy Silvie had hoped for. It felt like a scene from a comedy, and Silvie couldn’t stop giggling at how peculiar they looked.</p>
        
        <p>Even though the animals were not as exciting as Silvie had anticipated, she still enjoyed her time at the zoo, laughing at the unexpected sight of the sleepy lions and the comical monkeys. It was a day full of surprises, and Silvie left the zoo with a big smile on her face, grateful for the experience.</p>
      
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
          <Accordion.Header>1. What did Silvie expect to see at the zoo?</Accordion.Header>
          <Accordion.Body>
            <h5>O que Silvie esperava ver no zoológico?</h5>
            Silvie expected to see majestic lions, but instead, she saw lazy and fat lions. <br />
            <i>Silvie esperava ver leões majestosos, mas encontrou leões preguiçosos e gordos.</i>
          </Accordion.Body>
        </Accordion.Item>
        
        <Accordion.Item eventKey="1">
          <Accordion.Header>2. What was surprising about the monkeys at the zoo?</Accordion.Header>
          <Accordion.Body>
            <h5>O que foi surpreendente sobre os macacos no zoológico?</h5>
            The monkeys looked like they were wearing costumes and moved slowly, unlike what Silvie expected. <br />
            <i>Os macacos pareciam estar usando fantasias e se moviam devagar, diferente do que Silvie esperava.</i>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header>3. How did Silvie feel after visiting the zoo?</Accordion.Header>
          <Accordion.Body>
            <h5>Como Silvie se sentiu após visitar o zoológico?</h5>
            Silvie felt amused and laughed at the unexpected sight of the lazy lions and funny monkeys. <br />
            <i>Silvie se sentiu divertida e riu da visão inesperada dos leões preguiçosos e dos macacos engraçados.</i>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="3">
          <Accordion.Header>4. What animals disappointed Silvie at the zoo?</Accordion.Header>
          <Accordion.Body>
            <h5>Quais animais desapontaram Silvie no zoológico?</h5>
            Silvie was disappointed by the lazy lions and slow monkeys. <br />
            <i>Silvie ficou desapontada com os leões preguiçosos e os macacos lentos.</i>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="4">
          <Accordion.Header>5. What was Silvie's reaction to the lions?</Accordion.Header>
          <Accordion.Body>
            <h5>Qual foi a reação de Silvie ao ver os leões?</h5>
            Silvie was surprised by how different the lions were from what she expected. <br />
            <i>Silvie ficou surpresa com a diferença dos leões do que ela esperava.</i>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="5">
          <Accordion.Header>6. Did Silvie enjoy her visit to the zoo?</Accordion.Header>
          <Accordion.Body>
            <h5>Silvie gostou da sua visita ao zoológico?</h5>
            Yes, despite the animals not being as exciting as she thought, Silvie had fun and laughed a lot. <br />
            <i>Sim, apesar dos animais não serem tão emocionantes quanto ela pensava, Silvie se divertiu e riu muito.</i>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="6">
          <Accordion.Header>7. What was the unexpected aspect of the monkeys?</Accordion.Header>
          <Accordion.Body>
            <h5>Qual foi o aspecto inesperado dos macacos?</h5>
            The monkeys seemed to be dressed in costumes and didn't behave as expected. <br />
            <i>Os macacos pareciam estar fantasiados e não se comportaram como o esperado.</i>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="7">
          <Accordion.Header>8. How did Silvie feel about the zoo after her visit?</Accordion.Header>
          <Accordion.Body>
            <h5>Como Silvie se sentiu sobre o zoológico após sua visita?</h5>
            Silvie left the zoo with a smile, happy for the unexpected fun. <br />
            <i>Silvie saiu do zoológico com um sorriso, feliz pela diversão inesperada.</i>
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
