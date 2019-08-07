import React from "react";
import { DisplayPanel } from "../components/infrastructure/DisplayPanel";
import eventAPI from "../utils/eventAPI";
import infoAPI from "../utils/infoAPI";
import { DataList } from "../components/DataStuff/DataList";
import { Level } from "../components/infrastructure/level";
import timelineAPI from "../utils/timelineAPI";
import { AncestorTile } from "../components/infrastructure/tileStuff";
import { AccordionItem } from "../components/DataStuff/AccordionItem";
import { Inspector } from "../components/Inspector";
import loading from "../css/6.gif";
class Dashboard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currentView: {},
            events: [],
            info: [],
            sessions: [],
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
                    name: "sessions",
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
        await this.loadSessions()
        await this.loadEvents();
        await this.loadInfo();
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
    loadSessions() {
        timelineAPI.readAllTimelines()
            .then((results) => {
                results.data.reverse();
                this.setState({ sessions: results.data })
                console.log(this.state.sessions)
            })
            .catch(err => console.log(err));
    }
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
        this.setState({ actives: newData })
    }
    sessionItemOnClick = event => {
        let datatag = event.currentTarget.dataset.tag
        console.log(datatag)
        let currentEvent = this.state.sessions.find(session => session._id === datatag)
        this.setState({ currentView: currentEvent })
    }
    eventItemOnClick = event => {
        let datatag = event.currentTarget.dataset.tag
        console.log(datatag)
        let currentEvent = this.state.events.find(session => session._id === datatag)
        this.setState({ currentView: currentEvent })
    }
    infoItemOnClick = event => {
        let datatag = event.currentTarget.dataset.tag
        console.log(datatag)
        let currentEvent = this.state.info.find(session => session._id === datatag)
        this.setState({ currentView: currentEvent })
    }
    render() {

        let currentEventDefined = this.state.currentView._id ? <Inspector
            title={this.state.currentView.name || this.state.currentView.title}
            body={this.state.currentView.description}
            children={<DataList accordion fullDisplay onClick={this.foldDownOnClick} data={this.state.currentView.events || this.state.currentView.assocInfo || []} />}
        /> : <Inspector
                title={"Select an event to inspect it."}
            />;

        let sessions = this.state.sessions

        //        let dataLoaded = (sessions.length)? linkData : <img src={loading}></img>;

        let linkData = this.state.actives;
        linkData[0].component = <DataList accordion data={this.state.events} additionalClassNames={`panel-item`} alreadyLogged={[]} onClick={this.eventItemOnClick} />;
        linkData[1].component = <DataList accordion data={this.state.info} additionalClassNames={`panel-item`} alreadyLogged={[]} onClick={this.infoItemOnClick} />
        linkData[2].component = <DataList accordion data={sessions} additionalClassNames={`panel-item`} alreadyLogged={[]} onClick={this.sessionItemOnClick} />

        return (
            <div className="container">
                <div className={"columns"}>
                    <div className={"column"}>
                        <DisplayPanel
                            name={"data"}
                            onClick={this.panelLinkOnClick}
                            linkData={linkData}
                        />
                    </div>
                    
                    <div className={"column"}>
                        <div className="container">{currentEventDefined}</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard;
