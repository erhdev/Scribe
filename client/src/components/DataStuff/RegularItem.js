import React from "react";
import { Level } from "../infrastructure/level";
import 'react-slidedown/lib/slidedown.css'
import SlideDown from "react-slidedown";

class RegularItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            foldDownShown: false
        }
    }
    foldDownOnClick = event => {
        if (!this.props.onClick) {
            if (this.state.foldDownShown) {
                this.setState({ foldDownShown: false })
            } else {
                this.setState({ foldDownShown: true })
            }
        }
    }
    render() {
        return (
            <div
                className={`has-text-centered ${this.props.clicked ? "is-info level-item" : ""} ${this.props.additionalClassNames}`}
                onClick={this.foldDownOnClick}
                data-tag={this.props._id}
                key={this.props._id}>
                <p> {this.props.title} </p>
                <SlideDown className={`fold-down`}>
                    {this.state.foldDownShown ?
                        <p className={"container"}>{this.props.body}</p>
                        :
                        null}
                </SlideDown>
            </div>
        )
    }
}


export default RegularItem;