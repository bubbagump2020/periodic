import React from 'react'
import './table_styling/Table.css'
import {elements} from '../../PeriodicTableJSON.json'
import ElementCard from './ElementCard'

class Table extends React.Component {

    state = {
        elements: []
    }

    componentDidMount(){
        const fetchElements = async () =>{
            let result = await fetch('https://neelpatel05.pythonanywhere.com/')
            let response = await result.json()
            this.setState({
                elements: response
            })
        }
        fetchElements()
    }

    createTable = () => {
        return this.state.elements.map(element => {
            return(
                <ElementCard attributes={element} key={element.atomicNumber} />
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