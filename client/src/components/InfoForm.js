import React from "react";
import infoAPI from "../utils/infoAPI";
import { Button } from "./infrastructure/buttStuff";
import { InputForm } from "./InputForm";
import { Level } from "../components/infrastructure/level";
import { DataList } from "./DataStuff/DataList";
 

class InfoForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.toggleInfo = this.toggleInfo.bind(this);
    this.clearForm = this.clearForm.bind(this)
    this.state = {
      userName: this.props.userName,
      userID: this.props.userID,
      infoToggled: false,
      events: [],
      info: [],
      title: "",
      body: "",
      assigned: false,
    };
  };
  componentDidMount() {
    this.loadInfo();
  };
 loadInfo() {
    infoAPI.readAllInfo(this.state.userName)
      .then((results) => {
        results.data.reverse();
        this.setState({ info: results.data })
        console.log(this.state.info)
      })
      .catch(err => console.log(err));
  };
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
  clearForm() {
    this.setState({
      title: "",
      body: "",
      assigned: false,
      mutualExclusives: [],
      assocInfo: []
    })
  }
  handleFormSubmit = event => {
    event.preventDefault();
    const eventData = {
      title: this.state.title,
      body: this.state.body,
      assigned: this.state.assigned,
      mutualExclusives: this.state.mutualExclusives,
      assocInfo: this.state.assocInfo
    }
    if (eventData.title === "")
    {this.setState({noGo: true})}
    else{
    this.setState({noGo: false})
    infoAPI.createInfo(
      this.state.userName, eventData
    )
      .then(this.loadInfo())
      .catch(err => console.log(err));
      this.clearForm();
    }
  };  
  toggleInfo() {
    if (!this.state.infoToggled) {
      this.setState({ infoToggled: true })
    } else { this.setState({ infoToggled: false }) }
  }

  render() {
    const noEventsFound = <p className={`title`}> You have no events! </p>
    const loadingSymbol = <div> <progress className={'progress is-info'} max="100">60%</progress> </div>

    const infoList =
    <DataList
      accordion
      additionalClassNames={`event-form-item`}
      data={this.state.info}
      onClick={this.infoBlockOnClick}
      alreadyLogged={[]}
    />
    let enterTitle = this.state.noGo? <div class="notification is-danger">Please enter a title for your event!</div> : null;
    return (
      <div>
        {enterTitle}
          <InputForm
            title={this.state.title}
            body={this.state.body}
            onChange={this.handleInputChange}
            type={'text'}
          />
          {infoList}
           <Level>
            <Button
              accordion
              name={"Submit"}
              onClick={this.handleFormSubmit}
              additionalClassName={`level-item`}
            />
            <Button
              accordion
              name={"Clear Form"}
              onClick={this.clearForm}
              additionalClassName={`level-item`}
            />
            </Level>
            </div>
    )
  }
}

export default InfoForm;

/*



*/