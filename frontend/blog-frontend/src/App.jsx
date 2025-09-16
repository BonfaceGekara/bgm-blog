import { useState } from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import ReadMore from './components/ReadMore';
import Register from './components/Register';
import Login from './components/Login';

function App() {

  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/readmore/:id' element={<ReadMore />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
      </Routes>

      <Footer />

    </BrowserRouter>
  )
}

export default App
