import React from 'react';
// import {BrowserRouter, Routes, Route,} from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Showbar from './components/Showbar/Showbar';
import Inicio from './components/Inicio/Inicio';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Inicio />
    </div>
  );
}

export default App;
