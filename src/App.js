import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider, Helmet } from 'react-helmet-async';

import Home from './pages/home';
import Conversações from './pages/conversacoes';
import Gramatica from './pages/Gramatica';
import Vocabulário from './pages/vocabulario';
import Textos from './pages/textos';
import Texto1 from './pages/textos/texto1';
import Texto2 from './pages/textos/texto2';
import Vocab1 from './pages/vocab/vocab1';
import Vocab2 from './pages/vocab/vocab2';
import Vocab3 from './pages/vocab/vocab3';
import Vocab4 from './pages/vocab/vocab4';
import Vocab5 from './pages/vocab/vocab5';
import Vocab6 from './pages/vocab/vocab6';
import Vocab7 from './pages/vocab/vocab7';
import Vocab8 from './pages/vocab/vocab8';
import Vocab9 from './pages/vocab/vocab9';
import Vocab10 from './pages/vocab/vocab10';
import Vocab11 from './pages/vocab/vocab11';
import Vocab12 from './pages/vocab/vocab12';
import Vocab13 from './pages/vocab/vocab13';
import Vocab14 from './pages/vocab/vocab14';

import Gramatica1 from './pages/gramatica/gramatica1';
import Conversacao1 from './pages/conversacoes/conversacao1';
import Girias from './pages/girias';
import ExpressoesPopulares from './pages/expressoes-populares';

import './style.css';

function App() {
  return (
    <HelmetProvider>
    <Router>
       <Helmet>
        <title>IGR</title>
      </Helmet>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/conversacoes" element={<Conversações />} />
        <Route path="/conversacao1" element={<Conversacao1 />} />

        <Route path="/textos" element={<Textos />} />
        <Route path="/texto/texto1" element={<Texto1 />} />
        <Route path="/texto/texto2" element={<Texto2 />} />

        <Route path="/gramatica" element={<Gramatica />} />
        <Route path="/gramatica1" element={<Gramatica1 />} />

        <Route path="/vocabulario" element={<Vocabulário />} />
        <Route path="/vocab/vocab1" element={<Vocab1 />} />
        <Route path="/vocab/vocab2" element={<Vocab2 />} />
        <Route path="/vocab/vocab3" element={<Vocab3 />} />
        <Route path="/vocab/vocab4" element={<Vocab4 />} />
        <Route path="/vocab/vocab5" element={<Vocab5 />} />
        <Route path="/vocab/vocab6" element={<Vocab6 />} />
        <Route path="/vocab/vocab7" element={<Vocab7 />} />
        <Route path="/vocab/vocab8" element={<Vocab8 />} />
        <Route path="/vocab/vocab9" element={<Vocab9 />} />
        <Route path="/vocab/vocab9" element={<Vocab9 />} />
        <Route path="/vocab/vocab10" element={<Vocab10 />} />
        <Route path="/vocab/vocab11" element={<Vocab11 />} />
        <Route path="/vocab/vocab12" element={<Vocab12 />} />
        <Route path="/vocab/vocab13" element={<Vocab13 />} />
        <Route path="/vocab/vocab14" element={<Vocab14 />} />

        <Route path="/girias" element={<Girias />} />
        <Route path="/expressoes-populares" element={<ExpressoesPopulares />} />


      </Routes>
    </Router>
    </HelmetProvider>
  );
}

export default App;
