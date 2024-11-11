import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider, Helmet } from 'react-helmet-async';

import Vocabulário from '../pages/vocabulario';
import Vocab1 from '../pages/vocab/vocab1';
import Vocab2 from '../pages/vocab/vocab2';
import Vocab3 from '../pages/vocab/vocab3';
import Vocab4 from '../pages/vocab/vocab4';
import Vocab5 from '../pages/vocab/vocab5';
import Vocab6 from '../pages/vocab/vocab6';
import Vocab7 from '../pages/vocab/vocab7';
import Vocab8 from '../pages/vocab/vocab8';
import Vocab9 from '../pages/vocab/vocab9';
import Vocab10 from '../pages/vocab/vocab10';
import Vocab11 from '../pages/vocab/vocab11';
import Vocab12 from '../pages/vocab/vocab12';
import Vocab13 from '../pages/vocab/vocab13';
import Vocab14 from '../pages/vocab/vocab14';


const VocabularioRotas = () => {

    return(
      <Routes>
        
        <Route path="/" element={<Vocabulário />} />
        <Route path="vocab1" element={<Vocab1 />} />
        <Route path="vocab2" element={<Vocab2 />} />
        <Route path="vocab3" element={<Vocab3 />} />
        <Route path="vocab4" element={<Vocab4 />} />
        <Route path="vocab5" element={<Vocab5 />} />
        <Route path="vocab6" element={<Vocab6 />} />
        <Route path="vocab7" element={<Vocab7 />} />
        <Route path="vocab8" element={<Vocab8 />} />
        <Route path="vocab9" element={<Vocab9 />} />
        <Route path="vocab9" element={<Vocab9 />} />
        <Route path="vocab10" element={<Vocab10 />} />
        <Route path="vocab11" element={<Vocab11 />} />
        <Route path="vocab12" element={<Vocab12 />} />
        <Route path="vocab13" element={<Vocab13 />} />
        <Route path="vocab14" element={<Vocab14 />} />



      </Routes>
    )
}

export default VocabularioRotas;