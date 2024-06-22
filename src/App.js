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
import Bus from './pages/Bus';
import Tangerang from './pages/BUS/Tangerang';
import Bekasi from './pages/BUS/Bekasi';
import Jakarta from './pages/BUS/Jakarta';
import Bogor from './pages/BUS/Bogor';
import Depok from './pages/BUS/Depok';
import Damri from './pages/BUS/Damri';

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
        <Route path="/bus" element={<Bus />} />
        <Route path="/tangerang" element={<Tangerang />} />
        <Route path="/bekasi" element={<Bekasi />} />
        <Route path="/jakarta" element={<Jakarta />} />
        <Route path="/bogor" element={<Bogor />} />
        <Route path="/depok" element={<Depok />} />
        <Route path="/damri" element={<Damri />} />









      </Routes>
    </Router>
  );
};

export default App;
