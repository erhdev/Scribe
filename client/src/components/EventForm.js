import React from "react";
import eventAPI from "../utils/eventAPI";
import { BasicInput, TextArea } from "./infrastructure/formStuff";
import { AncestorTile, ContentTile } from "./infrastructure/tileStuff";
import { Button } from "./infrastructure/buttStuff";
import { EventBlock} from "./eventBlock";
import { EventList } from "./EventList";

class EventForm extends React.Component {
  constructor(props) {
    super(props);

    this.handleInputChange = this.handleInputChange.bind(this);
    this.state = {
     isLoading: true,
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
    this.loadEvents();
    this.loadInfo();
    this.setState({isLoading: false})
  };
  loadEvents() {
    eventAPI.readAllEvents()
      .then((results) => {
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
    console.log(eventData)
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
    const { id } = event.target;
    console.log(id)
    this.setState({ mutualExclusives: [...this.state.mutualExclusives, id] })
    console.log(this.state.mutualExclusives)
  };

  /*
    Event Form input and submit functions ready to go
    Need to find a way to add mutualExclusives and assocInfo
  */
  render() {

    const noEventsFound = <p className={`title`}> You have no events! </p>
    const loadingSymbol = <div> <progress className={'progress is-info'} max="100">60%</progress> </div>

        
    return (
      <AncestorTile>
        <ContentTile seniority box vertical>
          <ContentTile box>
            <BasicInput 
            value={this.state.title}
            onChange={this.handleInputChange}
            name="title"
            display="Title"
            placeholder="The Party Talks to the King"
            />
          </ContentTile>
          <ContentTile box>
            <TextArea 
            value={this.state.body}
            onChange={this.handleInputChange}
            name="body" 
            display="Body"
            placeholder="What else do you need to know about the event?"
            />
          </ContentTile>
          <ContentTile
          box
          //display={"List of Events"}
          >
            <EventList
            events = {this.state.events}
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