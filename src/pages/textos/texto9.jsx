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

  const text = "The Butterfly Effect is a psychological science fiction film that explores the chaos theory and the impact of individual choices. The protagonist, Evan Treborn, has the ability to travel through time and alter events from his past, trying to correct mistakes and save people close to him. However, each change he makes brings unexpected consequences, creating a cycle of increasingly chaotic events. The story begins with Evan, now an adult, trying to understand the traumas of his childhood, including the death of his father and the difficulties he and his friends faced over the years. During a visit to university, he discovers that he can go back in time through his diaries, where he writes everything that happened to him. Each time he alters something, a new version of his life and the lives of those around him emerge, but with even deeper and more disturbing consequences. With each trip to the past, Evan realizes that his attempts to improve situations end up creating new problems, sometimes worse than the original ones. The film explores the nature of free will, the consequences of our choices, and the inevitability of certain events. In the end, Evan tries one last time to do the right thing, but the conclusion leaves a reflection on the price of trying to change destiny.";

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


export default function Texto9() {
  return (
    <>
      <Helmet>
        <title>Texto 9</title>
      </Helmet>
      <Header />
      <Logo />
      <HeaderMenuTexto />

      <Container>
        <Row>
          <Col className="coluna-texto1">
            <AudioComponent /> 
            <h2 className="h1-Texto-Inicial">The Butterfly Effect</h2> 
            <h4 className="h5-Textos">
              <p>The Butterfly Effect is a psychological science fiction film that explores the chaos theory and the impact of individual choices. The protagonist, Evan Treborn, has the ability to travel through time and alter events from his past, trying to correct mistakes and save people close to him. However, each change he makes brings unexpected consequences, creating a cycle of increasingly chaotic events.</p>
              <p>The story begins with Evan, now an adult, trying to understand the traumas of his childhood, including the death of his father and the difficulties he and his friends faced over the years. During a visit to university, he discovers that he can go back in time through his diaries, where he writes everything that happened to him. Each time he alters something, a new version of his life and the lives of those around him emerge, but with even deeper and more disturbing consequences.</p>
              <p>With each trip to the past, Evan realizes that his attempts to improve situations end up creating new problems, sometimes worse than the original ones. The film explores the nature of free will, the consequences of our choices, and the inevitability of certain events. In the end, Evan tries one last time to do the right thing, but the conclusion leaves a reflection on the price of trying to change destiny.</p>
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
      <Accordion.Header className="accordion-header"><h2>Tradução do texto</h2></Accordion.Header>
                <Accordion.Body>
                  <h2>O Efeito Borboleta</h2>
                  <br />
                  <p>Efeito Borboleta é um filme de ficção científica psicológico que explora a teoria do caos e o impacto das escolhas individuais. O protagonista, Evan Treborn, tem a capacidade de viajar no tempo e alterar eventos de seu passado, tentando corrigir erros e salvar pessoas próximas a ele. No entanto, cada mudança que ele faz traz consequências inesperadas, criando um ciclo de eventos cada vez mais caóticos.</p>
                  <p>A história começa com Evan, agora adulto, tentando compreender os traumas de sua infância, incluindo a morte de seu pai e as dificuldades que ele e seus amigos enfrentaram ao longo dos anos. Durante uma visita à universidade, ele descobre que pode voltar no tempo por meio de seus diários, onde escreve tudo o que aconteceu com ele. Cada vez que ele altera algo, uma nova versão de sua vida e a vida das pessoas ao seu redor surge, mas com consequências ainda mais profundas e perturbadoras.</p>
                  <p>Com cada viagem ao passado, Evan percebe que suas tentativas de melhorar as situações acabam criando novos problemas, algumas vezes mais graves do que os originais. O filme explora a natureza do livre-arbítrio, as consequências de nossas escolhas e a inevitabilidade de certos eventos. No final, Evan tenta uma última vez fazer a coisa certa, mas a conclusão deixa uma reflexão sobre o preço de tentar mudar o destino.</p>
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
                <Accordion.Header>1. What is the main theme of the movie "Efeito Borboleta"?</Accordion.Header>
                <Accordion.Body>
                  <h5>Qual é o tema principal do filme "Efeito Borboleta"?</h5>
                  The main theme is the impact of individual choices and the theory of chaos. <br />
                  <i>O tema principal é o impacto das escolhas individuais e a teoria do caos.</i>
                </Accordion.Body>
              </Accordion.Item>
              
              <Accordion.Item eventKey="1">
                <Accordion.Header>2. What can Evan Treborn do in the movie?</Accordion.Header>
                <Accordion.Body>
                  <h5>O que Evan Treborn pode fazer no filme?</h5>
                  Evan can travel back in time and change events from his past. <br />
                  <i>Evan pode viajar para o passado e mudar eventos de sua vida.</i>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="2">
                <Accordion.Header>3. What are the consequences of Evan's actions?</Accordion.Header>
                <Accordion.Body>
                  <h5>Quais são as consequências das ações de Evan?</h5>
                  Every time Evan changes something in the past, unexpected and often worse consequences occur. <br />
                  <i>Toda vez que Evan muda algo no passado, consequências inesperadas e frequentemente piores acontecem.</i>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="3">
                <Accordion.Header>4. What is the final message of the movie?</Accordion.Header>
                <Accordion.Body>
                  <h5>Qual é a mensagem final do filme?</h5>
                  The final message is about the price of trying to change destiny and the consequences of our choices. <br />
                  <i>A mensagem final é sobre o preço de tentar mudar o destino e as consequências das nossas escolhas.</i>
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