import React from "react";
import  { EventBlock } from "./eventBlock";
import { ContentTile } from "./infrastructure/tileStuff";

export class EventList extends React.Component {
    constructor(props) {
        super(props) 
        
    }
    createList() {
        let mutualExItems = this.props.events.map((event) =>
        <EventBlock 
          title={event.title}
          id={event._id}
          key={event._id}
          onClick={this.eventBlockOnClick}        
        />)
        let mutualExItems1 = mutualExItems.splice(0, (mutualExItems.length / 3));
        let mutualExItems2 = mutualExItems.splice(0, (mutualExItems.length / 2));
        let mutualExItems3 = mutualExItems.splice(0, mutualExItems.length);
        const eventsFound =  
        <div>
        <ContentTile
        children={<div className={'columns'}>{mutualExItems1}</div>}
        />
        <ContentTile
        children={<div className={'columns'}>{mutualExItems2}</div>}
        />
        <ContentTile
    
        children={<div className={'columns'}>{mutualExItems3}</div>}
        />
        </div> 
        return eventsFound;
    }
   
    render() {
        const list = this.createList();
        return (
            <div>
                {list}
            </div>
        )
    }
    
}
