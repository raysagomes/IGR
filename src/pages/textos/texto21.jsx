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

  const text = "The Art Class Surprise. Emma had always considered herself terrible at art. Throughout school, she avoided art classes and believed she had no creative talent whatsoever. However, when she started college, she needed one more elective credit to complete her schedule, and the only available class was Introduction to Painting. Reluctantly, Emma signed up for the class, expecting to struggle through it and barely pass. On the first day, Professor Martinez welcomed the students with enthusiasm and explained that art was about expression, not perfection. Emma felt slightly more at ease but still doubted her abilities. The first assignment was to paint something that made them happy. Emma thought for hours about what to paint. Finally, she decided to paint her grandmother's garden, a place where she had spent countless happy hours as a child. She remembered the bright sunflowers, the purple lavender, and the old wooden bench where she used to sit with her grandmother. As Emma began to paint, something magical happened. She lost track of time and became completely absorbed in recreating the colors and memories of that special place. Her brushstrokes became more confident, and she found herself enjoying the process. When she finished, Emma was amazed by what she had created. The painting wasn't perfect, but it captured the warmth and joy of her grandmother's garden beautifully. Professor Martinez praised her work, saying it showed real emotion and connection. Emma realized that art wasn't about being perfect; it was about expressing feelings and memories. She continued taking art classes and discovered a passion she never knew she had.";

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


export default function Texto21() {
  return (
    <>
      <Helmet>
        <title>Texto21</title>
      </Helmet>
      <Header />
      <Logo />
      <HeaderMenuTexto />
      <Container>
        <Row>
          <Col className="coluna-texto1">
            <AudioComponent />
            <h2 className="h1-Texto-Inicial">The Art Class Surprise</h2>
            <h4 className="h5-Textos">
              <p>Emma had always considered herself terrible at art. Throughout school, she avoided art classes and believed she had no creative talent whatsoever. However, when she started college, she needed one more elective credit to complete her schedule, and the only available class was Introduction to Painting.</p>
              <p>Reluctantly, Emma signed up for the class, expecting to struggle through it and barely pass. On the first day, Professor Martinez welcomed the students with enthusiasm and explained that art was about expression, not perfection. Emma felt slightly more at ease but still doubted her abilities.</p>
              <p>The first assignment was to paint something that made them happy. Emma thought for hours about what to paint. Finally, she decided to paint her grandmother's garden, a place where she had spent countless happy hours as a child. She remembered the bright sunflowers, the purple lavender, and the old wooden bench where she used to sit with her grandmother.</p>
              <p>As Emma began to paint, something magical happened. She lost track of time and became completely absorbed in recreating the colors and memories of that special place. Her brushstrokes became more confident, and she found herself enjoying the process.</p>
              <p>When she finished, Emma was amazed by what she had created. The painting wasn't perfect, but it captured the warmth and joy of her grandmother's garden beautifully. Professor Martinez praised her work, saying it showed real emotion and connection. Emma realized that art wasn't about being perfect; it was about expressing feelings and memories. She continued taking art classes and discovered a passion she never knew she had.</p>
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
                  <h2>A Surpresa da Aula de Arte</h2>
                  <br />
                  <p>Emma sempre se considerou terrível em arte. Durante toda a escola, ela evitou aulas de arte e acreditava que não tinha nenhum talento criativo. No entanto, quando começou a faculdade, ela precisava de mais um crédito eletivo para completar sua grade, e a única aula disponível era Introdução à Pintura.</p>
                  <p>Relutantemente, Emma se inscreveu na aula, esperando ter dificuldades e mal conseguir passar. No primeiro dia, o Professor Martinez recebeu os alunos com entusiasmo e explicou que arte era sobre expressão, não perfeição. Emma se sentiu um pouco mais à vontade, mas ainda duvidava de suas habilidades.</p>
                  <p>A primeira tarefa era pintar algo que os fizesse felizes. Emma pensou por horas sobre o que pintar. Finalmente, decidiu pintar o jardim de sua avó, um lugar onde havia passado inúmeras horas felizes quando criança. Ela se lembrava dos girassóis brilhantes, da lavanda roxa e do velho banco de madeira onde costumava sentar com sua avó.</p>
                  <p>Quando Emma começou a pintar, algo mágico aconteceu. Ela perdeu a noção do tempo e ficou completamente absorta em recriar as cores e memórias daquele lugar especial. Suas pinceladas se tornaram mais confiantes, e ela se viu gostando do processo.</p>
                  <p>Quando terminou, Emma ficou impressionada com o que havia criado. A pintura não estava perfeita, mas capturava lindamente o calor e a alegria do jardim de sua avó. O Professor Martinez elogiou seu trabalho, dizendo que mostrava emoção e conexão reais. Emma percebeu que arte não era sobre ser perfeita; era sobre expressar sentimentos e memórias. Ela continuou fazendo aulas de arte e descobriu uma paixão que nunca soube que tinha.</p>
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
                <Accordion.Header>1. Why did Emma sign up for the painting class?</Accordion.Header>
                <Accordion.Body>
                  <h5>Por que Emma se inscreveu na aula de pintura?</h5>
                  Emma needed one more elective credit and it was the only available class. <br />
                  <i>Emma precisava de mais um crédito eletivo e era a única aula disponível.</i>
                </Accordion.Body>
              </Accordion.Item>
              
              <Accordion.Item eventKey="1">
                <Accordion.Header>2. What did Professor Martinez say about art on the first day?</Accordion.Header>
                <Accordion.Body>
                  <h5>O que o Professor Martinez disse sobre arte no primeiro dia?</h5>
                  Professor Martinez said that art was about expression, not perfection. <br />
                  <i>O Professor Martinez disse que arte era sobre expressão, não perfeição.</i>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="2">
                <Accordion.Header>3. What did Emma choose to paint for her first assignment?</Accordion.Header>
                <Accordion.Body>
                  <h5>O que Emma escolheu pintar para sua primeira tarefa?</h5>
                  Emma chose to paint her grandmother's garden. <br />
                  <i>Emma escolheu pintar o jardim de sua avó.</i>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="3">
                <Accordion.Header>4. What happened when Emma started painting?</Accordion.Header>
                <Accordion.Body>
                  <h5>O que aconteceu quando Emma começou a pintar?</h5>
                  Emma lost track of time and became completely absorbed in the process. <br />
                  <i>Emma perdeu a noção do tempo e ficou completamente absorta no processo.</i>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="4">
                <Accordion.Header>5. What did Emma learn about art from this experience?</Accordion.Header>
                <Accordion.Body>
                  <h5>O que Emma aprendeu sobre arte com essa experiência?</h5>
                  Emma learned that art wasn't about being perfect; it was about expressing feelings and memories. <br />
                  <i>Emma aprendeu que arte não era sobre ser perfeita; era sobre expressar sentimentos e memórias.</i>
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