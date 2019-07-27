import React from "react";
import EventForm from "./EventForm";

export function EventModal() {
    return (
    <div class="modal">
        <div class="modal-background"></div>
        <div class="modal-content">
         <EventForm />
        </div>
        <button class="modal-close is-large" aria-label="close"></button>
    </div>
    )
};