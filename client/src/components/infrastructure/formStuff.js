import React from "react";

export function basicInput(name, placeholder) {
    return (
        <div class="field">
            <label class="label">{name}</label>
            <div class="control">
                <input class="input" type="text" placeholder={placeholder}></input>
            </div>
        </div>
        )
}

export function textArea(name, placeholder) {
    return (
        <div class="field">
            <label class="label">{name}</label>
            <div class="control">
                <textarea class="textarea" placeholder={placeholder}></textarea>
            </div>
        </div>
    )
}
