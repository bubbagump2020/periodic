import React, { Fragment } from 'react'
import './table_styling/Table.css'

class ElementInfo extends React.Component{

    render(){
        let element = this.props.element
        return(
            <Fragment id="element-box" className={element.category}>
                <div className="element-number">{element.number}</div>
                <button id="close-button" onClick={this.props.closeInfo}><strong>X</strong></button>
            </Fragment>
        )
    }
}

export default ElementInfo;