import React, { useState, useEffect } from 'react';
import './App.css';
import Nav from "./navigation"
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./home"
import About from './about';
import Add from './components/add';

const App = () => {
  
  return (
   <>
   <BrowserRouter>
   <Routes>
   <Route path="/home" element={< Home />}></Route>
   <Route index element={< Home />} />
   <Route path='about' element={<About/>}/>
   <Route path='add' element={<Add/>}/>
   </Routes>
   </BrowserRouter>
   </>
  );
};

export default App;