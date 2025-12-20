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

  const text = "The Lost Phone Mystery. Lisa was having the worst day of her life. She had lost her phone somewhere between her apartment and the coffee shop downtown. The phone contained all her important contacts, photos from her recent vacation, and her work presentations for the next day. She retraced her steps multiple times, checking every place she had been. First, she went back to the coffee shop where she had her morning latte. The barista remembered her but hadn't seen any phone. Lisa searched under tables, behind the counter, and even in the bathroom, but found nothing. Next, she checked the bus she had taken to get downtown. The bus driver was helpful and let her search the seats, but again, no luck. Lisa was starting to panic because she needed her phone for an important work call that afternoon. Feeling desperate, she decided to ask her friend Mike to call her number, hoping someone would answer. After several attempts, a kind elderly man picked up. He explained that he had found the phone on a bench at the bus stop and had been waiting there, hoping the owner would return. Lisa rushed to the bus stop and found the man still sitting there with her phone. She was so grateful that she almost cried. The man refused any reward, saying he was just happy to help. Lisa learned that day that there are still good people in the world who go out of their way to help others.";

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


export default function Texto19() {
  return (
    <>
      <Helmet>
        <title>Texto19</title>
      </Helmet>
      <Header />
      <Logo />
      <HeaderMenuTexto />
      <Container>
        <Row>
          <Col className="coluna-texto1">
            <AudioComponent />
            <h2 className="h1-Texto-Inicial">The Lost Phone Mystery</h2>
            <h4 className="h5-Textos">
              <p>Lisa was having the worst day of her life. She had lost her phone somewhere between her apartment and the coffee shop downtown. The phone contained all her important contacts, photos from her recent vacation, and her work presentations for the next day.</p>
              <p>She retraced her steps multiple times, checking every place she had been. First, she went back to the coffee shop where she had her morning latte. The barista remembered her but hadn't seen any phone. Lisa searched under tables, behind the counter, and even in the bathroom, but found nothing.</p>
              <p>Next, she checked the bus she had taken to get downtown. The bus driver was helpful and let her search the seats, but again, no luck. Lisa was starting to panic because she needed her phone for an important work call that afternoon.</p>
              <p>Feeling desperate, she decided to ask her friend Mike to call her number, hoping someone would answer. After several attempts, a kind elderly man picked up. He explained that he had found the phone on a bench at the bus stop and had been waiting there, hoping the owner would return.</p>
              <p>Lisa rushed to the bus stop and found the man still sitting there with her phone. She was so grateful that she almost cried. The man refused any reward, saying he was just happy to help. Lisa learned that day that there are still good people in the world who go out of their way to help others.</p>
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
                  <h2>O Mistério do Telefone Perdido</h2>
                  <br />
                  <p>Lisa estava tendo o pior dia de sua vida. Ela havia perdido seu telefone em algum lugar entre seu apartamento e a cafeteria no centro da cidade. O telefone continha todos os seus contatos importantes, fotos de suas férias recentes e suas apresentações de trabalho para o dia seguinte.</p>
                  <p>Ela refez seus passos várias vezes, verificando todos os lugares onde havia estado. Primeiro, voltou à cafeteria onde tomou seu café com leite matinal. O barista se lembrava dela, mas não havia visto nenhum telefone. Lisa procurou embaixo das mesas, atrás do balcão e até no banheiro, mas não encontrou nada.</p>
                  <p>Em seguida, verificou o ônibus que havia pegado para ir ao centro. O motorista foi prestativo e a deixou procurar nos assentos, mas novamente, sem sorte. Lisa estava começando a entrar em pânico porque precisava do telefone para uma ligação importante de trabalho naquela tarde.</p>
                  <p>Sentindo-se desesperada, decidiu pedir ao seu amigo Mike para ligar para seu número, esperando que alguém atendesse. Após várias tentativas, um gentil senhor idoso atendeu. Ele explicou que havia encontrado o telefone em um banco no ponto de ônibus e estava esperando lá, na esperança de que o dono voltasse.</p>
                  <p>Lisa correu para o ponto de ônibus e encontrou o homem ainda sentado lá com seu telefone. Ela ficou tão grata que quase chorou. O homem recusou qualquer recompensa, dizendo que estava apenas feliz em ajudar. Lisa aprendeu naquele dia que ainda existem pessoas boas no mundo que fazem de tudo para ajudar os outros.</p>
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
                <Accordion.Header>1. What important things were on Lisa's lost phone?</Accordion.Header>
                <Accordion.Body>
                  <h5>Que coisas importantes estavam no telefone perdido de Lisa?</h5>
                  Her phone contained important contacts, vacation photos, and work presentations. <br />
                  <i>Seu telefone continha contatos importantes, fotos de férias e apresentações de trabalho.</i>
                </Accordion.Body>
              </Accordion.Item>
              
              <Accordion.Item eventKey="1">
                <Accordion.Header>2. Where did Lisa first look for her phone?</Accordion.Header>
                <Accordion.Body>
                  <h5>Onde Lisa procurou primeiro pelo seu telefone?</h5>
                  Lisa first looked at the coffee shop where she had her morning latte. <br />
                  <i>Lisa procurou primeiro na cafeteria onde tomou seu café com leite matinal.</i>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="2">
                <Accordion.Header>3. Why was Lisa starting to panic?</Accordion.Header>
                <Accordion.Body>
                  <h5>Por que Lisa estava começando a entrar em pânico?</h5>
                  She needed her phone for an important work call that afternoon. <br />
                  <i>Ela precisava do telefone para uma ligação importante de trabalho naquela tarde.</i>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="3">
                <Accordion.Header>4. Who found Lisa's phone and where?</Accordion.Header>
                <Accordion.Body>
                  <h5>Quem encontrou o telefone de Lisa e onde?</h5>
                  A kind elderly man found the phone on a bench at the bus stop. <br />
                  <i>Um gentil senhor idoso encontrou o telefone em um banco no ponto de ônibus.</i>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="4">
                <Accordion.Header>5. What did the elderly man do after finding the phone?</Accordion.Header>
                <Accordion.Body>
                  <h5>O que o senhor idoso fez depois de encontrar o telefone?</h5>
                  He waited at the bus stop, hoping the owner would return. <br />
                  <i>Ele esperou no ponto de ônibus, na esperança de que o dono voltasse.</i>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="5">
                <Accordion.Header>6. What lesson did Lisa learn from this experience?</Accordion.Header>
                <Accordion.Body>
                  <h5>Que lição Lisa aprendeu com essa experiência?</h5>
                  Lisa learned that there are still good people who go out of their way to help others. <br />
                  <i>Lisa aprendeu que ainda existem pessoas boas que fazem de tudo para ajudar os outros.</i>
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