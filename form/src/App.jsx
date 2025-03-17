import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Form from './Form';
import Data from './Data';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Form />} /> 
        <Route path="/Data" element={<Data />} />
      </Routes>
      
    </Router>
  );
}
export default App;




