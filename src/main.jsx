import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import Auth from './pages/auth/auth.jsx';
import HomePage from './pages/home/index.jsx';
import Kod from './pages/auth/kod.jsx';
import Reg from './pages/auth/reg.jsx';


const Main = () => {
 
  return (
    <Routes>
      <Route exact path='/' element={<HomePage/>}></Route>
      <Route exact path='/auth' element={<Auth/>}></Route>
      <Route exact path='/kod' element={<Kod/>}></Route>
      <Route exact path='/reg' element={<Reg/>}></Route>
    </Routes>
  );
}

export default Main;