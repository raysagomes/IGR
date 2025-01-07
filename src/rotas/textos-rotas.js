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
import Texto7 from '../pages/textos/texto7';
import Texto8 from '../pages/textos/texto8';
import Texto9 from '../pages/textos/texto9';
import Texto10 from '../pages/textos/texto10';
import Texto11 from '../pages/textos/texto11';
import Texto12 from '../pages/textos/texto12';
import Texto13 from '../pages/textos/texto13';
import Texto14 from '../pages/textos/texto14';
import Texto15 from '../pages/textos/texto15';


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
        <Route path="texto7" element={<Texto7 />} />
        <Route path="texto8" element={<Texto8 />} />
        <Route path="texto9" element={<Texto9 />} />
        <Route path="texto10" element={<Texto10 />} />
        <Route path="texto11" element={<Texto11 />} />
        <Route path="texto12" element={<Texto12 />} />
        <Route path="texto13" element={<Texto13 />} />
        <Route path="texto14" element={<Texto14 />} />
        <Route path="texto15" element={<Texto15 />} />

      </Routes>
    )
}

export default TextosRotas;