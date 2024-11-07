import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignIn from './components/Auth/SignIn/SignIn';
import SignUp from './components/Auth/SignUp/SignUp';
import Dashboard from './components/Dashboard/Dashboard'; 

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<SignIn />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;