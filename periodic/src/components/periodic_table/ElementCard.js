import React from 'react'
import { elements } from '../../PeriodicTableJSON.json'

class ElementCard extends React.Component {





    render(){
        let num = this.props.attributes.atomicNumber.toString()
        let element = this.props.attributes

        return(
            <div className={`element element-${num}`}>
                <p>{num}</p>
                <p><strong>{element.symbol}</strong></p>
                <p>{element.name}</p>
            </div>
        )
    }
}

export default ElementCard;