import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import Girias from '../pages/extrapages/girias';
import ExpressoesPopulares from '../pages/extrapages/expressoes-populares';
import FrasesComuns from '../pages/extrapages/frases-comuns';
import VerbosIrregulares from  '../pages/extrapages/verbos-irregulares';



const ExtraPagesRotas = () => {

    return(
      <Routes>

        <Route path="girias" element={<Girias />} />
        <Route path="expressoes-populares" element={<ExpressoesPopulares />} />
        <Route path="frases-comuns" element={<FrasesComuns />} />
        <Route path="verbos-irregulares" element={<VerbosIrregulares />} />


      </Routes>
    )
}

export default ExtraPagesRotas;