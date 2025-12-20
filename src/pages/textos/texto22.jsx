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

  const text = "The Midnight Grocery Run. It was 11:30 PM when David realized he had completely forgotten about his presentation the next morning. Not only had he forgotten to prepare it, but he also had no food in his apartment for breakfast or lunch. Panic set in as he remembered that he had promised to bring homemade sandwiches for his team meeting. David grabbed his jacket and rushed to the only place he knew would be open at that hour: the 24-hour grocery store downtown. The store was eerily quiet, with only a few night shift workers and some other desperate late-night shoppers like himself. David quickly grabbed bread, turkey, cheese, lettuce, and tomatoes for the sandwiches. As he was rushing through the aisles, he bumped into his neighbor, Mrs. Chen, who was buying medicine for her sick grandson. She looked surprised to see him there so late and asked if everything was okay. David explained his situation, feeling embarrassed about his poor planning. Mrs. Chen smiled and told him that she used to be a teacher and had faced similar situations many times. She gave him some valuable advice about time management and offered to help him organize his schedule. They talked while waiting in the checkout line, and David realized that sometimes the most helpful conversations happen in the most unexpected places. By the time he got home, David felt much calmer and more prepared to tackle his presentation. He spent the rest of the night preparing both his sandwiches and his presentation, grateful for the unexpected wisdom from his neighbor.";

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


export default function Texto22() {
  return (
    <>
      <Helmet>
        <title>Texto22</title>
      </Helmet>
      <Header />
      <Logo />
      <HeaderMenuTexto />
      <Container>
        <Row>
          <Col className="coluna-texto1">
            <AudioComponent />
            <h2 className="h1-Texto-Inicial">The Midnight Grocery Run</h2>
            <h4 className="h5-Textos">
              <p>It was 11:30 PM when David realized he had completely forgotten about his presentation the next morning. Not only had he forgotten to prepare it, but he also had no food in his apartment for breakfast or lunch. Panic set in as he remembered that he had promised to bring homemade sandwiches for his team meeting.</p>
              <p>David grabbed his jacket and rushed to the only place he knew would be open at that hour: the 24-hour grocery store downtown. The store was eerily quiet, with only a few night shift workers and some other desperate late-night shoppers like himself.</p>
              <p>David quickly grabbed bread, turkey, cheese, lettuce, and tomatoes for the sandwiches. As he was rushing through the aisles, he bumped into his neighbor, Mrs. Chen, who was buying medicine for her sick grandson. She looked surprised to see him there so late and asked if everything was okay.</p>
              <p>David explained his situation, feeling embarrassed about his poor planning. Mrs. Chen smiled and told him that she used to be a teacher and had faced similar situations many times. She gave him some valuable advice about time management and offered to help him organize his schedule.</p>
              <p>They talked while waiting in the checkout line, and David realized that sometimes the most helpful conversations happen in the most unexpected places. By the time he got home, David felt much calmer and more prepared to tackle his presentation. He spent the rest of the night preparing both his sandwiches and his presentation, grateful for the unexpected wisdom from his neighbor.</p>
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
                  <h2>A Ida ao Mercado à Meia-Noite</h2>
                  <br />
                  <p>Eram 11:30 da noite quando David percebeu que havia esquecido completamente de sua apresentação na manhã seguinte. Não apenas havia esquecido de prepará-la, mas também não tinha comida em seu apartamento para o café da manhã ou almoço. O pânico tomou conta quando ele se lembrou de que havia prometido trazer sanduíches caseiros para a reunião de sua equipe.</p>
                  <p>David pegou sua jaqueta e correu para o único lugar que sabia que estaria aberto naquele horário: o mercado 24 horas no centro da cidade. A loja estava estranhamente silenciosa, com apenas alguns funcionários do turno da noite e alguns outros compradores desesperados de madrugada como ele.</p>
                  <p>David rapidamente pegou pão, peru, queijo, alface e tomates para os sanduíches. Enquanto corria pelos corredores, esbarrou em sua vizinha, Sra. Chen, que estava comprando remédio para seu neto doente. Ela pareceu surpresa em vê-lo lá tão tarde e perguntou se estava tudo bem.</p>
                  <p>David explicou sua situação, sentindo-se envergonhado por seu planejamento ruim. A Sra. Chen sorriu e disse que costumava ser professora e havia enfrentado situações similares muitas vezes. Ela lhe deu alguns conselhos valiosos sobre gerenciamento de tempo e se ofereceu para ajudá-lo a organizar sua agenda.</p>
                  <p>Eles conversaram enquanto esperavam na fila do caixa, e David percebeu que às vezes as conversas mais úteis acontecem nos lugares mais inesperados. Quando chegou em casa, David se sentiu muito mais calmo e preparado para enfrentar sua apresentação. Ele passou o resto da noite preparando tanto seus sanduíches quanto sua apresentação, grato pela sabedoria inesperada de sua vizinha.</p>
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
                <Accordion.Header>1. What did David realize at 11:30 PM?</Accordion.Header>
                <Accordion.Body>
                  <h5>O que David percebeu às 11:30 da noite?</h5>
                  David realized he had forgotten about his presentation and had no food for the next day. <br />
                  <i>David percebeu que havia esquecido de sua apresentação e não tinha comida para o dia seguinte.</i>
                </Accordion.Body>
              </Accordion.Item>
              
              <Accordion.Item eventKey="1">
                <Accordion.Header>2. Where did David go to buy food so late at night?</Accordion.Header>
                <Accordion.Body>
                  <h5>Onde David foi comprar comida tão tarde da noite?</h5>
                  David went to the 24-hour grocery store downtown. <br />
                  <i>David foi ao mercado 24 horas no centro da cidade.</i>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="2">
                <Accordion.Header>3. Who did David meet at the grocery store?</Accordion.Header>
                <Accordion.Body>
                  <h5>Quem David encontrou no mercado?</h5>
                  David met his neighbor, Mrs. Chen, who was buying medicine for her sick grandson. <br />
                  <i>David encontrou sua vizinha, Sra. Chen, que estava comprando remédio para seu neto doente.</i>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="3">
                <Accordion.Header>4. What advice did Mrs. Chen give David?</Accordion.Header>
                <Accordion.Body>
                  <h5>Que conselho a Sra. Chen deu a David?</h5>
                  Mrs. Chen gave him valuable advice about time management and offered to help organize his schedule. <br />
                  <i>A Sra. Chen lhe deu conselhos valiosos sobre gerenciamento de tempo e se ofereceu para ajudar a organizar sua agenda.</i>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="4">
                <Accordion.Header>5. What did David learn from this experience?</Accordion.Header>
                <Accordion.Body>
                  <h5>O que David aprendeu com essa experiência?</h5>
                  David learned that sometimes the most helpful conversations happen in unexpected places. <br />
                  <i>David aprendeu que às vezes as conversas mais úteis acontecem em lugares inesperados.</i>
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