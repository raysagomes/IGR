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

  const text = "The Music Festival Experience. Tyler had been looking forward to the summer music festival for months. He had bought his ticket early, planned his outfit, and made a playlist of all the bands he wanted to see. However, when the day finally arrived, nothing went according to plan. First, Tyler's car broke down on the way to the festival, and he had to take three different buses to get there. By the time he arrived, he had already missed his favorite band's opening set. Then, it started raining heavily, turning the festival grounds into a muddy mess. Tyler's carefully planned outfit was soaked within minutes, and his phone got wet and stopped working. He couldn't check the schedule or contact his friends who were supposed to meet him there. Feeling frustrated and alone, Tyler considered leaving and going home. But as he stood there in the rain, he heard incredible music coming from one of the smaller stages. He followed the sound and discovered a local band he had never heard of before. Their energy was infectious, and despite the rain, a small crowd had gathered, dancing and singing along. Tyler found himself caught up in the moment, forgetting about his ruined plans and wet clothes. He spent the rest of the day discovering new artists, making friends with other festival-goers, and enjoying the spontaneous atmosphere. He shared food with strangers, danced in the mud, and experienced music in a completely different way than he had planned. When the headlining band finally took the main stage, Tyler was right in front, covered in mud but having the time of his life. As he walked back to the bus stop that evening, Tyler realized that sometimes the best experiences come from embracing the unexpected and being open to new possibilities.";

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


export default function Texto30() {
  return (
    <>
      <Helmet>
        <title>Texto30</title>
      </Helmet>
      <Header />
      <Logo />
      <HeaderMenuTexto />
      <Container>
        <Row>
          <Col className="coluna-texto1">
            <AudioComponent />
            <h2 className="h1-Texto-Inicial">The Music Festival Experience</h2>
            <h4 className="h5-Textos">
              <p>Tyler had been looking forward to the summer music festival for months. He had bought his ticket early, planned his outfit, and made a playlist of all the bands he wanted to see. However, when the day finally arrived, nothing went according to plan.</p>
              <p>First, Tyler's car broke down on the way to the festival, and he had to take three different buses to get there. By the time he arrived, he had already missed his favorite band's opening set. Then, it started raining heavily, turning the festival grounds into a muddy mess. Tyler's carefully planned outfit was soaked within minutes, and his phone got wet and stopped working.</p>
              <p>He couldn't check the schedule or contact his friends who were supposed to meet him there. Feeling frustrated and alone, Tyler considered leaving and going home. But as he stood there in the rain, he heard incredible music coming from one of the smaller stages. He followed the sound and discovered a local band he had never heard of before.</p>
              <p>Their energy was infectious, and despite the rain, a small crowd had gathered, dancing and singing along. Tyler found himself caught up in the moment, forgetting about his ruined plans and wet clothes. He spent the rest of the day discovering new artists, making friends with other festival-goers, and enjoying the spontaneous atmosphere.</p>
              <p>He shared food with strangers, danced in the mud, and experienced music in a completely different way than he had planned. When the headlining band finally took the main stage, Tyler was right in front, covered in mud but having the time of his life. As he walked back to the bus stop that evening, Tyler realized that sometimes the best experiences come from embracing the unexpected and being open to new possibilities.</p>
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
                  <h2>A Experiência do Festival de Música</h2>
                  <br />
                  <p>Tyler estava ansioso pelo festival de música de verão há meses. Ele havia comprado seu ingresso cedo, planejado sua roupa e feito uma playlist de todas as bandas que queria ver. No entanto, quando o dia finalmente chegou, nada saiu conforme o planejado.</p>
                  <p>Primeiro, o carro de Tyler quebrou no caminho para o festival, e ele teve que pegar três ônibus diferentes para chegar lá. Quando finalmente chegou, já havia perdido o show de abertura de sua banda favorita. Então, começou a chover forte, transformando o terreno do festival em uma bagunça lamacenta. A roupa cuidadosamente planejada de Tyler ficou encharcada em minutos, e seu telefone molhou e parou de funcionar.</p>
                  <p>Ele não conseguia verificar a programação ou contatar seus amigos que deveriam encontrá-lo lá. Sentindo-se frustrado e sozinho, Tyler considerou ir embora e voltar para casa. Mas enquanto estava parado na chuva, ouviu música incrível vindo de um dos palcos menores. Ele seguiu o som e descobriu uma banda local que nunca havia ouvido antes.</p>
                  <p>A energia deles era contagiante, e apesar da chuva, uma pequena multidão havia se reunido, dançando e cantando junto. Tyler se viu envolvido no momento, esquecendo seus planos arruinados e roupas molhadas. Ele passou o resto do dia descobrindo novos artistas, fazendo amigos com outros frequentadores do festival e aproveitando a atmosfera espontânea.</p>
                  <p>Ele compartilhou comida com estranhos, dançou na lama e experimentou música de uma forma completamente diferente do que havia planejado. Quando a banda principal finalmente subiu ao palco principal, Tyler estava bem na frente, coberto de lama, mas se divertindo como nunca. Enquanto caminhava de volta ao ponto de ônibus naquela noite, Tyler percebeu que às vezes as melhores experiências vêm de abraçar o inesperado e estar aberto a novas possibilidades.</p>
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
                <Accordion.Header>1. How had Tyler prepared for the music festival?</Accordion.Header>
                <Accordion.Body>
                  <h5>Como Tyler se preparou para o festival de música?</h5>
                  Tyler bought his ticket early, planned his outfit, and made a playlist of bands he wanted to see. <br />
                  <i>Tyler comprou seu ingresso cedo, planejou sua roupa e fez uma playlist das bandas que queria ver.</i>
                </Accordion.Body>
              </Accordion.Item>
              
              <Accordion.Item eventKey="1">
                <Accordion.Header>2. What problems did Tyler face on the day of the festival?</Accordion.Header>
                <Accordion.Body>
                  <h5>Que problemas Tyler enfrentou no dia do festival?</h5>
                  Tyler's car broke down, it rained heavily, his clothes got soaked, and his phone stopped working. <br />
                  <i>O carro de Tyler quebrou, choveu forte, suas roupas ficaram encharcadas e seu telefone parou de funcionar.</i>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="2">
                <Accordion.Header>3. What made Tyler change his mind about leaving the festival?</Accordion.Header>
                <Accordion.Body>
                  <h5>O que fez Tyler mudar de ideia sobre sair do festival?</h5>
                  Tyler heard incredible music from a smaller stage and discovered a local band with infectious energy. <br />
                  <i>Tyler ouviu música incrível de um palco menor e descobriu uma banda local com energia contagiante.</i>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="3">
                <Accordion.Header>4. How did Tyler spend the rest of the day at the festival?</Accordion.Header>
                <Accordion.Body>
                  <h5>Como Tyler passou o resto do dia no festival?</h5>
                  Tyler discovered new artists, made friends, shared food with strangers, and danced in the mud. <br />
                  <i>Tyler descobriu novos artistas, fez amigos, compartilhou comida com estranhos e dançou na lama.</i>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="4">
                <Accordion.Header>5. What lesson did Tyler learn from his festival experience?</Accordion.Header>
                <Accordion.Body>
                  <h5>Que lição Tyler aprendeu com sua experiência no festival?</h5>
                  Tyler learned that sometimes the best experiences come from embracing the unexpected and being open to new possibilities. <br />
                  <i>Tyler aprendeu que às vezes as melhores experiências vêm de abraçar o inesperado e estar aberto a novas possibilidades.</i>
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