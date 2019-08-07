import React from "react";
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
        let foldedDown = this.state.foldDownShown?  
        <div className={`fold-down`}>
        <p>{this.props.body}</p>
        <p>Associated Info:</p>
        {this.props.children}
         </div>
        :
        ""
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
