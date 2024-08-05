import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/home';
import Conversações from './pages/conversacoes';
import Gramatica from './pages/Gramatica';
import Vocabulário from './pages/vocabulario';
import Textos from './pages/textos';
import Texto1 from './pages/textos/texto1';
import Texto2 from './pages/textos/texto2';
import Vocab1 from './pages/vocab/vocab1';
import Gramatica1 from './pages/gramatica/gramatica1';
import Conversacao1 from './pages/conversacoes/conversacao1';

import './style.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/conversacoes" element={<Conversações />} />
        <Route path="/textos" element={<Textos />} />
        <Route path="/gramatica" element={<Gramatica />} />
        <Route path="/vocabulario" element={<Vocabulário />} />
        <Route path="/vocabulario1" element={<Vocab1 />} />
        <Route path="/gramatica1" element={<Gramatica1 />} />
        <Route path="/conversacao1" element={<Conversacao1 />} />
        <Route path="/texto/texto1" element={<Texto1 />} />
        <Route path="/texto/texto2" element={<Texto2 />} />
      </Routes>
    </Router>
  );
}

export default App;
