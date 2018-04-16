import React, { Component } from 'react';
import './ToiletSmall.css'

class ToiletSmall extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="toiletSmall_container">
                {this.props.toilet ? (<h6>{this.props.toilet.adresse}</h6>) :
                <h6>Feil ved lasting av toalettdata</h6>}
            </div>
        );
    }
}
export default ToiletSmall;