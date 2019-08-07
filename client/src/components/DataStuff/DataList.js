import React from "react";
import DataBlock from "./DataBlock";
import  AccordionItem  from "./AccordionItem";
import { ContentTile } from "../infrastructure/tileStuff";


export class DataList extends React.Component {
    constructor(props) {
        super(props)

    }

    createList() {
        let data;
        let alreadyLogged = this.props.alreadyLogged;

        if (!this.props.fullDisplay) {
            let unAssigned;
            function checkAssigned(data) {
                if (data.assigned) {
                    return false;
                } else { return true; }
            }
            unAssigned = this.props.data.filter(checkAssigned)
            for (let i = 0; i < unAssigned.length; i++) { unAssigned[i].clicked = false; }

            for (let i = 0; i < unAssigned.length; i++) {
                for (let j = 0; j < alreadyLogged.length; j++) {
                    if (unAssigned[i]._id === alreadyLogged[j]) {
                        unAssigned[i].clicked = true;
                    }
                }
            }
            data = unAssigned;
            console.log(data)
        } 
        if (this.props.fullDisplay) {data = this.props.data; console.log(data)}
        var dataItems;
        if (!this.props.accordion) {
            console.log(data)         
            dataItems = data.map((event) =>
                <DataBlock
                    clicked={event.clicked}
                    title={event.title || event.name}
                    body={event.body}
                    key={event._id}
                    _id={event._id}
                    onClick={this.props.onClick}
                />
            )
        } else {
            console.log(data)
            dataItems = data.map((event) =>
                <AccordionItem
                    clicked={event.clicked}
                    title={event.title || event.name}
                    body={event.body || event.description}
                    key={event._id}
                    _id={event._id}
                    additionalClassNames={this.props.additionalClassNames}
                    onClick={this.props.onClick}
                />
            )
        }
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
