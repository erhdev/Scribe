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
        this.setState({actives : newData})
    }
    sessionItemOnClick = event => {
        let datatag = event.currentTarget.dataset.tag
        console.log(datatag)
        let currentEvent = this.state.sessions.find(session => session._id === datatag)
        this.setState({currentView : currentEvent})
    }
    render() {
        
        let currentEventDefined = this.state.currentView._id? <Inspector 
        title = {this.state.currentView.name || this.state.currentView.title}
        body={this.state.currentView.description} 
        children={<DataList accordion fullDisplay onClick={this.foldDownOnClick} data={this.state.currentView.events || this.state.currentView.info} />}
        /> : "" ;

        let sessions = this.state.sessions
        let sessionList = <DataList accordion data={sessions} alreadyLogged={[]} onClick={this.sessionItemOnClick}/>
        let sessionsLoaded = (sessions.length)? sessionList : <img src={loading}></img>;

        let linkData = this.state.actives;
        linkData[0].component = <DataList data={this.state.events} alreadyLogged={[]}/>;
        linkData[1].component = <DataList data={this.state.info} alreadyLogged={[]} />;

        return (
            <div className="container">
            <Level>
            <div className={"level-left"}><AncestorTile>{sessionsLoaded}</AncestorTile></div>
            <div className={"level-right"}>
            <DisplayPanel
            name={"data"}
            onClick={this.panelLinkOnClick}
            linkData={linkData}
            />
            </div>
            </Level>
            {currentEventDefined}
            </div>
        )
    }
}

export default Dashboard;
