import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import Home from './pages/Home';
import Instruction from './pages/Instruction';
import Sample1 from './pages/Sample1';
import Sample2 from './pages/Sample2';
import Extra from './pages/Extra';
import Sample3 from './pages/Sample3';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/instruction" element={<Instruction />} />
          <Route path="/sample1" element={<Sample1 />} />
          <Route path="/sample2" element={<Sample2 />} />
          <Route path="/extra" element={<Extra />} />
          <Route path="/sample3" element={<Sample3 />} />
        </Routes>
      </Layout>
    </Router>
  );
}