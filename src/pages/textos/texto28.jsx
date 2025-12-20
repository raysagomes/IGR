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

  const text = "The Food Truck Adventure. After years of working in corporate restaurants, Chef Maria decided it was time to follow her dream of owning her own business. She had saved enough money to buy a small food truck and wanted to bring authentic Mexican cuisine to her city's downtown area. Maria spent months planning her menu, testing recipes, and designing the truck's colorful exterior. She chose to specialize in traditional tacos, fresh salsas, and homemade agua frescas. The first day of business was both exciting and terrifying. Maria arrived at her designated spot at 6 AM to prep all the ingredients. She had butterflies in her stomach as she waited for her first customer. Around noon, a construction worker approached the truck and ordered two carnitas tacos. Maria carefully prepared them with slow-cooked pork, fresh onions, cilantro, and her grandmother's secret salsa recipe. The worker took one bite and his eyes lit up. 'This is incredible!' he exclaimed. Word spread quickly among the construction crew, and soon Maria had a line of hungry customers. Each person who tried her food became an instant fan, praising the authentic flavors and generous portions. By the end of the first week, Maria had regular customers who would seek out her truck wherever it was parked. Local office workers started following her social media to track her daily location. Food bloggers discovered her truck and wrote glowing reviews, calling her tacos 'the best-kept secret in the city.' Within six months, Maria had built such a loyal following that she was able to expand to a second truck. Her success came not just from great food, but from her passion for sharing her culture and connecting with her community through authentic, homemade meals.";

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


