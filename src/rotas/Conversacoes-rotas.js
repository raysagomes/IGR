import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import Conversações from '../pages/conversacoes';
import Conversacao1 from '../pages/conversacoes/conversacao1';



const ConversacoesRotas = () => {

    return(
      <Routes>
        <Route path="/" element={<Conversações />} />
        <Route path="conversacao1" element={<Conversacao1 />} />

      </Routes>
    )
}

export default ConversacoesRotas;