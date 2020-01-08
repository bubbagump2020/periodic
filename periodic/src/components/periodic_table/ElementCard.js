import React from 'react'

class ElementCard extends React.Component {

    render(){
        let num = this.props.attributes.number.toString()
        let element = this.props.attributes
        console.log(element)
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