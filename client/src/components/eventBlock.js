import React from "react";

export function EventBlock(props) {
    return (
            <div className={`column`}>
            <div className={`box level ${props.additionalClassNames}`}>
                <p className={`subtitle-6 level-item has-text-centered`}>{props.title}</p>
                <div 
                className={`button level-item ${props.isActive}`} 
                onClick={props.onClick} 
                key={props._id}
                >
                {props.activated}
                </div>
            </div>
            </div>
            )
}
