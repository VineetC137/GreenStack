import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import SmartScheduling from './pages/SmartScheduling';
import SustainableShopping from './pages/SustainableShopping';
import ProgrammingBenchmark from './pages/ProgrammingBenchmark';
import GreenCompiler from './pages/GreenCompiler';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="smart-scheduling" element={<SmartScheduling />} />
        <Route path="sustainable-shopping" element={<SustainableShopping />} />
        <Route path="programming-benchmark" element={<ProgrammingBenchmark />} />
        <Route path="green-compiler" element={<GreenCompiler />} />
      </Route>
    </Routes>
  );
}

export default App;