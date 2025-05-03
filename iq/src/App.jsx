import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './LoginPage';
import Register from './Register';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ minHeight: '100vh' }}
          >
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );

}

export default App;
