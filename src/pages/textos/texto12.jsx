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

  const text = `
    Lucas' Journey to Becoming a Chef

    Lucas always had a passion for cooking. Since he was a child, he loved helping his grandmother in the kitchen, mixing ingredients and creating delicious dishes. However, he knew that the journey to becoming a great chef wouldn't be easy, especially coming from a small town where opportunities were limited.

    After finishing high school, Lucas decided he wanted to pursue a career as a chef, so he enrolled in a renowned culinary school in the capital. He knew that he would have to work hard because the competition was fierce and the pressure was high.

    During the first few months at school, Lucas faced many challenges. The workload was intense, and the practical exams became more difficult. He had to learn to work under pressure and be creative with the limited ingredients that were often provided to him. But despite the difficulties, he never gave up. Lucas knew that his dream was within reach, and his passion for cooking kept him motivated.

    One of the biggest challenges came when Lucas had to prepare a dish for an important competition. It was a contest between the best students in the school, and the prize was a position at a high-end restaurant. Lucas was nervous, but decided to apply everything he had learned during the course. He chose a traditional dish from his hometown, but with a modern twist that reflected his own personality. When the dish was presented to the judges, Lucas was anxious but confident that he had done his best.

    The following days were filled with tension. Lucas anxiously awaited the results. When the decision was finally announced, Lucas could hardly believe it: he was chosen as the winner of the competition. This not only secured him a position at the restaurant but also the opportunity to work with some of the best chefs in the country.

    Today, Lucas is a renowned chef, known for his creativity and skill in the kitchen. He never forgets the challenges he faced at the beginning of his journey and how perseverance and hard work were essential in achieving his dream.
  `;

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


