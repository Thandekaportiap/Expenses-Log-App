import React, { useState, useEffect } from 'react';
import './App.css';
import Nav from "./navigation"
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./home"
import Login from './login';
import Add from './components/add';
import NoPage from './components/NoPage'

const App = () => {
  const [cartIsEmpty] = useState(false)
  
  const [transactions, setTransactions] = useState([]);
  
  const add = ((transactionItem, amount, transactionType)=>{
    setTransactions((transactions)=>[...transactions, {transactionItem:transactionItem,amount:amount,transactionType:transactionType}]);
   console.log(transactions)
  })

  return (
   <>
  
   <BrowserRouter>
   <div className='container'>
   <Nav/>
   
   
   
   <Routes>
   <Route path="/home" element={< Home />}></Route>
   <Route index element={< Home />} />
   <Route path='login' element={<Login/>}/>
   <Route path='add' element={<Add add={add} transactions={transactions}/>}/>
   <Route path='*' element={<NoPage/>}/>
  <Route path="/redirect" element={<Navigate to="add"/>}/> 
  <Route path='register' element={cartIsEmpty ? <Navigate to="/home"/> : <p>Hello</p>}/>
   </Routes>
   </div>
   </BrowserRouter>
   </>
  );
};

export default App;