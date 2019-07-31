import React from "react";
import eventAPI from "../utils/eventAPI";
import { BasicInput, TextArea } from "./infrastructure/formStuff";
import { AncestorTile, ContentTile } from "./infrastructure/tileStuff";
import { Button } from "./infrastructure/buttStuff";

class EventForm extends React.Component {
  constructor(props) {
    super(props);

    this.handleInputChange = this.handleInputChange.bind(this);
    this.state = {
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
    console.log(this.state.events)
  };
  loadEvents() {
    eventAPI.readAllEvents()
      .then(results => {
          this.setState({ events: results})
      })
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
    console.log("onChange functional")
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
  handleFormSubmit = event => {
    event.preventDefault();
    console.log()
    const eventData = {
      title: this.state.title,
      body: this.state.body,
      assigned: this.state.assigned,
      mutualExclusives: this.state.mutualExclusives,
      assocInfo: this.state.assocInfo
    }
    console.log(eventData)
      eventAPI.createEvent({
       eventData
      })
        .then(this.loadEvents())
        .catch(err => console.log(err));
    
  };

  /*
    Event Form input and submit functions ready to go
    Need to find a way to add mutualExclusives and assocInfo
  */

  render() {
    return (
      <AncestorTile>
        <ContentTile seniority box>
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