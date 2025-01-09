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

  const text = "A Carnival Adventure. Sophie had been looking forward to the carnival all week. She imagined thrilling rides and exciting games. When she got there, her first stop was the Ferris wheel, but it wasn’t moving. Instead, the operator was stuck at the top, waving frantically for help. The crowd below couldn’t stop laughing, and Sophie joined in, snapping a picture of the funny yet unusual sight. Next, Sophie tried her luck at the ring toss. She threw a ring so wildly that it landed on the head of a stuffed bear sitting on the prize shelf. The vendor awarded her the bear, saying: That’s a first! Sophie laughed at her accidental win and hugged the bear tightly, proud of her unique skills. By the end of the day, Sophie realized the carnival wasn’t just about thrills—it was about the unexpected, hilarious moments that made her experience unforgettable. She left with a stuffed bear, sore cheeks from laughing, and a story to share with her friends.";

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

export default function Texto8() {
    return(
<>
<Helmet>
        <title>Texto 8</title>
      </Helmet>
<Header />
<Logo />
<HeaderMenuTexto />

<Container>
  <Row>
    <Col className="coluna-texto1">
    <AudioComponent /> 

      <h2 className="h1-Texto-Inicial">A Carnival Adventure</h2>
      <h4 className="h5-Textos">
  <p>Sophie had been looking forward to the carnival all week. She imagined thrilling rides and exciting games. When she got there, her first stop was the Ferris wheel, but it wasn’t moving. Instead, the operator was stuck at the top, waving frantically for help. The crowd below couldn’t stop laughing, and Sophie joined in, snapping a picture of the funny yet unusual sight.</p>
  
  <p>Next, Sophie tried her luck at the ring toss. She threw a ring so wildly that it landed on the head of a stuffed bear sitting on the prize shelf. The vendor awarded her the bear, saying, "That’s a first!" Sophie laughed at her accidental win and hugged the bear tightly, proud of her unique skills.</p>
  
  <p>By the end of the day, Sophie realized the carnival wasn’t just about thrills—it was about the unexpected, hilarious moments that made her experience unforgettable. She left with a stuffed bear, sore cheeks from laughing, and a story to share with her friends.</p>
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
      <Accordion className="justify-content-center">
        <Accordion.Item eventKey="0" className="Accordion">
        <Accordion.Header>
  <h2>Tradução do texto</h2>
</Accordion.Header>
<Accordion.Body>
<h2>Uma Aventura no Carnaval</h2>
  <br />
  <p>Sophie estava ansiosa para o carnaval durante toda a semana. Ela imaginava brinquedos emocionantes e jogos divertidos. Quando chegou, sua primeira parada foi a roda-gigante, mas ela não estava funcionando. Em vez disso, o operador estava preso no topo, acenando freneticamente por ajuda. A multidão abaixo não conseguiu conter o riso, e Sophie se juntou, tirando uma foto do cenário engraçado, embora inusitado.</p>
  
  <p>Em seguida, Sophie tentou sua sorte no jogo de argolas. Ela jogou uma argola tão desajeitadamente que acabou pousando na cabeça de um urso de pelúcia na prateleira dos prêmios. O vendedor entregou o urso como prêmio, dizendo: "Isso é uma novidade!" Sophie riu da sua vitória acidental e abraçou o urso com força, orgulhosa de suas habilidades únicas.</p>
  
  <p>Ao final do dia, Sophie percebeu que o carnaval não era apenas sobre emoções fortes—era sobre os momentos inesperados e engraçados que tornaram sua experiência inesquecível. Ela foi embora com um urso de pelúcia, as bochechas doendo de tanto rir e histórias para compartilhar com os amigos.</p>
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
          <Accordion.Header>1. What did Sophie see at the carnival?</Accordion.Header>
          <Accordion.Body>
            <h5>O que Sophie viu no carnaval?</h5>
            Sophie saw the Ferris wheel operator stuck at the top and accidentally won a stuffed bear. <br />
            <i>Sophie viu o operador da roda-gigante preso no topo e ganhou acidentalmente um urso de pelúcia.</i>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
          <Accordion.Header>2. Why was Sophie surprised about winning the stuffed bear?</Accordion.Header>
          <Accordion.Body>
            <h5>Por que Sophie ficou surpresa ao ganhar o urso de pelúcia?</h5>
            Sophie was surprised because she wasn't trying to win, but she still did. <br />
            <i>Sophie ficou surpresa porque não estava tentando ganhar, mas mesmo assim conseguiu.</i>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header>3. What made the Ferris wheel memorable for Sophie?</Accordion.Header>
          <Accordion.Body>
            <h5>O que tornou a roda-gigante memorável para Sophie?</h5>
            The Ferris wheel operator got stuck, creating an unexpected and funny moment. <br />
            <i>O operador da roda-gigante ficou preso, criando um momento inesperado e engraçado.</i>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="3">
          <Accordion.Header>4. How did Sophie feel about the carnival overall?</Accordion.Header>
          <Accordion.Body>
            <h5>Como Sophie se sentiu sobre o carnaval no geral?</h5>
            Sophie enjoyed the carnival because of the funny incidents and her lucky prize. <br />
            <i>Sophie gostou do carnaval por causa dos incidentes engraçados e de seu prêmio de sorte.</i>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="4">
          <Accordion.Header>5. What lesson did Sophie learn from the carnival experience?</Accordion.Header>
          <Accordion.Body>
            <h5>Que lição Sophie aprendeu com a experiência do carnaval?</h5>
            Sophie learned to enjoy unexpected moments and laugh at life's surprises. <br />
            <i>Sophie aprendeu a aproveitar momentos inesperados e rir das surpresas da vida.</i>
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
