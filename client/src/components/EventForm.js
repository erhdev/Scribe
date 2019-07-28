import React from "react";
import eventAPI from "../utils/eventAPI";
import { BasicInput, TextArea } from "./infrastructure/formStuff";
import { AncestorTile, ContentTile } from "./infrastructure/tileStuff";

class EventForm extends React.Component {
  constructor(props) {
    super(props);

    this.handleInputChange = this.handleInputChange.bind(this);
    this.state = {
     events: [],
     info: [],
     eventData: {
       title: "",
       body: "",
       assigned: false,
       mutualExclusives: [],
       assocInfo: []
     }
    };
  };
  componentDidMount() {
    this.loadEvents();
    this.loadInfo();
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
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.title && this.state.body) {
      eventAPI.createEvent({
        title: this.state.title,
        body: this.state.body,
        assigned: this.state.assigned,
        mutualExclusives: this.state.mutualExclusives,
        assocInfo: this.state.assocInfo
      })
        .then(res => this.loadEvents())
        .catch(err => console.log(err));
    }
  };

  /*
    Event Form input and submit functions ready to go
    Need to find a way to add mutualExclusives and assocInfo
  */

  render() {
    console.log(this.state.events)
    return (
      <AncestorTile>
        <ContentTile seniority box>
          <ContentTile box>
            <BasicInput name="Title" placeholder="The Party Talks to the King"></BasicInput>
          </ContentTile>
          <ContentTile box>
            <TextArea name="Notes" placeholder="What else do you need to know about the event?"></TextArea>
          </ContentTile>
        </ContentTile>
      </AncestorTile>
    )
  }
}

export default EventForm;