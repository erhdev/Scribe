import React from "react";

export function EventBlock(props) {
    return (
            <div className={`column`}>
            <div className={`box level ${props.additionalClassNames}`}>
                <p className={`subtitle-6 level-item has-text-centered`}>{props.title}</p>
                <div 
                className={`button level-item ${props.isActive}`} 
                onClick={props.onClick} 
                accessKey={props._id}
                ay={props._id}
                >
                Add to Mutual Exclusives
                </div>
            </div>
            </div>
            )
}
