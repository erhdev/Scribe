import React from "react";

export function DualDisplayToggle(props) {
return (
    <div className="tabs is-toggle is-toggle-rounded is-centered">
  <ul>
    <li className={props.className1} onClick={props.onClick}>
      <a>
        <span className="icon is-small"><i className="fas fa-calendar-times"></i></span>
        <span>Mutually Exclusive Events</span>
      </a>
    </li>
    <li className={props.className2} onClick={props.onClick}>
      <a>
        <span className="icon is-small"><i className="fas fa-file-alt"></i></span>
        <span>Associated Information</span>
      </a>
    </li>
  </ul>
</div>
)
}