import React from "react";
import ReactDOM from 'react-dom';
import { EventModal } from "../components/EventModal"
import { Button } from "../components/infrastructure/buttStuff";

class Dashboard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            modalFired: false
            
        }
    }
    fireEventModal() {
        if (!this.state.modalFired) {
            this.setState({ modalFired: true })
        } else { this.setState({ modalFired: false }) }
        console.log(this.state.modalFired)
    }
    render() {
        return (
            ReactDOM.createPortal(<EventModal/> , this.props.ModalNode)
        )
    }
}

export default Dashboard;
