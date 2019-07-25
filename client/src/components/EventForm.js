import React from "react";
import {
  InputGroup,
  InputGroupText,
  InputGroupAddon,
  FormInput,
  Button,
  FormCheckbox
} from "shards-react";

class EventForm extends React.Component {
    constructor(props) {
        super(props);
    
        this.handleChange = this.handleChange.bind(this);
        this.state = {
          orange: false,
          lemon: false,
          kiwi: false
        };
      }
}