import React from 'react';
import './App.css';
import CounterOne from './UseCounter';
import  UseCounter  from './UseCounteri';
import NavBar from './NavBar'
import { Route, Routes, } from "react-router-dom";
import NotFound from './NotFound';
import ErrorBoundary from './ErrorBoundary';


export default function App() {
  
  return (
    <>
    <NavBar/>
    <div className='pages'>
    <Routes>
    <Route path='NotFound' element={<NotFound/>}/>
    <Route path='CounterOne' element={<CounterOne/>}/>
    <Route path='UseCounter' element={<UseCounter/>}/>
    <Route path='ErrorBoundary' element={<ErrorBoundary/>}/>
  </Routes>
  </div>
    </>
  )
}
