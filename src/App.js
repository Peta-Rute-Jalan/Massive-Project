import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutUs from './/pages/AboutUs';
import Index from './/pages/Index';
import Tujuan from './pages/Tujuan';
import Search from './pages/Search';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Tujuan" element={<Tujuan />} />
        <Route path="/Search" element={<Search />} />


      </Routes>
    </Router>
  );
};

export default App;