import React from "react";

import {SlideDown} from 'react-slidedown'
import 'react-slidedown/lib/slidedown.css'
class AccordionItem extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            foldDownShown: false
        }
    } 
    foldDownOnClick= event => {
        if(!this.props.onClick){
        if (this.state.foldDownShown) {
            this.setState({foldDownShown: false})
        } else {
            this.setState({foldDownShown: true})
        }
        }
    }
    render ()   {
      
        let foldedDown =   
        <SlideDown className={`fold-down`}>
        {this.state.foldDownShown ? 
            <div><p>{this.props.body}</p>
            <p>Associated Info:</p>
            {this.props.children}</div>
            : 
            null}
        </SlideDown>
        return (
        <article
            className={`accordion has-text-centered ${this.props.additionalClassNames}`}
            data-tag={this.props._id}
            key={this.props._id}
            onClick={this.props.onClick}>
            <div className={'level'}>  
                <p className={`subtitle is-4 level-left`} onClick={this.foldDownOnClick}> {this.props.title} </p>
            </div>
            {foldedDown}
        </article>
        )
    }
}
export default AccordionItem;
