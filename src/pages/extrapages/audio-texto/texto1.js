import React, { useState, useEffect } from "react";
import Header from '../../../components/header';
import HeaderMenuTexto from '../../../components/header-menu-texto';
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

  const text = "Luciana's dog, Max. Luciana has a lovable dog named Max, who is a mixed breed with a lot of personality. Max has a shiny black coat with patches of white on his chest and paws. He’s about three years old and has boundless energy. Every morning, Luciana takes Max to the local park where he loves to chase after his favorite red ball. Max is very friendly and enjoys meeting new people and other dogs. He has a playful habit of running in circles when he gets excited, which always makes Luciana laugh. At home, Max is a loyal companion. He follows Luciana from room to room and always lies at her feet while she reads or works. He’s especially fond of snuggling on the couch in the evenings. Max has a few tricks up his sleeve; he can sit, stay, and even do a little dance on his hind legs. Luciana makes sure Max gets plenty of exercise and loves to take him on long walks through the neighborhood. Despite his energetic nature, Max is also a calm and gentle dog who is very good with children. Luciana often shares stories about Max's antics with her friends, and everyone who meets him is charmed by his friendly demeanor and playful spirit. Max truly brings joy and companionship to Luciana's life.";

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


export default function Texto1() {
  return (
    <>
      <Helmet>
        <title>Texto 1</title>
      </Helmet>
      <Header />
      <Logo />
      <HeaderMenuTexto />

      <Container>
        <Row>
          <Col>
 <AudioComponent /> 
            
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
        <Accordion.Header className="accordion-header"><h2>Transcrição do texto</h2></Accordion.Header>
        <Accordion.Body>
        <h2 className="h1-Texto-Inicial"> Luciana's dog, Max </h2> 
        <p> Luciana has a lovable dog named Max, who is a mixed breed with a lot of personality. Max has a shiny black coat with patches of white on his chest and paws. He’s about three years old and has boundless energy. Every morning, Luciana takes Max to the local park where he loves to chase after his favorite red ball. Max is very friendly and enjoys meeting new people and other dogs. He has a playful habit of running in circles when he gets excited, which always makes Luciana laugh.</p>
     <p>At home, Max is a loyal companion. He follows Luciana from room to room and always lies at her feet while she reads or works. He’s especially fond of snuggling on the couch in the evenings. Max has a few tricks up his sleeve; he can sit, stay, and even do a little dance on his hind legs. Luciana makes sure Max gets plenty of exercise and loves to take him on long walks through the neighborhood. Despite his energetic nature, Max is also a calm and gentle dog who is very good with children.
        </p>
        <p> Luciana often shares stories about Max's antics with her friends, and everyone who meets him is charmed by his friendly demeanor and playful spirit. Max truly brings joy and companionship to Luciana's life.
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
    <Accordion.Header>1. What is the name of Luciana's dog?</Accordion.Header>
    <Accordion.Body>
      <h5>Qual é o nome do cachorro de Luciana?</h5>
      The name of Luciana's dog is Max. <br />
      <i>O nome do cachorro de Luciana é Max.</i>
    </Accordion.Body>
  </Accordion.Item>
  
  <Accordion.Item eventKey="1">
    <Accordion.Header>2. How would you describe Max's appearance?</Accordion.Header>
    <Accordion.Body>
      <h5>Como você descreveria a aparência de Max?</h5>
      Max has a shiny black coat with patches of white on his chest and paws. He is a mixed breed. <br />
      <i>Max tem uma pelagem preta brilhante com manchas brancas no peito e nas patas. Ele é de raça mista.</i>
    </Accordion.Body>
  </Accordion.Item>

  <Accordion.Item eventKey="2">
    <Accordion.Header>3. What is Max's favorite activity at the park?</Accordion.Header>
    <Accordion.Body>
      <h5>Qual é a atividade favorita de Max no parque?</h5>
      Max's favorite activity at the park is chasing after his favorite red ball. <br />
      <i>A atividade favorita de Max no parque é correr atrás de sua bola vermelha favorita.</i>
    </Accordion.Body>
  </Accordion.Item>

  <Accordion.Item eventKey="3">
    <Accordion.Header>4. How does Max behave at home?</Accordion.Header>
    <Accordion.Body>
      <h5>Como Max se comporta em casa?</h5>
      At home, Max is a loyal companion who follows Luciana from room to room and lies at her feet while she reads or works. He enjoys snuggling on the couch in the evenings. <br />
      <i>Em casa, Max é um companheiro leal que segue Luciana de cômodo em cômodo e deita aos seus pés enquanto ela lê ou trabalha. Ele gosta de se aconchegar no sofá à noite.</i>
    </Accordion.Body>
  </Accordion.Item>

  <Accordion.Item eventKey="4">
    <Accordion.Header>5. What tricks can Max do?</Accordion.Header>
    <Accordion.Body>
      <h5>Que truques Max sabe fazer?</h5>
      Max can sit, stay, and do a little dance on his hind legs. <br />
      <i>Max sabe sentar, ficar parado e fazer uma pequena dança nas patas traseiras.</i>
    </Accordion.Body>
  </Accordion.Item>

  <Accordion.Item eventKey="5">
    <Accordion.Header>6. How does Luciana ensure Max gets enough exercise?</Accordion.Header>
    <Accordion.Body>
      <h5>Como Luciana garante que Max faça exercícios suficientes?</h5>
      Luciana ensures Max gets enough exercise by taking him on long walks through the neighborhood and playing with him at the park. <br />
      <i>Luciana garante que Max faça exercícios suficientes levando-o para longas caminhadas pelo bairro e brincando com ele no parque.</i>
    </Accordion.Body>
  </Accordion.Item>

  <Accordion.Item eventKey="6">
    <Accordion.Header>7. How does Max interact with other people and dogs?</Accordion.Header>
    <Accordion.Body>
      <h5>Como Max interage com outras pessoas e cães?</h5>
      Max is very friendly and enjoys meeting new people and other dogs. He has a playful spirit and is often described as charming by those who meet him. <br />
      <i>Max é muito amigável e gosta de conhecer novas pessoas e outros cães. Ele tem um espírito brincalhão e é frequentemente descrito como encantador por aqueles que o conhecem.</i>
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