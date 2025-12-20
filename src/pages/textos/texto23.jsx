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

  const text = "The Power Outage Adventure. It was a stormy Tuesday evening when the lights suddenly went out in Rachel's apartment building. She had been working on her laptop when everything went dark. At first, she thought it was just her apartment, but looking out the window, she could see that the entire neighborhood was without power. Rachel fumbled around in the dark, trying to find her phone's flashlight. She managed to locate some candles in her kitchen drawer and lit them carefully. The flickering candlelight created dancing shadows on the walls, making her small apartment feel mysterious and cozy at the same time. Without her usual distractions of television, internet, and electronic devices, Rachel found herself in an unusual situation. She decided to make the best of it and pulled out a book she had been meaning to read for months. As she read by candlelight, she felt transported back to simpler times when people relied on natural light and their imagination for entertainment. Around 9 PM, she heard a knock on her door. It was her elderly neighbor, Mr. Thompson, who was checking on everyone in the building. He had brought extra candles and was making sure everyone was safe and comfortable. Together, they went door to door, checking on other neighbors and sharing candles with those who needed them. What started as an inconvenience turned into a wonderful opportunity for the building's residents to connect with each other. They gathered in the lobby, sharing stories and getting to know each other better than they ever had before. When the power finally returned at midnight, Rachel felt a little disappointed that the magical evening was over.";

  useEffect(() => {
    const loadVoices = () => {
      const availableVoices = window.speechSynthesis.getVoices();
      let specificVoice = availableVoices.find(
        voice => voice.name === "Microsoft Jenny Online (Natural) - English (United States)"
      );
      if (!specificVoice) {
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


export default function Texto23() {
  return (
    <>
      <Helmet>
        <title>Texto23</title>
      </Helmet>
      <Header />
      <Logo />
      <HeaderMenuTexto />
      <Container>
        <Row>
          <Col className="coluna-texto1">
            <AudioComponent />
            <h2 className="h1-Texto-Inicial">The Power Outage Adventure</h2>
            <h4 className="h5-Textos">
              <p>It was a stormy Tuesday evening when the lights suddenly went out in Rachel's apartment building. She had been working on her laptop when everything went dark. At first, she thought it was just her apartment, but looking out the window, she could see that the entire neighborhood was without power.</p>
              <p>Rachel fumbled around in the dark, trying to find her phone's flashlight. She managed to locate some candles in her kitchen drawer and lit them carefully. The flickering candlelight created dancing shadows on the walls, making her small apartment feel mysterious and cozy at the same time.</p>
              <p>Without her usual distractions of television, internet, and electronic devices, Rachel found herself in an unusual situation. She decided to make the best of it and pulled out a book she had been meaning to read for months. As she read by candlelight, she felt transported back to simpler times when people relied on natural light and their imagination for entertainment.</p>
              <p>Around 9 PM, she heard a knock on her door. It was her elderly neighbor, Mr. Thompson, who was checking on everyone in the building. He had brought extra candles and was making sure everyone was safe and comfortable. Together, they went door to door, checking on other neighbors and sharing candles with those who needed them.</p>
              <p>What started as an inconvenience turned into a wonderful opportunity for the building's residents to connect with each other. They gathered in the lobby, sharing stories and getting to know each other better than they ever had before. When the power finally returned at midnight, Rachel felt a little disappointed that the magical evening was over.</p>
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
                  <h2>A Aventura do Apagão</h2>
                  <br />
                  <p>Era uma terça-feira tempestuosa à noite quando as luzes de repente se apagaram no prédio de apartamentos de Rachel. Ela estava trabalhando em seu laptop quando tudo escureceu. No início, ela pensou que era apenas seu apartamento, mas olhando pela janela, pôde ver que todo o bairro estava sem energia.</p>
                  <p>Rachel tateou no escuro, tentando encontrar a lanterna do seu telefone. Conseguiu localizar algumas velas na gaveta da cozinha e as acendeu cuidadosamente. A luz vacilante das velas criou sombras dançantes nas paredes, fazendo seu pequeno apartamento parecer misterioso e aconchegante ao mesmo tempo.</p>
                  <p>Sem suas distrações usuais de televisão, internet e dispositivos eletrônicos, Rachel se encontrou em uma situação incomum. Decidiu aproveitar ao máximo e pegou um livro que estava querendo ler há meses. Enquanto lia à luz de velas, se sentiu transportada de volta a tempos mais simples, quando as pessoas dependiam da luz natural e de sua imaginação para entretenimento.</p>
                  <p>Por volta das 21h, ela ouviu uma batida na porta. Era seu vizinho idoso, Sr. Thompson, que estava verificando todos no prédio. Ele havia trazido velas extras e estava se certificando de que todos estavam seguros e confortáveis. Juntos, foram de porta em porta, verificando outros vizinhos e compartilhando velas com quem precisava.</p>
                  <p>O que começou como um inconveniente se transformou em uma oportunidade maravilhosa para os moradores do prédio se conectarem uns com os outros. Eles se reuniram no saguão, compartilhando histórias e se conhecendo melhor do que jamais haviam feito antes. Quando a energia finalmente voltou à meia-noite, Rachel se sentiu um pouco desapontada que a noite mágica havia acabado.</p>
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
                <Accordion.Header>1. What was Rachel doing when the power went out?</Accordion.Header>
                <Accordion.Body>
                  <h5>O que Rachel estava fazendo quando a energia acabou?</h5>
                  Rachel was working on her laptop when the power went out. <br />
                  <i>Rachel estava trabalhando em seu laptop quando a energia acabou.</i>
                </Accordion.Body>
              </Accordion.Item>
              
              <Accordion.Item eventKey="1">
                <Accordion.Header>2. How did Rachel light up her apartment?</Accordion.Header>
                <Accordion.Body>
                  <h5>Como Rachel iluminou seu apartamento?</h5>
                  Rachel found candles in her kitchen drawer and lit them carefully. <br />
                  <i>Rachel encontrou velas na gaveta da cozinha e as acendeu cuidadosamente.</i>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="2">
                <Accordion.Header>3. What did Rachel do without her electronic devices?</Accordion.Header>
                <Accordion.Body>
                  <h5>O que Rachel fez sem seus dispositivos eletrônicos?</h5>
                  Rachel pulled out a book she had been meaning to read for months. <br />
                  <i>Rachel pegou um livro que estava querendo ler há meses.</i>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="3">
                <Accordion.Header>4. Who came to check on Rachel and the other neighbors?</Accordion.Header>
                <Accordion.Body>
                  <h5>Quem veio verificar Rachel e os outros vizinhos?</h5>
                  Mr. Thompson, her elderly neighbor, came to check on everyone in the building. <br />
                  <i>Sr. Thompson, seu vizinho idoso, veio verificar todos no prédio.</i>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="4">
                <Accordion.Header>5. How did Rachel feel when the power returned?</Accordion.Header>
                <Accordion.Body>
                  <h5>Como Rachel se sentiu quando a energia voltou?</h5>
                  Rachel felt a little disappointed that the magical evening was over. <br />
                  <i>Rachel se sentiu um pouco desapontada que a noite mágica havia acabado.</i>
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