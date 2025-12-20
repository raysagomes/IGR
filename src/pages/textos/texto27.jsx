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

  const text = "The Dance Class Surprise. Kevin had always been athletic, playing basketball and soccer throughout high school. However, when he started college, he needed to fulfill a physical education requirement, and the only class that fit his schedule was ballroom dancing. Kevin was mortified. He imagined himself stumbling around the dance floor, stepping on his partner's feet, and becoming the laughingstock of the class. On the first day, Kevin reluctantly entered the dance studio, wearing his most comfortable sneakers and hoping to blend into the background. The instructor, Ms. Rodriguez, was a petite woman with incredible energy and enthusiasm. She explained that dancing was about communication, trust, and expressing emotions through movement. Kevin was paired with Sarah, a confident dance major who immediately put him at ease. She patiently taught him the basic steps and encouraged him when he made mistakes. To Kevin's surprise, he found that his athletic background actually helped him with balance and coordination. As the weeks progressed, Kevin discovered that he genuinely enjoyed dancing. The waltz felt graceful and elegant, the tango was passionate and dramatic, and the swing was energetic and fun. He looked forward to each class and even started practicing the steps in his dorm room. His friends initially teased him about taking a dance class, but when they saw him perform at the end-of-semester showcase, they were genuinely impressed. Kevin's confidence had grown tremendously, and he had developed a new appreciation for the artistry and athleticism of dance. He even signed up for an advanced class the following semester. Kevin learned that sometimes the things we fear most can become our greatest sources of joy and personal growth.";

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


