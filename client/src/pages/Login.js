import React from "react";
import { Button } from "../components/infrastructure/buttStuff";
import { ContentTile } from "../components/infrastructure/tileStuff";
import SlideDown from "react-slidedown";
import 'react-slidedown/lib/slidedown.css'
import { BasicInput } from "../components/infrastructure/formStuff";
import userAPI from "../utils/UserAPI";
import { BrowserRouter as Router, Route, Link,  Redirect } from "react-router-dom";

class LoginForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            users: [],
            userID: "",
            password: "",
            createAccountClicked: false,
            loginClicked: false,
            faultyLogin: false,
            loginSuccessful: false,
        }
    }
    componentDidMount() {
        userAPI.readAllUsers()
        .then(result => {
            this.setState({users: result.data})
        }
        )
    }
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
        console.log(this.state)
      };
    createAccountSlideDown = event => {
        if(!this.state.createAccountClicked) {
        this.setState({createAccountClicked: true})
        } else { this.setState({createAccountClicked: false})}
    }
    loginSlideDown = event => {
        if(!this.state.loginClicked) {
        this.setState({loginClicked: true})
        } else {this.setState({loginClicked: false})}
    }
    createAccount = event => {
        const userData = {
            name: this.state.userID,
            password: this.state.password
        }
        userAPI.createUser(userData)
        .then(result =>
           { this.props.setUserInfo(result)
            this.setState({loginSuccessful: true})
           }
        )
    }
    logIn = () => {
        let userID = this.state.userID;
        let password = this.state.password
        let users = this.state.users
       for(let i = 0; i < users.length; i++) {
            if ((userID === users[i].name) && (password === users[i].password)) {
                const userData = {
                    data: {
                        name: userID,
                        password: password
                    }
                }
                this.setState({loginSuccessful: true})
                this.props.setUserInfo(userData)
            } else if((userID === users[i].name) && (password !== users[i].password)) {
                this.setState({faultyLogin: true})
            }
        }
        if (!this.state.loginSuccessful) {
            this.setState({faultyLogin: true})
        }
    }
    render() {
        if (this.state.loginSuccessful) {
            return <Redirect to='/home'/>
        }
        let faultyLogin = this.state.faultyLogin? <div class="notification is-danger">These login credentials were not recognized.<br></br>Please check and try again.</div> : null
        let accountForm = <div>
            <BasicInput
            name="userID"
            display={'Username'}
            onChange={this.handleInputChange}
            value={this.state.userID}
            placeholder="Your Username"
            type="text"
            />
            <br></br>
            <BasicInput
            name="password"
            display={'Password'}
            onChange={this.handleInputChange}
            value={this.state.password}
            type="password"
            />
            <br></br>
            <Button
            additionalClassName={'level-item login-button'}
            name="Finish"
            onClick={this.createAccount}
            />
        </div>
        let loginForm = <div>
        <BasicInput
        name="userID"
        display={'Username'}
        onChange={this.handleInputChange}
        value={this.state.userID}
        placeholder="Your Username"
        type="text"
        />
        <br></br>
        <BasicInput
        name="password"
        display={'Password'}
        onChange={this.handleInputChange}
        value={this.state.password}
        type="password"
        />
        <br></br>
        <Button
        additionalClassName={'level-item login-button'}
        name="Finish"
        onClick={this.logIn}
        />
    </div>
        return (
            <div className={`hero is-fullwidth`}>
                <div className="hero-body">
                    <div className="container has-text-centered">
                        <br></br>
                        <h1 className="title">
                            Welcome to Scribe.
                        </h1>
                        <ContentTile vertical>
                            {faultyLogin}
                       <Button
                        additionalClassName={'level-item login-button'}
                        name="Create Account"
                        onClick={this.createAccountSlideDown}
                        />
                        <br></br>
                        <Button
                        additionalClassName={'level-item login-button'}
                        name="Log In"
                        onClick={this.loginSlideDown}
                        />
                        </ContentTile>
                    </div>
                    <SlideDown className={'fold-down'}>
                            {this.state.loginClicked? loginForm : null}
                        </SlideDown>
                    <SlideDown className={'fold-down'}>
                            {this.state.createAccountClicked? accountForm : null}
                        </SlideDown>
                    </div>
                </div>
            )
    }
}

export default LoginForm;