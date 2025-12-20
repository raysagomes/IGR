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

  const text = "The Wedding Photographer's Challenge. Marcus had been a wedding photographer for five years, but he had never faced a challenge quite like this one. The bride and groom had chosen to have their ceremony on a remote beach during sunset, which sounded romantic and beautiful in theory. However, when Marcus arrived at the location, he discovered several unexpected problems. First, the wind was much stronger than anticipated, making it difficult to keep his equipment stable. Sand was getting into his camera gear, and he had to constantly clean his lenses. The lighting was changing rapidly as the sun moved toward the horizon, requiring him to adjust his camera settings every few minutes. To make matters worse, the tide was coming in faster than expected, and the wedding party had to keep moving further up the beach. Marcus had to think quickly and adapt his usual shooting style. Instead of fighting against the natural elements, he decided to embrace them. He captured stunning shots of the bride's dress flowing in the wind and the couple's hair dancing in the breeze. The changing light created dramatic silhouettes and golden reflections on the water. When a seagull photobombed one of the ceremony shots, instead of being frustrated, Marcus captured the moment, and it became one of the couple's favorite photos. The unpredictable waves in the background added movement and life to the pictures. By the end of the evening, Marcus realized that some of his best work came from adapting to unexpected circumstances rather than trying to control every detail. The couple was thrilled with the unique and natural photos that perfectly captured the wild beauty of their beach wedding.";

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


export default function Texto24() {
  return (
    <>
      <Helmet>
        <title>Texto24</title>
      </Helmet>
      <Header />
      <Logo />
      <HeaderMenuTexto />
      <Container>
        <Row>
          <Col className="coluna-texto1">
            <AudioComponent />
            <h2 className="h1-Texto-Inicial">The Wedding Photographer's Challenge</h2>
            <h4 className="h5-Textos">
              <p>Marcus had been a wedding photographer for five years, but he had never faced a challenge quite like this one. The bride and groom had chosen to have their ceremony on a remote beach during sunset, which sounded romantic and beautiful in theory. However, when Marcus arrived at the location, he discovered several unexpected problems.</p>
              <p>First, the wind was much stronger than anticipated, making it difficult to keep his equipment stable. Sand was getting into his camera gear, and he had to constantly clean his lenses. The lighting was changing rapidly as the sun moved toward the horizon, requiring him to adjust his camera settings every few minutes.</p>
              <p>To make matters worse, the tide was coming in faster than expected, and the wedding party had to keep moving further up the beach. Marcus had to think quickly and adapt his usual shooting style. Instead of fighting against the natural elements, he decided to embrace them.</p>
              <p>He captured stunning shots of the bride's dress flowing in the wind and the couple's hair dancing in the breeze. The changing light created dramatic silhouettes and golden reflections on the water. When a seagull photobombed one of the ceremony shots, instead of being frustrated, Marcus captured the moment, and it became one of the couple's favorite photos.</p>
              <p>The unpredictable waves in the background added movement and life to the pictures. By the end of the evening, Marcus realized that some of his best work came from adapting to unexpected circumstances rather than trying to control every detail. The couple was thrilled with the unique and natural photos that perfectly captured the wild beauty of their beach wedding.</p>
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
                  <h2>O Desafio do Fotógrafo de Casamento</h2>
                  <br />
                  <p>Marcus era fotógrafo de casamentos há cinco anos, mas nunca havia enfrentado um desafio como este. Os noivos haviam escolhido fazer sua cerimônia em uma praia remota durante o pôr do sol, o que soava romântico e bonito em teoria. No entanto, quando Marcus chegou ao local, descobriu vários problemas inesperados.</p>
                  <p>Primeiro, o vento estava muito mais forte do que o previsto, tornando difícil manter seu equipamento estável. Areia estava entrando em seu equipamento de câmera, e ele tinha que limpar constantemente suas lentes. A iluminação estava mudando rapidamente conforme o sol se movia em direção ao horizonte, exigindo que ele ajustasse as configurações da câmera a cada poucos minutos.</p>
                  <p>Para piorar as coisas, a maré estava subindo mais rápido do que o esperado, e o grupo do casamento teve que continuar se movendo mais para cima na praia. Marcus teve que pensar rapidamente e adaptar seu estilo usual de fotografar. Em vez de lutar contra os elementos naturais, ele decidiu abraçá-los.</p>
                  <p>Ele capturou fotos deslumbrantes do vestido da noiva fluindo no vento e do cabelo do casal dançando na brisa. A luz em mudança criou silhuetas dramáticas e reflexos dourados na água. Quando uma gaivota apareceu inesperadamente em uma das fotos da cerimônia, em vez de ficar frustrado, Marcus capturou o momento, e se tornou uma das fotos favoritas do casal.</p>
                  <p>As ondas imprevisíveis no fundo adicionaram movimento e vida às fotos. No final da noite, Marcus percebeu que alguns de seus melhores trabalhos vieram de se adaptar a circunstâncias inesperadas em vez de tentar controlar cada detalhe. O casal ficou encantado com as fotos únicas e naturais que capturaram perfeitamente a beleza selvagem de seu casamento na praia.</p>
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
                <Accordion.Header>1. What challenges did Marcus face at the beach wedding?</Accordion.Header>
                <Accordion.Body>
                  <h5>Que desafios Marcus enfrentou no casamento na praia?</h5>
                  Marcus faced strong winds, sand in his equipment, changing light, and rising tide. <br />
                  <i>Marcus enfrentou ventos fortes, areia em seu equipamento, luz em mudança e maré subindo.</i>
                </Accordion.Body>
              </Accordion.Item>
              
              <Accordion.Item eventKey="1">
                <Accordion.Header>2. How did Marcus adapt to the difficult conditions?</Accordion.Header>
                <Accordion.Body>
                  <h5>Como Marcus se adaptou às condições difíceis?</h5>
                  Instead of fighting the natural elements, Marcus decided to embrace them. <br />
                  <i>Em vez de lutar contra os elementos naturais, Marcus decidiu abraçá-los.</i>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="2">
                <Accordion.Header>3. What unexpected moment became one of the couple's favorite photos?</Accordion.Header>
                <Accordion.Body>
                  <h5>Que momento inesperado se tornou uma das fotos favoritas do casal?</h5>
                  When a seagull photobombed one of the ceremony shots. <br />
                  <i>Quando uma gaivota apareceu inesperadamente em uma das fotos da cerimônia.</i>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="3">
                <Accordion.Header>4. What did the changing light create in the photos?</Accordion.Header>
                <Accordion.Body>
                  <h5>O que a luz em mudança criou nas fotos?</h5>
                  The changing light created dramatic silhouettes and golden reflections on the water. <br />
                  <i>A luz em mudança criou silhuetas dramáticas e reflexos dourados na água.</i>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="4">
                <Accordion.Header>5. What lesson did Marcus learn from this experience?</Accordion.Header>
                <Accordion.Body>
                  <h5>Que lição Marcus aprendeu com essa experiência?</h5>
                  Marcus learned that his best work came from adapting to unexpected circumstances rather than controlling every detail. <br />
                  <i>Marcus aprendeu que seus melhores trabalhos vieram de se adaptar a circunstâncias inesperadas em vez de controlar cada detalhe.</i>
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