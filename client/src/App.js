import React, { useEffect, useState } from 'react';
import './App.css';

import Home from './Pages/Home';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Donate from './Pages/Donate';
import NotFoundPage from './Pages/NotFoundPage';

function App() {
  
  return (

    <Router>
    
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/donate" element={<Donate />} />
      <Route path="*" element={<NotFoundPage />}/>
           
     </Routes>
  
    </Router>
    
  );
}

export default App;
