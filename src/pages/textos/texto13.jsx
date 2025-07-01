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
  Sofia's Path to Becoming a Software Engineer

  Sofia had always been fascinated by technology. As a child, she would spend hours dismantling electronic toys just to see how they worked. While most of her friends were playing outside, Sofia was teaching herself how to use basic programming tools on her family’s old computer.

  Growing up in a rural area, she didn’t have many resources or mentors in tech, but she was determined to follow her passion. After finishing high school, she earned a scholarship to study computer science at a prestigious university in the city. It was a completely new world for her, and at first, she felt out of place among students who had more experience and access to advanced tools.

  The first semesters were tough. Sofia struggled with complex algorithms and felt overwhelmed by the fast-paced environment. Many times, she considered giving up, but she reminded herself of how far she had come. She sought help from professors, joined study groups, and spent long nights coding and debugging projects.

  A turning point came when she participated in a national hackathon. Despite being nervous, Sofia decided to join a team and take the role of lead developer. They built an app to help farmers monitor crop health using satellite data — an idea inspired by her hometown. The judges were impressed not only by the technical solution but also by the real-world impact it could have. Sofia's team won second place, and she received internship offers from several tech companies.

  That experience boosted her confidence. From there, she completed her degree with honors and landed a full-time job at a major software company. She now mentors young women in tech and often speaks at events about her journey.

  Today, Sofia is a respected software engineer, admired not only for her technical expertise but also for her resilience. Her story reminds others that talent can come from anywhere, and that determination can overcome even the biggest challenges.
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


