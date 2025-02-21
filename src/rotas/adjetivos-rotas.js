import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import Adjetivos from '../pages/adjetivos'
import VocabAdjetivo1 from '../pages/adjetivos/adjetivo1';

const VocabularioAdjetivosRotas = () => {

    return(
      <Routes>

        <Route path="/" element={<Adjetivos />} />
        <Route path="adjetivo1" element={<VocabAdjetivo1 />} />

      </Routes>
    )
}

export default VocabularioAdjetivosRotas;