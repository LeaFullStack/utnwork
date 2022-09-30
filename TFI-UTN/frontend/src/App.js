import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './layout/Header';
import Footer from './layout/Footer';
import Nav from './layout/Nav';
import Inicio from './pages/Inicio';
import Html from './pages/Html';
import Css from './pages/Css';
import Javascript from './pages/Javascript';
import Extras from './pages/Extras';
import Contacto from './pages/Contacto';

function App() {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<Inicio />} />
          <Route path='html' element={<Html />} />
          <Route path='css' element={<Css />} />
          <Route path='javascript' element={<Javascript />} />
          <Route path='extras' element={<Extras />} />
          <Route path='contacto' element={<Contacto />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
