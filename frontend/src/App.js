import React from 'react';
import { Routes, Route } from 'react-router-dom';

import About from './Components/about';
import Home from './Components/homePage';
import Results from './Components/results';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/homePage" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/results" element={<Results />} />
      </Routes>
    </>
  );
}

export default App;