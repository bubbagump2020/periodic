import React, { Fragment } from 'react'
import './table_styling/Table.css'

class ElementInfo extends React.Component{

    render(){
        let element = this.props.element
        return(
            <div id="information">
                <h1>{element.name}</h1>
                <button onClick={this.props.closeInfo}>Close Info</button>
            </div>
        )
    }
}

export default ElementInfo;