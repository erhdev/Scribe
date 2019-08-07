import React from "react";
import { Button } from "../infrastructure/buttStuff";
import { Level } from "../infrastructure/level";
export function AccordionItem(props) {
    return (


        <article
            className={`accordion has-text-centered ${props.additionalClassNames}`}
            data-tag={props._id}
            key={props._id}>
            <Level
                children={
                    <div>
                        <p className={`subtitle is-4 level-left`}> {props.title} </p>
                        <Button onClick={props.onClick} additonalClassName={`level-right`} name={<i className="fas fa-plus"></i>} />
                    </div>
                }
            />
            <div className={`fold-down`}>
                <p>{props.body}</p>
                <p>Associated Info:</p>
                {props.children}
            </div>
        </article>

    )
}
