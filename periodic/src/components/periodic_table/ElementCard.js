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
                <p>{num}</p>
                <p><strong>{element.symbol}</strong></p>
                <p>{element.name}</p>
            </div>
        )
    }
}

export default ElementCard;