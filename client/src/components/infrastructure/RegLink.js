import React from "react";

export function RegLink(props) {
   return <a className={props.classNames} onClick={props.onClick}>{props.name}</a>
}