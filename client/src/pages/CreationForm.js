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
    return(
        <div className="container">
        <DualDisplayToggle additionalClassNames={`is-large`} style={ToggleColor} onClick={this.eventFormOnClick}></DualDisplayToggle>
        <SlideDown>
        {this.state.eventFormShown? <EventForm/> : <InfoForm/>}
        </SlideDown>
        </div>
    )
    }
}

export default CreationForm;