import React from "react";
import eventAPI from "../utils/eventAPI";
import { AncestorTile, ContentTile } from "./infrastructure/tileStuff";
import { Button } from "./infrastructure/buttStuff";
import { EventList } from "./EventList";
import { InputForm } from "./inputForm";
import { InfoEventToggleDisplay } from "./infoEventSwitch";

class EventForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.state = {
     isLoading: true,
     infoToggled: false,
     events: [],
     info: [],
     title: "",
     body: "",
     assigned: false,
     mutualExclusives: [],
     assocInfo: []
    };
  };
  componentDidMount() {
    setTimeout(() => {(
      this.setState({isLoading : true})
    )}, 
    2000);
    this.loadEvents();
    this.loadInfo();
  };
  loadEvents() {
    eventAPI.readAllEvents()
      .then((results) => {
        results.data.reverse();
        this.setState({events: results.data})
        console.log(this.state.events)
      })
      .catch(err => console.log(err));
  };
  loadInfo() {
    /*
    infoAPI.readAllInfo()
      .then(results => {
          this.setState({ info: results})
      })
     */
  };
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
  handleFormSubmit = event => {
    event.preventDefault();
    const eventData = {
      title: this.state.title,
      body: this.state.body,
      assigned: this.state.assigned,
      mutualExclusives: this.state.mutualExclusives,
      assocInfo: this.state.assocInfo
    }
      eventAPI.createEvent(
       eventData
      )
        .then(this.loadEvents())
        .catch(err => console.log(err));
    this.setState({
      title: "",
      body: "",
      assigned: false,
      mutualExclusives: [],
      assocInfo: []
    })
  };
  eventBlockOnClick = event => {
    const eBlock = event.target
    let className = eBlock.className
    this.setState({ mutualExclusives: [...this.state.mutualExclusives, eBlock.dataset.tag] })
    console.log(className)
    
  };
  toggleInfo = event => {
    if(!this.state.infoToggled) {
      this.setState({infoToggled: true})
    } else {this.setState({infoToggled: false})}
  }
  /*
    Event Form input and submit functions ready to go
    Need to find a way to add mutualExclusives and assocInfo
  */
  render() {
    const eventList =           
    <EventList
    events = {this.state.events}
    onClick = {this.eventBlockOnClick}
    /> 
    const infoList =     
    <InfoList
    info = {this.state.info}
    onClick = {this.infoBlockOnClick}
    /> 
    const noEventsFound = <p className={`title`}> You have no events! </p>
    const loadingSymbol = <div> <progress className={'progress is-info'} max="100">60%</progress> </div>
    const loadingOrNone = this.state.isLoading?  loadingSymbol : noEventsFound
    const eventsOrInfo = this.state.infoToggled? eventList : infoList;
        
    return (
      <AncestorTile>
        <ContentTile seniority box vertical>
          <InputForm
          title = {this.state.title}
          body = {this.state.body}
          onChange = {this.handleInputChange}
          />
          <ContentTile
          box
          //display={"List of Events"}

          >
           <InfoEventToggleDisplay
           onClick={this.toggleInfo}
           children={this.state.events.length? 
            eventsOrInfo
            :
            loadingOrNone}
           />
          </ContentTile>
          <Button 
          name={"Submit"}
          onClick={this.handleFormSubmit}
          />
        </ContentTile>
      </AncestorTile>
    )
  }
}

export default EventForm;