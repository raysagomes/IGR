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

  const text = "The Community Garden Project. When the empty lot next to Maya's apartment building was scheduled to be turned into another parking lot, she decided to take action. Maya had always been passionate about gardening and environmental issues, but she had never organized a community project before. She started by talking to her neighbors about the idea of creating a community garden instead. At first, many people were skeptical. They worried about the cost, the maintenance, and whether the city would approve such a project. Maya spent weeks researching similar projects in other neighborhoods and preparing a detailed proposal. She attended city council meetings and spoke with local officials about the benefits of community gardens. After months of paperwork and meetings, the city finally approved the project. Maya was thrilled, but she quickly realized that getting approval was just the beginning. The real work was about to start. She organized volunteer days to clear the lot, remove debris, and prepare the soil. Local businesses donated tools, seeds, and building materials. Families from the neighborhood came together on weekends to build raised garden beds and install a water system. Children helped plant seeds and learned about different types of vegetables and flowers. The elderly residents shared their gardening knowledge and stories from their own childhood gardens. What started as Maya's individual initiative had become a true community effort. By the end of the summer, the garden was flourishing with tomatoes, peppers, herbs, and beautiful flowers. The space had become a gathering place where neighbors of all ages could connect, learn, and share the fruits of their labor. Maya realized that the garden had grown much more than just plants; it had grown a stronger, more connected community.";

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


export default function Texto25() {
  return (
    <>
      <Helmet>
        <title>Texto25</title>
      </Helmet>
      <Header />
      <Logo />
      <HeaderMenuTexto />
      <Container>
        <Row>
          <Col className="coluna-texto1">
            <AudioComponent />
            <h2 className="h1-Texto-Inicial">The Community Garden Project</h2>
            <h4 className="h5-Textos">
              <p>When the empty lot next to Maya's apartment building was scheduled to be turned into another parking lot, she decided to take action. Maya had always been passionate about gardening and environmental issues, but she had never organized a community project before. She started by talking to her neighbors about the idea of creating a community garden instead.</p>
              <p>At first, many people were skeptical. They worried about the cost, the maintenance, and whether the city would approve such a project. Maya spent weeks researching similar projects in other neighborhoods and preparing a detailed proposal. She attended city council meetings and spoke with local officials about the benefits of community gardens.</p>
              <p>After months of paperwork and meetings, the city finally approved the project. Maya was thrilled, but she quickly realized that getting approval was just the beginning. The real work was about to start. She organized volunteer days to clear the lot, remove debris, and prepare the soil.</p>
              <p>Local businesses donated tools, seeds, and building materials. Families from the neighborhood came together on weekends to build raised garden beds and install a water system. Children helped plant seeds and learned about different types of vegetables and flowers. The elderly residents shared their gardening knowledge and stories from their own childhood gardens.</p>
              <p>What started as Maya's individual initiative had become a true community effort. By the end of the summer, the garden was flourishing with tomatoes, peppers, herbs, and beautiful flowers. The space had become a gathering place where neighbors of all ages could connect, learn, and share the fruits of their labor. Maya realized that the garden had grown much more than just plants; it had grown a stronger, more connected community.</p>
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
                  <h2>O Projeto da Horta Comunitária</h2>
                  <br />
                  <p>Quando o terreno vazio ao lado do prédio de apartamentos de Maya estava programado para se tornar mais um estacionamento, ela decidiu agir. Maya sempre foi apaixonada por jardinagem e questões ambientais, mas nunca havia organizado um projeto comunitário antes. Ela começou conversando com seus vizinhos sobre a ideia de criar uma horta comunitária em vez disso.</p>
                  <p>No início, muitas pessoas estavam céticas. Elas se preocupavam com o custo, a manutenção e se a cidade aprovaria tal projeto. Maya passou semanas pesquisando projetos similares em outros bairros e preparando uma proposta detalhada. Ela participou de reuniões do conselho municipal e conversou com autoridades locais sobre os benefícios das hortas comunitárias.</p>
                  <p>Após meses de papelada e reuniões, a cidade finalmente aprovou o projeto. Maya ficou emocionada, mas rapidamente percebeu que conseguir a aprovação era apenas o começo. O trabalho real estava prestes a começar. Ela organizou dias de voluntariado para limpar o terreno, remover detritos e preparar o solo.</p>
                  <p>Empresas locais doaram ferramentas, sementes e materiais de construção. Famílias do bairro se reuniram nos fins de semana para construir canteiros elevados e instalar um sistema de água. As crianças ajudaram a plantar sementes e aprenderam sobre diferentes tipos de vegetais e flores. Os moradores idosos compartilharam seu conhecimento de jardinagem e histórias de suas próprias hortas da infância.</p>
                  <p>O que começou como uma iniciativa individual de Maya havia se tornado um verdadeiro esforço comunitário. No final do verão, a horta estava florescendo com tomates, pimentões, ervas e flores bonitas. O espaço havia se tornado um local de encontro onde vizinhos de todas as idades podiam se conectar, aprender e compartilhar os frutos de seu trabalho. Maya percebeu que a horta havia cultivado muito mais do que apenas plantas; havia cultivado uma comunidade mais forte e conectada.</p>
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
                <Accordion.Header>1. What motivated Maya to start the community garden project?</Accordion.Header>
                <Accordion.Body>
                  <h5>O que motivou Maya a iniciar o projeto da horta comunitária?</h5>
                  Maya was motivated when the empty lot was scheduled to become another parking lot. <br />
                  <i>Maya foi motivada quando o terreno vazio estava programado para se tornar mais um estacionamento.</i>
                </Accordion.Body>
              </Accordion.Item>
              
              <Accordion.Item eventKey="1">
                <Accordion.Header>2. What concerns did neighbors have about the project?</Accordion.Header>
                <Accordion.Body>
                  <h5>Que preocupações os vizinhos tinham sobre o projeto?</h5>
                  Neighbors worried about the cost, maintenance, and whether the city would approve the project. <br />
                  <i>Os vizinhos se preocupavam com o custo, manutenção e se a cidade aprovaria o projeto.</i>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="2">
                <Accordion.Header>3. How did Maya prepare for the city approval?</Accordion.Header>
                <Accordion.Body>
                  <h5>Como Maya se preparou para a aprovação da cidade?</h5>
                  Maya researched similar projects and prepared a detailed proposal, attending city council meetings. <br />
                  <i>Maya pesquisou projetos similares e preparou uma proposta detalhada, participando de reuniões do conselho municipal.</i>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="3">
                <Accordion.Header>4. How did the community contribute to the garden?</Accordion.Header>
                <Accordion.Body>
                  <h5>Como a comunidade contribuiu para a horta?</h5>
                  Local businesses donated materials, families built garden beds, and elderly residents shared knowledge. <br />
                  <i>Empresas locais doaram materiais, famílias construíram canteiros e moradores idosos compartilharam conhecimento.</i>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="4">
                <Accordion.Header>5. What did Maya realize the garden had accomplished beyond growing plants?</Accordion.Header>
                <Accordion.Body>
                  <h5>O que Maya percebeu que a horta havia conquistado além de cultivar plantas?</h5>
                  Maya realized the garden had grown a stronger, more connected community. <br />
                  <i>Maya percebeu que a horta havia cultivado uma comunidade mais forte e conectada.</i>
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