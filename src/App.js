import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import ResetPassword from './components/ResetPassword';
import VerifyEmail from './components/VerifyEmail';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/verify-email" element={<VerifyEmail />} />
      </Routes>
    </Router>
  );
};

export default App;
