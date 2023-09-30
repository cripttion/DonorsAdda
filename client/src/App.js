import React, { useEffect, useState } from 'react';
import './App.css';

import Home from './Pages/Home';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Donate from './Pages/Donate';
import NotFoundPage from './Pages/NotFoundPage';
import Login from './Layouts/Login';
import Register from './Layouts/Register';
import Ngos from './Pages/Ngos';
import CreateCampignForm from './Components/CreateCampignForm';

function App() {
  
  return (

    <Router>
    
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/donate" element={<Donate />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path = '/ngos' element={<Ngos />} />
      <Route path='/createCampign' element={<CreateCampignForm />} />
      <Route path="*" element={<NotFoundPage />}/>
           
     </Routes>
  
    </Router>
    
  );
}

export default App;
