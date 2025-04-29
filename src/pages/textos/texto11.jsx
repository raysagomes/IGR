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

  const text = "Joana was a young woman from a small town who had a dream: to study Journalism at the Federal University of her city. Despite the challenges she faced, Joana was determined to make her dream come true. She knew that the path would not be easy, but she was willing to work hard to achieve her goal. Her daily routine was intense. Joana worked part-time at a local bookstore to help support her family. Every morning, she would wake up early to prepare for her workday and then head straight to her evening classes. The rest of the day was dedicated to her studies for the vestibular, the highly competitive entrance exam for Brazilian universities. Joana enrolled in a preparatory course for the vestibular. The course was demanding, with long hours of lectures, mock exams, and study sessions. But Joana was focused. She would spend hours after her classes reviewing notes, reading books, and practicing writing essays. She knew that the key to success was consistency and discipline. There were moments when Joana felt exhausted and discouraged. The pressure was overwhelming, and there were times when she doubted herself. But her passion for Journalism kept her going. She dreamed of becoming a reporter, telling stories that mattered to people, and making a difference in the world through her words. This vision pushed her to keep going, even when things were tough. Joana's perseverance paid off. After months of hard work, the day of the vestibular arrived. Joana took the exam with confidence, knowing that she had given her best effort. Weeks later, when the results were finally announced, Joana was ecstatic to find out that she had been accepted into the Federal University of her city. Not only that, but she had ranked second in her class! Her journey had been long and difficult, but it was worth every sacrifice. Joana's story is a testament to the power of hard work, dedication, and believing in oneself. She proved that with determination, even the most challenging dreams can come true.";

  useEffect(() => {
    const loadVoices = () => {
      const availableVoices = window.speechSynthesis.getVoices();
      console.log("Available voices:");
      availableVoices.forEach(voice => {
        console.log(`${voice.name} (${voice.lang})`);
      });

      const specificVoice = availableVoices.find(voice => voice.name === "Microsoft Jenny Online (Natural) - English (United States)");
      if (specificVoice) {
        setSelectedVoice(specificVoice);
      } else {
        console.warn("Microsoft Ana voice not found. Using the first available voice.");
        setSelectedVoice(availableVoices[0]);
      }
    };

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


export default function Texto11() {
  return (
    <>
      <Helmet>
        <title>Texto11</title>
      </Helmet>
      <Header />
      <Logo />
      <HeaderMenuTexto />
      <Container>
        <Row>
          <Col className="coluna-texto1">
            <AudioComponent /> 
            <h2 className="h1-Texto-Inicial">Joana's Journey to the Federal University of Journalism</h2> 
            <h4 className="h5-Textos">
            <p>Joana was a young woman from a small town who had a dream: to study Journalism at the Federal University of her city. Despite the challenges she faced, Joana was determined to make her dream come true. She knew that the path would not be easy, but she was willing to work hard to achieve her goal.</p>
              <p>Her daily routine was intense. Joana worked part-time at a local bookstore to help support her family. Every morning, she would wake up early to prepare for her workday and then head straight to her evening classes. The rest of the day was dedicated to her studies for the vestibular, the highly competitive entrance exam for Brazilian universities.</p>
              <p>Joana enrolled in a preparatory course for the vestibular. The course was demanding, with long hours of lectures, mock exams, and study sessions. But Joana was focused. She would spend hours after her classes reviewing notes, reading books, and practicing writing essays. She knew that the key to success was consistency and discipline.</p>
              <p>There were moments when Joana felt exhausted and discouraged. The pressure was overwhelming, and there were times when she doubted herself. But her passion for Journalism kept her going. She dreamed of becoming a reporter, telling stories that mattered to people, and making a difference in the world through her words. This vision pushed her to keep going, even when things were tough.</p>
              <p>Joana's perseverance paid off. After months of hard work, the day of the vestibular arrived. Joana took the exam with confidence, knowing that she had given her best effort. Weeks later, when the results were finally announced, Joana was ecstatic to find out that she had been accepted into the Federal University of her city. Not only that, but she had ranked second in her class!</p>
              <p>Her journey had been long and difficult, but it was worth every sacrifice. Joana's story is a testament to the power of hard work, dedication, and believing in oneself. She proved that with determination, even the most challenging dreams can come true.</p>
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
                <Accordion.Header className="accordion-header"><h2>Translation of the Text</h2></Accordion.Header>
                <Accordion.Body>
                  <h2>A Jornada de Joana para a Universidade Federal de Jornalismo</h2>
                  <br />
                  <p>Joana era uma jovem de uma pequena cidade que tinha um sonho: estudar Jornalismo na Universidade Federal de sua cidade. Apesar dos desafios que enfrentou, Joana estava determinada a realizar seu sonho. Ela sabia que o caminho não seria fácil, mas estava disposta a trabalhar duro para alcançar seu objetivo.</p>
                  <p>Sua rotina diária era intensa. Joana trabalhava meio período em uma livraria local para ajudar a sustentar sua família. Todas as manhãs, ela acordava cedo para se preparar para o trabalho e depois ia diretamente para suas aulas à noite. O restante do dia era dedicado aos seus estudos para o vestibular, o exame de entrada altamente competitivo para universidades brasileiras.</p>
                  <p>Joana se matriculou em um curso preparatório para o vestibular. O curso era exigente, com longas horas de palestras, simulados e sessões de estudo. Mas Joana estava focada. Ela passava horas depois das aulas revisando anotações, lendo livros e praticando redações. Ela sabia que a chave para o sucesso era consistência e disciplina.</p>
                  <p>Houve momentos em que Joana se sentiu exausta e desanimada. A pressão era avassaladora e houve vezes em que ela duvidou de si mesma. Mas sua paixão pelo Jornalismo a manteve em movimento. Ela sonhava em se tornar repórter, contar histórias que importassem para as pessoas e fazer a diferença no mundo através de suas palavras. Essa visão a impulsionou a continuar, mesmo quando as coisas estavam difíceis.</p>
                  <p>A perseverança de Joana valeu a pena. Depois de meses de trabalho árduo, o dia do vestibular chegou. Joana fez a prova com confiança, sabendo que havia dado o melhor de si. Semanas depois, quando os resultados finalmente foram anunciados, Joana ficou extasiada ao descobrir que havia sido aceita na Universidade Federal de sua cidade. Não só isso, mas ela ficou em segundo lugar na sua turma!</p>
                  <p>Sua jornada foi longa e difícil, mas valeu cada sacrifício. A história de Joana é um testemunho do poder do trabalho árduo, da dedicação e de acreditar em si mesma. Ela provou que, com determinação, até os sonhos mais desafiadores podem se tornar realidade.</p>
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
                <Accordion.Header>1. What was Joana's dream?</Accordion.Header>
                <Accordion.Body>
                  <h5>Qual era o sonho de Joana?</h5>
                  Joana's dream was to study Journalism at the Federal University of her city. <br />
                  <i>O sonho de Joana era estudar Jornalismo na Universidade Federal de sua cidade.</i>
                </Accordion.Body>
              </Accordion.Item>
              
              <Accordion.Item eventKey="1">
                <Accordion.Header>2. How did Joana manage to support herself during her studies?</Accordion.Header>
                <Accordion.Body>
                  <h5>Como Joana conseguiu se sustentar durante seus estudos?</h5>
                  Joana worked part-time at a local bookstore to help support her family. <br />
                  <i>Joana trabalhou meio período em uma livraria local para ajudar a sustentar sua família.</i>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="2">
                <Accordion.Header>3. What made Joana's journey difficult?</Accordion.Header>
                <Accordion.Body>
                  <h5>O que tornou a jornada de Joana difícil?</h5>
                  Joana faced the pressure of balancing work, studying for the vestibular, and attending the preparatory course. <br />
                  <i>Joana enfrentou a pressão de equilibrar o trabalho, os estudos para o vestibular e as aulas do curso preparatório.</i>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="3">
                <Accordion.Header>4. How did Joana feel when she found out she had been accepted into the university?</Accordion.Header>
                <Accordion.Body>
                  <h5>Como Joana se sentiu quando descobriu que tinha sido aceita na universidade?</h5>
                  Joana was ecstatic and overjoyed to learn that she had been accepted and ranked second in her class. <br />
                  <i>Joana ficou extasiada e muito feliz ao saber que tinha sido aceita e ficou em segundo lugar na sua turma.</i>
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