import React from "react";

export function contentTile(seniority, vertical, box, children) {
    return <div className={`tile ${seniority? "is-parent" : "is-child"} 
                                 ${vertical? "is-vertical" : ""} 
                                 ${box? "box" : ""}`}
                                 >
                                 
                                 {children}
            </div>
}
export function ancestorTile(children) {
     return <div className={`tile is-ancestor`}>{children}</div>
}
export function nakedTile(children) {
    return <div className={`tile`}>{children}</div>
}
