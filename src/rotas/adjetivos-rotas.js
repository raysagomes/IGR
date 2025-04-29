import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import Adjetivos from '../pages/adjetivos'
import VocabAdjetivo1 from '../pages/adjetivos/adjetivo1';
import VocabAdjetivo2 from '../pages/adjetivos/adjetivo2';
import VocabAdjetivo3 from '../pages/adjetivos/adjetivo3';
import VocabAdjetivo4 from '../pages/adjetivos/adjetivo4';
import VocabAdjetivo5 from '../pages/adjetivos/adjetivo5';
import VocabAdjetivo6 from '../pages/adjetivos/adjetivo6';
import VocabAdjetivo7 from '../pages/adjetivos/adjetivo7';
import VocabAdjetivo8 from '../pages/adjetivos/adjetivo8';
import VocabAdjetivo9 from '../pages/adjetivos/adjetivo9';
import VocabAdjetivo10 from '../pages/adjetivos/adjetivo10';


const VocabularioAdjetivosRotas = () => {

    return(
      <Routes>

        <Route path="/" element={<Adjetivos />} />
        <Route path="adjetivo1" element={<VocabAdjetivo1 />} />
        <Route path="adjetivo2" element={<VocabAdjetivo2 />} />
        <Route path="adjetivo3" element={<VocabAdjetivo3 />} />
        <Route path="adjetivo4" element={<VocabAdjetivo4 />} />
        <Route path="adjetivo5" element={<VocabAdjetivo5 />} />
        <Route path="adjetivo6" element={<VocabAdjetivo6 />} />
        <Route path="adjetivo7" element={<VocabAdjetivo7 />} />
        <Route path="adjetivo8" element={<VocabAdjetivo8 />} />
        <Route path="adjetivo9" element={<VocabAdjetivo9 />} />
        <Route path="adjetivo10" element={<VocabAdjetivo10 />} />

      </Routes>
    )
}

export default VocabularioAdjetivosRotas;