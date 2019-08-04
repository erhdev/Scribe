import React from "react";
import  DataBlock  from "./DataBlock";
import { ContentTile } from "../infrastructure/tileStuff";

export class DataList extends React.Component {
    constructor(props) {
        super(props) 
        
    }
    
    createList() {
        let data = this.props.data;
        let alreadyLogged = this.props.alreadyLogged;
        for (let i = 0; i < data.length; i++) {
            data[i].clicked = false;
        }
        for (let i = 0; i < data.length; i++) {
            for(let j = 0; j < alreadyLogged.length; j++) {
                if (data[i]._id === alreadyLogged[j]) {
                    data[i].clicked = true;
                } 
            }
        }
        let dataItems = data.map((event) =>
        <DataBlock
         clicked = {event.clicked} 
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
