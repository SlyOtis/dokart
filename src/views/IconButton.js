import React, { Component } from 'react';
import './IconButton.scss'
let _ = require('lodash');

class IconButton extends Component {


    constructor(props) {
        super(props);
        this.styles = _.cloneDeep(this.constructor.styles);
        //styles.ripple.borderColor = this.props.color;
    }

    render() {
        return (
            <button {...this.props} style={this.styles} className="iconButton_container">
                {this.props.children}
            </button>
        );
    }
}

IconButton.styles = {
    ripple: {
        "background-color": "yellow"
    },
    ":active":{
        "background-color": "blue"
    },
    ":hover":{
        "background-color": "green"
    }
};

export default IconButton;