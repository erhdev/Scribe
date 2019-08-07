import React from "react";
export function Inspector(props) {
    return (

        <section
            className={`hero is-dark is-bold has-text-centered ${props.additionalClassNames}`}
            onClick={props.onClick}
            data-tag={props._id}
            key={props._id}>
            <div className="hero-body">
                <div className="container">
                    <p className="title">
                        {props.title}
                    </p>
                    <h2 className="subtitle">
                        {props.body}
                    </h2>
                </div>
            </div>
            <div className={"container"}>
            {props.children}
            </div>
        </section>

    )
}

