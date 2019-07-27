import React from "react";
import eventAPI from "../utils/eventAPI";
import timelineAPI from "../utils/timelineAPI";
import EventForm from "../components/EventForm"

class Dashboard extends React.Component {
    render() {
        return(
            <EventForm></EventForm>
        )
    }
}

export default Dashboard;
