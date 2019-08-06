import React from "react";

import { DisplayPanel } from "../components/infrastructure/DisplayPanel";
import eventAPI from "../utils/eventAPI";
import infoAPI from "../utils/infoAPI";
import timelineAPI from "../utils/timelineAPI";
import { DataList } from "../components/DataStuff/DataList";
import { Level } from "../components/infrastructure/level";
import { InputForm } from "../components/InputForm";
import { Button } from "../components/infrastructure/buttStuff";

class SessionView extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title:"",
            body:"",
            events: [],
            info: [], 
            session: {},
            actives: [
                {
                    name: "events",
                    classNames: "subtitle is-4 is-active",
                    
                },
                {
                    name: "info",
                    classNames: "subtitle is-4",
                    
                },
                {
                    name: "session stats",
                    classNames: "subtitle is-4"
                },
                {
                    name: "player stats",
                    classNames: "subtitle is-4"
                }
            ]       
        }
    }
   async componentDidMount() {
        await this.loadEvents();
        await this.loadInfo();
        //await this.loadSession();
    }
    createTimeline = event => {
        const timelineData = {
            name: this.state.title,
            description: this.state.body
        }
        timelineAPI.createTimeline(timelineData).then(result => {
            console.log(result)
            this.setState({session: result.data})
        }); 
    }
    loadEvents() {
        eventAPI.readAllEvents()
          .then((results) => {
            results.data.reverse();
            this.setState({ events: results.data })
            console.log(this.state.events)
          })
          .catch(err => console.log(err));
      };
    loadInfo() {
        infoAPI.readAllInfo()
          .then((results) => {
            results.data.reverse();
            this.setState({ info: results.data })
            console.log(this.state.info)
          })
          .catch(err => console.log(err));
      };
    panelLinkOnClick = event => {
        const name = event.currentTarget.text
        let newData = this.state.actives
        for (let i = 0; i < newData.length; i++) {
            newData[i].classNames = "subtitle is-4";
        }
        for (let i = 0; i < newData.length; i++) {
            if (name === newData[i].name) {
                newData[i].classNames += " is-active";
                console.log(newData)
            }
        }
        this.setState({actives : newData})
    }
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
      };
    eventBlockOnClick = event => {
    let datatag = event.currentTarget.dataset.tag
    let events = this.state.events
    let foundEvent = events.find(event => datatag === event._id)
    console.log(foundEvent)
    delete foundEvent.clicked;
    foundEvent.assigned = true;
    async function pushThenRead() {
        await eventAPI.pushEvent(datatag, this.state.session._id, foundEvent).then(result => console.log(result))
        timelineAPI.readTimeline(this.state.session._id).then(result => 
     this.setState({session: result.data}))
     console.log(this.state.session)
    }
    pushThenRead = pushThenRead.bind(this)
    pushThenRead()
    }
    render() {
        let seshEvents = this.state.session.events;
        console.log(seshEvents)
        let seshList;
        if (seshEvents) {
          seshList = //seshEvents.map(event => <div>{event.title}</div>)
          <DataList fullDisplay data={seshEvents} alreadyLogged = {[]} />
        }
        let linkData = this.state.actives;
        linkData[0].component = <DataList setting="buttons" data={this.state.events} alreadyLogged={[]} onClick={this.eventBlockOnClick}/>;
        linkData[1].component = <DataList setting="buttons" data={this.state.info} alreadyLogged={[]} />;
        return (
            <div className="container">
            <Level>
            <div className={"level-left tile"}>
                <InputForm title={this.state.title} body={this.state.body} onChange={this.handleInputChange}/>
                <Button name="Create Session" onClick={this.createTimeline} />
                {seshList}
            </div>
            <div className={"level-right"}>
            <DisplayPanel
            name={"data"}
            onClick={this.panelLinkOnClick}
            linkData={linkData}
            />
            </div>
            </Level>
            </div>
        )
    }
}

export default SessionView;