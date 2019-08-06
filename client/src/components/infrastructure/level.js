import React from "react";
export function Level(props) {
    return <div className={`level ${props.additionalClassName}`}>{props.children}</div>
}