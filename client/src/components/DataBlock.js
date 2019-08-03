import React from "react";

export function DataBlock(props) {
    return (
            <div className={`column`}>
            <div className={`box button has-text-centered ${props.additionalClassNames}`} onClick={props.onClick} data-tag={props._id} key={props._id}>
            {props.title}
            </div>
            </div>
            )
}
