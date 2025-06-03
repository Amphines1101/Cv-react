import React from 'react';
import { BrowserRouter, Routes, Route,} from 'react-router-dom';
import Home from "./Pages/Home"
import NotFound from "./Pages/NotFound"
import Contact from "./Pages/Contact"
import Competences from "./Pages/Competences"
import Portfolio from "./Pages/Portfolio"
import Header from './Components/Header';


const App = () => {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/"element={<Home/>}/>
      <Route path="/portfolio"element={<Portfolio/>}/>
      <Route path="/competences"element={<Competences/>}/>
      <Route path="/contact"element={<Contact/>}/>
      <Route path="*"element={<NotFound/>}/>
    </Routes>
    </BrowserRouter>
  );
};

export default App;
