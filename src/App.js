import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider, Helmet } from 'react-helmet-async';

import Home from './pages/home';
import GramaticaRotas from './rotas/Gramatica-rotas';
import VocabularioRotas from './rotas/Vocabulario-rotas';
import ConversacoesRotas from './rotas/Conversacoes-rotas';
import ExtraPagesRotas from './rotas/extra-pages-rotas';
import TextosRotas from './rotas/textos-rotas';

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

        <Route path="/gramatica/*" element={<GramaticaRotas />} />
        <Route path="/vocab/*" element={<VocabularioRotas />} />
        <Route path="/conversacoes/*" element={<ConversacoesRotas />} />
        <Route path="/extrapages/*" element={<ExtraPagesRotas />} />
        <Route path="/textos/*" element={<TextosRotas />} />


      </Routes>
    </Router>
    </HelmetProvider>
  );
}

export default App;
