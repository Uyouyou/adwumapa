import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './components/Homepage/Homepage';
import Setup from './components/Setup/Setup';

const App = () => {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/setup" element={<Setup />} />
        </Routes>
    </Router>
  )
}

export default App