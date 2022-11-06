import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';
import Contact from './pages/Contact';
import Links from './pages/Links';

const rootElement = document.getElementById("root");
render (
  <BrowserRouter>
   <Routes>
      <Route path="/website" element={<Links />} />
      <Route path="/website/contact" element={<Contact />} />
    </Routes>
    <App />
  </BrowserRouter>,
  rootElement
);

