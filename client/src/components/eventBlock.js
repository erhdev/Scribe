import React from "react";

export function EventBlock(props) {
    return (
            <div className={`column`}>
            <div className={`box level ${props.additionalClassNames}`}>
                <p className={`subtitle-6 level-item has-text-centered`} onClick={props.onClick} name={props._id} key={props._id}>{props.title}</p>
            </div>
            </div>
            )
}
