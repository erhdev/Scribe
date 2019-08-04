import React from "react";
import { Level } from "../infrastructure/level";

function DataBlock(props) {
 

        return (

            <div className={`column`}>
                <div
                    className={`box button has-text-centered ${props.clicked ? "is-info level-item" : ""} ${props.additionalClassNames}`}
                    onClick={props.onClick}
                    data-tag={props._id}
                    key={props._id}>
                        <Level>
                            <p className="level-left"> {props.title} </p>
                            {props.clicked ? 
                            <span className="icon is-small level-right"><i className="fas fa-check-circle"></i></span> 
                            : ""}
                        </Level>
                </div>
            </div>
        )
    }


export default DataBlock;