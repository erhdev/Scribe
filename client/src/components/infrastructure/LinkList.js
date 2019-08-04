import React from "react";
import { RegLink } from "./RegLink";
export function LinkList(props) {
    let linkData = props.linkData
    const list = linkData.map(datum=> 
        <RegLink
        name={datum.name}
        onClick={props.onClick}
        classNames={datum.classNames}
        />
    )
    return (
        <p>
            {list}
        </p>
    )
}