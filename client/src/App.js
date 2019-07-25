import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './css/App.css';
import Dashboard from "./pages/Dashboard"
import Login from "./pages/Login"
function App() {
  return (
    <Router>
      <div>
      <Route exact path="/" component={Login} />  
      <Route exact path="/home" component={Dashboard} />
      </div>
    </Router>
  );
}

export default App;
