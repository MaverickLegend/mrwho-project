import React from 'react';
import {BrowserRouter, Routes, Route,} from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Inicio from './components/Inicio/Inicio';
import Showbar from './components/Showbar/Showbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Showbar />
        <Routes>
          <Route path='/' element={<Inicio />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
