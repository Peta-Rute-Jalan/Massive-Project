import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutUs from './pages/AboutUs';
import Index from './pages/Index';
import Tujuan from './pages/Tujuan';
import Search from './pages/Search';
import Searchbar from './pages/Selection';
import Chat from './pages/Chat';
import KeretaApi from './pages/keretaapi';
import Whoosh from './pages/KA/whoosh';
import Keretabandara from './pages/KA/keretabandara';
import LRT from './pages/KA/LRT';
import KRL from './pages/KA/KRL';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Tujuan" element={<Tujuan />} />
        <Route path="/Search" element={<Search />} />
        <Route path="/Selection" element={<Searchbar />} />
        <Route path="/Chat" element={<Chat />} />
        <Route path="/keretaapi" element={<KeretaApi />} />
        <Route path="/whoosh" element={<Whoosh />} />
        <Route path="/keretabandara" element={<Keretabandara />} />
        <Route path="/lrt" element={<LRT />} />
        <Route path="/krl" element={<KRL />} />





      </Routes>
    </Router>
  );
};

export default App;
