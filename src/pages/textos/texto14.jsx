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
  The Story of Monster House

  Monster House is an animated movie about three kids who discover that a creepy old house in their neighborhood is actually alive and dangerous. The house scares everyone and has a mysterious past that the children want to uncover.

  The story begins when DJ, Chowder, and Jenny notice strange things happening around the house. Objects move by themselves, and eerie noises come from inside. The kids become determined to investigate what is really going on.

  As they explore, they learn that the house is possessed by the spirit of its former owner, who was a lonely and misunderstood man. The spirit uses the house to protect itself and prevent anyone from getting too close.

  The kids face many challenges trying to figure out how to stop the house. They work together, overcoming their fears and solving puzzles. Their bravery and friendship help them confront the supernatural threat.

  In the end, they find a way to free the spirit and stop the house from harming others. The movie teaches lessons about friendship, courage, and understanding those who are different.

  Monster House became popular for its unique story, creative animation, and exciting adventure that appeals to both kids and adults.
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


export default function Texto14() {
  return (
    <>
      <Helmet>
        <title>Texto14</title>
      </Helmet>
      <Header />
      <Logo />
      <HeaderMenuTexto />
      <Container>
        <Row>
          <Col className="coluna-texto1">
            <AudioComponent />
            <h2 className="h1-Texto-Inicial">The Story of Monster House</h2>
            <h4 className="h5-Textos">
              <p>
                Monster House is an animated movie about three kids who discover
                that a creepy old house in their neighborhood is actually alive
                and dangerous. The house scares everyone and has a mysterious
                past that the children want to uncover.
              </p>

              <p>
                The story begins when DJ, Chowder, and Jenny notice strange
                things happening around the house. Objects move by themselves,
                and eerie noises come from inside. The kids become determined to
                investigate what is really going on.
              </p>

              <p>
                As they explore, they learn that the house is possessed by the
                spirit of its former owner, who was a lonely and misunderstood
                man. The spirit uses the house to protect itself and prevent
                anyone from getting too close.
              </p>

              <p>
                The kids face many challenges trying to figure out how to stop
                the house. They work together, overcoming their fears and
                solving puzzles. Their bravery and friendship help them confront
                the supernatural threat.
              </p>

              <p>
                In the end, they find a way to free the spirit and stop the
                house from harming others. The movie teaches lessons about
                friendship, courage, and understanding those who are different.
              </p>

              <p>
                Monster House became popular for its unique story, creative
                animation, and exciting adventure that appeals to both kids and
                adults.
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
                  1. What is the main mystery in Monster House?
                </Accordion.Header>
                <Accordion.Body>
                  <h5>Qual é o mistério principal em A Casa Monstro?</h5>
                  The main mystery is that the creepy old house in the
                  neighborhood is alive and dangerous. <br />
                  <i>
                    O mistério principal é que a casa velha e assustadora do
                    bairro está viva e é perigosa.
                  </i>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  2. Who are the main characters investigating the house?
                </Accordion.Header>
                <Accordion.Body>
                  <h5>
                    Quem são os personagens principais que investigam a casa?
                  </h5>
                  DJ, Chowder, and Jenny are the kids trying to uncover what’s
                  going on. <br />
                  <i>
                    DJ, Chowder e Jenny são as crianças que tentam descobrir o
                    que está acontecendo.
                  </i>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  3. What causes the house to be dangerous?
                </Accordion.Header>
                <Accordion.Body>
                  <h5>O que causa o perigo na casa?</h5>
                  The house is possessed by the spirit of its former owner, who
                  uses it to protect itself. <br />
                  <i>
                    A casa é possuída pelo espírito do antigo dono, que a usa
                    para se proteger.
                  </i>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="3">
                <Accordion.Header>
                  4. How do the kids deal with the challenges?
                </Accordion.Header>
                <Accordion.Body>
                  <h5>Como as crianças enfrentam os desafios?</h5>
                  They work together, overcome their fears, and solve puzzles to
                  stop the house. <br />
                  <i>
                    Eles trabalham juntos, enfrentam seus medos e resolvem
                    enigmas para deter a casa.
                  </i>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="4">
                <Accordion.Header>
                  5. What lesson does the movie teach?
                </Accordion.Header>
                <Accordion.Body>
                  <h5>Qual lição o filme ensina?</h5>
                  The movie teaches about friendship, courage, and understanding
                  others who are different. <br />
                  <i>
                    O filme ensina sobre amizade, coragem e entender aqueles que
                    são diferentes.
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