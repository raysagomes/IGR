import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import Girias from '../pages/extrapages/girias';
import ExpressoesPopulares from '../pages/extrapages/expressoes-populares';
import FrasesComuns from '../pages/extrapages/frases-comuns';
import VerbosIrregulares from  '../pages/extrapages/verbos-irregulares';
import Agradecimento from '../pages/extrapages/frases-comuns/agradecimentos';
import FrasesConcordar from '../pages/extrapages/frases-comuns/concordar';
import OferecerAjuda from '../pages/extrapages/frases-comuns/ajuda';
import PedirDesculpas from '../pages/extrapages/frases-comuns/desculpa';
import Despedidas from '../pages/extrapages/frases-comuns/despedidas';
import PedirInformacao from '../pages/extrapages/frases-comuns/informacao';
import Saudacoes from '../pages/extrapages/frases-comuns/saudacao';
import DesejarSaude from '../pages/extrapages/frases-comuns/saude';

const ExtraPagesRotas = () => {

    return(
      <Routes>

        <Route path="girias" element={<Girias />} />
        <Route path="expressoes-populares" element={<ExpressoesPopulares />} />
        <Route path="frases-comuns" element={<FrasesComuns />} />
        <Route path="verbos-irregulares" element={<VerbosIrregulares />} />
        <Route path="frases-comuns/agradecimentos" element={<Agradecimento />} />
        <Route path="frases-comuns/despedidas" element={<Despedidas />} />
        <Route path="frases-comuns/saude" element={<DesejarSaude />} />
        <Route path="frases-comuns/saudacao" element={<Saudacoes />} />
        <Route path="frases-comuns/informacao" element={<PedirInformacao />} />
        <Route path="frases-comuns/desculpa" element={<PedirDesculpas />} />
        <Route path="frases-comuns/ajuda" element={<OferecerAjuda />} />
        <Route path="frases-comuns/concordar" element={<FrasesConcordar />} />


      </Routes>
    )
}

export default ExtraPagesRotas;