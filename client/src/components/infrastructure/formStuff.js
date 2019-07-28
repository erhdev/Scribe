import React from "react";

export function BasicInput(props) {
    return (
        <div class="field">
            <label class="label">{props.name}</label>
            <div class="control">
                <input class="input" type="text" placeholder={props.placeholder}></input>
            </div>
        </div>
        )
}

export function TextArea(props) {
    return (
        <div class="field">
            <label class="label">{props.name}</label>
            <div class="control">
                <textarea class="textarea" placeholder={props.placeholder}></textarea>
            </div>
        </div>
    )
}
