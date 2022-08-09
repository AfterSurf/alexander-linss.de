import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.render(
	<BrowserRouter>
    <Routes>
      <Route path="/" element={<App  />} />
      <Route path="/props" element={<App test="tt"/>} />
      <Route path="/it" element={<App page="it"/>} />
      <Route path="/privat" element={<App page="privat"/>} />
    </Routes>
  </BrowserRouter>,
	document.getElementById('root')
);
