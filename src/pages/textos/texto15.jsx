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
  Emma's Summer Adventure

  Emma was an energetic girl who loved nature and adventure. One summer, she decided to spend her vacation exploring the forests and lakes near her grandparents’ house in the countryside.

  Every day, Emma set out with her backpack and journal to discover new plants, animals, and hidden trails. She enjoyed sketching flowers and writing about her experiences in her journal.

  During her explorations, Emma met a group of kids who shared her love for nature. Together, they built a small treehouse by the lake where they could gather and plan new adventures.

  One afternoon, Emma and her new friends found a lost puppy near the woods. They took care of it, searched for its owner, and eventually helped reunite the puppy with a kind family in the nearby village.

  The summer flew by with fun days of hiking, swimming, and making memories. Emma learned the importance of friendship, responsibility, and appreciating the beauty of the natural world.

  Emma's Summer Adventure became a story she loved to tell, reminding her that great experiences can happen when you step outside and explore.
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


export default function Texto15() {
  return (
    <>
      <Helmet>
        <title>Texto15</title>
      </Helmet>
      <Header />
      <Logo />
      <HeaderMenuTexto />
      <Container>
        <Row>
          <Col className="coluna-texto1">
            <AudioComponent />
            <h2 className="h1-Texto-Inicial">Emma's Summer Adventure</h2>
            <h4 className="h5-Textos">
              <p>
                Emma was an energetic girl who loved nature and adventure. One
                summer, she decided to spend her vacation exploring the forests
                and lakes near her grandparents’ house in the countryside.
              </p>

              <p>
                Every day, Emma set out with her backpack and journal to
                discover new plants, animals, and hidden trails. She enjoyed
                sketching flowers and writing about her experiences in her
                journal.
              </p>

              <p>
                During her explorations, Emma met a group of kids who shared her
                love for nature. Together, they built a small treehouse by the
                lake where they could gather and plan new adventures.
              </p>

              <p>
                One afternoon, Emma and her new friends found a lost puppy near
                the woods. They took care of it, searched for its owner, and
                eventually helped reunite the puppy with a kind family in the
                nearby village.
              </p>

              <p>
                The summer flew by with fun days of hiking, swimming, and making
                memories. Emma learned the importance of friendship,
                responsibility, and appreciating the beauty of the natural
                world.
              </p>

              <p>
                Emma's Summer Adventure became a story she loved to tell,
                reminding her that great experiences can happen when you step
                outside and explore.
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
                  <h2>A História de A Casa Monstro</h2>
                  <br />
                  <p>
                    A Casa Monstro é um filme animado sobre três crianças que
                    descobrem que uma casa velha e assustadora em seu bairro
                    está viva e é perigosa. A casa amedronta todos e tem um
                    passado misterioso que as crianças querem desvendar.
                  </p>
                  <p>
                    A história começa quando DJ, Chowder e Jenny percebem coisas
                    estranhas acontecendo ao redor da casa. Objetos se movem
                    sozinhos e sons assustadores vêm de dentro. Os amigos
                    decidem investigar o que realmente está acontecendo.
                  </p>
                  <p>
                    Conforme exploram, descobrem que a casa é possuída pelo
                    espírito do antigo dono, um homem solitário e
                    incompreendido. O espírito usa a casa para se proteger e
                    impedir que alguém chegue perto demais.
                  </p>
                  <p>
                    As crianças enfrentam muitos desafios para descobrir como
                    parar a casa. Trabalham juntas, enfrentam seus medos e
                    resolvem enigmas. A coragem e a amizade delas ajudam a
                    enfrentar essa ameaça sobrenatural.
                  </p>
                  <p>
                    No final, elas conseguem libertar o espírito e impedir que a
                    casa machuque mais pessoas. O filme traz lições sobre
                    amizade, coragem e entender aqueles que são diferentes.
                  </p>
                  <p>
                    A Casa Monstro fez sucesso por sua história única, animação
                    criativa e aventura empolgante, que agrada tanto crianças
                    quanto adultos.
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
                  1. What did Emma love to do during her summer vacation?
                </Accordion.Header>
                <Accordion.Body>
                  <h5>
                    O que Emma gostava de fazer durante suas férias de verão?
                  </h5>
                  Emma loved exploring forests and lakes near her grandparents’
                  house. <br />
                  <i>
                    Emma gostava de explorar florestas e lagos perto da casa de
                    seus avós.
                  </i>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  2. What did Emma enjoy doing in her journal?
                </Accordion.Header>
                <Accordion.Body>
                  <h5>O que Emma gostava de fazer em seu diário?</h5>
                  She enjoyed sketching flowers and writing about her
                  experiences. <br />
                  <i>
                    Ela gostava de desenhar flores e escrever sobre suas
                    experiências.
                  </i>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  3. Who did Emma meet during her explorations?
                </Accordion.Header>
                <Accordion.Body>
                  <h5>Quem Emma conheceu durante suas explorações?</h5>
                  Emma met a group of kids who shared her love for nature.{" "}
                  <br />
                  <i>
                    Emma conheceu um grupo de crianças que compartilhavam seu
                    amor pela natureza.
                  </i>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="3">
                <Accordion.Header>
                  4. What did Emma and her friends find one afternoon?
                </Accordion.Header>
                <Accordion.Body>
                  <h5>O que Emma e seus amigos encontraram uma tarde?</h5>
                  They found a lost puppy near the woods and helped reunite it
                  with its owner. <br />
                  <i>
                    Encontraram um filhote perdido perto da floresta e ajudaram
                    a reencontrá-lo com seu dono.
                  </i>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="4">
                <Accordion.Header>
                  5. What important lessons did Emma learn from her summer
                  adventure?
                </Accordion.Header>
                <Accordion.Body>
                  <h5>
                    Quais lições importantes Emma aprendeu em sua aventura de
                    verão?
                  </h5>
                  Emma learned about friendship, responsibility, and
                  appreciating nature’s beauty. <br />
                  <i>
                    Emma aprendeu sobre amizade, responsabilidade e a
                    importância de apreciar a beleza da natureza.
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