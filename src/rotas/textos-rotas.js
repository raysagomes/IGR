import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import Textos from '../pages/textos';
import Texto1 from '../pages/textos/texto1';
import Texto2 from '../pages/textos/texto2';
import Texto3 from '../pages/textos/texto3';
import Texto4 from '../pages/textos/texto4';
import Texto5 from '../pages/textos/texto5';
import Texto6 from '../pages/textos/texto6';


const TextosRotas = () => {

    return(
      <Routes>
        <Route path="/" element={<Textos />} />
        <Route path="texto1" element={<Texto1 />} />
        <Route path="texto2" element={<Texto2 />} />
        <Route path="texto3" element={<Texto3 />} />
        <Route path="texto4" element={<Texto4 />} />
        <Route path="texto5" element={<Texto5 />} />
        <Route path="texto6" element={<Texto6 />} />

      </Routes>
    )
}

export default TextosRotas;