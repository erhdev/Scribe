import React from 'react';
import './css/App.css';
import "./css/App.sass"
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import SessionView from "./pages/SessionView";
import EventForm from "./components/EventForm"
import { Level } from "./components/infrastructure/level";

function App() {
  return (
    <Router>
      <div className="level">
        <div className={"level-left"}><p className={"title is-1"}>SCRIBE</p></div>
        <div className={"level-item"}>
          <div className="tabs is-centered is-large">
            <ul>
              <li className="is-active">
                <div className="level">
                  <span className="level-item icon is-small"><i className="fas fa-image" aria-hidden="true"></i></span>
                  <Link className="level-item" to="/home">Dashboard</Link>
                </div>
              </li>
              <li>
                <div className="level">
                  <span className="icon is-small"><i className="fas fa-music" aria-hidden="true"></i></span>
                  <Link to="/session">SessionView</Link>
                </div>
              </li>
              <li>
                <div className="level">
                  <span className="icon is-small"><i className="fas fa-music" aria-hidden="true"></i></span>
                  <Link to="/create">Create Events</Link>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Route exact path="/home" render={() => <Dashboard />} />
    </Router>

  );
}

export default App;
/*

*/
