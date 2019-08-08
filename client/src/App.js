import React from 'react';
import './css/App.css';
import "./css/App.sass"
import { BrowserRouter as Router, Route, Link,  Redirect } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import SessionView from "./pages/SessionView";
import CreationForm from "./pages/CreationForm"
import LoginForm from './pages/Login';


const playerQuotes = [`"We have to split the party. It's the only way."`, "Did you know? Lorem ipsum", 
`"Folks, we've got problems. The shopkeepers have unionized."`, 
`"I have never lied in game, except for the times when it benefitted me to do so."` ]
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user: {},
      isAuthenticated: false
    }
  }

  setUserInfo = (userInfo) => {
    this.setState({user: userInfo.data})
    this.setState({isAuthenticated : true})
  }
  render() {
    console.log(this.state.user)
  return (
    <Router>
      <div className="level container header hero-head">
        <div className={"level-left"}><p className={"title is-1"}>SCRIBE</p></div>
        <div className={"level-right"}>
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
                  <Link to="/session">New Session</Link>
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
      <Route exact path='/' render={() => <LoginForm setUserInfo = {this.setUserInfo}/>} />
      <Route exact path="/home" render={() => this.state.isAuthenticated? <Dashboard userInfo = {this.state.user}/> :<Redirect to='/'/>}/>
      <Route exact path="/session" render={() => this.state.isAuthenticated? <SessionView userInfo = {this.state.user} /> :<Redirect to='/'/>} />
      <Route exact path="/create" render={() => this.state.isAuthenticated? <CreationForm userInfo ={this.state.user} /> :<Redirect to='/'/>} />
      <footer className="footer hero-foot">
        <div className="content has-text-centered">
          <p className={'title is-5'}>
            {playerQuotes[Math.floor(playerQuotes.length * Math.random())]}
          </p>
        </div>
      </footer>
    </Router>

  );
  }
}

export default App;
/*

*/
