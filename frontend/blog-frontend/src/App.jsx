import { useState } from 'react';
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import ReadMore from './components/ReadMore';

function App() {

  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/readmore/:id' element={<ReadMore />} />
      </Routes>

      <Footer />

    </BrowserRouter>
  )
}

export default App
