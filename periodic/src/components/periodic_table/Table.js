import React from 'react'
import './table_styling/Table.css'
import {elements} from '../../PeriodicTableJSON.json'
import ElementCard from './ElementCard'

class Table extends React.Component {

    state = {
        element: {}
    }

    elementPosition = (num) => {
        this.setState({ element: elements[num] })
    }


    render(){
        return(
            <div className="table-wrapper">
                <h1 id="header">A Fun Periodic Table</h1>
                <div id="table">
                    <ElementCard position={this.elementPosition} num="0" />
                    <ElementCard position={this.elementPosition} num="1" />
                    <ElementCard position={this.elementPosition} num="2" />
                    <ElementCard position={this.elementPosition} num="3" />
                    <ElementCard position={this.elementPosition} num="4" />
                    <ElementCard position={this.elementPosition} num="5" />
                    <ElementCard position={this.elementPosition} num="6" />
                    <ElementCard position={this.elementPosition} num="7" />
                    <ElementCard position={this.elementPosition} num="8" />
                    <ElementCard position={this.elementPosition} num="9" />
                    <ElementCard position={this.elementPosition} num="10" />
                    <ElementCard position={this.elementPosition} num="11" />
                    <ElementCard position={this.elementPosition} num="12" />
                    <ElementCard position={this.elementPosition} num="13" />
                    <ElementCard position={this.elementPosition} num="14" />
                    <ElementCard position={this.elementPosition} num="15" />
                    <ElementCard position={this.elementPosition} num="16" />
                    <ElementCard position={this.elementPosition} num="17" />
                    <ElementCard position={this.elementPosition} num="18" />
                    <ElementCard position={this.elementPosition} num="19" />
                    <ElementCard position={this.elementPosition} num="20" />
                    <ElementCard position={this.elementPosition} num="21" />
                    <ElementCard position={this.elementPosition} num="22" />
                    <ElementCard position={this.elementPosition} num="23" />
                    <ElementCard position={this.elementPosition} num="24" />
                    <ElementCard position={this.elementPosition} num="25" />
                    <ElementCard position={this.elementPosition} num="26" />
                    <ElementCard position={this.elementPosition} num="27" />
                    <ElementCard position={this.elementPosition} num="28" />
                    <ElementCard position={this.elementPosition} num="29" />
                    <ElementCard position={this.elementPosition} num="30" />
                    <ElementCard position={this.elementPosition} num="31" />
                    <ElementCard position={this.elementPosition} num="32" />
                    <ElementCard position={this.elementPosition} num="33" />
                    <ElementCard position={this.elementPosition} num="34" />
                    <ElementCard position={this.elementPosition} num="35" />
                    <ElementCard position={this.elementPosition} num="36" />
                    <ElementCard position={this.elementPosition} num="37" />
                    <ElementCard position={this.elementPosition} num="38" />
                    <ElementCard position={this.elementPosition} num="39" />
                    <ElementCard position={this.elementPosition} num="40" />
                    <ElementCard position={this.elementPosition} num="41" />
                    <ElementCard position={this.elementPosition} num="42" />
                    <ElementCard position={this.elementPosition} num="43" />
                    <ElementCard position={this.elementPosition} num="44" />
                    <ElementCard position={this.elementPosition} num="45" />
                    <ElementCard position={this.elementPosition} num="46" />
                    <ElementCard position={this.elementPosition} num="47" />
                    <ElementCard position={this.elementPosition} num="48" />
                    <ElementCard position={this.elementPosition} num="49" />
                    <ElementCard position={this.elementPosition} num="50" />
                    <ElementCard position={this.elementPosition} num="51" />
                    <ElementCard position={this.elementPosition} num="52" />
                    <ElementCard position={this.elementPosition} num="53" />
                    <ElementCard position={this.elementPosition} num="54" />
                    <ElementCard position={this.elementPosition} num="55" />
                    <ElementCard position={this.elementPosition} num="56" />
                    <ElementCard position={this.elementPosition} num="57" />
                    <ElementCard position={this.elementPosition} num="58" />
                    <ElementCard position={this.elementPosition} num="59" />
                    <ElementCard position={this.elementPosition} num="60" />
                    <ElementCard position={this.elementPosition} num="61" />
                    <ElementCard position={this.elementPosition} num="62" />
                    <ElementCard position={this.elementPosition} num="63" />
                    <ElementCard position={this.elementPosition} num="64" />
                    <ElementCard position={this.elementPosition} num="65" />
                    <ElementCard position={this.elementPosition} num="66" />
                    <ElementCard position={this.elementPosition} num="67" />
                    <ElementCard position={this.elementPosition} num="68" />
                    <ElementCard position={this.elementPosition} num="69" />
                    <ElementCard position={this.elementPosition} num="70" />
                    <ElementCard position={this.elementPosition} num="71" />
                    <ElementCard position={this.elementPosition} num="72" />
                    <ElementCard position={this.elementPosition} num="73" />
                    <ElementCard position={this.elementPosition} num="74" />
                    <ElementCard position={this.elementPosition} num="75" />
                    <ElementCard position={this.elementPosition} num="76" />
                    <ElementCard position={this.elementPosition} num="77" />
                    <ElementCard position={this.elementPosition} num="78" />
                    <ElementCard position={this.elementPosition} num="79" />
                    <ElementCard position={this.elementPosition} num="80" />
                    <ElementCard position={this.elementPosition} num="81" />
                    <ElementCard position={this.elementPosition} num="82" />
                    <ElementCard position={this.elementPosition} num="83" />
                    <ElementCard position={this.elementPosition} num="84" />
                    <ElementCard position={this.elementPosition} num="85" />
                    <ElementCard position={this.elementPosition} num="86" />
                    <ElementCard position={this.elementPosition} num="87" />
                    <ElementCard position={this.elementPosition} num="88" />
                    <ElementCard position={this.elementPosition} num="89" />
                    <ElementCard position={this.elementPosition} num="90" />
                    <ElementCard position={this.elementPosition} num="91" />
                    <ElementCard position={this.elementPosition} num="92" />
                    <ElementCard position={this.elementPosition} num="93" />
                    <ElementCard position={this.elementPosition} num="94" />
                    <ElementCard position={this.elementPosition} num="95" />
                    <ElementCard position={this.elementPosition} num="96" />
                    <ElementCard position={this.elementPosition} num="97" />
                    <ElementCard position={this.elementPosition} num="98" />
                    <ElementCard position={this.elementPosition} num="99" />
                    <ElementCard position={this.elementPosition} num="100" />
                    <ElementCard position={this.elementPosition} num="101" />
                    <ElementCard position={this.elementPosition} num="102" />
                    <ElementCard position={this.elementPosition} num="103" />
                    <ElementCard position={this.elementPosition} num="104" />
                    <ElementCard position={this.elementPosition} num="105" />
                    <ElementCard position={this.elementPosition} num="106" />
                    <ElementCard position={this.elementPosition} num="107" />
                    <ElementCard position={this.elementPosition} num="108" />
                    <ElementCard position={this.elementPosition} num="109" />
                    <ElementCard position={this.elementPosition} num="110" />
                    <ElementCard position={this.elementPosition} num="111" />
                    <ElementCard position={this.elementPosition} num="112" />
                    <ElementCard position={this.elementPosition} num="113" />
                    <ElementCard position={this.elementPosition} num="114" />
                    <ElementCard position={this.elementPosition} num="115" />
                    <ElementCard position={this.elementPosition} num="116" />
                    <ElementCard position={this.elementPosition} num="117" />
                    <ElementCard position={this.elementPosition} num="118" />
                </div>
            </div>
        )
    }

}

export default Table;