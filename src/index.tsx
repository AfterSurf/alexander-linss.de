import {createRoot} from 'react-dom/client';
import './index.scss';
import App from './App';
import { BrowserRouter, Routes, Route } from "react-router-dom";



const root =  createRoot(document.getElementById("root") as HTMLElement);

root.render(
	<BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>} />
      <Route path="/it" element={<App page="it"/>} />
      <Route path="/privat" element={<App page="privat"/>} />
    </Routes>
  </BrowserRouter>
);