export default function Texto12() {
  return (
    <>
      <Helmet>
        <title>Texto12</title>
      </Helmet>
      <Header />
      <Logo />
      <HeaderMenuTexto />
      <Container>
        <Row>
          <Col className="coluna-texto1">
            <AudioComponent /> 
            <h2 className="h1-Texto-Inicial">Lucas' Journey to Becoming a Chef</h2>
            <h4 className="h5-Textos">
              <p>Lucas always had a passion for cooking. Since he was a child, he loved helping his grandmother in the kitchen, mixing ingredients and creating delicious dishes. However, he knew that the journey to becoming a great chef wouldn't be easy, especially coming from a small town where opportunities were limited.</p>
              <p>After finishing high school, Lucas decided he wanted to pursue a career as a chef, so he enrolled in a renowned culinary school in the capital. He knew that he would have to work hard because the competition was fierce and the pressure was high.</p>
              <p>During the first few months at school, Lucas faced many challenges. The workload was intense, and the practical exams became more difficult. He had to learn to work under pressure and be creative with the limited ingredients that were often provided to him. But despite the difficulties, he never gave up. Lucas knew that his dream was within reach, and his passion for cooking kept him motivated.</p>
              <p>One of the biggest challenges came when Lucas had to prepare a dish for an important competition. It was a contest between the best students in the school, and the prize was a position at a high-end restaurant. Lucas was nervous, but decided to apply everything he had learned during the course. He chose a traditional dish from his hometown, but with a modern twist that reflected his own personality. When the dish was presented to the judges, Lucas was anxious but confident that he had done his best.</p>
              <p>The following days were filled with tension. Lucas anxiously awaited the results. When the decision was finally announced, Lucas could hardly believe it: he was chosen as the winner of the competition. This not only secured him a position at the restaurant but also the opportunity to work with some of the best chefs in the country.</p>
              <p>Today, Lucas is a renowned chef, known for his creativity and skill in the kitchen. He never forgets the challenges he faced at the beginning of his journey and how perseverance and hard work were essential in achieving his dream.</p>
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
                <h2>A Jornada de Lucas para se Tornar Chef</h2>
                  <br />
                  <p>Lucas sempre teve uma paixão por cozinhar. Desde criança, ele adorava ajudar sua avó na cozinha, misturando ingredientes e criando pratos deliciosos. No entanto, ele sabia que a jornada para se tornar um grande chef não seria fácil, especialmente vindo de uma cidade pequena, onde as oportunidades eram limitadas.</p>
                  <p>Após terminar o ensino médio, Lucas decidiu que queria seguir a carreira de chef e, para isso, se inscreveu em uma escola de gastronomia renomada na capital. Ele sabia que precisaria se esforçar muito, pois as competições eram acirradas e a pressão era grande.</p>
                  <p>Durante os primeiros meses na escola, Lucas enfrentou muitos desafios. A carga de trabalho era intensa e os exames práticos ficaram cada vez mais difíceis. Ele teve que aprender a trabalhar sob pressão e ser criativo com os ingredientes limitados que frequentemente lhe eram fornecidos. Mas, apesar das dificuldades, ele nunca desistiu. Lucas sabia que seu sonho estava ao alcance e a paixão pela culinária o mantinha motivado.</p>
                  <p>Um dos maiores desafios foi quando Lucas teve que preparar um prato para uma competição importante. Era uma competição entre os melhores alunos da escola, e o prêmio seria uma vaga em um restaurante de alta gastronomia. Lucas ficou nervoso, mas decidiu aplicar tudo o que aprendeu durante o curso. Ele escolheu um prato tradicional de sua cidade, mas com um toque moderno que refletia sua personalidade. Quando o prato foi apresentado aos jurados, Lucas estava apreensivo, mas confiante de que havia dado o melhor de si.</p>
                  <p>Nos dias seguintes, Lucas aguardava ansiosamente pelo resultado. Quando a decisão foi finalmente anunciada, ele mal podia acreditar: foi escolhido como vencedor da competição. Isso lhe garantiu não apenas a vaga no restaurante, mas também a oportunidade de trabalhar com alguns dos melhores chefs do país.</p>
                  <p>Hoje, Lucas é um chef renomado, conhecido por sua criatividade e habilidade na cozinha. Ele nunca esquece os desafios que enfrentou no começo de sua jornada e como a perseverança e o trabalho árduo foram essenciais para alcançar seu sonho.</p>
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
          <Accordion.Header>1. What was Lucas' passion since childhood?</Accordion.Header>
          <Accordion.Body>
            <h5>Qual era a paixão de Lucas desde a infância?</h5>
            Lucas had a passion for cooking and loved helping his grandmother in the kitchen. <br />
            <i>Lucas tinha paixão pela culinária e adorava ajudar sua avó na cozinha.</i>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
          <Accordion.Header>2. What did Lucas do after finishing high school?</Accordion.Header>
          <Accordion.Body>
            <h5>O que Lucas fez depois de terminar o ensino médio?</h5>
            After high school, Lucas enrolled in a renowned culinary school in the capital. <br />
            <i>Após o ensino médio, Lucas se matriculou em uma renomada escola de culinária na capital.</i>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header>3. What challenges did Lucas face during culinary school?</Accordion.Header>
          <Accordion.Body>
            <h5>Quais desafios Lucas enfrentou durante a escola de culinária?</h5>
            Lucas faced intense workloads, difficult practical exams, and had to learn to be creative under pressure. <br />
            <i>Lucas enfrentou cargas intensas de trabalho, provas práticas difíceis e precisou aprender a ser criativo sob pressão.</i>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="3">
          <Accordion.Header>4. What dish did Lucas choose for the competition, and why?</Accordion.Header>
          <Accordion.Body>
            <h5>Qual prato Lucas escolheu para a competição e por quê?</h5>
            Lucas chose a traditional dish from his hometown with a modern twist that reflected his personality. <br />
            <i>Lucas escolheu um prato tradicional de sua cidade natal com um toque moderno que refletia sua personalidade.</i>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="4">
          <Accordion.Header>5. What happened after Lucas won the competition?</Accordion.Header>
          <Accordion.Body>
            <h5>O que aconteceu depois que Lucas venceu a competição?</h5>
            Lucas secured a position at a high-end restaurant and had the opportunity to work with top chefs. <br />
            <i>Lucas garantiu uma vaga em um restaurante de alto padrão e teve a oportunidade de trabalhar com grandes chefs.</i>
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