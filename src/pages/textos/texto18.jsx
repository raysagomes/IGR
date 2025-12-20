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

  const text = "The Cooking Disaster. Jake decided to surprise his girlfriend Anna with a homemade dinner for their anniversary. He had never cooked anything more complicated than instant noodles, but he was confident he could handle it. Jake chose to make pasta with homemade tomato sauce, thinking it would be simple and romantic. He started by chopping onions, which made him cry so much that he could barely see what he was doing. Then he tried to sauté the onions, but he turned the heat too high and they burned quickly. The smoke alarm went off, and Jake frantically opened all the windows while trying to save the onions. Next, he attempted to make the tomato sauce from scratch. He added too much salt, then too much sugar trying to balance it out. The sauce ended up tasting like sweet and salty soup. Meanwhile, he forgot about the pasta boiling on the stove, and it became mushy and overcooked. When Anna arrived, she found Jake sitting in the smoky kitchen, looking defeated, with burnt onions, terrible sauce, and mushy pasta. Instead of being disappointed, Anna burst out laughing and hugged him. She said it was the sweetest gesture ever, even if it didn't turn out as planned. They ordered pizza and spent the evening laughing about Jake's cooking disaster, making it a memorable anniversary after all.";

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


export default function Texto18() {
  return (
    <>
      <Helmet>
        <title>Texto18</title>
      </Helmet>
      <Header />
      <Logo />
      <HeaderMenuTexto />
      <Container>
        <Row>
          <Col className="coluna-texto1">
            <AudioComponent />
            <h2 className="h1-Texto-Inicial">The Cooking Disaster</h2>
            <h4 className="h5-Textos">
              <p>Jake decided to surprise his girlfriend Anna with a homemade dinner for their anniversary. He had never cooked anything more complicated than instant noodles, but he was confident he could handle it. Jake chose to make pasta with homemade tomato sauce, thinking it would be simple and romantic.</p>
              <p>He started by chopping onions, which made him cry so much that he could barely see what he was doing. Then he tried to sauté the onions, but he turned the heat too high and they burned quickly. The smoke alarm went off, and Jake frantically opened all the windows while trying to save the onions.</p>
              <p>Next, he attempted to make the tomato sauce from scratch. He added too much salt, then too much sugar trying to balance it out. The sauce ended up tasting like sweet and salty soup. Meanwhile, he forgot about the pasta boiling on the stove, and it became mushy and overcooked.</p>
              <p>When Anna arrived, she found Jake sitting in the smoky kitchen, looking defeated, with burnt onions, terrible sauce, and mushy pasta. Instead of being disappointed, Anna burst out laughing and hugged him. She said it was the sweetest gesture ever, even if it didn't turn out as planned. They ordered pizza and spent the evening laughing about Jake's cooking disaster, making it a memorable anniversary after all.</p>
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
                  <h2>O Desastre Culinário</h2>
                  <br />
                  <p>Jake decidiu surpreender sua namorada Anna com um jantar caseiro para o aniversário de namoro. Ele nunca havia cozinhado nada mais complicado que macarrão instantâneo, mas estava confiante de que conseguiria. Jake escolheu fazer macarrão com molho de tomate caseiro, pensando que seria simples e romântico.</p>
                  <p>Ele começou cortando cebolas, o que o fez chorar tanto que mal conseguia ver o que estava fazendo. Então tentou refogar as cebolas, mas colocou o fogo muito alto e elas queimaram rapidamente. O alarme de fumaça disparou, e Jake abriu freneticamente todas as janelas enquanto tentava salvar as cebolas.</p>
                  <p>Em seguida, ele tentou fazer o molho de tomate do zero. Adicionou muito sal, depois muito açúcar tentando equilibrar. O molho acabou com gosto de sopa doce e salgada. Enquanto isso, ele esqueceu do macarrão fervendo no fogão, e ficou mole e cozido demais.</p>
                  <p>Quando Anna chegou, encontrou Jake sentado na cozinha esfumaçada, parecendo derrotado, com cebolas queimadas, molho terrível e macarrão mole. Em vez de ficar desapontada, Anna caiu na gargalhada e o abraçou. Ela disse que foi o gesto mais doce de todos, mesmo que não tenha saído como planejado. Eles pediram pizza e passaram a noite rindo sobre o desastre culinário de Jake, tornando-se um aniversário memorável afinal.</p>
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
                <Accordion.Header>1. What did Jake want to surprise Anna with?</Accordion.Header>
                <Accordion.Body>
                  <h5>Com o que Jake queria surpreender Anna?</h5>
                  Jake wanted to surprise Anna with a homemade dinner for their anniversary. <br />
                  <i>Jake queria surpreender Anna com um jantar caseiro para o aniversário de namoro.</i>
                </Accordion.Body>
              </Accordion.Item>
              
              <Accordion.Item eventKey="1">
                <Accordion.Header>2. What cooking experience did Jake have before this?</Accordion.Header>
                <Accordion.Body>
                  <h5>Que experiência culinária Jake tinha antes disso?</h5>
                  Jake had never cooked anything more complicated than instant noodles. <br />
                  <i>Jake nunca havia cozinhado nada mais complicado que macarrão instantâneo.</i>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="2">
                <Accordion.Header>3. What went wrong when Jake was cooking the onions?</Accordion.Header>
                <Accordion.Body>
                  <h5>O que deu errado quando Jake estava cozinhando as cebolas?</h5>
                  The onions made him cry, then he burned them because the heat was too high. <br />
                  <i>As cebolas o fizeram chorar, depois ele as queimou porque o fogo estava muito alto.</i>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="3">
                <Accordion.Header>4. How did the tomato sauce turn out?</Accordion.Header>
                <Accordion.Body>
                  <h5>Como ficou o molho de tomate?</h5>
                  The sauce tasted like sweet and salty soup because he added too much salt and sugar. <br />
                  <i>O molho ficou com gosto de sopa doce e salgada porque ele adicionou muito sal e açúcar.</i>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="4">
                <Accordion.Header>5. How did Anna react to Jake's cooking disaster?</Accordion.Header>
                <Accordion.Body>
                  <h5>Como Anna reagiu ao desastre culinário de Jake?</h5>
                  Anna laughed and hugged him, saying it was the sweetest gesture ever. <br />
                  <i>Anna riu e o abraçou, dizendo que foi o gesto mais doce de todos.</i>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="5">
                <Accordion.Header>6. How did they end up spending their anniversary evening?</Accordion.Header>
                <Accordion.Body>
                  <h5>Como eles acabaram passando a noite do aniversário?</h5>
                  They ordered pizza and spent the evening laughing about the cooking disaster. <br />
                  <i>Eles pediram pizza e passaram a noite rindo sobre o desastre culinário.</i>
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