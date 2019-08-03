import React from "react";
import EventForm from "./EventForm";

export function EventModal(props) {
    return (
        
        <div className={`modal is-active`} >
        <div className="modal-background"></div>
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">Event Form</p>
            <button className="delete" aria-label="close"></button>
          </header>
          <section className="modal-card-body">
            <EventForm/>
          </section>
          <footer className="modal-card-foot">
            <button className="button">Cancel</button>
          </footer>
        </div>
      </div>
    )
};