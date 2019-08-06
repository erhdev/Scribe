import React from "react";
import { BasicInput, TextArea } from "./infrastructure/formStuff";
import { ContentTile } from "./infrastructure/tileStuff";

export function InputForm(props) {
    return (<div>
            <ContentTile box>
            <BasicInput 
            value={props.title}
            onChange={props.onChange}
            name="title"
            display="Title"
            placeholder="The Party Talks to the King"
            />
          </ContentTile>
          <ContentTile box>
            <TextArea 
            value={props.body}
            onChange={props.onChange}
            name="body" 
            display="Description"
            placeholder="What else do you need to know about the event?"
            />
          </ContentTile>
    </div>)
}