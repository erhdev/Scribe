import React from "react";
import  { EventBlock } from "./eventBlock";
import { ContentTile } from "./infrastructure/tileStuff";

export class EventList extends React.Component {
    constructor(props) {
        super(props) 
        
    }
    createList() {
        console.log(this.props.events[0]._id)
        console.log(this.props.events[1]._id)
        let mutualExItems = this.props.events.map((event) =>
        <EventBlock 
         title = {event.title}
         body = {event.body}
         key = {event._id}
         _id = {event._id}
         onClick = {this.props.onClick}        
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
