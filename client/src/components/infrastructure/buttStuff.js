import React from "react";

export function Button(props) {
    return <div className={`button ${props.additionalClassName}`} onClick={props.onClick}>{props.name}</div>
}