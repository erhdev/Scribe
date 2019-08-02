import React from "react";

export function InfoEventToggleDisplay(props) {
return (
    <div className="tabs is-toggle is-toggle-rounded">
  <ul>
    <li className={props.className} onClick={props.onClick}>
      <a>
        <span className="icon is-small"><i className="fas fa-calendar-times"></i></span>
        <span>Mutually Exclusive Events</span>
      </a>
      {props.children}
    </li>
    <li className={props.className} onClick={props.onClick}>
      <a>
        <span className="icon is-small"><i className="fas fa-file-alt"></i></span>
        <span>Associated Information</span>
      </a>
      {props.children}
    </li>
  </ul>
</div>
)
}