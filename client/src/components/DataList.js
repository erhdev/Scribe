import React from "react";
import  { DataBlock } from "./DataBlock";
import { ContentTile } from "./infrastructure/tileStuff";

export class DataList extends React.Component {
    constructor(props) {
        super(props) 
        
    }
    createList() {
        let dataItems = this.props.data.map((event) =>
        <DataBlock 
         title = {event.title}
         body = {event.body}
         key = {event._id}
         _id = {event._id}
         onClick = {this.props.onClick}      
        />)
        let dataItems1 = dataItems.splice(0, (dataItems.length / 3));
        let dataItems2 = dataItems.splice(0, (dataItems.length / 2));
        let dataItems3 = dataItems.splice(0, dataItems.length);
        const dataFound =  
        <div>
        <ContentTile
        children={<div className={'columns'}>{dataItems1}</div>}
        />
        <ContentTile
        children={<div className={'columns'}>{dataItems2}</div>}
        />
        <ContentTile
    
        children={<div className={'columns'}>{dataItems3}</div>}
        />
        </div> 
        return dataFound;
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
