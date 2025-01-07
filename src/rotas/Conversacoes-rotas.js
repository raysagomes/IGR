import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import Conversações from '../pages/conversacoes';
import Conversacao1 from '../pages/conversacoes/conversacao1';
import Conversacao2 from '../pages/conversacoes/conversacao2';
import Conversacao3 from '../pages/conversacoes/conversacao3';
import Conversacao4 from '../pages/conversacoes/conversacao4';
import Conversacao5 from '../pages/conversacoes/conversacao5';
import Conversacao6 from '../pages/conversacoes/conversacao6';
import Conversacao7 from '../pages/conversacoes/conversacao7';
import Conversacao8 from '../pages/conversacoes/conversacao8';
import Conversacao9 from '../pages/conversacoes/conversacao9';
import Conversacao10 from '../pages/conversacoes/conversacao10';



const ConversacoesRotas = () => {

    return(
      <Routes>
        <Route path="/" element={<Conversações />} />
        <Route path="conversacao1" element={<Conversacao1 />} />
        <Route path="conversacao2" element={<Conversacao2 />} />
        <Route path="conversacao3" element={<Conversacao3 />} />
        <Route path="conversacao4" element={<Conversacao4 />} />
        <Route path="conversacao5" element={<Conversacao5 />} />
        <Route path="conversacao6" element={<Conversacao6 />} />
        <Route path="conversacao7" element={<Conversacao7 />} />
        <Route path="conversacao8" element={<Conversacao8 />} />
        <Route path="conversacao9" element={<Conversacao9 />} />
        <Route path="conversacao10" element={<Conversacao10 />} />

      </Routes>
    )
}

export default ConversacoesRotas;