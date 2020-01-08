import React from 'react'
import './table_styling/Table.css'
import ElementCard from './ElementCard'
import { elements } from '../../PeriodicTableJSON.json'
import ElementInfo from './ElementInfo'

class Table extends React.Component {

    state = {
        showInfo: false,
        element: {},
        elements: elements
    }


    showInfo = (num) => {
        let correctNum = num - 1
        this.setState({ showInfo: true, element: elements[correctNum]})
    }

    closeInfo = () => {
        this.setState({ showInfo: false })
    }

    createTable = () => {
        return this.state.elements.map(element => {
            return(
                <ElementCard showInfo={this.showInfo} attributes={element} key={element.number} num={element.number} />
            )
        })
    }

    render(){
        return(
            <div className="table-wrapper">
                <h1 id="header">A Fun Periodic Table</h1>
                <div id="table">
                    {this.createTable()}
                    {this.state.showInfo ? (<ElementInfo element={this.state.element} closeInfo={this.closeInfo}/>) : ('')}
                </div>
            </div>
        )
    }

}

export default Table;