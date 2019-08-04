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
        let newData = this.state.linkData
        for (let i = 0; i < newData.length; i++) {
            newData[i].classNames = "";
        }
        for (let i = 0; i < newData.length; i++) {
            if (name === newData[i].name) {
                newData[i].classNames = "is-active";
            }
        }
        this.setState({linkData: newData})
    }
    
    render() {
       const linkData = [
            {
                name: "events",
                classNames: "is-active",
                component: <DataList data={this.state.events} alreadyLogged={[]}/>
            },
            {
                name: "info",
                classNames: ""
            },
            {
                name: "session stats",
                classNames: ""
            },
            {
                name: "player stats",
                classNames: ""
            }
        ]
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
