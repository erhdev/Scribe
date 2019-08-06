import React from "react";
import {  DataList } from "./DataList"
export function AccordionItem(props) {
    return (


            <div
                className={`accordion button has-text-centered ${props.clicked ? "is-info level-item" : ""} ${props.additionalClassNames}`}
                onClick={props.onClick}
                data-tag={props._id}
                key={props._id}>
                    <p> {props.title} </p>
                    <div className={`panel`}>
                        <p>{props.body}</p>
                        <p>Associated Info:</p>
                        
                    </div>
            </div>

    )
}
