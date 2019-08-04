import React from "react";
import ReactDOM from 'react-dom';
import { EventModal } from "../components/EventModal"
import { Button } from "../components/infrastructure/buttStuff";
const ModalNode = document.getElementById('modal-root')
class Dashboard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            modalFired: false
            
        }
        this.fireEventModal = this.fireEventModal.bind(this)
    }
    fireEventModal= e => {
        ReactDOM.createPortal(<EventModal/> , ModalNode)
    }
    
    render() {
        return (
            <Button additionalClassNames={"is-link"} onClick={this.fireEventModal} name={"Fire Modal"} />
        )
    }
}

export default Dashboard;
