import React from "react";
import { DisplayPanel } from "../components/infrastructure/DisplayPanel";
import eventAPI from "../utils/eventAPI";
import infoAPI from "../utils/infoAPI";
import { DataList } from "../components/DataStuff/DataList";
import { Level } from "../components/infrastructure/level";
class Dashboard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            events: [],
            info: [], 
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
    
    render() {
        let linkData = this.state.actives;
        linkData[0].component = <DataList data={this.state.events} alreadyLogged={[]}/>;
        linkData[1].component = <DataList data={this.state.info} alreadyLogged={[]} />;
        return (
            <div className="container">
            <Level>
            <div className={"list-right"}>
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

export default Dashboard;
