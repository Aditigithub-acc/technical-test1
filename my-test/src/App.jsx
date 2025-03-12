import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepg from '../src/Pages/Homepg.jsx';
import Dashboard from '../src/Pages/Dashboard.jsx';
import nav from '../src/Components/Nav.jsx';

function App() {
  return (
    <Router>
      <nav />
      <Routes>
        <Route path="/" element={<Homepg />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  )
}

export default App
