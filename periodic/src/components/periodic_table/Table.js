import React from 'react'
import './table_styling/Table.css'
import ElementCard from './ElementCard'
import { elements } from '../../PeriodicTableJSON.json'

class Table extends React.Component {

    state = {
        elements: elements
    }

    createTable = () => {
        return this.state.elements.map(element => {
            console.log(element)
            return(
                <ElementCard attributes={element} key={element.number} />
            )
        })
    }


    render(){
        return(
            <div className="table-wrapper">
                <h1 id="header">A Fun Periodic Table</h1>
                <div id="table">
                    {this.createTable()}
                </div>
            </div>
        )
    }

}

export default Table;