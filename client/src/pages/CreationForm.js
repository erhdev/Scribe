import React from "react";
import {SlideDown} from 'react-slidedown'
import 'react-slidedown/lib/slidedown.css'
import EventForm from "../components/EventForm";
import { Level } from "../components/infrastructure/level";
import { DualDisplayToggle } from "../components/DualDisplayToggle";
import InfoForm from "../components/InfoForm";

class CreationForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            userName: this.props.userInfo.name,
            userID: this.props.userInfo._id,
            eventFormShown: false
        }
    } 
    eventFormOnClick = event => {
        if (this.state.eventFormShown) {
            this.setState({eventFormShown: false})
        } else {
            this.setState({eventFormShown: true})
        }
    }
    render() {
        const ToggleColor = {
            color: 'rgb(143, 188, 205)'
        }
        console.log(this.state.userName)
    return(
        <div className="container">
        <DualDisplayToggle additionalClassNames={`is-large`} style={ToggleColor} onClick={this.eventFormOnClick}></DualDisplayToggle>
        <SlideDown>
        {this.state.eventFormShown? <EventForm userName={this.state.userName} userID={this.state.userID}/> : <InfoForm userName={this.state.userName} userID={this.state.userID}/>}
        </SlideDown>
        </div>
    )
    }
}

export default CreationForm;