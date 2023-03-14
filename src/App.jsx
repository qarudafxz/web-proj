import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import Main from "./Pages/Main.jsx";
import Login from "./Pages/Login.jsx";

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact 
            path="/" 
            element={<Main />}>
          </Route>
          <Route exact 
            path="/login" 
            element={<Login />}>
          </Route>
        </Routes>
      </div>
    </Router>
  )
}

export default App
