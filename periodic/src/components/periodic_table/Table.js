import React, { Fragment } from 'react'
import './table_styling/Table.css'
import ElementCard from './ElementCard'
import { elements } from '../../PeriodicTableJSON.json'
// import ElementInfo from './ElementInfo'

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
        let{
            name,
            summary,
            symbol,
            category,
            number,
            source,
            appearance,
            atomic_mass,
            molar_heat,
            density,
            melt,
            boil
        } = this.state.element
        return(
            <div className="table-wrapper">
                <h1 id="header">A Fun Periodic Table</h1>
                <div id="table">
                    {this.createTable()}
                    {this.state.showInfo ? (
                        <Fragment>
                            <div id="element-box" className={`${category}`}>
                                <div className="element-number">{number}</div>
                                <div className="element-symbol">{symbol}</div>
                                <div className="element-name">{name}</div>  
                            </div>
                            <div id="element-information-box">
                                <button id="close-button" onClick={this.closeInfo} title="X">X</button>
                                <h1 className="element-title">{name}</h1>
                                <div>Appearance: </div>
                            </div>
                        </Fragment>
                    ) : ('')}
                </div>
            </div>
        )
    }

}

export default Table;