import React from "react";

import {SlideDown} from 'react-slidedown'
import 'react-slidedown/lib/slidedown.css'
import { DataList } from "./DataList";
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
        let passedBody = (typeof this.props.children=== null)? null : <div> <p className={`quick-underline`}>Associated Info:</p>
        <DataList regular data={this.props.children} alreadyLogged={[]} additionalClassNames={` push-right`}
        /> </div>    
        let foldedDown =  
        <SlideDown className={`fold-down`}>
        {this.state.foldDownShown ? 
            <div><p>{this.props.body}</p>
            {passedBody}
            </div>
            : 
            null}
        </SlideDown>
        
        return (
        <article
            className={`accordion column has-text-centered ${this.props.additionalClassNames}`}
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
