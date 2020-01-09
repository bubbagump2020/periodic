import React from 'react'

class ElementCard extends React.Component {

    openInfo = e => {
        this.props.showInfo(this.props.num)
    }

    render(){
        let num = this.props.attributes.number.toString()
        let element = this.props.attributes
        return(
            <div className={`element element-${num} ${element.category}`} onClick={this.openInfo}>
                <div className="element-number">{num}</div>
                <div className="element-symbol">{element.symbol}</div>
                <div className="element-name">{element.name}</div>
            </div>
        )
    }
}

export default ElementCard;