import React from "react";

export function Button(props) {
    return <div className={`button ${props.state? "is-active" : ""}`} onClick={props.onClick}>{props.name}</div>
}