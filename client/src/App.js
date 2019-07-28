import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './css/App.css';
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import SessionView from "./pages/SessionView";
import EventForm from "./components/EventForm"
function App() {
  return (
  /**
   * 
   * 
     <Router>
      <div>
      <Route exact path="/" component={Login} />  
      <Route exact path="/home" component={Dashboard} />
      <Route exact path="/sessionview" component={SessionView} />
      </div>
    </Router> 
    */ 
   <EventForm></EventForm>
  );
}

export default App;