export default function Texto28() {
  return (
    <>
      <Helmet>
        <title>Texto28</title>
      </Helmet>
      <Header />
      <Logo />
      <HeaderMenuTexto />
      <Container>
        <Row>
          <Col className="coluna-texto1">
            <AudioComponent />
            <h2 className="h1-Texto-Inicial">The Food Truck Adventure</h2>
            <h4 className="h5-Textos">
              <p>After years of working in corporate restaurants, Chef Maria decided it was time to follow her dream of owning her own business. She had saved enough money to buy a small food truck and wanted to bring authentic Mexican cuisine to her city's downtown area. Maria spent months planning her menu, testing recipes, and designing the truck's colorful exterior.</p>
              <p>She chose to specialize in traditional tacos, fresh salsas, and homemade agua frescas. The first day of business was both exciting and terrifying. Maria arrived at her designated spot at 6 AM to prep all the ingredients. She had butterflies in her stomach as she waited for her first customer.</p>
              <p>Around noon, a construction worker approached the truck and ordered two carnitas tacos. Maria carefully prepared them with slow-cooked pork, fresh onions, cilantro, and her grandmother's secret salsa recipe. The worker took one bite and his eyes lit up. 'This is incredible!' he exclaimed.</p>
              <p>Word spread quickly among the construction crew, and soon Maria had a line of hungry customers. Each person who tried her food became an instant fan, praising the authentic flavors and generous portions. By the end of the first week, Maria had regular customers who would seek out her truck wherever it was parked.</p>
              <p>Local office workers started following her social media to track her daily location. Food bloggers discovered her truck and wrote glowing reviews, calling her tacos 'the best-kept secret in the city.' Within six months, Maria had built such a loyal following that she was able to expand to a second truck. Her success came not just from great food, but from her passion for sharing her culture and connecting with her community through authentic, homemade meals.</p>
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
                  <h2>A Aventura do Food Truck</h2>
                  <br />
                  <p>Após anos trabalhando em restaurantes corporativos, a Chef Maria decidiu que era hora de seguir seu sonho de ter seu próprio negócio. Ela havia economizado dinheiro suficiente para comprar um pequeno food truck e queria trazer culinária mexicana autêntica para a área central de sua cidade. Maria passou meses planejando seu cardápio, testando receitas e projetando o exterior colorido do caminhão.</p>
                  <p>Ela escolheu se especializar em tacos tradicionais, salsas frescas e agua frescas caseiras. O primeiro dia de negócios foi ao mesmo tempo emocionante e aterrorizante. Maria chegou ao seu local designado às 6h da manhã para preparar todos os ingredientes. Ela tinha borboletas no estômago enquanto esperava por seu primeiro cliente.</p>
                  <p>Por volta do meio-dia, um trabalhador da construção se aproximou do caminhão e pediu dois tacos de carnitas. Maria os preparou cuidadosamente com carne de porco cozida lentamente, cebolas frescas, coentro e a receita secreta de salsa de sua avó. O trabalhador deu uma mordida e seus olhos se iluminaram. 'Isso é incrível!' ele exclamou.</p>
                  <p>A notícia se espalhou rapidamente entre a equipe de construção, e logo Maria tinha uma fila de clientes famintos. Cada pessoa que experimentou sua comida se tornou um fã instantâneo, elogiando os sabores autênticos e as porções generosas. No final da primeira semana, Maria tinha clientes regulares que procuravam seu caminhão onde quer que estivesse estacionado.</p>
                  <p>Trabalhadores de escritório locais começaram a seguir suas redes sociais para rastrear sua localização diária. Blogueiros de comida descobriram seu caminhão e escreveram críticas brilhantes, chamando seus tacos de 'o segredo mais bem guardado da cidade'. Em seis meses, Maria havia construído um seguimento tão leal que conseguiu expandir para um segundo caminhão. Seu sucesso veio não apenas da ótima comida, mas de sua paixão por compartilhar sua cultura e se conectar com sua comunidade através de refeições autênticas e caseiras.</p>
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
                <Accordion.Header>1. What motivated Maria to start her food truck business?</Accordion.Header>
                <Accordion.Body>
                  <h5>O que motivou Maria a começar seu negócio de food truck?</h5>
                  Maria wanted to follow her dream of owning her own business after years in corporate restaurants. <br />
                  <i>Maria queria seguir seu sonho de ter seu próprio negócio após anos em restaurantes corporativos.</i>
                </Accordion.Body>
              </Accordion.Item>
              
              <Accordion.Item eventKey="1">
                <Accordion.Header>2. What type of food did Maria specialize in?</Accordion.Header>
                <Accordion.Body>
                  <h5>Em que tipo de comida Maria se especializou?</h5>
                  Maria specialized in traditional tacos, fresh salsas, and homemade agua frescas. <br />
                  <i>Maria se especializou em tacos tradicionais, salsas frescas e agua frescas caseiras.</i>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="2">
                <Accordion.Header>3. Who was Maria's first customer and how did he react?</Accordion.Header>
                <Accordion.Body>
                  <h5>Quem foi o primeiro cliente de Maria e como ele reagiu?</h5>
                  A construction worker was her first customer, and he exclaimed 'This is incredible!' after trying the tacos. <br />
                  <i>Um trabalhador da construção foi seu primeiro cliente, e ele exclamou 'Isso é incrível!' depois de experimentar os tacos.</i>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="3">
                <Accordion.Header>4. How did Maria's business grow over time?</Accordion.Header>
                <Accordion.Body>
                  <h5>Como o negócio de Maria cresceu ao longo do tempo?</h5>
                  Word spread quickly, she gained regular customers, food bloggers wrote reviews, and she expanded to a second truck. <br />
                  <i>A notícia se espalhou rapidamente, ela ganhou clientes regulares, blogueiros de comida escreveram críticas e ela expandiu para um segundo caminhão.</i>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="4">
                <Accordion.Header>5. What was the key to Maria's success beyond just good food?</Accordion.Header>
                <Accordion.Body>
                  <h5>Qual foi a chave do sucesso de Maria além de apenas boa comida?</h5>
                  Her success came from her passion for sharing her culture and connecting with her community. <br />
                  <i>Seu sucesso veio de sua paixão por compartilhar sua cultura e se conectar com sua comunidade.</i>
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