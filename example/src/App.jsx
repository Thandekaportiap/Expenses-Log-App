import React, { useState, useEffect } from 'react';
import './App.css';
import Nav from "./navigation"
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./home"
import About from './about';
import Add from './components/add';
import DisplayTransaction from './components/display';

const App = () => {
  
  const [transactions, setTransactions] = useState([]);
  
  const add = ((transactionItem, amount, transactionType)=>{
    setTransactions((transactions)=>[...transactions, {transactionItem:transactionItem,amount:amount,transactionType:transactionType}]);
   console.log(transactions)
  })

  return (
   <>
  
   <BrowserRouter>
   <div className='container'>
   <DisplayTransaction transactions={transactions}/>
   <Routes>
   <Route path="/home" element={< Home />}></Route>
   <Route index element={< Home />} />
   <Route path='about' element={<About/>}/>
   <Route path='add' element={<Add add={add}/>}/>
   </Routes>
   </div>
   </BrowserRouter>
   </>
  );
};

export default App;