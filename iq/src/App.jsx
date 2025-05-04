import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './LoginPage';
import Register from './Register';
import TradePage from './TradePage';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Routes>
        {/* Các route cần layout căn giữa */}
        <Route
          path="/login"
          element={
            <div
              className="d-flex justify-content-center align-items-center"
              style={{ minHeight: '100vh' }}
            >
              <LoginPage />
            </div>
          }
        />
        <Route
          path="/register"
          element={
            <div
              className="d-flex justify-content-center align-items-center"
              style={{ minHeight: '100vh' }}
            >
              <Register />
            </div>
          }
        />
        <Route path="/iqplay" element={<TradePage />} />
      </Routes>

    </Router>
  );

}

export default App;
