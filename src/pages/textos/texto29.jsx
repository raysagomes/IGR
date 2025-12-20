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

  const text = "The Volunteer Experience. When Amanda's company announced a volunteer day at the local animal shelter, she wasn't particularly excited. She had never owned a pet and wasn't sure how she felt about spending her Saturday surrounded by barking dogs and meowing cats. However, her team leader encouraged everyone to participate, so Amanda reluctantly signed up. On the morning of the volunteer day, Amanda arrived at the shelter feeling nervous and unsure of what to expect. The shelter coordinator, Mrs. Williams, welcomed the group and explained that they would be helping with various tasks: cleaning kennels, walking dogs, playing with cats, and organizing donations. Amanda was assigned to the cat area, which she thought would be the safest option. As she entered the cat room, she was immediately surrounded by dozens of cats of all sizes and colors. Some were playful kittens, others were older cats who seemed more reserved. Amanda started by simply sitting on the floor, unsure of what to do. Gradually, the cats began to approach her. A small orange tabby named Ginger climbed onto her lap and began purring contentedly. Amanda was surprised by how calming and therapeutic it felt to pet the soft fur and listen to the gentle purring. Throughout the day, Amanda found herself genuinely enjoying the experience. She helped feed the cats, cleaned their living areas, and spent time playing with them using various toys. She was amazed by each cat's unique personality and how they seemed to sense her growing comfort around them. By the end of the day, Amanda felt a deep connection to the animals and the important work the shelter was doing. She signed up to become a regular volunteer and even started considering adopting Ginger. What began as a reluctant obligation had transformed into a meaningful and rewarding experience that opened Amanda's heart to the joy of helping animals in need.";

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


