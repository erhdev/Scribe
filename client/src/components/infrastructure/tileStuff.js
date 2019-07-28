import React from "react";

export function ContentTile(props) {
    return <div className={`tile ${props.seniority? "is-parent" : "is-child"} 
                                 ${props.vertical? "is-vertical" : ""} 
                                 ${props.box? "box" : ""}`}
                                 >
                  {props.children}               
                                
            </div>
}
export function AncestorTile(props) {
    return <div className={`tile is-ancestor`}>{props.children}</div>
}
export function NakedTile() {
    return <div className={`tile`}></div>
}
