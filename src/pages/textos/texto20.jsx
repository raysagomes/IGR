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

  const text = "The Unexpected Friendship. Oliver was the new kid at school and felt completely out of place. He was shy and had trouble making friends, especially since he had moved from a small town to a big city. During lunch breaks, he would sit alone in the corner of the cafeteria, reading books and trying to avoid eye contact with other students. One day, while Oliver was reading under a tree in the school courtyard, a soccer ball rolled right up to his feet. A girl with curly red hair came running over, breathing heavily from the game. Her name was Ruby, and she was known as one of the most popular and outgoing students in school. Instead of just taking the ball and leaving, Ruby noticed Oliver's book and asked what he was reading. It was a fantasy novel about dragons and magic kingdoms. To Oliver's surprise, Ruby's eyes lit up with excitement. She confessed that she loved fantasy books too but was embarrassed to admit it because her friends thought they were nerdy. From that day on, Ruby and Oliver started meeting during lunch to discuss their favorite books and characters. Ruby introduced Oliver to her friends, who turned out to be much nicer than he had expected. Oliver helped Ruby embrace her love for reading without feeling ashamed. Their friendship taught both of them that sometimes the most unexpected connections can lead to the strongest bonds. By the end of the school year, Oliver had found his place in the new school, and Ruby had discovered that being true to yourself is more important than fitting in.";

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


export default function Texto20() {
  return (
    <>
      <Helmet>
        <title>Texto20</title>
      </Helmet>
      <Header />
      <Logo />
      <HeaderMenuTexto />
      <Container>
        <Row>
          <Col className="coluna-texto1">
            <AudioComponent />
            <h2 className="h1-Texto-Inicial">The Unexpected Friendship</h2>
            <h4 className="h5-Textos">
              <p>Oliver was the new kid at school and felt completely out of place. He was shy and had trouble making friends, especially since he had moved from a small town to a big city. During lunch breaks, he would sit alone in the corner of the cafeteria, reading books and trying to avoid eye contact with other students.</p>
              <p>One day, while Oliver was reading under a tree in the school courtyard, a soccer ball rolled right up to his feet. A girl with curly red hair came running over, breathing heavily from the game. Her name was Ruby, and she was known as one of the most popular and outgoing students in school.</p>
              <p>Instead of just taking the ball and leaving, Ruby noticed Oliver's book and asked what he was reading. It was a fantasy novel about dragons and magic kingdoms. To Oliver's surprise, Ruby's eyes lit up with excitement. She confessed that she loved fantasy books too but was embarrassed to admit it because her friends thought they were nerdy.</p>
              <p>From that day on, Ruby and Oliver started meeting during lunch to discuss their favorite books and characters. Ruby introduced Oliver to her friends, who turned out to be much nicer than he had expected. Oliver helped Ruby embrace her love for reading without feeling ashamed.</p>
              <p>Their friendship taught both of them that sometimes the most unexpected connections can lead to the strongest bonds. By the end of the school year, Oliver had found his place in the new school, and Ruby had discovered that being true to yourself is more important than fitting in.</p>
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
                  <h2>A Amizade Inesperada</h2>
                  <br />
                  <p>Oliver era o garoto novo na escola e se sentia completamente deslocado. Ele era tímido e tinha dificuldade para fazer amigos, especialmente desde que se mudou de uma cidade pequena para uma grande cidade. Durante os intervalos do almoço, ele se sentava sozinho no canto da cafeteria, lendo livros e tentando evitar contato visual com outros estudantes.</p>
                  <p>Um dia, enquanto Oliver estava lendo embaixo de uma árvore no pátio da escola, uma bola de futebol rolou bem até seus pés. Uma garota com cabelos ruivos cacheados veio correndo, respirando pesadamente do jogo. Seu nome era Ruby, e ela era conhecida como uma das estudantes mais populares e extrovertidas da escola.</p>
                  <p>Em vez de apenas pegar a bola e ir embora, Ruby notou o livro de Oliver e perguntou o que ele estava lendo. Era um romance de fantasia sobre dragões e reinos mágicos. Para a surpresa de Oliver, os olhos de Ruby se iluminaram de empolgação. Ela confessou que também adorava livros de fantasia, mas tinha vergonha de admitir porque seus amigos achavam que eram nerds.</p>
                  <p>A partir daquele dia, Ruby e Oliver começaram a se encontrar durante o almoço para discutir seus livros e personagens favoritos. Ruby apresentou Oliver aos seus amigos, que se mostraram muito mais legais do que ele esperava. Oliver ajudou Ruby a abraçar seu amor pela leitura sem se sentir envergonhada.</p>
                  <p>A amizade deles ensinou a ambos que às vezes as conexões mais inesperadas podem levar aos laços mais fortes. No final do ano letivo, Oliver havia encontrado seu lugar na nova escola, e Ruby descobriu que ser verdadeiro consigo mesmo é mais importante do que se encaixar.</p>
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
                <Accordion.Header>1. Why did Oliver feel out of place at his new school?</Accordion.Header>
                <Accordion.Body>
                  <h5>Por que Oliver se sentia deslocado em sua nova escola?</h5>
                  Oliver was shy and had moved from a small town to a big city. <br />
                  <i>Oliver era tímido e havia se mudado de uma cidade pequena para uma grande cidade.</i>
                </Accordion.Body>
              </Accordion.Item>
              
              <Accordion.Item eventKey="1">
                <Accordion.Header>2. How did Oliver and Ruby first meet?</Accordion.Header>
                <Accordion.Body>
                  <h5>Como Oliver e Ruby se conheceram?</h5>
                  A soccer ball rolled to Oliver's feet while he was reading, and Ruby came to get it. <br />
                  <i>Uma bola de futebol rolou até os pés de Oliver enquanto ele lia, e Ruby veio buscá-la.</i>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="2">
                <Accordion.Header>3. What book was Oliver reading when he met Ruby?</Accordion.Header>
                <Accordion.Body>
                  <h5>Que livro Oliver estava lendo quando conheceu Ruby?</h5>
                  Oliver was reading a fantasy novel about dragons and magic kingdoms. <br />
                  <i>Oliver estava lendo um romance de fantasia sobre dragões e reinos mágicos.</i>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="3">
                <Accordion.Header>4. Why was Ruby embarrassed about her love for fantasy books?</Accordion.Header>
                <Accordion.Body>
                  <h5>Por que Ruby tinha vergonha de seu amor por livros de fantasia?</h5>
                  Ruby was embarrassed because her friends thought fantasy books were nerdy. <br />
                  <i>Ruby tinha vergonha porque seus amigos achavam que livros de fantasia eram nerds.</i>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="4">
                <Accordion.Header>5. What did their friendship teach both Oliver and Ruby?</Accordion.Header>
                <Accordion.Body>
                  <h5>O que a amizade deles ensinou tanto a Oliver quanto a Ruby?</h5>
                  Their friendship taught them that unexpected connections can lead to strong bonds and being true to yourself is important. <br />
                  <i>A amizade deles ensinou que conexões inesperadas podem levar a laços fortes e que ser verdadeiro consigo mesmo é importante.</i>
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