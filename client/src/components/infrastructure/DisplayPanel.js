import React from "react";
import {LinkList } from "./LinkList"
export function DisplayPanel(props) {
    /*
    i need a way to detect which of the events is selected and render conditionally based on that
    */
   
   const data = props.linkData;
   let active;
   if (data) {
    for (let i = 0; i < data.length; i++) {
        if (data[i].classNames === "subtitle is-4 is-active") {
         active = data[i].component
        }
    }
   } else {active = <div> <progress className={'progress is-info'} max="100">60%</progress> </div>}
    return (
        <nav className="panel">
            <p className="panel-heading text-is-centered">
                {props.name}
            </p>
            <div className="panel-tabs">
               <LinkList linkData={props.linkData} onClick={props.onClick} />
            </div>
            <div>
                {active}
            </div>
        </nav>
    )
}