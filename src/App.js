import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Additional from './components/Additional';
import Education from './components/Education';
import Fees from './components/Fees';
import Header from './components/Header';
import Main from './components/Main';
import { Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Contact from './components/Contact'
import FeesPayment from './components/FeesPayment'
import Terms from './components/Terms';
import UploadButtons from './components/Uploaddoc';
// import {Route,Routes, Link, BrowserRouter} from 'react-router-dom';



function App() {
  return (
    <>
      
      <Header/>
      
      <div className='Page'>
         {/* <Sidebar/> */}
         <Routes >
            <Route path='/personal' element={<Main/>}/>
            <Route path='/education' element={<Education/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/additional' element={<Additional/>}/>
            <Route path='/upload' element={<UploadButtons/>}/>
            <Route path="/terms" element={<Terms/>} />
            <Route path="/payment" element={<FeesPayment/>}/>
            
            
         </Routes>
      </div>
      
     
    </>
  );
}

export default App;