export default function Texto27() {
  return (
    <>
      <Helmet>
        <title>Texto27</title>
      </Helmet>
      <Header />
      <Logo />
      <HeaderMenuTexto />
      <Container>
        <Row>
          <Col className="coluna-texto1">
            <AudioComponent />
            <h2 className="h1-Texto-Inicial">The Dance Class Surprise</h2>
            <h4 className="h5-Textos">
              <p>Kevin had always been athletic, playing basketball and soccer throughout high school. However, when he started college, he needed to fulfill a physical education requirement, and the only class that fit his schedule was ballroom dancing. Kevin was mortified. He imagined himself stumbling around the dance floor, stepping on his partner's feet, and becoming the laughingstock of the class.</p>
              <p>On the first day, Kevin reluctantly entered the dance studio, wearing his most comfortable sneakers and hoping to blend into the background. The instructor, Ms. Rodriguez, was a petite woman with incredible energy and enthusiasm. She explained that dancing was about communication, trust, and expressing emotions through movement.</p>
              <p>Kevin was paired with Sarah, a confident dance major who immediately put him at ease. She patiently taught him the basic steps and encouraged him when he made mistakes. To Kevin's surprise, he found that his athletic background actually helped him with balance and coordination.</p>
              <p>As the weeks progressed, Kevin discovered that he genuinely enjoyed dancing. The waltz felt graceful and elegant, the tango was passionate and dramatic, and the swing was energetic and fun. He looked forward to each class and even started practicing the steps in his dorm room.</p>
              <p>His friends initially teased him about taking a dance class, but when they saw him perform at the end-of-semester showcase, they were genuinely impressed. Kevin's confidence had grown tremendously, and he had developed a new appreciation for the artistry and athleticism of dance. He even signed up for an advanced class the following semester. Kevin learned that sometimes the things we fear most can become our greatest sources of joy and personal growth.</p>
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
                  <h2>A Surpresa da Aula de Dança</h2>
                  <br />
                  <p>Kevin sempre foi atlético, jogando basquete e futebol durante todo o ensino médio. No entanto, quando começou a faculdade, precisava cumprir um requisito de educação física, e a única aula que se encaixava em sua agenda era dança de salão. Kevin ficou mortificado. Ele se imaginou tropeçando pela pista de dança, pisando nos pés de sua parceira e se tornando o motivo de piada da turma.</p>
                  <p>No primeiro dia, Kevin relutantemente entrou no estúdio de dança, usando seus tênis mais confortáveis e esperando se misturar ao fundo. A instrutora, Sra. Rodriguez, era uma mulher pequena com energia e entusiasmo incríveis. Ela explicou que dançar era sobre comunicação, confiança e expressar emoções através do movimento.</p>
                  <p>Kevin foi pareado com Sarah, uma estudante confiante de dança que imediatamente o deixou à vontade. Ela pacientemente lhe ensinou os passos básicos e o encorajou quando ele cometia erros. Para a surpresa de Kevin, ele descobriu que seu histórico atlético realmente o ajudou com equilíbrio e coordenação.</p>
                  <p>Conforme as semanas passaram, Kevin descobriu que genuinamente gostava de dançar. A valsa parecia graciosa e elegante, o tango era apaixonado e dramático, e o swing era energético e divertido. Ele esperava ansiosamente por cada aula e até começou a praticar os passos em seu dormitório.</p>
                  <p>Seus amigos inicialmente o provocaram sobre fazer uma aula de dança, mas quando o viram se apresentar na mostra do final do semestre, ficaram genuinamente impressionados. A confiança de Kevin havia crescido tremendamente, e ele havia desenvolvido uma nova apreciação pela arte e atletismo da dança. Ele até se inscreveu para uma aula avançada no semestre seguinte. Kevin aprendeu que às vezes as coisas que mais tememos podem se tornar nossas maiores fontes de alegria e crescimento pessoal.</p>
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
                <Accordion.Header>1. Why did Kevin have to take a ballroom dancing class?</Accordion.Header>
                <Accordion.Body>
                  <h5>Por que Kevin teve que fazer uma aula de dança de salão?</h5>
                  Kevin needed to fulfill a physical education requirement and it was the only class that fit his schedule. <br />
                  <i>Kevin precisava cumprir um requisito de educação física e era a única aula que se encaixava em sua agenda.</i>
                </Accordion.Body>
              </Accordion.Item>
              
              <Accordion.Item eventKey="1">
                <Accordion.Header>2. How did Kevin feel about taking the dance class initially?</Accordion.Header>
                <Accordion.Body>
                  <h5>Como Kevin se sentiu sobre fazer a aula de dança inicialmente?</h5>
                  Kevin was mortified and imagined himself stumbling and becoming the laughingstock of the class. <br />
                  <i>Kevin ficou mortificado e se imaginou tropeçando e se tornando o motivo de piada da turma.</i>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="2">
                <Accordion.Header>3. Who was Kevin's dance partner and how did she help him?</Accordion.Header>
                <Accordion.Body>
                  <h5>Quem foi a parceira de dança de Kevin e como ela o ajudou?</h5>
                  Kevin was paired with Sarah, who patiently taught him basic steps and encouraged him when he made mistakes. <br />
                  <i>Kevin foi pareado com Sarah, que pacientemente lhe ensinou os passos básicos e o encorajou quando ele cometia erros.</i>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="3">
                <Accordion.Header>4. How did Kevin's athletic background help him with dancing?</Accordion.Header>
                <Accordion.Body>
                  <h5>Como o histórico atlético de Kevin o ajudou com a dança?</h5>
                  Kevin's athletic background helped him with balance and coordination. <br />
                  <i>O histórico atlético de Kevin o ajudou com equilíbrio e coordenação.</i>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="4">
                <Accordion.Header>5. What lesson did Kevin learn from this experience?</Accordion.Header>
                <Accordion.Body>
                  <h5>Que lição Kevin aprendeu com essa experiência?</h5>
                  Kevin learned that sometimes the things we fear most can become our greatest sources of joy and personal growth. <br />
                  <i>Kevin aprendeu que às vezes as coisas que mais tememos podem se tornar nossas maiores fontes de alegria e crescimento pessoal.</i>
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