export default function Texto29() {
  return (
    <>
      <Helmet>
        <title>Texto29</title>
      </Helmet>
      <Header />
      <Logo />
      <HeaderMenuTexto />
      <Container>
        <Row>
          <Col className="coluna-texto1">
            <AudioComponent />
            <h2 className="h1-Texto-Inicial">The Volunteer Experience</h2>
            <h4 className="h5-Textos">
              <p>When Amanda's company announced a volunteer day at the local animal shelter, she wasn't particularly excited. She had never owned a pet and wasn't sure how she felt about spending her Saturday surrounded by barking dogs and meowing cats. However, her team leader encouraged everyone to participate, so Amanda reluctantly signed up.</p>
              <p>On the morning of the volunteer day, Amanda arrived at the shelter feeling nervous and unsure of what to expect. The shelter coordinator, Mrs. Williams, welcomed the group and explained that they would be helping with various tasks: cleaning kennels, walking dogs, playing with cats, and organizing donations. Amanda was assigned to the cat area, which she thought would be the safest option.</p>
              <p>As she entered the cat room, she was immediately surrounded by dozens of cats of all sizes and colors. Some were playful kittens, others were older cats who seemed more reserved. Amanda started by simply sitting on the floor, unsure of what to do. Gradually, the cats began to approach her. A small orange tabby named Ginger climbed onto her lap and began purring contentedly.</p>
              <p>Amanda was surprised by how calming and therapeutic it felt to pet the soft fur and listen to the gentle purring. Throughout the day, Amanda found herself genuinely enjoying the experience. She helped feed the cats, cleaned their living areas, and spent time playing with them using various toys. She was amazed by each cat's unique personality and how they seemed to sense her growing comfort around them.</p>
              <p>By the end of the day, Amanda felt a deep connection to the animals and the important work the shelter was doing. She signed up to become a regular volunteer and even started considering adopting Ginger. What began as a reluctant obligation had transformed into a meaningful and rewarding experience that opened Amanda's heart to the joy of helping animals in need.</p>
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
                  <h2>A Experiência de Voluntariado</h2>
                  <br />
                  <p>Quando a empresa de Amanda anunciou um dia de voluntariado no abrigo de animais local, ela não ficou particularmente animada. Ela nunca havia tido um animal de estimação e não tinha certeza de como se sentia sobre passar seu sábado cercada por cães latindo e gatos miando. No entanto, seu líder de equipe encorajou todos a participar, então Amanda relutantemente se inscreveu.</p>
                  <p>Na manhã do dia de voluntariado, Amanda chegou ao abrigo se sentindo nervosa e incerta sobre o que esperar. A coordenadora do abrigo, Sra. Williams, recebeu o grupo e explicou que eles estariam ajudando com várias tarefas: limpeza de canis, passeio com cães, brincadeiras com gatos e organização de doações. Amanda foi designada para a área dos gatos, que ela pensou que seria a opção mais segura.</p>
                  <p>Ao entrar na sala dos gatos, ela foi imediatamente cercada por dezenas de gatos de todos os tamanhos e cores. Alguns eram gatinhos brincalhões, outros eram gatos mais velhos que pareciam mais reservados. Amanda começou simplesmente sentando no chão, incerta do que fazer. Gradualmente, os gatos começaram a se aproximar dela. Um pequeno gato rajado laranja chamado Ginger subiu em seu colo e começou a ronronar satisfeito.</p>
                  <p>Amanda ficou surpresa com o quão calmante e terapêutico era acariciar o pelo macio e ouvir o ronronar suave. Durante todo o dia, Amanda se viu genuinamente aproveitando a experiência. Ela ajudou a alimentar os gatos, limpou suas áreas de convivência e passou tempo brincando com eles usando vários brinquedos. Ela ficou impressionada com a personalidade única de cada gato e como eles pareciam sentir seu crescente conforto ao redor deles.</p>
                  <p>No final do dia, Amanda sentiu uma conexão profunda com os animais e o trabalho importante que o abrigo estava fazendo. Ela se inscreveu para se tornar uma voluntária regular e até começou a considerar adotar Ginger. O que começou como uma obrigação relutante havia se transformado em uma experiência significativa e gratificante que abriu o coração de Amanda para a alegria de ajudar animais necessitados.</p>
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
                <Accordion.Header>1. Why wasn't Amanda initially excited about volunteering at the animal shelter?</Accordion.Header>
                <Accordion.Body>
                  <h5>Por que Amanda não estava inicialmente animada sobre ser voluntária no abrigo de animais?</h5>
                  Amanda had never owned a pet and wasn't sure how she felt about being around animals. <br />
                  <i>Amanda nunca havia tido um animal de estimação e não tinha certeza de como se sentia sobre estar perto de animais.</i>
                </Accordion.Body>
              </Accordion.Item>
              
              <Accordion.Item eventKey="1">
                <Accordion.Header>2. What area was Amanda assigned to work in at the shelter?</Accordion.Header>
                <Accordion.Body>
                  <h5>Em que área Amanda foi designada para trabalhar no abrigo?</h5>
                  Amanda was assigned to the cat area, which she thought would be the safest option. <br />
                  <i>Amanda foi designada para a área dos gatos, que ela pensou que seria a opção mais segura.</i>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="2">
                <Accordion.Header>3. Which cat made a special connection with Amanda?</Accordion.Header>
                <Accordion.Body>
                  <h5>Qual gato fez uma conexão especial com Amanda?</h5>
                  A small orange tabby named Ginger climbed onto her lap and began purring. <br />
                  <i>Um pequeno gato rajado laranja chamado Ginger subiu em seu colo e começou a ronronar.</i>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="3">
                <Accordion.Header>4. How did Amanda feel about petting the cats?</Accordion.Header>
                <Accordion.Body>
                  <h5>Como Amanda se sentiu ao acariciar os gatos?</h5>
                  Amanda was surprised by how calming and therapeutic it felt to pet the cats. <br />
                  <i>Amanda ficou surpresa com o quão calmante e terapêutico era acariciar os gatos.</i>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="4">
                <Accordion.Header>5. What did Amanda decide to do after her volunteer experience?</Accordion.Header>
                <Accordion.Body>
                  <h5>O que Amanda decidiu fazer após sua experiência de voluntariado?</h5>
                  Amanda signed up to become a regular volunteer and considered adopting Ginger. <br />
                  <i>Amanda se inscreveu para se tornar uma voluntária regular e considerou adotar Ginger.</i>
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