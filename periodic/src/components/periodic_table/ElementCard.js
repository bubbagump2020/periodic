import React from 'react'
import { elements } from '../../PeriodicTableJSON.json'

class ElementCard extends React.Component {





    render(){
        let { num } = this.props
        let element = elements[num]
        return(
            <div className={`element element-${num}`}>
                <p>{element.number}</p>
                <p><strong>{element.symbol}</strong></p>
                <p>{element.name}</p>
            </div>
        )
    }
}

export default ElementCard;