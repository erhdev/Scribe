import React from "react";

export function InfoEventToggleDisplay(props) {
return (
    <div className="tabs is-toggle is-toggle-rounded is-centered">
  <ul>
    <li className={props.className1} onClick={props.onClick}>
      <a>
        <span className="icon is-small"><i className="fas fa-calendar-times"></i></span>
        <span>Mutually Exclusive Events</span>
      </a>
      {props.children1}
    </li>
    <li className={props.className2} onClick={props.onClick}>
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