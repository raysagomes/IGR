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
import AudioTexto from '../pages/extrapages/audio-texto';

import Texto1 from '../pages/extrapages/audio-texto/texto1';
import Texto2 from '../pages/extrapages/audio-texto/texto2';
import Texto3 from '../pages/extrapages/audio-texto/texto3';
import Texto4 from '../pages/extrapages/audio-texto/texto4';
import Texto5 from '../pages/extrapages/audio-texto/texto5';
import Texto6 from '../pages/extrapages/audio-texto/texto6';
import Texto7 from '../pages/extrapages/audio-texto/texto7';
import Texto8 from '../pages/extrapages/audio-texto/texto8';


const ExtraPagesRotas = () => {

    return(
      <Routes>

        <Route path="girias" element={<Girias />} />
        <Route path="expressoes-populares" element={<ExpressoesPopulares />} />
        <Route path="frases-comuns" element={<FrasesComuns />} />
        <Route path="verbos-irregulares" element={<VerbosIrregulares />} />
        <Route path="audio-texto" element={<AudioTexto />} />

        {/* frases comuns */}
        <Route path="frases-comuns/agradecimentos" element={<Agradecimento />} />
        <Route path="frases-comuns/despedidas" element={<Despedidas />} />
        <Route path="frases-comuns/saude" element={<DesejarSaude />} />
        <Route path="frases-comuns/saudacao" element={<Saudacoes />} />
        <Route path="frases-comuns/informacao" element={<PedirInformacao />} />
        <Route path="frases-comuns/desculpa" element={<PedirDesculpas />} />
        <Route path="frases-comuns/ajuda" element={<OferecerAjuda />} />
        <Route path="frases-comuns/concordar" element={<FrasesConcordar />} />

        {/* textos em audio */}


        <Route path="audio-texto/texto1" element={<Texto1 />} />
        <Route path="audio-texto/texto2" element={<Texto2 />} />
        <Route path="audio-texto/texto3" element={<Texto3 />} />
        <Route path="audio-texto/texto4" element={<Texto4 />} />
        <Route path="audio-texto/texto5" element={<Texto5 />} />
        <Route path="audio-texto/texto6" element={<Texto6 />} />
        <Route path="audio-texto/texto7" element={<Texto7 />} />
        <Route path="audio-texto/texto8" element={<Texto8 />} />


      </Routes>
    )
}

export default ExtraPagesRotas;