import React from "react";

export function BasicInput(props) {
    return (
        <div className="field">
            <label className="label"><i class="fas fa-chevron-right"></i> {props.display}</label>
            <div className="control">
                <input className="input" type={props.type} name={props.name} value={props.value} onChange={props.onChange}  placeholder={props.placeholder}></input>
            </div>
        </div>
        )
}

export function TextArea(props) {
    return (
        <div className="field">
            <label className="label"><i class="fas fa-chevron-right"></i> {props.display}</label>
            <div className="control">
                <textarea className="textarea" name={props.name} value={props.value} onChange={props.onChange} placeholder={props.placeholder}></textarea>
            </div>
        </div>
    )
}
