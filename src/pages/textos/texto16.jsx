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

  const text = "Maria's First Day at Work. Maria was nervous about her first day at the new marketing company. She had prepared everything the night before: her outfit, her documents, and even practiced her introduction in front of the mirror. When she arrived at the office building, she was impressed by its modern design and bustling atmosphere. Her supervisor, Mr. Johnson, welcomed her warmly and gave her a tour of the facilities. Maria met her new colleagues, who seemed friendly and eager to help her settle in. During lunch, she joined a group of coworkers who shared stories about their projects and gave her useful tips about working at the company. The afternoon was spent learning about the company's software systems and attending her first team meeting. Maria felt overwhelmed by all the new information, but she was excited about the challenges ahead. By the end of the day, she realized that her worries had been unnecessary. Everyone was supportive, and she felt confident that she would enjoy working there. Maria left the office with a smile, looking forward to her second day.";

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


export default function Texto16() {
  return (
    <>
      <Helmet>
        <title>Texto16</title>
      </Helmet>
      <Header />
      <Logo />
      <HeaderMenuTexto />
      <Container>
        <Row>
          <Col className="coluna-texto1">
            <AudioComponent />
            <h2 className="h1-Texto-Inicial">Maria's First Day at Work</h2>
            <h4 className="h5-Textos">
              <p>Maria was nervous about her first day at the new marketing company. She had prepared everything the night before: her outfit, her documents, and even practiced her introduction in front of the mirror. When she arrived at the office building, she was impressed by its modern design and bustling atmosphere.</p>
              <p>Her supervisor, Mr. Johnson, welcomed her warmly and gave her a tour of the facilities. Maria met her new colleagues, who seemed friendly and eager to help her settle in. During lunch, she joined a group of coworkers who shared stories about their projects and gave her useful tips about working at the company.</p>
              <p>The afternoon was spent learning about the company's software systems and attending her first team meeting. Maria felt overwhelmed by all the new information, but she was excited about the challenges ahead. By the end of the day, she realized that her worries had been unnecessary. Everyone was supportive, and she felt confident that she would enjoy working there. Maria left the office with a smile, looking forward to her second day.</p>
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
                  <h2>O Primeiro Dia de Trabalho da Maria</h2>
                  <br />
                  <p>Maria estava nervosa com seu primeiro dia na nova empresa de marketing. Ela havia preparado tudo na noite anterior: sua roupa, seus documentos e até praticou sua apresentação na frente do espelho. Quando chegou ao prédio do escritório, ficou impressionada com seu design moderno e atmosfera movimentada.</p>
                  <p>Seu supervisor, Sr. Johnson, a recebeu calorosamente e lhe deu um tour pelas instalações. Maria conheceu seus novos colegas, que pareciam amigáveis e ansiosos para ajudá-la a se adaptar. Durante o almoço, ela se juntou a um grupo de colegas de trabalho que compartilharam histórias sobre seus projetos e lhe deram dicas úteis sobre trabalhar na empresa.</p>
                  <p>A tarde foi gasta aprendendo sobre os sistemas de software da empresa e participando de sua primeira reunião de equipe. Maria se sentiu sobrecarregada com todas as novas informações, mas estava animada com os desafios pela frente. No final do dia, ela percebeu que suas preocupações haviam sido desnecessárias. Todos foram solidários, e ela se sentiu confiante de que gostaria de trabalhar lá. Maria saiu do escritório com um sorriso, ansiosa pelo seu segundo dia.</p>
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
                <Accordion.Header>1. How did Maria prepare for her first day at work?</Accordion.Header>
                <Accordion.Body>
                  <h5>Como Maria se preparou para seu primeiro dia de trabalho?</h5>
                  Maria prepared her outfit, documents, and practiced her introduction in front of the mirror. <br />
                  <i>Maria preparou sua roupa, documentos e praticou sua apresentação na frente do espelho.</i>
                </Accordion.Body>
              </Accordion.Item>
              
              <Accordion.Item eventKey="1">
                <Accordion.Header>2. What impressed Maria about the office building?</Accordion.Header>
                <Accordion.Body>
                  <h5>O que impressionou Maria sobre o prédio do escritório?</h5>
                  Maria was impressed by its modern design and bustling atmosphere. <br />
                  <i>Maria ficou impressionada com seu design moderno e atmosfera movimentada.</i>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="2">
                <Accordion.Header>3. How did Maria's colleagues treat her on her first day?</Accordion.Header>
                <Accordion.Body>
                  <h5>Como os colegas de Maria a trataram em seu primeiro dia?</h5>
                  Her colleagues seemed friendly and eager to help her settle in. <br />
                  <i>Seus colegas pareciam amigáveis e ansiosos para ajudá-la a se adaptar.</i>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="3">
                <Accordion.Header>4. What did Maria do during lunch?</Accordion.Header>
                <Accordion.Body>
                  <h5>O que Maria fez durante o almoço?</h5>
                  She joined a group of coworkers who shared stories and gave her useful tips. <br />
                  <i>Ela se juntou a um grupo de colegas que compartilharam histórias e lhe deram dicas úteis.</i>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="4">
                <Accordion.Header>5. How did Maria feel at the end of her first day?</Accordion.Header>
                <Accordion.Body>
                  <h5>Como Maria se sentiu no final de seu primeiro dia?</h5>
                  She felt confident and excited, realizing her worries had been unnecessary. <br />
                  <i>Ela se sentiu confiante e animada, percebendo que suas preocupações haviam sido desnecessárias.</i>
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