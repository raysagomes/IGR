import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider, Helmet } from 'react-helmet-async';

import Gramatica from '../pages/Gramatica';
import Gramatica1 from '../pages/gramatica/gramatica1';
import Gramatica2 from '../pages/gramatica/gramatica2';
import Gramatica3 from '../pages/gramatica/gramatica3';
import Gramatica4 from '../pages/gramatica/gramatica4';
import Gramatica5 from '../pages/gramatica/gramatica5';
import Gramatica6 from '../pages/gramatica/gramatica6';
import Gramatica7 from '../pages/gramatica/gramatica7';
import Gramatica8 from '../pages/gramatica/gramatica8';
import Gramatica9 from '../pages/gramatica/gramatica9';
import Gramatica10 from '../pages/gramatica/gramatica10';
import Gramatica11 from '../pages/gramatica/gramatica11';


const GramaticaRotas = () => {

    return(
      <Routes>

        <Route path="/" element={<Gramatica />} />
        <Route path="gramatica1" element={<Gramatica1 />} />
        <Route path="gramatica2" element={<Gramatica2 />} />
        <Route path="gramatica3" element={<Gramatica3 />} />
        <Route path="gramatica4" element={<Gramatica4 />} />
        <Route path="gramatica5" element={<Gramatica5 />} />
        <Route path="gramatica6" element={<Gramatica6 />} />
        <Route path="gramatica7" element={<Gramatica7 />} />
        <Route path="gramatica8" element={<Gramatica8 />} />
        <Route path="gramatica9" element={<Gramatica9 />} />
        <Route path="gramatica10" element={<Gramatica10 />} />
        <Route path="gramatica11" element={<Gramatica11 />} />


      </Routes>
    )
}

export default GramaticaRotas;