export default function Texto13() {
  return (
    <>
      <Helmet>
        <title>Texto13</title>
      </Helmet>
      <Header />
      <Logo />
      <HeaderMenuTexto />
      <Container>
        <Row>
          <Col className="coluna-texto1">
            <AudioComponent />
            <h2 className="h1-Texto-Inicial">
              Sofia's Path to Becoming a Software Engineer
            </h2>
            <h4 className="h5-Textos">
              <p>
                Sofia had always been fascinated by technology. As a child, she
                would spend hours dismantling electronic toys just to see how
                they worked. While most of her friends were playing outside,
                Sofia was teaching herself how to use basic programming tools on
                her family’s old computer.
              </p>

              <p>
                Growing up in a rural area, she didn’t have many resources or
                mentors in tech, but she was determined to follow her passion.
                After finishing high school, she earned a scholarship to study
                computer science at a prestigious university in the city. It was
                a completely new world for her, and at first, she felt out of
                place among students who had more experience and access to
                advanced tools.
              </p>

              <p>
                The first semesters were tough. Sofia struggled with complex
                algorithms and felt overwhelmed by the fast-paced environment.
                Many times, she considered giving up, but she reminded herself
                of how far she had come. She sought help from professors, joined
                study groups, and spent long nights coding and debugging
                projects.
              </p>

              <p>
                A turning point came when she participated in a national
                hackathon. Despite being nervous, Sofia decided to join a team
                and take the role of lead developer. They built an app to help
                farmers monitor crop health using satellite data — an idea
                inspired by her hometown. The judges were impressed not only by
                the technical solution but also by the real-world impact it
                could have. Sofia's team won second place, and she received
                internship offers from several tech companies.
              </p>

              <p>
                That experience boosted her confidence. From there, she
                completed her degree with honors and landed a full-time job at a
                major software company. She now mentors young women in tech and
                often speaks at events about her journey.
              </p>

              <p>
                Today, Sofia is a respected software engineer, admired not only
                for her technical expertise but also for her resilience. Her
                story reminds others that talent can come from anywhere, and
                that determination can overcome even the biggest challenges.
              </p>
            </h4>
          </Col>
          <Col
            xs={12}
            md={3}
            className="extra-pagina-de-textos d-flex flex-column align-items-end "
          >
            <RightNavBar />
          </Col>
        </Row>
      </Container>

      <Container
        md="auto"
        xs
        lg="7"
        className="div-accordion-ativididade justify-content-center"
      >
        <Row>
          <Col>
            <Accordion className="justify-content-center">
              <Accordion.Item eventKey="0" className="Accordion">
                <Accordion.Header className="accordion-header">
                  <h2>Tradução do texto</h2>
                </Accordion.Header>
                <Accordion.Body>
                  <h2>
                    A Jornada de Sofia para se Tornar Engenheira de Software
                  </h2>
                  <br />
                  <p>
                    Sofia sempre foi fascinada por tecnologia. Quando criança,
                    passava horas desmontando brinquedos eletrônicos só para ver
                    como funcionavam. Enquanto a maioria de seus amigos brincava
                    do lado de fora, Sofia ensinava a si mesma como usar
                    ferramentas básicas de programação no antigo computador da
                    família.
                  </p>
                  <p>
                    Crescendo em uma área rural, ela não tinha muitos recursos
                    ou mentores na área de tecnologia, mas estava determinada a
                    seguir sua paixão. Após terminar o ensino médio, conseguiu
                    uma bolsa de estudos para cursar ciência da computação em
                    uma universidade prestigiada na cidade. Era um mundo
                    completamente novo para ela e, no começo, sentia-se
                    deslocada entre os estudantes que tinham mais experiência e
                    acesso a ferramentas avançadas.
                  </p>
                  <p>
                    Os primeiros semestres foram difíceis. Sofia teve
                    dificuldades com algoritmos complexos e se sentia
                    sobrecarregada com o ritmo acelerado. Muitas vezes pensou em
                    desistir, mas lembrava a si mesma o quanto já havia
                    conquistado. Procurou ajuda dos professores, entrou em
                    grupos de estudo e passou muitas noites programando e
                    corrigindo erros.
                  </p>
                  <p>
                    Um momento decisivo aconteceu quando ela participou de um
                    hackathon nacional. Apesar do nervosismo, decidiu entrar
                    para um time e assumir o papel de desenvolvedora principal.
                    Eles criaram um aplicativo para ajudar agricultores a
                    monitorar a saúde das plantações usando dados de satélite —
                    uma ideia inspirada por sua cidade natal. Os jurados ficaram
                    impressionados não só com a solução técnica, mas também com
                    o impacto real que ela poderia causar. O time de Sofia ficou
                    em segundo lugar, e ela recebeu propostas de estágio de
                    várias empresas de tecnologia.
                  </p>
                  <p>
                    Essa experiência aumentou sua confiança. A partir daí,
                    concluiu o curso com honras e conseguiu um emprego em tempo
                    integral em uma grande empresa de software. Hoje, ela
                    orienta jovens mulheres na área de tecnologia e
                    frequentemente compartilha sua trajetória em eventos.
                  </p>
                  <p>
                    Atualmente, Sofia é uma engenheira de software respeitada,
                    admirada não apenas por sua competência técnica, mas também
                    por sua resiliência. Sua história mostra que o talento pode
                    surgir em qualquer lugar e que a determinação pode superar
                    até os maiores desafios.
                  </p>
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
                <Accordion.Header>
                  1. What fascinated Sofia since childhood?
                </Accordion.Header>
                <Accordion.Body>
                  <h5>O que fascinava Sofia desde a infância?</h5>
                  Sofia was fascinated by technology and enjoyed taking apart
                  electronic toys to understand how they worked. <br />
                  <i>
                    Sofia era fascinada por tecnologia e gostava de desmontar
                    brinquedos eletrônicos para entender como funcionavam.
                  </i>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  2. What challenges did Sofia face in university?
                </Accordion.Header>
                <Accordion.Body>
                  <h5>Quais desafios Sofia enfrentou na universidade?</h5>
                  Sofia struggled with complex algorithms, felt overwhelmed by
                  the pace, and had to catch up with more experienced peers.{" "}
                  <br />
                  <i>
                    Sofia teve dificuldades com algoritmos complexos, se sentia
                    sobrecarregada com o ritmo e precisava alcançar colegas mais
                    experientes.
                  </i>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  3. What was the turning point in Sofia's journey?
                </Accordion.Header>
                <Accordion.Body>
                  <h5>Qual foi o ponto de virada na jornada de Sofia?</h5>
                  Participating in a national hackathon, where her team built an
                  impactful app and she received internship offers. <br />
                  <i>
                    Participar de um hackathon nacional, onde seu time criou um
                    app com impacto real e ela recebeu ofertas de estágio.
                  </i>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="3">
                <Accordion.Header>
                  4. What inspired the app Sofia's team created?
                </Accordion.Header>
                <Accordion.Body>
                  <h5>
                    O que inspirou o aplicativo criado pelo time de Sofia?
                  </h5>
                  The app was inspired by her hometown and helped farmers
                  monitor crop health using satellite data. <br />
                  <i>
                    O aplicativo foi inspirado em sua cidade natal e ajudava
                    agricultores a monitorar a saúde das plantações usando dados
                    de satélite.
                  </i>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="4">
                <Accordion.Header>
                  5. What is Sofia doing today?
                </Accordion.Header>
                <Accordion.Body>
                  <h5>O que Sofia faz atualmente?</h5>
                  Sofia is a respected software engineer, mentoring young women
                  and sharing her story at tech events. <br />
                  <i>
                    Sofia é uma engenheira de software respeitada, orienta
                    jovens mulheres e compartilha sua história em eventos de
                    tecnologia.
                  </i>
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